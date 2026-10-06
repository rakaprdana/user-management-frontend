import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Routes, Route, Navigate } from "react-router";
import Home from "../views/home";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Dashboard from "../views/admin/dashboard";
import UsersIndex from "../views/admin/users";
import UserCreate from "../views/admin/users/create";
import UserEdit from "../views/admin/users/edit";

export default function AppRoutes() {
  const auth = useContext(AuthContext);

  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to={"/admin/dashboard"} replace />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to={"/login"} replace />
        }
      />
      <Route
        path="/admin/users"
        element={isAuthenticated ? <UsersIndex /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/admin/users/create"
        element={isAuthenticated ? <UserCreate /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/admin/users/edit/:id"
        element={isAuthenticated ? <UserEdit /> : <Navigate to={"/login"} />}
      />
    </Routes>
  );
}
