<template>
    <div id="tarjeta-pelicula">
        <img class="img-card" :src="getImgUrl(imagen)" v-bind:alt="imagen" width="100%" height="auto">         
        <h4 class="titulo-pelicula"> {{ title }} </h4>                          
        <h5 v-on:click="abrirResena">Leer más ==></h5>  
        <!--<router-link to="{ name: 'resena'}" :idResena="indice" tag="h5">Leer más ==></router-link>-->
        <!--<h4 class="tag-coleccion"> {{ cat }} </h4>-->  
        <router-link :to="{ name: 'coleccion', query: { categoria: cat }}" tag="h4" class="tag-coleccion"> {{ cat }} </router-link>                              
    </div>
</template>

<script>
import App from '../App'
export default {
    name: 'CardPelicula',
    props: ['index', 'title', 'cat', 'imag', 'ind'],
    data: function() {
        return {
            tituloPelicula: "",
            tituloColeccion: "",
            imagen: this.imag,
            indice: this.ind
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/mov/'+ this.imagen)
        },
        abrirResena: function() {
            this.$router.push( { name: "resena", params: { id: this.indice } })            
        }        
    },

}
</script>


<style scoped>

@keyframes opacar {
    from {
        /*filter: none;   
        width:96%; */ 
        filter: none;   
    }
    to {
        /*filter: brightness(1000%);  
        width:100%;   */
        filter: drop-shadow(4px 4px 10px black);             
    }
}
#tarjeta-pelicula {
    color: black;
    /*background-color: yellow;*/
}

.img-card:hover {
    /*animation-name: opacar;
    animation-duration: 0.3s;*/
    filter: drop-shadow(4px 4px 10px black);    
}

.titulo-pelicula, .tag-coleccion, h5 {
    text-align: left;
    margin-top: 0%;
    margin-bottom: 1%;
}

h5 {
    cursor: pointer;
}

.tag-coleccion {
    cursor: pointer;
}

</style>