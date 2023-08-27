export const stringAllTemps = (Temperaments) => {
  const temperamentsNames = Temperaments.map((temp) => temp.name);
  return temperamentsNames.join(", ");
};
