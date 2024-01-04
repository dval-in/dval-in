<script lang="ts">
	import { showSidebarSections } from '$lib/store/global_state';
	import { get } from 'svelte/store';
	import { Button } from '$lib/components/ui/button';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import {
		mdiAccountMultiple,
		mdiSwordCross,
		mdiBagPersonal,
		mdiStarOutline,
		mdiFish,
		mdiBedKing,
		mdiPartyPopper,
		mdiClipboardTextOutline,
		mdiAlarm,
		mdiChartTimeline,
		mdiCards,
		mdiCog,
		mdiBookshelf,
		mdiStar,
		mdiFood,
		mdiDisc,
		mdiChevronRight,
		mdiChevronDown
	} from '@mdi/js';
	export let segment: string;
	let path: string[] = [];
	let num = 0;
	if (get(showSidebarSections)[num] === true) {
		path.push(mdiChevronDown);
	} else {
		path.push(mdiChevronRight);
	}
	function rclick0() {
		return rightClicked(0);
	}
	function rclick1() {
		return rightClicked(1);
	}
	function rclick2() {
		return rightClicked(2);
	}
	function rightClicked(num: number) {
		if (get(showSidebarSections)[num] === true) {
			path[num] = mdiChevronRight;
		} else {
			path[num] = mdiChevronDown;
		}
		showSidebarSections.update((n) => {
			n[num] = !n[num];
			return n;
		});
	}
</script>

<div class={'sidebar fixed lg:w-64 h-full flex-col bg-background items-center z-50 bg-primary'}>
	<a href="/" class="relative py-2 items-left w-full">
		<h1 class="font-display text-3xl font-black text-white py-4 relative z-10">dval.in</h1>
	</a>
	<Button variant={segment === 'wish' ? 'activeSidebar' : 'sidebar'} href="wish"
		><Icon path={mdiStar} color="white" size={1} />Wish Counter</Button
	>
	<Collapsible open={get(showSidebarSections)[0]}>
		<CollapsibleTrigger>
			<Button on:click={rclick0} variant={'headerSidebar'}
				><Icon {path} color="white" size={1} />Your Collection</Button
			>
		</CollapsibleTrigger>
		<CollapsibleContent>
			<Button variant={segment === 'characters' ? 'activeSidebar' : 'sidebar'} href="characters"
				><Icon path={mdiAccountMultiple} color="white" size={1} />Characters</Button
			>
			<Button variant={segment === 'weapons' ? 'activeSidebar' : 'sidebar'} href="weapons"
				><Icon path={mdiSwordCross} color="white" size={1} />Weapons</Button
			>
			<Button variant={segment === 'inventory' ? 'activeSidebar' : 'sidebar'} href="inventory"
				><Icon path={mdiBagPersonal} color="white" size={1} />Inventory</Button
			>
		</CollapsibleContent>
	</Collapsible>
	<Collapsible open={get(showSidebarSections)[1]}>
		<CollapsibleTrigger>
			<Button on:click={rclick1} variant={'headerSidebar'}
				><Icon {path} color="white" size={1} />Trackers</Button
			>
		</CollapsibleTrigger>
		<CollapsibleContent>
			<Button variant={segment === 'todo' ? 'activeSidebar' : 'sidebar'} href="todo"
				><Icon path={mdiClipboardTextOutline} color="white" size={1} />To-Do</Button
			>
			<Button variant={segment === 'acesension' ? 'activeSidebar' : 'sidebar'} href="ascension"
				><Icon path={mdiStarOutline} color="white" size={1} />Ascension</Button
			>
			<Button variant={segment === 'fishing' ? 'activeSidebar' : 'sidebar'} href="fishing"
				><Icon path={mdiFish} color="white" size={1} />Fishing</Button
			>
			<Button variant={segment === 'furnishing' ? 'activeSidebar' : 'sidebar'} href="furnishing"
				><Icon path={mdiBedKing} color="white" size={1} />Furnishing</Button
			>
			<Button variant={segment === 'achivement' ? 'activeSidebar' : 'sidebar'} href="achivement"
				><Icon path={mdiPartyPopper} color="white" size={1} />Achivement</Button
			>
			<Button variant={segment === 'books' ? 'activeSidebar' : 'sidebar'} href="books"
				><Icon path={mdiBookshelf} color="white" size={1} />Books</Button
			>
			<Button variant={segment === 'recipes' ? 'activeSidebar' : 'sidebar'} href="recipes"
				><Icon path={mdiFood} color="white" size={1} />Recipes</Button
			>
			<Button
				variant={segment === 'spin-crystals' ? 'activeSidebar' : 'sidebar'}
				href="spin-crystals"><Icon path={mdiDisc} color="white" size={1} />Spin Crystals</Button
			>
		</CollapsibleContent>
	</Collapsible>
	<Collapsible>
		<CollapsibleTrigger>
			<Button on:click={rclick2} variant={'headerSidebar'}
				><Icon {path} color="white" size={1} />Tools</Button
			>
		</CollapsibleTrigger>
		<CollapsibleContent>
			<Button variant={segment === 'reminder' ? 'activeSidebar' : 'sidebar'} href="reminder"
				><Icon path={mdiAlarm} color="white" size={1} />Reminder</Button
			>
			<Button variant={segment === 'timeline' ? 'activeSidebar' : 'sidebar'} href="timeline"
				><Icon path={mdiChartTimeline} color="white" size={1} />Timeline</Button
			>
			<Button variant={segment === 'tcg' ? 'activeSidebar' : 'sidebar'} href="tcg"
				><Icon path={mdiCards} color="white" size={1} />TCG</Button
			>
		</CollapsibleContent>
	</Collapsible>
	<br />
	<Button variant={segment === 'settings' ? 'activeSidebar' : 'sidebar'} href="settings"
		><Icon path={mdiCog} color="white" size={1} />Settings</Button
	>
</div>