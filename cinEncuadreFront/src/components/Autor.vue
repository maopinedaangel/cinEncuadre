<template>
  <div id="div-autor">
    <form v-on:submit.prevent="autenticar" id="acceso-autor">
      <label id="label-autor" for="input-autor">Digite su username:</label>
      <input type="text" id="input-autor" v-model="datos_user.username" name="input-autor"><br/><br/>
      <label id="label-password" for="input-password">Digite su contraseña:</label>
      <input type="text" id="input-password" v-model="datos_user.password" name="input-password"><br/><br/>      
      <button type="submit" id="boton-autor">Enviar</button><br><br>
    </form>
    <label id="label-respuesta">{{ bienvenida }}</label> 

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Autor',
  data: function() {
    return {
      datos_user: {
        username: "",
        password: ""
      },
      bienvenida: "No se ha autenticado.",
    }
  },
  methods: {
    autenticar: function() {    
      //alert("El username registrado es " + this.datos_user.username);
      axios.post("http://127.0.0.1:8000/autor/auth", this.datos_user)
      .then( result => {
        if (result.data.Autenticado) {
          this.username = result.data.username
          this.bienvenida = "Se ha autenticado correctamente el usuario " + this.datos_user.username + "." 
          this.$emit('autenticar', this.datos_user.username)                                         
        }
      })
      .catch( error => {
        alert(error.response.data.detail)
      })
    },

    /*verPerfil: function() {
      axios.get("http://127.0.0.1:8000/autor/perfil", { params: { username: this.datos_user.username}})
      .then( result => {  
        this.bienvenida = "Se encontró un usuario de nombre " + result.data.nombre + " " + result.data.apellido + "."     
      })
      .catch(error => {
        alert("El usuario no existe.")
      })
    },*/
  
    }

}
</script>


<style scoped>
  #label-autor, #label-password {
    color:black;
  }
  #label-respuesta {
    color: black;
  }
</style>
