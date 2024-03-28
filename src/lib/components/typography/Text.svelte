<script lang="ts">
	import Blockquote from '$lib/components/typography/Blockquote.svelte';
	import H1 from '$lib/components/typography/H1.svelte';
	import H2 from '$lib/components/typography/H2.svelte';
	import H3 from '$lib/components/typography/H3.svelte';
	import H4 from '$lib/components/typography/H4.svelte';
	import Lead from '$lib/components/typography/Lead.svelte';
	import Large from '$lib/components/typography/Large.svelte';
	import Muted from '$lib/components/typography/Muted.svelte';
	import P from '$lib/components/typography/P.svelte';
	import Small from '$lib/components/typography/Small.svelte';

	const textMapping = {
		blockquote: Blockquote,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		lead: Lead,
		large: Large,
		muted: Muted,
		p: P,
		small: Small
	};

	export let type: keyof typeof textMapping;

	let exportedClass = '';

	export { exportedClass as class };
</script>

<div class={exportedClass}>
	<svelte:component this={textMapping[type]}>
		<slot />
	</svelte:component>
</div>
