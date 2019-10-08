module.exports = function multiply(first, second) { 
  let NumberProduct = BigInt(first) * BigInt(second);  
  return String(NumberProduct);
}