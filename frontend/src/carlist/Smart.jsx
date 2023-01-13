import React from "react";
import "../styles/Car.css";

function Smart() {
  return (
    <div>
      <h2 className="title">Renault Clio 5</h2>
      <img
        className="img"
        src="https://images.caradisiac.com/images/8/9/4/3/178943/S0-renault-clio-5-a-quoi-ressemble-la-version-de-base-605366.jpg"
        alt="Renault Clio 5"
      />
      <div className="features">
        <h2 className="subtitle">Caractéristiques principales</h2>
        <p>Nombre de place : 5</p>
        <p>Nombre de cylindre : 3</p>
        <p>Cylindrée : 999 cc</p>
        <p>Vitesse maximum : 160 km/h</p>
        <p>Charge maximale : 75 kg</p>
        <p>Caution : 500 €</p>
        <p>Prix / jour : 90 €</p>
        <button type="button">Louer moi</button>
      </div>
    </div>
  );
}

export default Smart;
