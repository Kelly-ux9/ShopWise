const CART_KEY = "shopwise_cart";

export function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
}

export function addToCart(product) {
  if (!product?.id) return false;
  const cart = getCart();
  const existing = cart.find(item => String(item.id) === String(product.id));
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, name: product.name || "Product", price: Number(product.price) || 0, quantity: 1 });
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return true;
}

export function clearCart() { localStorage.removeItem(CART_KEY); }
