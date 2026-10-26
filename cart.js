import {findProduct} from './catalogue.js';
export const MAX_QUANTITY = 10;
export function cleanCart(value) {
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const [id, quantity] of Object.entries(value)) {
    if (findProduct(id) && Number.isInteger(quantity) && quantity > 0) result[id] = Math.min(quantity, MAX_QUANTITY);
  }
  return result;
}
export function setQuantity(cart, id, quantity) {
  const next = cleanCart(cart);
  if (!findProduct(id) || !Number.isInteger(quantity)) return next;
  if (quantity <= 0) delete next[id];
  else next[id] = Math.min(quantity,MAX_QUANTITY);
  return next;
}
export function totals(cart) {
  let count = 0, subtotal = 0;
  for (const [id, quantity] of Object.entries(cleanCart(cart))) { count += quantity; subtotal += findProduct(id).price * quantity; }
  return {count, subtotal, shipping:0, total:subtotal};
}
