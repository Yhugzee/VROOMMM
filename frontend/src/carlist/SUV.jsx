import React from "react";
import "../styles/Car.css";

function SUV() {
  return (
    <div>
      <h2 className="title">BMW X1</h2>
      <img
        className="img"
        src="https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2023BMS250002_01_1280_300x640.jpg"
        alt="BMW X1"
      />
      <div className="features">
        <h2 className="subtitle">Caractéristiques principales</h2>
        <p>Nombre de place : 5</p>
        <p>Nombre de cylindre : 3</p>
        <p>Cylindrée : 1 496 cc</p>
        <p>Vitesse maximum : 190 km/h</p>
        <p>Charge maximale : 575 kg</p>
      </div>
    </div>
  );
}

export default SUV;
