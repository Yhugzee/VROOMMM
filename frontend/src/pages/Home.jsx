import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main>
      <header className="App-header">
        <button type="button" className="login">
          LOGIN
        </button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="welcome">
        Bienvenue sur notre site, nous avons le véhicule qu'il vous faut.
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
