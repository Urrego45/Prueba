import React, { Component } from 'react'
import Navigation from './Navs/NavigationHome'
import axios from 'axios'

export default class login extends Component {

  login = async e => {
    let nUsuario = document.getElementById('nUsuario').value;
    let clave = document.getElementById('clave').value;

    const res = await axios.post('http://localhost:4000/api/usuarios/login', {
      nUsuario: nUsuario,
      clave: clave,
    })

    if (res) {
      window.location.href = "http://localhost:3000/admin"
    } else {
      window.location.href = "http://localhost:3000/"
    }

  }

  render() {
    return (
      <div>

        <Navigation />

        <div class="wrapper fadeInDown">
          <div id="formContent">

            <form onSubmit={this.login}>
              <div>
                <label htmlFor="">Nombre de usuario</label>
                <input type="text" id="nUsuario" class="fadeIn second" name="nUsuario" placeholder="Nombre de usuario" />
              </div>

              <div>
                <label htmlFor="">Clave</label>
                <input type="text" id="clave" class="fadeIn third" name="login" placeholder="Contraseña" />
              </div>

              <input type="submit" class="fadeIn fourth" value="ingresar" />
            </form>

          </div>
        </div>
      </div>
    )
  }
}
