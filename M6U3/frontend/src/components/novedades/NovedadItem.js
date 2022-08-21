import React from "react";
import '../../styles/Novedades.css';


const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (

    <div className="novedades_item">
      <div className="titulo_novedades_item">
        <h2>{title}</h2>
      </div>
      <div className="subtitulo_novedades_item">
        <h3>{subtitle}</h3>
      </div>
      <div className="cuerpo_novedades_item">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className="imagen_novedades_item">
        <img src={imagen} />
      </div>
    </div>
  );
}

export default NovedadItem;