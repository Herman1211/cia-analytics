import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanCart,setQuantity,totals} from '../cart.js';
test('mixed products use correct quantities, prices and totals',()=>{
 let cart=setQuantity({},'guava',2);cart=setQuantity(cart,'blueberry',1);cart=setQuantity(cart,'forest',1);
 assert.deepEqual(totals(cart),{count:4,subtotal:1796,shipping:0,total:1796});
 cart=setQuantity(cart,'guava',1);cart=setQuantity(cart,'blueberry',0);
 assert.deepEqual(totals(cart),{count:2,subtotal:948,shipping:0,total:948});
});
test('storage corruption cannot create unknown products, negative totals or excessive quantities',()=>{
 assert.deepEqual(cleanCart(null),{});assert.deepEqual(cleanCart([]),{});
 assert.deepEqual(cleanCart({guava:999,blueberry:-5,forest:1.2,unknown:3}),{guava:10});
 assert.deepEqual(setQuantity({guava:1},'fake',4),{guava:1});
 assert.deepEqual(setQuantity({guava:1},'guava',NaN),{guava:1});
 assert.deepEqual(totals({}),{count:0,subtotal:0,shipping:0,total:0});
});
