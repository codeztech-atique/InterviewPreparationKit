// Before (over-engineered for two cases):
//  Keep It Simple, Stupid

class PricingStrategy {
  getPrice(type) {
    if (type === 'vip') return 200;
    if (type === 'standard') return 100;
    throw new Error('unknown');
  }
}
const p = new PricingStrategy();
const price = p.getPrice(userType);


// After (KISS):

function price(type) {
  return type === 'vip' ? 200 : 100;
}
const ps = price(userType);
