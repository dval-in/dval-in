<script lang="ts">
	import type { DateRange } from 'bits-ui';
	import { fromDate, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/ui/popover';
	import { mdiChevronDown, mdiFilter, mdiFilterRemove } from '@mdi/js';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import IconButton from '$lib/components/ui/icon-button/IconButton.svelte';

	export let filterValue;
	export let preFilteredValues;

	$: min =
		$preFilteredValues.length === 0
			? 0
			: Math.min(
					...$preFilteredValues.map((v: string) => {
						return new Date(v).getTime();
					})
				);

	$: max =
		$preFilteredValues.length === 0
			? 0
			: Math.max(
					...$preFilteredValues.map((v: string) => {
						return new Date(v).getTime();
					})
				);

	let value: DateRange | undefined = undefined;

	const onValueChange = (value: DateRange) => {
		$filterValue[0] = value.start ? value.start.toDate(getLocalTimeZone()).getTime() : null;
		$filterValue[1] = value.end
			? value.end.add({ days: 1 }).toDate(getLocalTimeZone()).getTime()
			: null;
	};

	const clearFilter = () => {
		$filterValue = [null, null];
		value = undefined;
	};
</script>

<div class="grid gap-2">
	<Popover openFocus>
		<PopoverTrigger asChild let:builder>
			<Button
				builders={[builder]}
				class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
				variant="ghost"
			>
				Date
				{#if $filterValue[0] !== null && $filterValue[1] !== null}
					<Icon path={mdiFilter} />
				{:else}
					<Icon path={mdiChevronDown} />
				{/if}
			</Button>
		</PopoverTrigger>
		<PopoverContent align="start" class="w-auto p-0">
			<div class="p-3 pb-0">
				<IconButton
					class="w-full"
					disabled={value === undefined}
					icon={mdiFilterRemove}
					on:click={clearFilter}
				>
					Clear Filter
				</IconButton>
			</div>
			<RangeCalendar
				bind:value
				initialFocus
				maxValue={fromDate(new Date(max), getLocalTimeZone())}
				minValue={fromDate(new Date(min), getLocalTimeZone())}
				numberOfMonths={1}
				{onValueChange}
				placeholder={fromDate(new Date(max), getLocalTimeZone())}
			/>
		</PopoverContent>
	</Popover>
</div>
