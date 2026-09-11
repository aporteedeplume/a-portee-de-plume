/* Illustrations en ligne (traits) pour les produits — À portée de plume */
const ICONS = {
  heron: '<path d="M20 78c4-20 14-34 28-40 2 8 10 12 18 10-2 10-10 16-20 16 6 6 8 12 8 20" stroke="#23342B" stroke-width="1.6" stroke-linecap="round" fill="none"/>',
  ibis: '<path d="M15 70c8-4 14-12 16-22 8 6 18 6 24-2 2 10-4 18-14 20 10 2 18 10 20 20" stroke="#23342B" stroke-width="1.6" stroke-linecap="round" fill="none"/>',
  notebook: '<path d="M50 20c-14 6-22 20-20 36 12-2 22-10 26-22 4 12 14 20 26 22 2-16-6-30-20-36" stroke="#23342B" stroke-width="1.6" stroke-linejoin="round" fill="none"/>',
  wader: '<path d="M25 65c10-2 18-10 20-20 6 8 16 10 24 6-2 10-12 16-22 16 4 6 4 12 2 18" stroke="#23342B" stroke-width="1.6" stroke-linecap="round" fill="none"/>',
  compass: '<circle cx="50" cy="50" r="26" stroke="#23342B" stroke-width="1.6" fill="none"/><path d="M50 50 L62 32 M50 50 L44 66" stroke="#2E7D4F" stroke-width="1.6" stroke-linecap="round"/><circle cx="50" cy="50" r="2.5" fill="#23342B"/>',
  butterfly: '<path d="M50 30c-10-14-28-14-32 0-3 10 8 18 16 16 2 8-4 16-12 18 14 4 24-4 28-14 4 10 14 18 28 14-8-2-14-10-12-18 8 2 19-6 16-16-4-14-22-14-32 0z" stroke="#23342B" stroke-width="1.5" stroke-linejoin="round" fill="none"/><line x1="50" y1="26" x2="50" y2="74" stroke="#23342B" stroke-width="1.4"/>',
  pencil: '<path d="M30 70 L66 34 L74 42 L38 78 L28 80 Z" stroke="#23342B" stroke-width="1.6" stroke-linejoin="round" fill="none"/><line x1="60" y1="40" x2="68" y2="48" stroke="#23342B" stroke-width="1.4"/><circle cx="70" cy="30" r="3" fill="#2E7D4F"/><circle cx="60" cy="26" r="3" fill="#BF8B3D"/><circle cx="76" cy="38" r="3" fill="#6B8567"/>',
  sticker: '<path d="M50 22 L60 42 L82 45 L66 60 L70 82 L50 71 L30 82 L34 60 L18 45 L40 42 Z" stroke="#23342B" stroke-width="1.5" stroke-linejoin="round" fill="none"/>',
  camera: '<rect x="14" y="32" width="72" height="46" rx="6" stroke="#23342B" stroke-width="1.6" fill="none"/><rect x="38" y="22" width="24" height="12" rx="2" stroke="#23342B" stroke-width="1.6" fill="none"/><circle cx="50" cy="56" r="15" stroke="#23342B" stroke-width="1.6" fill="none"/><circle cx="50" cy="56" r="7" stroke="#23342B" stroke-width="1.3" fill="none"/><circle cx="74" cy="42" r="2.2" fill="#2E7D4F"/>'
};

function iconSvg(key, size){
  const s = size || 100;
  const paths = ICONS[key] || ICONS.notebook;
  return '<svg viewBox="0 0 100 100" width="' + s + '" height="' + s + '" fill="none" xmlns="http://www.w3.org/2000/svg">' + paths + '</svg>';
}

// Vignette d'un produit : la vraie photo si disponible (product.images[0]), sinon un
// visuel neutre "Photo à venir" — pour ne jamais laisser penser qu'une illustration
// décorative est un aperçu réel du produit.
function productThumb(product, size){
  if(product.images && product.images.length){
    return '<img src="' + product.images[0] + '" alt="' + product.name + '" loading="lazy" style="width:100%; height:100%; object-fit:cover;">';
  }
  return iconSvg('camera', size);
}
