const cleanArray = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      image: elem.image.url,
      name: elem.name,
      height: elem.height.metric,
      weight: elem.weight.metric,
      life_span: elem.life_span,
      temperaments: elem.temperament,
      created: false,
    };
  });

const cleanArrayTemp = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      image: elem.image.url,
      name: elem.name,
      height: elem.height.metric,
      weight: elem.weight.metric,
      life_span: elem.life_span,
      temperaments: elem.temperament,
      created: false,
    };
  });

const stringAllTemps = (Temperaments) => {
  const temperamentsNames = Temperaments.map((temp) => temp.name);
  return temperamentsNames.join(", ");
};

module.exports = { cleanArray, cleanArrayTemp, stringAllTemps };
