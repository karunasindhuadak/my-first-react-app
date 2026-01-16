import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        px-4 py-2
        text-sm font-medium text-slate-600
        rounded-md
        hover:text-slate-900
        hover:bg-slate-100
        transition-colors duration-200
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
