import React, { Component } from 'react'
import NavigationAdmin from '../Navs/NavigationAdmin'
import { Link } from "react-router-dom";


export default class HomeAdmin extends Component {

  constructor(){
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.users()
  }

  users(){
    fetch('http://localhost:4000/api/usuarios/')
          .then(res => res.json())
          .then(data => {
            this.setState({users: data});
          })
  }

   deleteUser(id){
     fetch(`http://localhost:4000/api/usuarios/${id}`,{
       method: 'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
          .then(res => res.json())
          .then(data => {
            this.users();
          })
  }

  render() {

    return (
      <div>
          <NavigationAdmin />

          <div className='col s7'>
              <table className='table table-condensed'>
                <thead>
                  <tr>
                    <th>nombre</th>
                    <th>apellido</th>
                    <th>genero</th>
                    <th>Nombre usuario</th>
                    <th>Clave</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.users.map(user => {
                      return(
                        <tr key={user._id}>
                          <td>{user.nombre}</td>
                          <td>{user.apellido}</td>
                          <td>{user.genero}</td>
                          <td>{user.nUsuario}</td>
                          <td>{user.clave}</td>

                          <td>
                            <button onClick={() => this.deleteUser(user._id)}>Borrar</button>
                            
                            <button ><Link class="nav-link" to={`/editar/${user._id}`} >editar</Link></button>
                          </td>

                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
      </div>
    )
  }
}
