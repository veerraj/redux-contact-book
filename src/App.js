import Navbar from "./components/layout/Navbar";
import Contact from "./components/contact";
import AddContact from "./components/AddContact"
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <div className="py-3">
            <Switch>
               <Route path="/" exact component={Contact}/>
               <Route path="/contacts/add" component={AddContact}/>
               <Route path="/contacts/edit/:id" component={EditContact}/>
            </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
