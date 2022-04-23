interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validationObj: Validatable) {
  const { value } = validationObj;
  const conditions = [];

  const isString = typeof value === "string";
  const isNumber = typeof value === "number";

  const valueLength = value.toString().trim().length;

  if (isString && validationObj.minLength) {
    conditions.push(valueLength >= validationObj.minLength);
  }
  if (isString && validationObj.maxLength) {
    conditions.push(valueLength <= validationObj.maxLength);
  }

  if (isNumber && validationObj.min) {
    conditions.push(value >= validationObj.min);
  }

  if (isNumber && validationObj.max) {
    conditions.push(value <= validationObj.max);
  }

  return conditions.every((condition) => condition === true);
}
