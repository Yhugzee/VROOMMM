import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

export default function Home() {
 return (
    <main>
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="welcome">
        Bienvenue sur Vroommm, le nouveau service de location de véhicules. Nous
        avons le véhicule qu'il vous faut.
        <br />
        Nous vous proposerons un véhicule adapté en fonction de vos besoins du
        moment.
        <br />
        Nous vous souhaitons une bonne expérience.
      </p>
      <button type="button" className="Go">
        En voiture !!!
      </button>
    </main>
  );
}
