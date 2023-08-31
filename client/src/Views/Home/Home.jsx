import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanStateName,
  filter,
  filterByTemp,
  getAllDogs,
  getAllTemperaments,
  getDogByName,
} from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const ITEMS_PER_PAGE = 8;
  const allDogs = useSelector((state) => state.allDogs);
  const allTemps = useSelector((state) => state.allTemps);
  const dogsFiltered = useSelector((state) => state.dogsFiltered);
  const filters = useSelector((state) => state.filters);

  const [currentPage, setCurrentPage] = useState(0);

  const [items, setItems] = useState([...allDogs]?.splice(0, ITEMS_PER_PAGE));
  const [itemsFiltered, setItemsFiltered] = useState(
    [...dogsFiltered]?.splice(0, ITEMS_PER_PAGE)
  );
  const [searchBar, setSearchBar] = useState("");
  const dogByName = useSelector((state) => state.dogByName);
  const [hasCleanedState, setHasCleanedState] = useState(false);

  const nextPage = () => {
    if (filters) {
      const next_page = currentPage + 1;
      const firstIndex = next_page * ITEMS_PER_PAGE;
      if (firstIndex >= dogsFiltered.length) return;
      setItemsFiltered([...dogsFiltered]?.splice(firstIndex, ITEMS_PER_PAGE));
      setCurrentPage(next_page);
      return;
    } else if (dogByName.length > 0) {
      const next_page = currentPage + 1;
      const firstIndex = next_page * ITEMS_PER_PAGE;
      if (firstIndex >= dogByName.length) return;
      setItemsFiltered([...dogByName]?.splice(firstIndex, ITEMS_PER_PAGE));
      setCurrentPage(next_page);
      return;
    }
    const next_page = currentPage + 1;
    const firstIndex = next_page * ITEMS_PER_PAGE;
    if (firstIndex >= allDogs.length) return;
    setItems([...allDogs]?.splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(next_page);
  };
  const prevPage = () => {
    if (filters) {
      const prev_page = currentPage - 1;
      const firstIndex = prev_page * ITEMS_PER_PAGE;
      if (prev_page < 0) return;
      setItemsFiltered([...dogsFiltered]?.splice(firstIndex, ITEMS_PER_PAGE));
      setCurrentPage(prev_page);
      return;
    } else if (dogByName.length > 0) {
      const prev_page = currentPage - 1;
      const firstIndex = prev_page * ITEMS_PER_PAGE;
      if (prev_page < 0) return;
      setItemsFiltered([...dogByName]?.splice(firstIndex, ITEMS_PER_PAGE));
      setCurrentPage(prev_page);
      return;
    }
    const prev_page = currentPage - 1;
    const firstIndex = prev_page * ITEMS_PER_PAGE;
    if (prev_page < 0) return;
    setItems([...allDogs]?.splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prev_page);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOrd = (event) => {
    // setSearchBar(""); // Limpiar búsqueda SearchBar
    dispatch(filter(event.target.value));
  };

  const filterTemp = (event) => {
    // setSearchBar(""); // Limpiar búsqueda SearchBar
    console.log(event.target.value);
    dispatch(filterByTemp(event.target.value, "temperament"));
  };

  useEffect(() => {
    // <----- se ejecuta cuando el estado se actualiza
    setItems([...allDogs]?.splice(0, ITEMS_PER_PAGE));
  }, [allDogs]);

  useEffect(() => {
    // <----- se ejecuta cuando el estado se actualiza
    setItemsFiltered([...dogsFiltered]?.splice(0, ITEMS_PER_PAGE));
  }, [dogsFiltered]);

  const handleSearch = () => {
    if (searchBar.trim() === "") {
      alert("Invalid breed name");
      return;
    }
    dispatch(cleanStateName());
    dispatch(getDogByName(searchBar));
    setCurrentPage(0); // Volver a la primera página
  };

  // useEffect(() => {
  //   if (dogByName.length > 0) {
  //     setItemsFiltered(dogByName);
  //     /* dispatch(cleanStateName()); */
  //     //setCurrentPage(0);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dogByName]);

  useEffect(() => {
    dispatch(cleanStateName());
    setHasCleanedState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBar]);

  useEffect(() => {
    if (hasCleanedState) {
      setItemsFiltered([]);
      setHasCleanedState(false);
    }
  }, [hasCleanedState]);

  useEffect(() => {
    // <----- se ejecuta cuando el estado se actualiza
    setItemsFiltered([...dogByName]?.splice(0, ITEMS_PER_PAGE));
  }, [dogByName]);

  return (
    <div className="home-container">
      <div>
        <input
          type="text"
          value={searchBar}
          onChange={(event) => setSearchBar(event.target.value)}
          placeholder="Search by breed name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div>
        <label>Temperaments Filter: </label>
        {console.log(dogsFiltered)}
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
        {dogByName.length > 0 ? (
          <Cards allDogs={itemsFiltered} />
        ) : filters ? (
          <Cards allDogs={itemsFiltered} />
        ) : (
          <Cards allDogs={items} />
        )}
      </div>
    </div>
  );
};

export default Home;
