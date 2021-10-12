<template>
    <div id="nueva-resena">
        <h2 id="titulo-nueva">Nueva reseña</h2>
        <form v-on:submit.prevent="guardar" id="datos-resena">
            <label id="label-titulo" for="input-titulo">Título de la reseña:</label><br/>
            <input type="text" id="input-titulo" v-model="datos.articulo_in.titulo" name="input-titulo"><br/><br/>
            <label id="label-pelicula" for="input-pelicula">Título de la película:</label><br/>
            <input type="text" id="input-pelicula" v-model="datos.peli_in.titulo" name="input-pelicula"><br/><br/>    
            <label id="label-director" for="input-director">Director:</label><br/>
            <input type="text" id="input-director" v-model="datos.peli_in.director" name="input-director"><br/><br/>  
            <label id="label-anno" for="input-anno">Año:</label><br/>
            <input type="number" id="input-anno" v-model="datos.peli_in.anno" name="input-anno"><br/><br/>  
            <label id="label-pais" for="input-pais">País:</label><br/>
            <input type="text" id="input-pais" v-model="datos.peli_in.pais" name="input-pais"><br/><br/>  
            <label id="label-categoria" for="input-categoria">Categoría:</label><br/>
            <input type="text" id="input-categoria" v-model="datos.articulo_in.categoria" name="input-categoria"><br/><br/>    
            <label id="label-resena" for="input-resena">Escribe aquí tu reseña:</label><br/><!--revisar-->
            <textarea type="text" id="area-resena" v-model="datos.articulo_in.texto" name="area-resena"></textarea><br/><br/> 
            <label id="label-imagen" for="input-imagen">Digita la url de la imagen:</label><br/>
            <input type="text" id="input-imagen" v-model="datos.articulo_in.imagen" name="input-imagen"><br/><br/>  
            <label id="label-status"><input type="checkbox" id="check-status" v-model="datos.articulo_in.status" name="input.status">Visible</label><br/><br/>
                                                                        
            <button type="submit" id="boton-autor">Enviar</button><br><br>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'NuevaResena',
    /*props: ['id'],*/
    data: function() {
        return {
            /*idResena: "",*/            
            datos: {
                peli_in: {
                    titulo: "",
                    director: "",
                    anno: "",
                    pais: ""
                },
                articulo_in: {
                    username: "",
                    categoria: "",
                    titulo: "",
                    texto: "",
                    imagen: "",
                    status: ""
                }
            },
        }
    },
    methods: {
        guardar: function() {
            //this.datos.articulo_in.username = "Alguien"
            this.datos.articulo_in.username = localStorage.getItem('active_user')            
            alert("El usuario activo es " + this.datos.articulo_in.username)
            //this.datos.articulo_in.username = this.$route.params.username
            //alert("Se guardarán los datos de la pelicula " + this.datos.peli_in.titulo)     
            axios
            //.post("http://localhost:8000/resena/save", this.datos)            
            .post("https://cinencuadre.herokuapp.com/resena/save", this.datos)
            .then(respuesta => {
                alert(respuesta.data.mensaje);
            })
            .catch(error => {
                alert(error.response.data.detail)
            });
            //this.$router.push( { name: "coleccion" })              
        }
    },
    beforeCreate: function() {
        //this.username = this.$route.params.username
        var idResena = this.$route.query.idPeli        
        alert("id = " + idResena)      
        if (idResena != null) {
            //axios.get("http://127.0.0.1:8000/resena", { params: { id: idResena}})            
            axios.get("https://cinencuadre.herokuapp.com/resena", { params: { id: idResena}})
            .then( result => {  
                this.datos.articulo_in.titulo = result.data[0].titulo
                this.datos.articulo_in.texto = result.data[0].texto
                this.datos.articulo_in.imagen = result.data[0].imagen 
                this.datos.articulo_in.username = result.data[0].username
                this.datos.articulo_in.categoria = result.data[0].categoria                
                this.datos.peli_in.titulo = result.data[1].titulo
                this.datos.peli_in.director = result.data[1].director
                this.datos.peli_in.anno = result.data[1].anno
                this.datos.peli_in.pais = result.data[1].pais                                                
                //this.parrafos = this.articulo_in.texto.split('\n');
                //this.nParrafos = this.parrafos.length        
            })
            .catch(error => {
                alert("No se encontraron datos.")
            })            
        }
    }
    
}
</script>


<style scoped>

#titulo-nueva {
    margin-bottom: 2em;
}

#datos-resena, #titulo-nueva {
    color: black;
}

#label-respuesta {
    color: black;
}

#area-resena {
    width: 50%;
    height: 10em;
    overflow-y: auto;
}
</style>