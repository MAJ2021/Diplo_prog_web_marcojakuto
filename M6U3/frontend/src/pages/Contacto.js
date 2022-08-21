
import '../styles/HomePage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactoItem from '../components/novedades/ContactoItem';
import '../styles/Contacto.css';

const Contacto = (props) => {

 
    const [loading, setloading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/trabajos_realizados');
            setNovedades(response.data);
            setloading(false);
        };

        cargarNovedades();
    }, []);

    return (

        <section>
           
            {loading ? (
                <p>Cargando....</p>
            ) : (
                novedades.map( item => <ContactoItem key={item.id}
                title_5={item.direccion} 
                title_6={item.cp}
                title_7={item.telefono}
                />)
            )}
        </section>
    );
}

export default Contacto; 