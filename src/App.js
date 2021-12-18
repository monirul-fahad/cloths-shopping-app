import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import OrderPage from "./components/Pages/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/productDetails/:productId">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/orderPage">
            <OrderPage></OrderPage>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
