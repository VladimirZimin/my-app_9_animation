import React from "react";
import { CSSTransition } from "react-transition-group";
import css from "./Home.module.css";
import "./Animation.css";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <CSSTransition
          classNames="btn"
          appear={true}
          in={true}
          timeout={500}
          unmountOnExit
        >
          <button className={css.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>button
          </button>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Home;
