import React, { Component, useEffect, useState } from 'react'
import NavigationAdmin from './Navs/NavigationAdmin'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Editar() {

    const { id } = useParams()


    const onSubmit = async e => {
        e.preventDefault()
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let genero = document.getElementById('genero').value;
        let nUsuario = document.getElementById('nUsuario').value;
        let clave = document.getElementById('clave').value;

        console.log(nombre, apellido, genero, nUsuario, clave);

        await axios.put(`http://localhost:4000/api/usuarios/${id}`, {
            nombre: nombre,
            apellido: apellido,
            genero: genero,
            nUsuario: nUsuario,
            clave: clave,
        })

        window.location.href = "http://localhost:3000/admin"
    }

    return (
        <div>

            <NavigationAdmin />
            <h1>Cambie los datos</h1>
            <div>
                <div style={{ margin: "10px" }}>
                    <form onSubmit={onSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Primer nombre</label>
                                <input type="text" class="form-control" id="nombre" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Primer apellido</label>
                                <input type="text" class="form-control" id="apellido" placeholder="Primer apellido" />
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Genero</label>
                            <select id="genero" class="form-control">
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Nombre usuario</label>
                            <input type="text" class="form-control" id="nUsuario" placeholder="Nombre usuario" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">contrase??a</label>
                                <input type="password" class="form-control" id="clave" placeholder='contrase??a' />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}



// onSubmit = async e => {
//     e.preventDefault()
//     let nombre = document.getElementById('nombre').value;
//     let apellido = document.getElementById('apellido').value;
//     let genero = document.getElementById('genero').value;
//     let nUsuario = document.getElementById('nUsuario').value;
//     let clave = document.getElementById('clave').value;

//     console.log(nombre, apellido, genero, nUsuario, clave);

//     await axios.post('http://localhost:4000/api/usuarios/crear', {
//         nombre: nombre,
//         apellido: apellido,
//         genero: genero,
//         nUsuario: nUsuario,
//         clave: clave,
//     })


// }
