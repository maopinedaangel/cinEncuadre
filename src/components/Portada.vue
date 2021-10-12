<template>
    <div id="marco-portada">
        <!--<img src="../assets/port/port-mulholland-dr.jpeg" width="100%" height="auto">-->
        <img :src="getImgUrl(imgEspecial)" v-bind:alt="imgEspecial"  width="100%" height="auto">         
        <!--<h1 class="titulo-especial">Las 21 del 21</h1>-->
        <!-- <router-link :to="{ name: 'coleccion', query: { categoria: 'Las 21 del 21' }}" tag="h1" class="titulo-especial">Las 21 del 21</router-link> -->
        <router-link :to="{ name: 'coleccion', query: { categoria: miCategoria }}" tag="h1" class="titulo-especial"> {{ miCategoria }} </router-link>                
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Portada',
    data: function() {
        return {
            count: 0,
            miCategoria: "",
            imgEspecial: "",
            loop: ""
        }
    },
    methods: {
        refrescar() {
            /*
            var miIdResena = Math.floor(Math.random()*87) + 1
            axios.get("http://127.0.0.1:8000/resena", { params: { id: miIdResena}})
            .then( result => {  
                this.miCategoria = result.data[0].categoria            
                var nombreImagen = this.miCategoria.replaceAll(' ','-')   
                nombreImagen = nombreImagen.replaceAll(',','')        
                nombreImagen = nombreImagen.normalize()                       
                this.imgEspecial = "port-" + nombreImagen.toLowerCase(nombreImagen) + ".jpeg"
            })
            .catch(error => {
                alert("No se encontraron datos.")
            }) 
            */
            var nCategorias
            
            //axios.get("http://127.0.0.1:8000/categorias")            
            axios.get("https://cinencuadre.herokuapp.com/categorias")
            .then( result => {
                var listaCategorias = result.data
                nCategorias = listaCategorias.length  
                var aleatorio = Math.floor(Math.random()*nCategorias)                            
                this.miCategoria = listaCategorias[aleatorio] 
                /*
                var nombreImagen = this.miCategoria.replaceAll(' ','-')   
                nombreImagen = nombreImagen.replaceAll(',','')   
                */
                var nombreImagen = this.miCategoria.replace(/ /g,'-')   
                nombreImagen = nombreImagen.replaceAll(/,/g,'')                   
                nombreImagen = nombreImagen.normalize()                       
                this.imgEspecial = "port-" + nombreImagen.toLowerCase(nombreImagen) + ".jpeg"                 
            })
            .catch(error => {
                alert("Error.")
            })            
        },
        getImgUrl(pic) {
            return require('../assets/port/'+ pic)
        },                 
    },
    beforeCreate: function() {
        var nCategorias
        
        //axios.get("http://127.0.0.1:8000/categorias")        
        axios.get("https://cinencuadre.herokuapp.com/categorias")
        .then( result => {
            var listaCategorias = result.data           
            nCategorias = listaCategorias.length  
            var aleatorio = Math.floor(Math.random()*nCategorias)           
            this.miCategoria = listaCategorias[aleatorio] 
            var nombreImagen = this.miCategoria.replaceAll(' ','-')   
            nombreImagen = nombreImagen.replaceAll(',','')        
            nombreImagen = nombreImagen.normalize()                       
            this.imgEspecial = "port-" + nombreImagen.toLowerCase(nombreImagen) + ".jpeg"                 
        })
        .catch(error => {
            alert("Error.")
        })       
    },
    created: function() {
        var self = this;
        this.loop = setInterval(function() {
            self.count += 1
            if (self.count == 5) {
                self.refrescar()
                //self.$router.push( { name: "resena", params: { id: this.idResena } })                     
                //self.$forceUpdate()                           
                self.count = 0
            }
        }, 1000);
    },
    beforeDestroy: function() {
        clearInterval(this.loop)
    }       
    
}
</script>


<style scoped>

#marco-portada {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0%;
}

.titulo-especial {
    color: white;
    position: relative;
    left: 0%;
    top: -3.1em;
    z-index: 1;
    text-align: left;
    padding-left: 1em;
    line-height: 3em;
    background-color: rgba(0,100,0,0.5);
    cursor: pointer;
    margin: 0%;
    padding-bottom: 0%;
}
</style>