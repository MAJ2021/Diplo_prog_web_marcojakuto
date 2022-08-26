import '../styles/HomePage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/Novedades.css';


const Novedad = (props) => {

    const [loading, setloading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setloading(false);
        };

        cargarNovedades();
    }, []);

    return (

        <section className='holder'>
           <div className='titulo_novedades'>
            <h2>MISCELÁNEOS</h2>
            </div>
            {loading ? (
                <p>Cargando....</p>
            ) : (
                novedades.map( item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}
export default Novedad; 