<template>
	<div class="pt-6">
		<router-link class="underline mb-3" :to="{name: 'home'}">&#8249; Home</router-link>

		<h2 class="text-lg my-4 text-blue-800">{{$route.params.current.title}}</h2>

		<p>{{$route.params.current.full_description}}</p>

		<div class="grid justify-items-end py-3">
			<router-link class="block text-red-600 underline mb-3 text-xl" :to="{name: 'edit', params: {current: $route.params.current }}">Edit Vulnerability</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailsView',
}
</script>
