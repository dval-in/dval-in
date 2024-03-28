<script lang="ts">
	import IconButton from '$lib/components/ui/icon-button/IconButton.svelte';
	import { page } from '$app/stores';

	export let icon: string;
	export let link: string;
	export let title: string;
	export let isSidebarOpen: boolean;

	$: currentActivePath = $page.url.pathname;
</script>

<IconButton
	{...$$restProps}
	href={link}
	{icon}
	on:click
	variant={currentActivePath === link ? 'activeSidebar' : 'sidebar'}
>
	<div class={`${isSidebarOpen ? '' : 'sm:max-xl:hidden'}`}>{title}</div>
</IconButton>
