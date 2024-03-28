<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = TabsPrimitive.ListProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	{...$$restProps}
	class={cn(
		'inline-flex h-10 items-center justify-center rounded-md bg-tertiary p-1 text-text',
		className
	)}
>
	<slot />
</TabsPrimitive.List>
