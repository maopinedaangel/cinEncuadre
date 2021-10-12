<template>
  <div id="header">
    <div id="div-logo">
        <router-link :to="{ name: 'home' }"><img id="logo_cinencuadre" src="../assets/Logo_crop.png"></router-link>  
    </div>
    <div id="container-nav">
      <div id="pusher">         
          <div id="usuario-activo">   
              <!--<router-link :to="{ name: 'somos' }"><img id="img-user" src="../assets/prof/ma2.png"></router-link>-->
              <!--<img v-if="auth" id="img-user" src="../assets/prof/ma2.png">   -->
              <img v-if="auth" id="img-user" :src="getImgUrl(imagen)" v-bind:alt="imagen">                           
          </div>
          <div id="texto-usuario">
              <p v-if="auth" id="nombre-usuario" >Usuario: {{ user }}</p> 
          </div>
      </div>
      <div id="menu">
        <nav id="nav">  
          <!--
              <router-link :to="{ name: 'new' }" class="nav-item">NUEVA</router-link>
          <router-link :to="{ name: 'resena', params: { id: 1 }}" class="nav-item">BLOG</router-link>
          <router-link :to="{ name: 'coleccion'}" class="nav-item">PELICULAS</router-link>
          <router-link :to="{ name: 'resena', params: { id: 1 }}" class="nav-item">ESPECIALES</router-link>
          <router-link :to="{ name: 'perfil', params: { username: 'mao' }}" class="nav-item">BLOGGEROS</router-link>
          <router-link :to="{ name: 'login' }" class="nav-item2">ACCEDER</router-link>  
          <router-link :to="{ name: 'somos'}" class="nav-item">QUIÉNES SOMOS</router-link>
          -->  

          <router-link :to="{ name: 'resena', params: { id: 1 }}" class="nav-item">BLOG</router-link>
          <router-link :to="{ name: 'coleccion'}" class="nav-item">PELICULAS</router-link>
          <div class="submenu">
              <!--<p class="nav-item">SUPERESPECIALES</p>-->
              <router-link :to="{ name: 'coleccion', query: { categoria: 'Efeméride' }}" class="nav-item3">ESPECIALES</router-link>               
              <div class="suboptions">
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Clásicos' }}" class="nav-item">30 CLÁSICOS</router-link> 
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Capas, sangre y colmillos' }}" class="nav-item">CAPAS, SANGRE Y COLMILLOS</router-link> 
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Favoritas 2019' }}" class="nav-item">FAVORITAS 2019</router-link> 
                <!--<router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Fellini' }}" class="nav-item">DESENCUADRANDO A FELLINI</router-link>-->
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Las 21 del 21' }}" class="nav-item">LAS 21 DEL 21</router-link>                                                                                 
                <!--<router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Almodóvar'}}" class="nav-item">DESENCUADRANDO A ALMODÓVAR</router-link> -->
                <router-link :to="{ name: 'coleccion', query: { categoria: 'RietecinEncuadre' }}" class="nav-item">RIETE CINENCUADRE</router-link>
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Su Primer cinEncuadre' }}" class="nav-item">SU PRIMER CINENCUADRE</router-link>                
                <!--<router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Kubrick'}}" class="nav-item">DESENCUADRANDO A KUBRICK</router-link>   -->                                                 
              </div>
          </div>
          <div class="submenu">
              <router-link :to="{ name: 'coleccion', query: { categoria: 'Efeméride' }}" class="nav-item3">DESENCUADRANDO A...</router-link>               
              <div class="suboptions">
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Fellini' }}" class="nav-item">FELLINI</router-link>                                                                               
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Almodóvar'}}" class="nav-item">ALMODÓVAR</router-link> 
                <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Kubrick'}}" class="nav-item">KUBRICK</router-link>                                                    
              </div>
          </div>          
          <!--<router-link :to="{ name: 'somos'}" class="nav-item">QUIÉNES SOMOS</router-link> -->
          <router-link :to="{ name: 'new' }" v-if="auth" class="nav-item">NUEVA</router-link>                       
          <!--<router-link :to="{ name: 'home' }" class="nav-item2">CERRAR SESIÓN</router-link> -->
          <p v-on:click="cerrar" v-if="auth" class="nav-item2">SALIR</p>              
          <router-link :to="{ name: 'login' }" v-else class="nav-item2">ACCEDER</router-link>
              
          <!--<router-link :to="{ name: 'perfil', params: { username: 'mao' }}" class="nav-item">PERFIL</router-link>-->                                                                                             
        </nav>

      </div>
    </div>  
  </div> 
