import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";
import Register from "./components/Register";

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/messenger/login" element={<Login />} />
            <Route path="/messenger/register" element={<Register />} />

            <Route
              path="/"
              element={
                <ProtectRoute>
                  {" "}
                  <Messenger />{" "}
                </ProtectRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        ,
      </div>
    </React.Fragment>
  );
}

export default App;
