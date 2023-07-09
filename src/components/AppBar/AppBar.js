import React from "react";
import { CSSTransition } from "react-transition-group";
import Logo from "components/Logo/Logo";
import "./AppBar.css";
import Navigation from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const AppBar = () => (
  <>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Appbar-slideIn"
      unmountOnExit
    >
      {(stage) => {
        console.log(stage);
        return (
          <header className="AppBar">
            <nav className="AppBar-container">
              <CSSTransition
                in={stage === "entered"}
                timeout={1000}
                classNames="AppBar-logo"
                unmountOnExit
              >
                <Logo />
              </CSSTransition>

              <CSSTransition
                in={stage === "entered"}
                timeout={500}
                classNames="AppBar-nav"
                unmountOnExit
              >
                <Navigation />
              </CSSTransition>
            </nav>
          </header>
        );
      }}
    </CSSTransition>
    <Outlet />
  </>
);

export default AppBar;
