const cleanArray = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      image: elem.image.url,
      name: elem.name,
      height: elem.height.metric,
      weight: elem.weight.metric,
      life_span: elem.life_span,
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

module.exports = { cleanArray, cleanArrayTemp };
