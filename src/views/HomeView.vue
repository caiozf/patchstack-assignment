<template>
  <div>
	<ul class="list-none py-4">
		<li class="p-4 mb-4 shadow-sm rounded-md bg-zinc-100" v-for="(vulnerability, index) in vulnerabilities" :key="index">
			<router-link class="underline" :to="{name: 'details', params: {current: vulnerability}}">
				<h2>{{vulnerability.title}}</h2>
			</router-link>

			<p>{{vulnerability.short_description}}</p>
		</li>
	</ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',

  computed: {
	...mapGetters([
		'vulnerabilities'
	])
  }
}
</script>
