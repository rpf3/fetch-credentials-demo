<script lang="ts">
	import { onMount } from 'svelte';

	export let name: string;

	onMount(async () => {
		// Get JWT from browser memory.
		// https://auth0.com/docs/secure/security-guidance/data-security/token-storage
		const jwt = '';

		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		};

		await fetch('/api', requestOptions);
	})
</script>
<h1>Welcome to SvelteKit {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
