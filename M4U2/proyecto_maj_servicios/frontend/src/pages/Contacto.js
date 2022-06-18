
import '../styles/Contacto.css';

const Contacto = (props) => {

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
                    <p> Dirección:&nbsp;Suiza 2753.
                        <br/>
                        CP:&nbsp;8332 General Roca Rio Negro Argentina.
                        <br/>
                        Teléfono:&nbsp;0298-154201937.
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