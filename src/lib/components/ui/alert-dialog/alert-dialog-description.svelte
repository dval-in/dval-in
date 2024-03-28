<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = AlertDialogPrimitive.DescriptionProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AlertDialogPrimitive.Description {...$$restProps} class={cn('text-sm text-text', className)}>
	<slot />
</AlertDialogPrimitive.Description>
