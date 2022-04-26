<template>
    <div>
        <h2>Crear establecimiento</h2>
        <div class="container establecimientoCont">
            <h3>Formulario para crear establecimiento</h3>
            <div class="form-group">
                <label for="Nombre">Nombre del Establecimiento</label>
                <input v-model="establecimientoArreglo.nombre" type="text" class="form-control" id="establecimiento" placeholder="Ej. Mi Establecimiento">
            </div>
            <div class="form-group">
                <label for="Categoria">Seleccione la categoría: </label>
                <br>
                <select v-model="categoriaTemp.id" ref="seleccionado" name="categoriaSelect" id="categoriaSelect" class="form-select" aria-label="Categoría" >
                    <option  v-for="(categoria, index) in categorias" :key="index" :value="categoria.id">
                        {{ categoria.nombre }}                        
                    </option>                    
                </select>
            </div>
            <div>
                <button @click="createEstablecimientoCategoria(categoriaTemp.id)" >Guardar</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data (){
        return{
            categorias: [],
            categoriaTemp: [],
            establecimientoArreglo: [],
            var: 5,
            establecimientoRespon: new Object()
        }
    },
    mounted(){
        this.getCategorias()
    },
    methods: {

        getCategorias(){
            axios.get('http://localhost:3000/api/categorias')
            .then((res) => {
                this.categorias = res.data
                console.log(this.categorias)
            })
        },
        async createEstablecimientoCategoria(id){
            var data = {
              nombre: this.establecimientoArreglo.nombre,
              activo: true
          } 
        await axios.post(`http://localhost:3000/api/establecimiento`, data)
            .then((res)=>{
                this.establecimientoRespon = res.data.userId
                
                console.log("creado exitosamente")
                console.log(this.establecimientoRespon.id)
                //this.getEstablecimientos()
                this.var++                
            }) 
            
             //(this._createEstablecimientoCategoria(this.var,id,this.establecimientoRespon.id))

            //alert(`id: ${this.var}, idCategoria: ${id}, idEstablecimiento: ${this.idEstablecimiento}`)
        },
        _createEstablecimientoCategoria(_id,_id_categoria,_id_establecimiento){
            var data = {
                id: _id,
                id_categoria: _id_categoria,
                id_establecimiento: _id_establecimiento
            }

            console.log("Problema de async"+data.id_establecimiento, data)
            // axios.post(`http://localhost:3000/api/ingresarEstablecimiento`, data)
            // .then((res)=>{
            //     console.log(res.data.message)
            // })
        }

    }
}
</script>
<style>
    .establecimientoCont {
        width: 600px;
    }

</style>