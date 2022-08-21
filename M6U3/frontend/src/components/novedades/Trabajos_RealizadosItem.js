import React from "react";
import '../../styles/TrabajosRealizados.css';


const TrabajosRealizadosItem = (props) => {
  const {title_1,title_2,title_3,title_4} = props;

  return (
    <main className="trabajos_realizados">

        <div className="trabajos_realizados_titulo">
            <h2>Nuestros Productos</h2>
        </div>

        <div className="presentacion_a_txt">
            <h3>
                Trabajos de Instrumentación & Electricidad
            </h3>
            <p>
               {title_1}
            </p>
        </div>
        <div className="presentacion_a_img">
            <ul>
                <li> <img src="img/IMG-20210917-WA0002.jpg"
                    alt="Instrumentación & Electricidad
            Industrial"/></li>
                <li> <img src="img/20201218_143147.jpg" alt="Foto
            presentación"/></li>
                <li> <img src="img/20200725_105736.jpg"
                    alt="Instrumentación & Electricidad
            Industrial"/></li>
                <li> <img src="img/TimePhoto_20211006_145037.jpg"
                    alt="Instrumentación & Electricidad
            Industrial"/></li>
                <li> <img src="img/20210407_112730.jpg"
                    alt="Foto
            presentación"/></li>
                <li> <img src="img/TimePhoto_20210924_104722.jpg"
                    alt="Instrumentación & Electricidad
            Industrial"/></li>
                <li> <img src="img/20200316_153205.jpg"
                    alt="Instrumentación & Electricidad
            Industrial"/></li>
            </ul>
        </div>

        <div className="separacion"> &nbsp;</div>

        <div className="presentacion_a_txt">
            <h3>
                Automatización & Control de Procesos
            </h3>
            <p>
                {title_2}
            </p>
        </div>
        <div className="presentacion_a_img">
            <ul>
                <li> <img src="img/20181124_154129.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/20181117_153825.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/20210322_110053.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/20200327_110751.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/20210322_110222.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/IMG-20190424-WA0008.jpg"
                    alt="Automatización & Control de Procesos"/></li>
                <li> <img src="img/20190809_134907.jpg"
                    alt="Automatización & Control de Procesos"/></li>
            </ul>
        </div>

        <div className="separacion"> &nbsp;</div>

        <div className="presentacion_a_txt">
            <h3>
                Desarrollo de prototipos & Sistemas Embebidos
            </h3>
            <p>
                {title_3}
            </p>
        </div>
        <div className="presentacion_a_img">
            <ul>
                <li> <img src="img/20210926_162307.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/20190413_190836a.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/20190726_112217.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/20190728_185028.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/20190728_185101.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/IMG-20220509-WA0020.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
                <li> <img src="img/20191217_135050.jpg"
                    alt="Desarrollo de prototipos & Sistemas
            Embebidos"/></li>
            </ul>
        </div>

        <div className="separacion"> &nbsp;</div>

        <div className="presentacion_a_txt">
            <h3>
                Programación IT
            </h3>
            <p>
                {title_4}
            </p>
        </div>
        <div className="presentacion_a_img">
            <ul>
                <li> <img src="img/programacion.jpeg"
                    alt="Programación IT"/></li>
                <li> <img src="img/20210926_162320.jpg"
                    alt="Programación IT"/></li>
                <li> <img src="img/20200303_184603.jpg"
                    alt="Programación IT"/></li>
                <li> <img src="img/20200303_184624.jpg"
                    alt="Programación IT"/></li>
                <li> <img src="img/sra_2.png"
                    alt="Programación IT"/></li>
                <li> <img src="img/sra_3.png"
                    alt="Programación IT"/></li>
                <li> <img src="img/sra_1.png"
                    alt="Programación IT"/></li>
            </ul>
        </div>


    </main>


);
}

export default TrabajosRealizadosItem;