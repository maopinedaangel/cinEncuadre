<template>
    <div id="card-perfil">
        <!--<img id="prf-mao" src="../assets/prf-mao.png" width="200" height="auto">-->
        <!--<img id="prf-mao" v-bind:src="'../assets' + foto + '.png'" >-->
        <h2 class="nickname">{{ nickname }}</h2>          
        <aside> 
            <img id="img-perfil" :src="getImgUrl(foto)" v-bind:alt="foto" width="200" height="auto"> 
        </aside>
        <section>             
     
            <h3 class="sub-perfil">About:</h3>
            <!--<p class="parrafo-perfil"></p>-->
            <p class="parrafo-perfil">{{ about }}</p>
            <h3 class="sub-perfil">Intereses:</h3>
            <ul class="lista-perfil" >
                <li v-for="i in intereses.length">{{ intereses[i - 1] }}</li>
            </ul>
            <!--<p>Ver todas las reseñas de {{ nickname }}</p>   -->
            <router-link :to="{ name: 'coleccion',  query: { username: user}}" class="link">Ver todas las publicaciones de {{ username }}</router-link>         
        </section>

        <div id="pie">
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Perfil',
    props: ['username'],
    data: function() {
        return {
            nickname: "",
            about: "",
            intereses: [],
            foto: "",
            user: this.username
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/prof/'+ pic)
        }
    },  

    created: function() {
        axios.get("http://127.0.0.1:8000/autor/perfil", { params: { username: this.user}})
        .then( result => {
            this.nickname = result.data.nombre + " " + result.data.apellido
            this.about = result.data.perfil
            this.foto = result.data.foto
        })
        .catch( error => {

        })
        //this.nickname = "Mauricio Pineda";
        /*this.about = "Amante de los clásicos. Me gusta el cine mudo, el expresionismo, el noir, Tarkovsky, Leone, Kurosawa y Wong Kar-wai (y muchos otros). Lo más maravilloso del cine es la diversidad. El cine se trata de narrar, de expresar ideas y ante todo de transmitir emociones a través de las imágenes, no de las palabras (Por eso siempre hay que volver a los maestros del cine mudo). Ando en busca de imágenes poéticas y misteriosas. De mis películas favoritas nunca sé explicar por qué me gustan.";*/
        this.intereses = ["Cine clásico", "Cine mudo", "Noir", "Terror"];

    }
    
}
</script>


<style scoped>

#card-perfil {
    margin-top: 8%;
    width: 60%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align:justify;
}

aside {
    margin-top: 3%;
    float: left;
    width: 25%;
    margin-right: 4%;
}

section {
    float: right;
    width: 71%;
}

.nickname {
    color: white;
    background-color: black;
    text-align: center;
    padding: 1%;
}

.sub-perfil {
    color: black;
    margin-top: 1em;
    margin-bottom: 1em;
}

.parrafo-perfil {
    color: black;
}

p {
    color: black;
}

.lista-perfil {
    color: black;
}

.link {
    color:blue;
}

#pie {
    clear: both;
}
</style>