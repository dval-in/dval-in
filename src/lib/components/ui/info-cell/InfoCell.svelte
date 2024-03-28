<script lang="ts">
	import Text from '$lib/components/typography/Text.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';

	export let title: string;
</script>

<Tooltip>
	<TooltipTrigger
		class="flex flex-1 flex-col p-2 min-w-24 items-center justify-center gap-2 bg-neutral rounded-md text-center"
	>
		<Text type="h4">{title}</Text>
		<div class="flex flex-wrap gap-2 justify-center">
			<slot />
		</div>
	</TooltipTrigger>
	{#if $$slots.tooltip !== undefined}
		<TooltipContent class="flex">
			<slot name="tooltip" />
		</TooltipContent>
	{/if}
</Tooltip>