</template>


<script>
import axios from 'axios';
export default {
    name: 'Encabezado',
    props: ['auth', 'user'],
    data: function() {
      return {
        autor: "",
        imagen: ""
      }
    },
    methods: {
      cerrar: function() {
        this.$emit('cerrar')
      },
      getImgUrl(pic) {
          return require('../assets/prof/'+ pic)
      },      
    },

    updated: function() {
      
      //axios.get("http://127.0.0.1:8000/autor/perfil", { params: { username: this.user}})      
      axios.get("https://cinencuadre.herokuapp.com/autor/perfil", { params: { username: this.user}})
      .then( result => {
          this.autor = result.data
          this.imagen = this.autor.foto
      })
      .catch( error => {
        //alert(error.data.detail)
      })    
    }
}
</script>


<style scoped>
header, nav, footer, section, article, div, #app {
    box-sizing: border-box;
}

img, object, video, embed, iframe, #app {
    max-width: 100%;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0%;

}

#header {
  /*width: 100%;*/
  /*height: 100%;*/
  background-color: black; 
  display: flex;
  height: 130px;
  /*padding-bottom: 1%;*/
}

#div-logo {
  width: 20%;
  /*background-color:magenta;*/
  padding: 1%;
  /*flex-grow: 1;*/
}

#logo_cinencuadre {
  padding: 4%;
  padding-left: 6%;
  padding-top: 8%;
  /*margin-right: 2%;*/
  /*background-color: yellow;*/
  width: 100%;
  height: auto;
}

#container-nav {
  /*width: 80%;*/
  /*background-color: blue;*/
  padding: 1%;
  padding-bottom: 0%;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
}

#pusher {
  /*min-height: 50%;*/
  height: 60px;
  flex-grow: 2;
  width: 100%;
  /*background-color: orange;*/
}

#usuario-activo {
  float: right;
  /*background-color: pink;*/
  padding:1%;
  padding-bottom:0%;
  padding-right: 0%;
  padding-top: 0%;
}

#texto-usuario {
  padding-top: 0em;
  padding-bottom: 2em;
}

#nombre-usuario {
  font-size: 18px;
  color: yellow;
  float: right;
  padding-top: 1%;
  padding-bottom: 1%;
  /*background-color: green; */
}

#img-user {
  /*float: right;*/
  /*background-color: blue;*/
  width: 40px;
  height: auto;
}

#menu {
  width: 100%;
  flex-grow: 1;
  /*background-color: greenyellow;*/
  /*padding: 1%;*/
}
 
#nav {
  font-size: 18px;
  overflow: hidden;
  height: 3em;
  margin-left: 3%;
  /*width: 100%;*/
  /*background-color: cyan;*/
  padding: 1%;
  /*display: flex;*/  
}

ul {
  display: flex;
  color: white;
}

li {
  float: left;
  text-align:center;
  color: white;
  text-decoration: none;
  padding: 1em;
  list-style: none;
  cursor: pointer;
}

.nav-item {
  float: left;
  text-align:center;
  color: white;
  text-decoration: none;
  padding: 1em;
  list-style: none;
  cursor: pointer;
  /*background-color:red;*/
}

.nav-item2 {
  float: right;
  text-align:center;
  color: white;
  text-decoration: none;
  padding: 1em;
  list-style: none; 
  cursor: pointer;
}

.submenu {
  float: left;
  overflow: hidden;
  /*background-color: yellow;*/
  /*height: inherit;*/
  /*padding-left: 1em;
  padding-right: 1em;*/
  /*vertical-align: bottom;*/
  /*line-height: 2.5em;*/
}

.nav-item3 {
  display: inline-block;   
  font-size: 18px;  
  text-align: center;
  color: white;
  text-decoration: none;
  /*background-color:purple;*/
  padding: 1em;
  /*height: 1em;
  line-height: 1em;*/
  cursor:pointer;
  vertical-align: bottom; 
  margin: 0%;
}

.suboptions {
  display: none;
  position: absolute;
  max-width: 40%;
  min-width: 21%;
  z-index: 2;
  margin-top: -1%;
}

.suboptions .nav-item {
  float: none;
  color: black;
  background-color:  rgb(230,230,230);
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  display: block;
  text-align: left;
  margin: 0%;
}

.suboptions .nav-item:hover {
  color: rgb(230,230,230);
  background-color: green;  
}

.submenu:hover .suboptions {
  display: block;
}
</style>