<template>
    <div>
        <div class="Fondo"></div>
        <div>Iniciar Sesión</div>
        <form>
            <input placeholder="Username">
            <input placeholder="Contraseña">

        </form>
    </div>
</template>
<script>
  export default{
      name: 'LogIn',
      data: function (){},
      methods: {},
      created: function (){}
  }
</script>

<style>
.Fondo{
    background-image:url("https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") ;
    height: calc(100vh - 57px);
}
</style>