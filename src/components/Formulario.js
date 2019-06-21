import React, { Component } from "react";
import PropTypes from "prop-types";

class Formulario extends Component {
  state = {
    categoria: "general"
  };

  //CAMBIAREMOS EL STATE PARA CA,BIAR LAS NOTICIAS QUE SE TRAIGA LA API EMPEZAMOS CON GENERAL COMO DEFAULT
  onChange = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        //Pasarlo a la pagina principal para la consulta
        this.props.consultarNoticias(this.state.categoria);
      }
    );
    //ese signo de parentesis despues de el setState es un callback para despues de cambiar el state
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticia Por Categoria</h2>

            <div className="input-field col s12">
              <select onChange={this.onChange}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};

export default Formulario;
