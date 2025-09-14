<template>
  <div class="navbar bg-[#F3F4F6] shadow-sm justify-between h-28 border-b border-black mb-10">
    <!-- Gauche : bouton Home -->
    <div class="flex-none">
      <router-link to="/" class="btn btn-ghost btn-square">
        <!-- Icône maison -->
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="h-24 w-24">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
        </svg>
      </router-link>
    </div>

    <!-- Centre : logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <router-link to="/">
        <img src="../../public/Logo.png" alt="Logo" class="h-25" />
      </router-link>
    </div>

    <!-- Droite : bouton info -->
    <div class="flex-none">
      <router-link to="/howItWorks">
          <button class="btn btn-ghost btn-square">
          <!-- Icône info -->
          <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="h-24 w-24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

  //Dark THEME

  // const toggleTheme = (e) => {
  //   const theme = e.target.checked ? "dark" : "light"
  //   document.documentElement.setAttribute("data-theme", theme)
  //   localStorage.setItem('theme', theme)
  // }
  // onMounted(() => {
  //   const saved = localStorage.getItem('theme') || 'light'
  //   document.documentElement.setAttribute('data-theme', saved)
  // })
</script>

<style scoped lang="css">
</style>