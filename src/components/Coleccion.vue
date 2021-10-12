<template>
    <div id="coleccion">
        <div id="filtros">
            <h2 id="ordenar">Ordenar por:</h2>
            <select v-on:change="consultar" id="opciones-ordenar" v-model="criterio">
                <option selected value="fecha">Fecha de publicación</option>                
                <option value="anno">Año</option>
                <option value="director">Director</option>
                <option value="pais">País</option> 
                <!--<option value="username">Autor</option>-->
                <!--<option value="categoria">Categoría</option> -->
                <option value="titulo">Título</option>                                
            </select>
            <!--<h2 id="seleccion">Resultados ordenados por {{ criterio }}:</h2>-->
        </div>
        <h1 id="titulo-coleccion">Resultados:</h1>
        <div id="grid-coleccion">
            <CardPelicula v-for="k in lista" :key="k[0].id" :title="k[0].titulo" :cat="k[0].categoria" :imag="k[0].imagen" :ind="k[0].id"/>           
        </div>
    </div>   
</template>


<script>
import CardPelicula from './CardPelicula'
import axios from 'axios';
export default {
    name: 'Coleccion',
    components: {
        CardPelicula
    },
    data: function() {
        return {
            nPeliculas: "",
            lista: "",
            ruta: "",
            criterio: "fecha"
        }
    }, 
    methods: {
        consultar: function() {
        var mi_username = this.$route.query.username
        var mi_director = this.$route.query.director
        var mi_pais = this.$route.query.pais                
        var mi_anno = this.$route.query.anno
        var mi_categoria = this.$route.query.categoria
        //axios.get("http://127.0.0.1:8000/resenas", { params: {username: mi_username, director: mi_director, pais: mi_pais, anno: mi_anno, categoria: mi_categoria, criterio: this.criterio}})              
        axios.get("https://api-cinencuadre.herokuapp.com/resenas", { params: {username: mi_username, director: mi_director, pais: mi_pais, anno: mi_anno, categoria: mi_categoria, criterio: this.criterio}})          
        .then( result => {
            this.nPeliculas = result.data.length
            this.lista = result.data
        })
        .catch( error => {
            alert("El filtro no funciona.")
        })  
        }
    },
    beforeCreate: function() {
        //alert(this.$route.fullPath)
        //var mi_pais = this.$route.params.pais
        var mi_username = this.$route.query.username
        var mi_director = this.$route.query.director
        var mi_pais = this.$route.query.pais                
        var mi_anno = this.$route.query.anno
        var mi_categoria = this.$route.query.categoria
        //axios.get("http://127.0.0.1:8000/resenas", { params: {username: mi_username, director: mi_director, pais: mi_pais, anno: mi_anno, categoria: mi_categoria, criterio: this.criterio}})                         
        axios.get("https://api-cinencuadre.herokuapp.com/resenas", { params: {username: mi_username, director: mi_director, pais: mi_pais, anno: mi_anno, categoria: mi_categoria, criterio: this.criterio}})          
        .then( result => {
            this.nPeliculas = result.data.length
            this.lista = result.data
        })
        .catch( error => {
            alert("El filtro no funciona.")
        })      
    },
    
}
</script>


<style scoped>

#ordenar, #seleccion, #titulo-coleccion {
    color: black;
    margin-top: 2em;
    margin-bottom: 2%;
}

#grid-coleccion {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3%;
    row-gap: 2em;
    margin-bottom:1%;
    padding: 1%;

}

CardPelicula {
    padding: 1%;
}
</style>