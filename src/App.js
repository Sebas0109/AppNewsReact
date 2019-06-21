import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: []
  };

  //ES RECOMENDADO QUE S EPONGA LA LLAMDA A LA PAI EN EL COMPONENT DID MOUNT
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=164e5678a22e470aaaa0eb8230801cf4`;

    //Aqui pondrimaos envez de fetch a axios
    const respuesta = await fetch(url);
    const noticias = await respuesta.json(); //Segun traera el resultado json de la repsuesta

    //console.log(noticias.articles);
    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        {/*Encabezado de la pagina */}
        <Header titulo="Noticias React API" />
        {/*Contenedor de noticias */}
        <div className="container white contenedor-noticias">
          {/*Donde estara la barra de busqueda de las noticias*/}
          <Formulario consultarNoticias={this.consultarNoticias} />
          {/*Lista de las noticias*/}
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
