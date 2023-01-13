import React from "react";
import "../styles/Car.css";

function Utility() {
  return (
    <div>
      <h2 className="title">CITROËN Ë-JUMPER ÉLECTRIQUE</h2>
      <img
        className="img"
        src="https://www.lys-automobiles.com/img/vehicules/1/239/atb-tmp-36446-1.jpg"
        alt="Citroën Ë-Jumper"
      />
      <div className="features">
        <h2 className="subtitle">Caractéristiques principales</h2>
        <p>Nombre de place : 9</p>
        <p>Nombre de cylindre : 4</p>
        <p>Cylindrée : 1 997 cc</p>
        <p>Vitesse maximum : 150 km/h</p>
        <p>Charge maximale : 1890 kg</p>
      </div>
    </div>
  );
}

export default Utility;
