<script lang="ts">
	import Text from '$lib/components/typography/Text.svelte';

	export let title: string;
</script>

<svelte:head>
	<title>{'Dval.in | ' + title}</title>
</svelte:head>

<div class="flex flex-1 p-2 sm:p-4 sm:pt-14 sm:max-w-[1536px] scrollbar-gutter">
	<div class="flex flex-1 flex-col gap-4 sm:gap-6 overflow-x-hidden">
		<div
			class="flex max-sm:flex-col max-sm:flex-1 flex-row flex-wrap justify-between gap-4 sm:gap-6"
		>
			<Text class="text-primary" type="h1">{title}</Text>
			{#if $$slots.titlebarActions}
				<div class="flex max-sm:flex-col max-sm:flex-1 flex-row flex-wrap gap-2 justify-end">
					<slot name="titlebarActions" />
				</div>
			{/if}
		</div>
		<slot />
	</div>
</div>
