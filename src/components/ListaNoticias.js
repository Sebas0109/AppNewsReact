import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {/*Se tiene que poner un key para no tener error en esta funcion o codigo*/}
      {noticias.map(noticia => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default ListaNoticias;
