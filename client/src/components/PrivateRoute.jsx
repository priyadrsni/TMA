import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  return Cookies.get("x-access-token") ? (
          <Outlet />
        ) : (
          <Navigate
            to={{ pathname: "/login" }}
          />
        )
};

export default PrivateRoute;
