<template>
  <div id="div_autor">
    <form v-on:submit.prevent="autenticar" id="acceso_autor">
      <label id="label_autor" for="input_autor">Digite su username:</label>
      <input type="text" id="input_autor" v-model="username" name="input_autor">
      <label id="label_password" for="input_password">Digite su contraseña:</label>
      <input type="text" id="input_password" v-model="password" name="input_password">      
      <button type="submit" id="boton_autor">Enviar</button><br><br>
    </form>
    <label id="label_respuesta">{{ bienvenida }}</label> 

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Autor',
  data: function() {
    return {
      username: "",
      nombre: "",
      apellido: "",
      password: "",
      bienvenida: "No se ha autenticado.",
      autores: {}
    }
  },
  methods: {
    autenticar: function() {    
      alert("El username registrado es " + this.username);
      axios.get("http://127.0.0.1:8000/autor", { params: { username: this.username}})
      .then( result => {
        this.nombre = result.data.nombre;
        this.apellido = result.data.apellido;
        this.bienvenida = "Se ha autenticado correctamente el usuario " + this.nombre + " " + this.apellido + "."
      })
      .catch( error => {
        alert("No se encontró el usuario!")
      })
    },
    todos: function() {
      axios.get("http://127.0.0.1:8000/autores")
      .then( result => {
        this.autores = result.data;
        msg = "";
        for (i in autores) {
          alert("Se ha autenticado correctamente el usuario " + i.nombre + " " + i.apellido + "." + "\n")
          msg += "Se ha autenticado correctamente el usuario " + i.nombre + " " + i.apellido + "." + "\n";
        }
          this.bienvenida += msg;        

      })
      .catch( error => {
        alert("No se encontró el usuario!")
      })
    }      
    }

}
</script>


<style scoped>
  #label_autor, #label_password {
    color:black;
  }
  #label_respuesta {
    color: black;
  }
</style>
