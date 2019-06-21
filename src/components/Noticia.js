import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  //extraer los datos
  const { urlToImage, url, title, description, source } = noticia;

  //condicionalmente cargar la imagen si esta esta disponible
  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  //Con materialize hacemos la cardview
  //s12 ocupa 12 en chicos m6 6 col en mediano y l4 4 en grande

  return (
    <div className="col s12 m6 l4">
      {/*Imagen*/}
      <div className="card">{imagen}</div>

      {/*Contenido*/}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/*Enlace a Url de la noticia*/}
      <div className="card-action">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="waves-effect waves-light btn"
        >
          Ver Noticia Completa
        </a>
      </div>
    </div>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
};

export default Noticia;
