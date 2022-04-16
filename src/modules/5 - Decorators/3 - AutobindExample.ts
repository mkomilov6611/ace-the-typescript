function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
}

class Printer {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  @Autobind
  printText() {
    console.log("Printing: " + this.text);
  }
}

const printer = new Printer("This works");

const printMethod = printer.printText; // Before Autobind decorator, it doesnt work as of context change on method call
printMethod();
