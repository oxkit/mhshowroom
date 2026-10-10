// Buy Direct: hands a showroom selection to the cart receiver on mattresshub.co
// (Shopify-MattressHub, assets/mh-showroom-cart.js). The link carries only the
// product handle and the chosen options. The store resolves each item against its
// own products, so the variant, price and stock always come from Shopify, and it
// adds every item or none. check-store.cjs proves each selection resolves to an
// available variant at the price shown here.
window.mhStore = (() => {
  const cart = 'https://mattresshub.co/cart';
  const handles = {
    essential: 'sonoflex-signature-essential-mattress', pure: 'sonoflex-signature-pure-mattress',
    plus: 'sonoflex-signature-plus-mattress', coolmax: 'sonoflex-signature-coolmax-mattress',
    durafirm: 'sonoflex-signature-durafirm-mattress', noir: 'sonoflex-signature-noir-mattress',
    cloud: 'sonoflex-signature-cloud-mattress',
    cozy: 'cozy-bed-frame', haven: 'haven-bed-frame', aurora: 'aurora-bed-frame',
    cove: 'cove-sofa', luxe: 'luxe-sofa', oasis: 'oasis-sofa'
  };
  // Store option value for any sofa fabric that is not one of the included colours.
  const customFabric = 'Other colours';
  function item(p, { size, fabric = 0, orientation, pack } = {}) {
    const options = {}, out = { handle: handles[p.slug], options };
    if (p.sizes) options.Size = size;
    const f = p.fabrics?.[fabric];
    if (p.category === 'Sofas') options.Fabric = p.includedFabrics.includes(f.code) ? f.name : customFabric;
    // Cozy sells each fabric as its own variant, named by code and colour.
    else if (p.slug === 'cozy') options.Fabric = f.code + ' ' + f.name;
    if (f) out.fabric = f.code;
    if (p.orientations) options.Orientation = orientation;
    if (pack) out.package = pack;
    return out;
  }
  const base64url = text => btoa(String.fromCharCode(...new TextEncoder().encode(text))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  // A package's lines share a short reference in the cart, so the store can see
  // which items were bought together. The same package always gets the same one.
  const reference = text => { let n = 2166136261; for (const c of text) n = Math.imul(n ^ c.codePointAt(0), 16777619) >>> 0; return n.toString(36).toUpperCase().padStart(7, '0').slice(-6); };
  function url(items, pack) {
    const json = JSON.stringify(items);
    const query = new URLSearchParams({ showroom: '1' });
    if (pack) query.set('ref', 'SR' + reference(json));
    query.set('items', base64url(json));
    return cart + '?' + query;
  }
  // Ask on WhatsApp: the owner's number (also used by the value room), with the
  // translated selection already typed into the chat.
  const whatsapp = '601121789076';
  const ask = text => `https://wa.me/${whatsapp}?text=${encodeURIComponent(window.mhTranslate('Hi MattressHub, I\'m interested in this:') + '\n' + window.mhTranslate(text))}`;
  return { handles, item, url, ask };
})();
