import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import TextComponent from "./components/TextComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextComponent textContent='Generazione dei "button"' />
        <div className="btn-div">
          <ButtonComponent btnText="Salva" btnBgColor="cyan" />
          <ButtonComponent btnText="Invia" btnBgColor="green" />
          <ButtonComponent btnText="Elimina" btnBgColor="red" />
        </div>
        <TextComponent textContent="Generazione delle immagini" />

        <div className="image-div">
          <ImageComponent
            imageSrc="https://images.pexels.com/photos/20308702/pexels-photo-20308702/free-photo-of-legno-paesaggio-acqua-estate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            imageAlt="Nature"
          />
          <ImageComponent
            imageSrc="https://images.pexels.com/photos/17832031/pexels-photo-17832031/free-photo-of-mare-paesaggio-spiaggia-vacanza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            imageAlt="Sea"
          />
          <ImageComponent
            imageSrc="https://images.pexels.com/photos/8179831/pexels-photo-8179831.jpeg?auto=compress&cs=tinysrgb&w=600"
            imageAlt="Dog"
          />
          <ImageComponent
            imageSrc="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600"
            imageAlt="Cars"
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
