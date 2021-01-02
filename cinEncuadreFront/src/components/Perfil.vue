<template>
    <div id="card-perfil">
        <!--<img id="prf-mao" src="../assets/prf-mao.png" width="200" height="auto">-->
        <!--<img id="prf-mao" v-bind:src="'../assets/' + foto + '.png'" >-->
        <h2 class="nickname">{{ nickname }}</h2>          
        <aside> 
            <img id="img-perfil" :src="getImgUrl(foto)" v-bind:alt="foto" width="200" height="auto"> 
        </aside>
        <section>             
     
            <h3 class="sub-perfil">About</h3>
            <!--<p class="parrafo-perfil"></p>-->
            <p class="parrafo-perfil">{{ about }}</p>
            <h3 class="sub-perfil">Intereses:</h3>
            <ul class="lista-perfil" >
                <li v-for="i in intereses.length">{{ intereses[i - 1] }}</li>
            </ul>
        </section>
        <div id="pie">
        </div>
    </div>
</template>


<script>
export default {
    name: 'Perfil',
    data: function() {
        return {
            nickname: "",
            about: "",
            intereses: [],
            foto: ""
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+ pic)
        }
    },    
    /*beforeCreate: function() {
        this.foto = "../assets/logo.png";
        document.getElementById('prf-mao').src = this.foto
    },*/
    created: function() {
        this.nickname = "Mauricio Pineda";
        this.about = "Amante de los clásicos. Me gusta el cine mudo, el expresionismo, el noir, Tarkovsky, Leone, Kurosawa y Wong kar-Wai (y muchos otros). Lo más maravilloso del cine es la diversidad. El cine se trata de narrar, de expresar ideas y ante todo de transmitir emociones a través de las imágenes, no de las palabras (Por eso siempre hay que volver a los maestros del cine mudo). Ando en busca de imágenes poéticas y misteriosas. De mis películas favoritas nunca sé explicar por qué me gustan.";
        this.intereses = ["Cine clásico", "Cine mudo", "Comedia"];
        this.foto = "prf-mao.png";
        /*getImgUrl(this.foto);*/
        /*document.getElementById("prf-mao").innerHTML = '<img src="../assets/' + this.foto + '.png">'*/
    }
    
}
</script>


<style scoped>

#card-perfil {
    margin-top: 2%;
    width: 60%;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align:justify;
}

aside {
    float: left;
    width: 25%;
    margin-right: 2%;
}

section {
    float: right;
    width: 73%;
}

.nickname {
    color: black;
}

.sub-perfil {
    color: black;
}

.parrafo-perfil {
    color: black;
}

.lista-perfil {
    color: black;
}

#pie {
    clear: both;
}
</style>