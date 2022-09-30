import React, {Fragment, useState} from 'react';
import '../assets/style/formulario.css'

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        usuario:'',
        email: '',
        emailRespaldo:'',
        password:'',
        numero:'',
        numeroRespaldo:''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + ' '+ datos.usuario + ' ' + datos.nombre + ' ' + datos.apellido + ' ' + datos.email + ' ' + datos.emailRespaldo + ' ' + datos.numero + ' ' + ' ' + datos.numeroRespaldo + ' ' + datos.password)
    }

    return (
        <Fragment>
            <div class="contenedor">
            <form className="row" onSubmit={enviarDatos}>
                <div >
                    <input type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div>
                    <input type="text" placeholder="Apellido" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div>
                    <input type="text" placeholder="Nombre de usuario" onChange={handleInputChange} name="usuario"></input>
                </div>
                <div>
                    <input type="email" placeholder="Email" onChange={handleInputChange} name="email"></input>
                </div>
                <div>
                    <input type="email" placeholder="Email de respaldo" onChange={handleInputChange} name="emailRespaldo"></input>
                </div>
                <div>
                    <input type="number" placeholder="Numero telefonico" onChange={handleInputChange} name="numero"></input>
                </div>
                <div>
                    <input type="number" placeholder="Numero telefonico de respaldo" onChange={handleInputChange} name="numeroRespaldo"></input>
                </div>
                <div>
                    <input type="password" placeholder="Contraseña" onChange={handleInputChange} name="password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            </div>
        </Fragment>
    );
}
 
export default Formulario;