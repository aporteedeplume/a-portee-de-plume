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
  return Object.values(raw).reduce((sum, n) => sum + n, 0);
}

function updateCartBadges(){
  const n = getCartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadges);
