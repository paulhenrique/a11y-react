import React from "react";
import { NavLink as Link } from "react-router-dom";

const DirectionalButtons = () => {
  return (
    <nav>
      <Link to="/">Ir para a página A</Link>
      <br />
      <Link to="/pageB">Ir para a página B</Link>
      <br />
      <Link className="linkBonito" to="/pageC">
        Ir para a página C
      </Link>
    </nav>
  );
};

export default DirectionalButtons;
