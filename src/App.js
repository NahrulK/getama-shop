import React from "react";
import Header from "./components/Headers";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./pages/Registration";
import MainLayout from "./layout/MainLayout";
import HomepageLayout from "./layout/HomepageLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          exact
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
