<template>
  <div>
    <NavBar />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>

.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-enter-active, .route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to, .route-leave-from {
  opacity: 0;
  transform: translateX(0)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
