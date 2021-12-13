<template>
  <div id="app"> 
  <div class="header shadow p-3 mb-5 bg-white rounded" >
    <div>
      <h2>E-TOURISM</h2>
    </div>
    <div>
      <button class="Home">Home</button>
      <button class="Register">Register</button>
  </div>
  </div>
  <div>
  <router-view></router-view>
  </div>
</div>

 
</template>
<script>
export default{
      name: 'App',
      data: function (){},
      methods: {
        loadLogIn(){
          this.$router.push({name: "LogIn"})
        }
      },
      created: function (){
        this.loadLogIn();
      }
  }
</script>

<style>

.header{
      display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: white;
    padding: 5px 50px;
}
.header h2{
  font-family: sans-serif;
  background: orange;
}
.Home {
    background: orange;
    color: white;
    border: none;
}
.Register{
    border: none;
    background: white;
    color: orange;
}
</style>