<template>
	<div class="container mx-auto pt-6">
		<router-link class="underline mb-3" :to="{name: 'home'}">&#8249; Home</router-link>

		<form @submit.prevent="edit" class="py-3">
			<input class="block p-2 rounded mb-4 border-2 w-full" placeholder="Title" type="text" v-model="payload.title" required />

			<textarea class="block w-full p-2 mb-4 rounded border-2" placeholder="Short Description" v-model="payload.short_description" required></textarea>

			<textarea class="block w-full p-2 rounded border-2" rows="6" placeholder="Complete description" v-model="payload.full_description" required></textarea>

			<div class="grid justify-items-end py-3">
				<button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" type="submit">Save Editing</button>
			</div>
		</form>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
	name: 'AddView',

	data() {
		return {
			payload: {
				title: '',
				short_description: '',
				full_description: ''
			}
		}
	},

	methods: {
		...mapActions(['addVulnerability']),

		edit() {
			this.addVulnerability(this.payload);
			this.$router.push('/');
		}
	}
}
</script>
