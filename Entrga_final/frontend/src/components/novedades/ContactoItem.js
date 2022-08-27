import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Contacto.css';

const Contacto = (props) => {

    const {title_5,title_6,title_7} = props;

    //////////////// 
    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinamica
        }));
        
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
        
    }


    /////////////




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
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>

                        <p>
                            <label for="nom">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                        </p>
                        
                        {sending ? <p> Enviando ....</p> : null}
                        {msg ? <p>{msg}</p> : null}
                         
                        
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