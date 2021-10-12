<template>
    <div id="recientes">
        <h2 id="titulo-recientes">Últimas publicaciones:</h2>
        <div id="grid-recientes">
            <!--<div v-for="k in nNoticias" class="div-noticia">
                <h2>Noticia No. {{ k }}</h2>
            </div>-->
            <CardPelicula v-for="r in listaCorta" :key="r.id" :title="r.titulo" :cat="r.categoria" :imag="r.imagen" :ind="r.id"/>            
        </div>
    </div>
</template>


<script>
import CardPelicula from './CardPelicula'
import axios from 'axios';
export default {
    name: 'Recientes',
    components: {
        CardPelicula
    },
    data: function() {
        return {
            nNoticias: 6,
            lista: "",
            listaCorta: [],

        }
    },
    /*methods: {
        generarAleatorios: function(nNumeros, maximo) {
            var nums = []
            k = 0
            while (k < 6) {
                n = Math.floor(Math.random()*(maximo)) + 1
                if (n in nums) {
                    k = k
                 } else {
                    nums.push(n)
                    k++
                }
            }
            return nums
        }
    },*/
    beforeCreate: function() {
        axios.get("http://127.0.0.1:8000/resenas")            
        .then( result => {
            this.lista = result.data
            var nPeliculas = this.lista.length 
            //alert("Nresultados = " + nPeliculas)      
            for (var i = 0; i < this.nNoticias; i++) {
                //var num = Math.floor(Math.random()*(nPeliculas)) + 1
                var num = nPeliculas - i
                axios.get("http://127.0.0.1:8000/resena", { params: { id: num }})
                .then( datos => {  
                    this.listaCorta.push(datos.data[0])   
                })
                .catch(error => {
                    alert("No se encontraron datos.")
                })            

            }
        })
        .catch( error => {
            alert("El filtro no funciona.")
        })  

    }    
}
</script>


<style scoped>

#recientes {

}

#titulo-recientes {
    color: black;
    margin-top: 2%;
    margin-bottom: 2%;
}

#grid-recientes {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2%;
    grid-auto-rows: minmax(100px, auto);    
}

.div-noticia {
    background-color: green;
    color: white;
}

</style>