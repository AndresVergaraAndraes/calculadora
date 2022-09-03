import React from "react";
import '../css/Boton.css'
const Boton = (props) =>{
    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') && (valor !='=');
    }
return(
    <div className=
    {`boton-container ${esOperador(props.children)? 'operador' : '' }`
    } onClick= {()=> props.manejarClick(props.children)} >
{props.children}
    </div>
);
}
export default Boton;