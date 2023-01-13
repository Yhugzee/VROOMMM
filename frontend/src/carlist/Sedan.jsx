import React from "react";
import "../styles/Car.css";

function Sedan() {
  return (
    <div>
      <h2 className="title">BMW Série 3</h2>
      <img
        className="img"
        src="https://www.bmw.fr/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png"
        alt="BMW Série 3"
      />
      <div className="features">
        <h2 className="subtitle">Caractéristiques principales</h2>
        <p>Nombre de place : 5</p>
        <p>Nombre de cylindre : 4</p>
        <p>Cylindrée : 1 998 cc</p>
        <p>Vitesse maximum : 225 km/h</p>
        <p>Charge maximale : 520 kg</p>
      </div>
    </div>
  );
}

export default Sedan;
