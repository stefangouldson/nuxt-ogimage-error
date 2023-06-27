<template>
  <div>
    <header>
      <NuxtLink to="/">
        <img class="h-12 sm:h-20 w-auto dark-brighten" src="~/assets/img/webvids-logo-removebg.png" alt="Web Vids" />
      </NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <h2>footer</h2>
    </footer>
  </div>
</template>

<style scoped>
  @media (prefers-color-scheme: dark) {
    .dark-brighten{
      filter: brightness(0) invert(0);
    }
  }
</style>