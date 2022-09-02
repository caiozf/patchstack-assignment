<template>
  <div id="app" class="container mx-auto">
	<nav class="grid justify-items-end py-3">
		<router-link class="text-lime-600 text-xl hover:scale-125 transition-transform" to="/add">Add New Vulnerability</router-link>
	</nav>
    <router-view/>
  </div>
</template>
<style>
