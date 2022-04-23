"use strict";
function moveAnimal(animal) {
    let speed;
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
//# sourceMappingURL=2%20-%20DiscriminatedUnion.js.map