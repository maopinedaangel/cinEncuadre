<template>
  <div id="app">
    <header>
      <img id="logo_cinencuadre" src="./assets/Logo_crop.png" width="250" height="auto">      
    </header>

    <main>
      <Autor/>
      <Portada/>
      <Recientes/>
      <Perfil/>
    </main>

    <footer>
      <div id="cont-footer">
        <div id="lineas">
          <p id="linea_verde">_______________________________</p>
          <p id="linea_amarilla">______________________________________________________</p>
          <p id="linea_roja">______________________________________________________________________________</p>                    
        </div>
        <div id="vinculos">
          <div id="col_resenas">
            <h3 class="titulo_footer">Reseñas</h3>
            <p class="item_footer">Todas las reseñas</p>
          </div>
          <div id="col_generos">
            <h3 class="titulo_footer">Géneros</h3>
            <p class="item_footer">Acción</p> 
            <p class="item_footer">Comedia</p>  
            <p class="item_footer">Drama</p>  
            <p class="item_footer">Horror</p> 
            <p class="item_footer">Ciencia-Ficción</p> 
            <p class="item_footer">Suspenso</p>  
            <p class="item_footer">Thriller</p>                                                            
          </div>
          <div id="col_especiales">
            <h3 class="titulo_footer">Especiales</h3>
            <p class="item_footer">Capas, sangre y colmillos</p> 
            <p class="item_footer">DesEncuadrando a Fellini</p>  
            <p class="item_footer">Favoritas 2019</p>
            <p class="item_footer">Las 21 del 21</p>                          
          </div>
          <div id="col_cinEncuadre">
            <h3 class="titulo_footer">cinEncuadre</h3>
            <p class="item_footer">¿Quiénes somos?</p> 
            <p class="item_footer">Contacto</p>  
            <p class="item_footer">Anuncia con nosotros</p>
            <p class="item_footer">Colaboradores</p>              
          </div>                              
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import Autor from './components/Autor'
import Portada from './components/Portada'
import Recientes from './components/Recientes'
import Perfil from './components/Perfil'

export default {
  name: 'App',
  components: {
    Autor,
    Portada,
    Recientes,
    Perfil
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
  /*margin-top: 30px;*/
  background-color: white;
}

header {
  background-color: black;  
}

#logo_cinencuadre {
  padding: 2%;
}

main {
  margin-top: 2%;
  min-height: 150px;
}

footer {
    background-color: black;  
}

#cont-footer {
  align-items: center;
  text-align: center;
}

.titulo_footer {
  color: gray;
  font-size: 16px;
  text-align: left;
}

.item_footer {
  color: gray;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0.5em;
  padding-top: 0;
  text-align: left;  
}

#lineas {
  text-align: center;
  /*align-content: center;*/
  /*align-items: center;*/
}

#linea_verde {
  color: green;
  font-weight: bolder;
  padding-top: 1%;
  margin-top: 2%;
  margin-bottom: 0;  
}

#linea_amarilla {
  color: yellow;
  font-weight: bolder;  
  margin-top: 0;
  margin-bottom: 0;
}

#linea_roja {
  color: red;
  font-weight: bolder;  
  margin-top: 0;
  margin-bottom: 2%;  
}

#vinculos {
  width: 65%;
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
}
</style>
