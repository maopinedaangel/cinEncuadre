<template>
  <div id="app">
    <header>     
      <Encabezado v-on:cerrar="cerrarSesion" :auth="is_logged" :user="username"/>   
    </header>   

    <!--<label v-if="is_visible">Is logged? {{ is_logged }}</label>  -->
    <!--<label v-if="is_visible">localStorage? {{ local }}</label> -->
    <main>
      <router-view v-on:autenticar="abrirSesion" :key="$route.fullPath"></router-view>
    </main>

    <footer>
      <Pie/>
    </footer>

  </div>
</template>

<script>
import Encabezado from './components/Encabezado'
import Pie from './components/Pie'
export default {
  name: 'App',
  data: function() {
    return {
      username: "",
      is_logged: false,
      is_visible: true,
      local: localStorage.getItem('active_user')
    }
  },

  components: {
    Encabezado,
    Pie
  },

  methods: {
    abrirSesion: function(someUser) {
      this.is_logged = true
      this.username = someUser
      this.$forceUpdate()
      alert("Se ha autenticado correctamente el usuario " + this.username + ".")
      localStorage.setItem('active_user', this.username)
      this.$router.push( { name: "home" })       
    },
    cerrarSesion: function() {
      this.is_logged = false
      this.username = ""
      localStorage.removeItem('active_user')
      this.$forceUpdate()  
    }
  },
  created: function() {
    
    this.$router.push( { name: "home" })
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dce7f317;
  background-color: white;
}

header, nav, footer, section, article, div, #app {
    box-sizing: border-box;
}

img, object, video, embed, iframe, #app {
    max-width: 100%;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0%;

}

header {
  background-color: black; 
  display: flex;
  /*padding-bottom: 1%;*/
  position: fixed;
  top: 0px;
  z-index: 2;
}

label {
  color: black;
}

main {
  margin-top: 2%;
  min-height: 150px;
  margin-bottom: 2%;
  /*background-color: cyan;*/
  padding: 1%;
  position: relative;
  top: 150px;
}


footer {
    background-color: black;  
    position: relative;
    top: 150px;
    /*margin-top: 5%;*/
}

</style>
