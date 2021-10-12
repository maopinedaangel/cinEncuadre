<template>
  <div id="cont-footer">
    <div id="lineas">
      <p id="linea_verde">_______________________________</p>
      <p id="linea_amarilla">______________________________________________________</p>
      <p id="linea_roja">______________________________________________________________________________</p>                    
    </div>
    <div id="vinculos">
      <div id="col_resenas">
        <h3 class="titulo_footer">Reseñas</h3>
        <!--<p class="item_footer">Todas las reseñas</p>-->
        <router-link :to="{ name: 'coleccion'}" tag="p" class="item_footer">Todas las reseñas</router-link>              
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
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Clásicos' }}" tag="p" class="item_footer">30 Clásicos</router-link>             
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Capas, sangre y colmillos' }}" tag="p" class="item_footer">Capas, sangre y colmillos</router-link>  
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Favoritas 2019' }}" tag="p" class="item_footer">Favoritas 2019</router-link> 
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Las 21 del 21' }}" tag="p" class="item_footer">Las 21 del 21</router-link>                                  
        <router-link :to="{ name: 'coleccion', query: { categoria: 'RietecinEncuadre' }}" tag="p" class="item_footer">RietecinEncuadre</router-link> 
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Su Primer cinEncuadre' }}" tag="p" class="item_footer">Su Primer cinEncuadre</router-link> 
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Fellini' }}" tag="p" class="item_footer">Desencuadrando a Fellini</router-link>                                         
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Almodóvar' }}" tag="p" class="item_footer">Desencuadrando a Almodóvar</router-link>  
        <router-link :to="{ name: 'coleccion', query: { categoria: 'Desencuadrando a Kubrick' }}" tag="p" class="item_footer">Desencuadrando a Kubrick</router-link>                                                                                                                      
      </div>
      <div id="col_cinEncuadre">
        <h3 class="titulo_footer">cinEncuadre</h3>
        <router-link :to="{ name: 'somos'}" tag="p" class="item_footer">¿Quiénes somos?</router-link>             
        <p class="item_footer">Contacto</p>  
        <p class="item_footer">Anuncia con nosotros</p>
        <p class="item_footer">Colaboradores</p>              
      </div>                              
    </div>
  </div>
</template>

<script>
export default {
    name: 'Pie'
    
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


footer {
    background-color: black;  
}

#cont-footer {
  align-items: center;
  text-align: center;
  /*background-color: gray;*/
}

.titulo_footer {
  color: gray;
  font-size: 16px;
  text-align: left;
  margin-bottom: 1em;
}

.item_footer {
  color: gray;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0.5em;
  padding-top: 0;
  text-align: left; 
  cursor: pointer; 
}

#lineas {
  text-align: center;
}

#linea_verde {
  color: green;
  font-weight: bolder;
  padding-top: 1%;
  margin-top: 5%;
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
  padding-bottom: 1%;
}
</style>