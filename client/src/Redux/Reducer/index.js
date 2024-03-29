import {
  GET_ALL_TEMPERAMENTS,
  GET_ALL_DOGS,
  FILTERS,
  FILTER_TEMP,
  GET_DOG_BY_ID,
  CLEAN_STATE,
  GET_DOG_BY_NAME,
  CLEAN_STATE_NAME,
} from "../ActionTypes";

let initialState = {
  allTemps: [],
  allDogs: [],
  dogsFiltered: [],
  filters: false,
  dogById: {},
  dogByName: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemps: action.payload,
      };
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case FILTERS:
      if (action.payload === "name asc") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      } else if (action.payload === "name dct") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      } else if (action.payload === "weight asc") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].sort((a, b) => {
            const aStart = parseInt(a.weight);
            const bStart = parseInt(b.weight);
            // Manejo de NaN: Reemplazar NaN con 0 para la comparación
            const aStartValue = isNaN(aStart) ? 0 : aStart;
            const bStartValue = isNaN(bStart) ? 0 : bStart;
            return aStartValue - bStartValue;
          }),
        };
      } else if (action.payload === "weight dct") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].sort((a, b) => {
            const aStart = parseInt(a.weight);
            const bStart = parseInt(b.weight);
            // Manejo de NaN: Reemplazar NaN con 0 para la comparación
            const aStartValue = isNaN(aStart) ? 0 : aStart;
            const bStartValue = isNaN(bStart) ? 0 : bStart;

            return bStartValue - aStartValue;
          }),
        };
      } else if (action.payload === "API") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].filter(
            (dog) => dog.created === false
          ),
        };
      } else if (action.payload === "DB") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].filter(
            (dog) => dog.created === true
          ),
        };
      } else if (action.payload === "0") {
        return {
          ...state,
          filters: false,
        };
      }
      break;
    case FILTER_TEMP:
      if (
        action.payload.filterType === "temperament" &&
        action.payload.value !== "0"
      ) {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allDogs].filter(
            (dog) =>
              dog.temperaments &&
              dog.temperaments.includes(action.payload.value)
          ), //No están entrando los Dogs creados en la DB porque tienen un formato de Temperaments diferentes, con un array y una propiedad "name". Habría que haberlos filtrado desde su creación para igualarlos a los de la API, haciando un string en vez de un array. Creo que eso me está afectando para desde la searchBar buscar a los dogs creados en la DB.
        };
      } else if (
        action.payload.filterType === "temperament" &&
        action.payload.value === "0"
      ) {
        return {
          ...state,
          filters: false,
        };
      }
      break;

    case GET_DOG_BY_ID:
      return {
        ...state,
        dogById: action.payload,
      };

    case CLEAN_STATE:
      return {
        ...state,
        dogById: {},
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogByName: action.payload,
      };
    case CLEAN_STATE_NAME:
      console.log("Received results: Cleaning State");
      return {
        ...state,
        dogByName: [],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
