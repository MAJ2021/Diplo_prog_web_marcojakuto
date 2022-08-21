

import '../styles/HomePage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trabajos_RealizadosItem from '../components/novedades/Trabajos_RealizadosItem';
import '../styles/TrabajosRealizados.css';

const TrabajosRealizados = (props) => {
    
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
                novedades.map( item => <Trabajos_RealizadosItem key={item.id}
                title_1={item.instrumentacion_electricidad} 
                title_2={item.automatizacion_control}
                title_3={item.prototipos_sistemas_enbebidos}
                title_4={item.programacion_it}                
                />)
            )}
        </section>
    );
}

export default TrabajosRealizados; 