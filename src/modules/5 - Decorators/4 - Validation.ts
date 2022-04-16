/* Keep track of Validators */
const registeredValidators: {
  [propName: string]: {
    [validatableProp: string]: string[]; //required, positive
  };
} = {};

function registrateValidator(target: any, name: string, validator: string) {
  const className = getClassName(target);

  if (!registeredValidators.hasOwnProperty(className)) {
    registeredValidators[className] = {};
  }

  const existingLocalValidators = registeredValidators[className][name] || [];

  registeredValidators[className][name] = [
    ...existingLocalValidators,
    validator,
  ];

  console.log("Registered", registeredValidators);
}

// Helper function
function getClassName(obj: object) {
  return obj.constructor.name;
}

/* Validators */
function Required(target: any, name: string) {
  registrateValidator(target, name, "required");
}

function PositiveNumber(target: any, name: string) {
  registrateValidator(target, name, "positive");
}

/* Validation Logic */
function Validate(obj: any) {
  const validatorsConfigObj = registeredValidators[getClassName(obj)];

  if (!validatorsConfigObj) {
    return true;
  }

  return Object.keys(validatorsConfigObj).every((propName) => {
    return Object.values(validatorsConfigObj[propName]).every((validator) => {
      switch (validator) {
        case "required":
          return !!obj[propName];
        case "positive":
          return obj[propName] > 0;
      }
    });
  });
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const physics = new Course("Physics", 199);
const invalid = new Course("", -199);

console.log(Validate(invalid));
console.log(Validate(physics));
