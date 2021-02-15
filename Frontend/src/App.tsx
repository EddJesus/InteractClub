import React, { Fragment } from "react";
import Routes from "./routes";
import {AuthProvider} from "./Context/AuthContext";

import "./App.css";

function App() {

  return (
    <AuthProvider>
      <Fragment>
        <Routes />
      </Fragment>
    </AuthProvider>
  );
}

export default App;
