<template>
  <div id="app">
  Blog
  <router-link to="/User">Perfil</router-link>
  <router-link to="/">Entradas</router-link>

  <br>
  <br>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
