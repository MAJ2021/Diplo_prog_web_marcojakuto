import React from "react";
import '../../styles/Contacto.css';

const Contacto = (props) => {

    const {title_5,title_6,title_7} = props;

    return (

        <main className="contacto">

            <div className="titulo_contacto">
                <h3>
                    Contactese con Nosotros
                </h3>
            </div>
            <div className="separacion_contacto"> &nbsp;</div>
            <div className="contenedor_contacto">

                <div className="foto_pag_contacto">
                    <img src="img/contacto_10.jpeg" alt="foto pagina contacto" />
                </div>

                <div className="texto_contacto">
                    <p> Dirección:&nbsp;{title_5}.
                        <br/>
                        CP:&nbsp;{title_6}.
                        <br/>
                        Teléfono:&nbsp;{title_7}.
                        <br/>
                    </p>
                </div>
                <div className="formulario_contacto">
                    <h3>FORMULARIO DE CONTACTO</h3>
                    <form action="" method="" className="formulario">

                        <p>
                            <label for="nom">Nombre</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <div className="acciones">

                            <input type="submit" value="Enviar"/>
                            <input type="reset" value="Borrar"/>

                        </div>
                    </form>

                </div>
            </div>
            <div className="separacion_contacto"> &nbsp;</div>
        </main>
    );
}



export default Contacto; 