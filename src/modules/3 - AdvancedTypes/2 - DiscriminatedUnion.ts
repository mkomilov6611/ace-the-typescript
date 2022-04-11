/* 
    Discriminated Unions - Having literal types to differentiate 2 or more types(interfaces)
*/

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal): void {
  let speed: number;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
      break;
  }

  console.log(`${animal.type} is moving at ` + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
