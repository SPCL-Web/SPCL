import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-hot-toast";

const Header = () => {
  const [click, setClick] = useState(false);

  const { auth, setAuth } = useAuth();


  const handleLogout = () => {
    //ham sirf user ko null kar rahe hai , baki sara data ko save karke rakhn ahi aisliye ham.

    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    toast.success("User logout Successfully")
    localStorage.removeItem("auth");



  }

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">All Courses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {/* <li>
              <NavLink to="/team">Team</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/journal">Journal</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {/* {
              auth?.user?.role === 1
            } */}

            {/* <li>
              <NavLink to="/blog">Visit Blog</NavLink>
            </li> */}
            {
              auth?.user?.role === 1 &&
              <li>
                <NavLink to="/dashboard">Admin Dashboard</NavLink>
              </li>
            }

            {
              <li>
              <NavLink to="/quiz">Join Quiz</NavLink>
            </li>
            }
          </ul>
          <div className="start">
            {
              !auth.user && <div className="button">
                <NavLink to="/Login">Login</NavLink>

              </div>
            }
            {
              !auth.user && <div className="button">
                <NavLink to="/Register">Register</NavLink>

              </div>
            }
            {
              auth.user && <div className="button">
                <NavLink onClick={handleLogout}>Logout</NavLink>

              </div>
            }
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
