import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";

function App() {
  /* const location = useLocation(); */

  return (
    <BrowserRouter>
      <div className="App">
        <Route path={"/"} component={Navbar} />
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route path={"/home"} component={Home} />
          <Route path={"/create"} component={Form} />
          <Route path={"/detail/:id"} component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
