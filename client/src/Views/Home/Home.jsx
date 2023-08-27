import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  filterByTemp,
  getAllDogs,
  getAllTemperaments,
} from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const allTemps = useSelector((state) => state.allTemps);
  const dogsFiltered = useSelector((state) => state.dogsFiltered);
  const filters = useSelector((state) => state.filters);
  const ITEMS_PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([...allDogs].splice(0, ITEMS_PER_PAGE));

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOrd = (event) => {
    dispatch(filter(event.target.value));
  };

  const filterTemp = (event) => {
    console.log(event.target.value);
    dispatch(filterByTemp(event.target.value, "temperament"));
  };

  return (
    <div className="home-container">
      <div>
        <label>Temperaments Filter: </label>
        <select onChange={filterTemp}>
          <option defaultChecked value="0">
            -
          </option>
          {allTemps.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <label>Order and Filter by: </label>
        <select onChange={filterOrd} name="" id="">
          <option defaultChecked value="0">
            -
          </option>
          <option value="name asc">name asc</option>
          <option value="name dct">name dct</option>
          <option value="weight asc">weight asc</option>
          <option value="weight dct">weight dct</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
        {filters ? (
          <Cards allDogs={dogsFiltered} />
        ) : (
          <Cards allDogs={allDogs} />
        )}
      </div>
    </div>
  );
};

export default Home;
