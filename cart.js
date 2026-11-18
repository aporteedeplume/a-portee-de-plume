/* Panier / sélection — À portée de plume
   Le panier est conservé dans le navigateur du visiteur (localStorage), le temps de sa visite :
   il n'est jamais envoyé nulle part tant que le client n'a pas lui-même généré et transmis
   son bon de commande. Rien n'est stocké côté serveur.

   Chaque article (carnet ou lot d'illustrations à colorier) est une entrée indépendante du panier,
   avec sa propre quantité : rien n'oblige à prendre autant de lots que de carnets.

   IMPORTANT : localStorage fonctionne normalement une fois le site déployé (Netlify, GitHub Pages,
   votre hébergeur...). Si vous testez les fichiers directement depuis un aperçu Claude, il est possible
   que le panier ne se conserve pas d'une page à l'autre selon le mode d'aperçu — ouvrez les fichiers
   dans un vrai navigateur, ou déployez-les, pour tester le parcours complet.
*/
const CART_KEY = "apdp_cart_v3";

function getCartRaw(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function saveCartRaw(cart){
  try{
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }catch(e){ /* stockage indisponible : le panier restera vide au rechargement */ }
  updateCartBadges();
}

function addToCart(id, qty){
  const product = getProductById(id);
  if(!product || product.available === false) return; // sécurité : un article indisponible ne peut pas être ajouté
  if(product.customSet) return; // un set personnalisable passe par addCustomSet (choix des espèces obligatoire)
  qty = qty || 1;
  const cart = getCartRaw();
  cart[id] = (cart[id] || 0) + qty;
  saveCartRaw(cart);
}

function setCartQty(id, qty){
  const cart = getCartRaw();
  if(qty <= 0){ delete cart[id]; }
  else { cart[id] = qty; }
  saveCartRaw(cart);
}

function removeFromCart(id){
  setCartQty(id, 0);
}

function getCartItems(){
  const raw = getCartRaw();
  return Object.keys(raw)
    .map(id => {
      const p = getProductById(id);
      if(!p) return null;
      return Object.assign({}, p, { qty: raw[id] });
    })
    .filter(Boolean);
}

function getCartCount(){
  const raw = getCartRaw();
  return Object.values(raw).reduce((sum, n) => sum + n, 0) + getCustomSetsRaw().length;
}

/* ---------- Sets d'illustrations personnalisables ----------
   Chaque set composé par le client est une ligne distincte du panier (jamais fusionnée avec une autre),
   avec sa propre liste d'espèces et son papier. Ils sont conservés à part, sous leur propre clé. */
const CUSTOM_SETS_KEY = "apdp_customsets_v1";

function getCustomSetsRaw(){
  try{
    const raw = localStorage.getItem(CUSTOM_SETS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  }catch(e){
    return [];
  }
}

function saveCustomSetsRaw(sets){
  try{
    localStorage.setItem(CUSTOM_SETS_KEY, JSON.stringify(sets));
  }catch(e){ /* stockage indisponible */ }
  updateCartBadges();
}

// Total d'un set, en euros, arrondi au centime : nombre d'illustrations × prix unitaire.
function customSetTotal(product, count){
  const unitCents = Math.round(product.customSet.unitPrice * 100);
  return Math.round(count * unitCents) / 100;
}

function addCustomSet(productId, paperId, speciesNames){
  const product = getProductById(productId);
  if(!product || !product.customSet || product.available === false) return null;
  if(!product.customSet.papers.some(p => p.id === paperId)) return null;
  const names = Array.from(new Set(speciesNames || []));
  if(names.length === 0) return null;
  const uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const sets = getCustomSetsRaw();
  sets.push({ uid: uid, productId: productId, paper: paperId, species: names });
  saveCustomSetsRaw(sets);
  return uid;
}

function removeCustomSet(uid){
  saveCustomSetsRaw(getCustomSetsRaw().filter(s => s.uid !== uid));
}

// Les sets du panier, sous la même forme que les autres articles (qty = 1, price = total du set),
// avec en plus : paper, species (triées), count, setIndex / setCount (numérotation « set n°X »).
function getCustomSetItems(){
  const sets = getCustomSetsRaw();
  const items = [];
  sets.forEach(s => {
    const p = getProductById(s.productId);
    if(!p || !p.customSet) return;
    const paper = p.customSet.papers.find(x => x.id === s.paper) || p.customSet.papers[0];
    const species = s.species.slice().sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    items.push(Object.assign({}, p, {
      isCustomSet: true,
      uid: s.uid,
      qty: 1,
      paper: paper,
      species: species,
      count: species.length,
      price: customSetTotal(p, species.length),
      weight: species.length * p.customSet.weightPerIllustration
    }));
  });
  items.forEach((it, i) => { it.setIndex = i + 1; it.setCount = items.length; });
  return items;
}

// Tous les articles du panier : articles classiques puis sets personnalisés.
function getAllCartItems(){
  return getCartItems().concat(getCustomSetItems());
}

function updateCartBadges(){
  const n = getCartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadges);
