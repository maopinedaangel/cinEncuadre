<template>
    <div id="div-resena">
        <h1 id="titulo-resena">{{ tituloResena }}</h1>    
        <img class="img-resena" :src="getImgUrl(imgResena)" v-bind:alt="imgResena"  width="70%" height="auto"> 
        <div class="div-ficha">
            <p class="ficha">Película: {{ pelicula }}</p>
            <p class="ficha">Director: {{ director }}</p>    
            <p class="ficha">Año: {{ anno }}</p>  
            <p class="ficha">País: {{ pais }}</p> 
        </div>
        <div id="txt-resena">
            <div class="txtParrafo">
                <p class="text-justify" :Key="par" v-for="par in nParrafos"> {{ parrafos[par - 1] }} </p>                
            </div>
            <p class="pAutor">Escrito por: <router-link :to="{ name: 'coleccion',  query: { username: autor}}" class="link"> {{ autor }} </router-link></p>
        </div>

        <!--<router-link :to="{ path: '/new', params: { idPeli: idResena } }" class="nav-item">Editar</router-link>--> 
        <router-link :to="{ name: 'new', query: { idPeli: idResena}}" class="nav-item">Editar</router-link>  
        <!--<p class="pAutor">id Reseña: {{ idResena }} </p>-->
    </div>
</template>


<script>
import axios from 'axios';
import App from '../App'
export default {
    name: 'Resena',
    data: function() {
        return {
            txtResena: "",
            tituloResena: "",
            imgResena: "",
            idResena: "",
            nParrafos: "",
            parrafos: "",
            autor: "",
            pelicula: "",
            director: "",
            anno: "",
            pais: "",
            //count: 0
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/mov/'+ pic)
        },
        /*refrescar() {
            var miIdResena = Math.round(87*Math.random())
            //alert(miIdResena)
            this.idResena = miIdResena
            //alert(this.idResena)
            axios.get("http://127.0.0.1:8000/resena", { params: { id: this.idResena}})
            .then( result => {  
                this.tituloResena = result.data[0].titulo
                this.txtResena = result.data[0].texto
                this.imgResena = result.data[0].imagen 
                this.autor = result.data[0].username
                this.pelicula = result.data[1].titulo
                this.director = result.data[1].director
                this.anno = result.data[1].anno
                this.pais = result.data[1].pais                                                
                this.parrafos = this.txtResena.split('\n');
                this.nParrafos = this.parrafos.length        
            })
            .catch(error => {
                alert("No se encontraron datos.")
            }) 
    }*/    
    
    },   
    beforeCreate: function() {       
        this.idResena = this.$route.params.id
        //alert("id guardado: " + this.idResena)
        //axios.get("http://127.0.0.1:8000/resena", { params: { id: this.idResena}})        
        axios.get("https://api-cinencuadre.herokuapp.com/resena", { params: { id: this.idResena}})
        .then( result => {  
            this.tituloResena = result.data[0].titulo
            this.txtResena = result.data[0].texto
            this.imgResena = result.data[0].imagen 
            this.autor = result.data[0].username
            this.pelicula = result.data[1].titulo
            this.director = result.data[1].director
            this.anno = result.data[1].anno
            this.pais = result.data[1].pais                                                
            this.parrafos = this.txtResena.split('\n');
            this.nParrafos = this.parrafos.length
            this.idResena = result.data[0].id        
        })
        .catch(error => {
            alert("No se encontraron datos.")
        })

    },
    /*created: function() {
        //count = 0
        var self = this;
        //alert(self.count)
        setInterval(function() {
            self.count += 1
            //alert(self.count)
            if (self.count == 5) {
                self.refrescar()
                //alert(self.idResena)
                self.$router.push( { name: "resena", params: { id: this.idResena } })                     
                self.$forceUpdate()                           
                //alert(self.count)
                self.count = 0
            }
        }, 1000);
    }*/

}
</script>


<style scoped>

.div-ficha {
    margin-top: 1.5%;
    margin-bottom: 1.5%;
}

.ficha {
    font-weight: bold;
    color: black;
    text-align: left;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
}

#div-resena {
    /*min-height: 200px;*/
    width: 60%;
    margin-left: auto;
    margin-right: auto;    

}

#titulo-resena {
    color: black;
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 1em;
}

#txt-resena {
    color: black; 
    text-align: justify; 
}

.txtParrafo {
    background-color: white;
    color: black;
    text-align: justify;
}

.text-justify {
    background-color: white;
    color: black;
    text-align: justify;
    margin-top: 1em;
    margin-bottom: 1em;
}

.pAutor {
    font-weight: bold;
}
</style>