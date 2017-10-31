const AV = require('../utils/av-live-query-weapp-min');

class Order extends AV.Object {
  get indType() { return this.get('indType'); }
  set indType(value) { this.set('indType', value); }

  get uName() { return this.get('uName'); }
  set uName(value) { this.set('uName', value); }

  get address() { return this.get('address'); }
  set address(value) { this.set('address', value); }

  get nick() { return this.get('nick'); }
  set nick(value) { this.set('nick', value); }

  get thumbnail() { return this.get('thumbnail'); }
  set thumbnail(value) { this.set('thumbnail', value); }

  get licenseNumber() { return this.get('licenseNumber'); }
  set licenseNumber(value) { this.set('licenseNumber', value); }
}
AV.Object.register(Order);

module.exports = Order;
