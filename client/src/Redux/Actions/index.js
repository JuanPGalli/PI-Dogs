import axios from "axios";
import {
  FILTERS,
  FILTER_TEMP,
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  GET_DOG_BY_ID,
  CLEAN_STATE,
  GET_DOG_BY_NAME,
  CLEAN_STATE_NAME,
} from "../ActionTypes/index";
import addImg from "./dogs.jpg";

export function postNewDog(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/dogs", {
        name: info.name,
        life_span: `${info.life_span} years`,
        image: addImg,
        height: `${info.minHeight} - ${info.maxHeight}`,
        weight: `${info.minWeight} - ${info.maxWeight}`,
        temperamentId: info.temperaments,
      });
      console.log(response);
      alert(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
}
export function getAllTemperaments() {
  return async function (dispatch) {
    try {
      const allTemps = (await axios.get("http://localhost:3001/temperaments/"))
        .data;
      return dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: allTemps,
      });
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };
}

export function getAllDogs() {
  return async function (dispatch) {
    try {
      const result = (await axios.get("http://localhost:3001/dogs/")).data;
      return dispatch({
        type: GET_ALL_DOGS,
        payload: result,
      });
    } catch (error) {
      console.log(error);
      alert(
        /* error.message */
        "An error ocurred when requiring all the dog breeds"
      );
    }
  };
}

export function filter(orden) {
  return function (dispatch) {
    return dispatch({
      type: FILTERS,
      payload: orden,
    });
  };
}

export function filterByTemp(value, filterType) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_TEMP,
      payload: { value, filterType },
    });
  };
}

export function getDogById(id) {
  return async function (dispatch) {
    try {
      const result = (await axios.get(`http://localhost:3001/dogs/${id}`)).data;
      return dispatch({
        type: GET_DOG_BY_ID,
        payload: result,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export function cleanState() {
  return function (dispatch) {
    return dispatch({
      type: CLEAN_STATE,
    });
  };
}

export function getDogByName(searchBar) {
  return async function (dispatch) {
    try {
      const result = (
        await axios.get(`http://localhost:3001/dogs/?name=${searchBar}`)
      ).data;
      console.log(result);
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };
}

export function cleanStateName() {
  return function (dispatch) {
    return dispatch({
      type: CLEAN_STATE_NAME,
    });
  };
}
