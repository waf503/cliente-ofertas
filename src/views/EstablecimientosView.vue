<template>

  <div >
    <h2>Lista de Establecimientos</h2>

    <div class="container">        
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Estados</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(establecimiento, index) in establecimientos" :key="index">
                    <td>{{ establecimiento.nombre }}</td>
                    <td>{{ establecimiento.categoria}}</td>
                    <td >{{ establecimiento.estado }}</td>

                    <td>

                       
                        <button >                       

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                          </svg>
                          
                        </button>
                          
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                           <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                          </svg>
                        </button>
                        
                        <button @click="establecimientoToEdit(index)" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                          </svg>
                        </button>

                         <button @click="disableEstablecimiento(establecimiento.nombre, establecimiento.id_est)"  v-if="(establecimiento.estado)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                          </svg>
                        </button>
                        <button @click="activarEstablecimiento(establecimiento.nombre, establecimiento.id_est)" v-else>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                          </svg>
                        </button>

                        
                        
                    </td>
                </tr>
          </tbody>
        </table>
        <br>
        <div class="editContenedor">
            <label for="nombre">Nombre: </label>
            <input v-model="establecimientoEdit.nombre" type="text" name="" id="">
            <input v-model="establecimientoEdit.estado" type="text">
            <button @click="actualizarEstablecimiento(establecimientoEdit.id_est)" >Actualizar</button>
        </div>
    </div>
  </div>
</template>

<script>
// imports
import axios from 'axios'


export default {
  data () {
      return {
          establecimientos: [],
          establecimientoEdit: new Object()
      }
  },
  mounted() {
      this.getEstablecimientos()
  },
  methods: {
      getEstablecimientos(){
          axios.get('http://localhost:3000/api/establecimientos')
            .then((res) => {
                this.establecimientos = res.data
                console.log(this.establecimientos)
            })
      },
      disableEstablecimiento(nom,id){
          var data = {
              nombre: nom,
              activo: false
          }
          axios.put(`http://localhost:3000/api/establecimiento/${id}`, data)
            .then((res)=>{
                console.log(res.data.message)
                this.getEstablecimientos()
            })
      },
      activarEstablecimiento(nom,id){
          var data = {
              nombre: nom,
              activo: true
          }
          axios.put(`http://localhost:3000/api/establecimiento/${id}`, data)
            .then((res)=>{
                console.log(res.data.message)
                this.getEstablecimientos()
            })
          
      },
      establecimientoToEdit(index){
          this.establecimientoEdit = this.establecimientos[index]
      },
      actualizarEstablecimiento(id){
          var data = {
              nombre: this.establecimientoEdit.nombre,
              activo: this.establecimientoEdit.estado
          } 
          axios.put(`http://localhost:3000/api/establecimiento/${id}`, data)
            .then((res)=>{
                console.log(res.data.message)
                this.getEstablecimientos()
            })
      }
  }
  
}
</script>
<style scoped>
</style>
