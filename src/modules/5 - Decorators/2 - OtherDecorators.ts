/* 
    Other Decorators
*/

function LogProperty(target: any, name: string | Symbol) {
  console.log("Logging Property..");
  console.log(target, name);
}

function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Logging Accessor..");
  console.log(target, name, descriptor);
}

function LogMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Logging Method..");
  console.log(target, name, descriptor);
}

function LogParameter(target: any, name: string | Symbol, position: number) {
  console.log("Logging Parameter..");
  console.log(target, name, position);
}

class Product {
  @LogProperty
  title: string;
  _price: number;

  @LogAccessor
  set price(value: number) {
    this._price = value;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @LogMethod
  getTaxedPrice(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}
