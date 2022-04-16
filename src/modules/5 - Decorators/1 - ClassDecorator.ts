/* 
    Class Decorators
*/

//Example 1: Decorator Factory

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, mountId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        const mountElement = document.getElementById(mountId);

        if (!mountElement) {
          return;
        }

        mountElement.innerHTML = template;
        mountElement.querySelector("h1")!.innerText = this.name;
      }
    };
  };
}

// The order of decorator execution is bottom-up

@Logger("Logging-Human")
@WithTemplate(`<h1>Some body</h1>`, "app")
class Human {
  name: string = "John";

  constructor() {
    console.log("Creating human instance..");
  }
}
