<template>
    <div id="quienes-somos">
        <h1 class="titulo-mision">Nuestra misión</h1>
        <p class="par-mision">Propiciar encuentros que promuevan el estudio, la reflexión y la divulgación del conocimiento, alrededor del séptimo arte, aportando al crecimiento de la cinefilia, a través de la apreciación, la investigación, la crítica, la formación de públicos y la realización de material audiovisual.</p>
        <h1 class="titulo-mision">Nuestra visión</h1>
        <p class="par-mision">Para el año 2025 seremos un colectivo líder a nivel nacional en el séptimo arte, en los campos de apreciación, divulgación, investigación, formación y proyección a la realización cinematográfica</p>
        <h1 class="titulo-mision">Nuestros objetivos</h1>
        <ul>
            <li class="par-mision">Generar espacios para la investigación, reflexión, debate y generación de conocimiento en torno al arte cinematográfico.</li>
            <li class="par-mision">Contribuir a la divulgación del cine en nuestra ciudad y su área metropolitana a través de la programación de cineclubes, maratones, muestras y festivales de cine.</li>
            <li class="par-mision">Contribuir a la formación de públicos a través de la participación y organización de foros, charlas, conversatorios, seminarios y cursos relacionados con el cine.</li>
            <li class="par-mision">Generar canales de comunicación digitales para acercar a los públicos contemporáneos a un interés por el arte cinematográfico, aprovechando para ello los medios digitales, las redes sociales, la virtualidad y en general las nuevas tecnologías.</li>
            <li class="par-mision">Contribuir a la reflexión sobre las películas y sobre el arte cinematográfico por medio de la publicación de reseñas, críticas, artículos y productos audiovisuales inspirados en el cine.</li>
        </ul>
        <h1 class="titulo-mision">Miembros</h1>  
        <!--<div id="fotos">
            <img class="img-perfil" v-for="k in autores" :key="k.username" :src="getImgUrl(k.foto)" v-bind:alt="k.foto" width="50" height="auto">   
        </div>  -->
        <Perfil v-for="k in miembros" :key="k.username" :username="k.username"/>
        <h1 class="titulo-mision">Colaboradores</h1>   
        <Perfil v-for="k in colaboradores" :key="k.username" :username="k.username"/>               
    </div>
</template>


<script>
import Perfil from './Perfil'
import axios from 'axios';
export default {
    name: 'Somos',
    components: {
        Perfil
    },
    data: function() {
        return {
            nAutores: "",
            autores: "",
            miembros: "",
            colaboradores: ""
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/prof/'+ pic)
        }
    },
    beforeCreate: function() {  
        //axios.get("http://127.0.0.1:8000/autores")      
        axios.get("https://api-cinencuadre.herokuapp.com/autores")
        .then( result => {
            this.nAutores = result.data.length
            this.autores = result.data
            this.miembros = this.autores.filter(autor => autor.tipo == 'miembro')
            this.colaboradores = this.autores.filter(autor => autor.tipo == 'colaborador')                      
        })
        .catch( error => {

        })
    }
}
</script>


<style scoped>

.titulo-mision {
    margin-top: 2em;
    color: black;
    margin-bottom: 1em;
}

.par-mision {
    color: black;  
    text-align:justify; 
    width: 60%;
    margin-left: auto;
    margin-right: auto; 
    line-height: 1.5em;
}

li {
    margin-bottom: 1em;
}

Perfil {
    background-color: yellow;
}

</style>