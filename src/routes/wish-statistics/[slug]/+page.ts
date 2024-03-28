import { error } from '@sveltejs/kit';
import type { WishBannerKey } from '$lib/types/keys/WishBannerKey';
import type { CharacterIndex } from '$lib/types/index/character';
import type { WeaponIndex } from '$lib/types/index/weapon';
import type { RouteParams } from '../../../../.svelte-kit/types/src/routes/wish-statistics/[slug]/$types';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: RouteParams }) {
	let pageType: WishBannerKey;
	let characterIndex: CharacterIndex;
	let weaponIndex: WeaponIndex;

	const characterIndexResponse = await fetch(
		'https://raw.githubusercontent.com/dval-in/dvalin-data/main/data/EN/Character/index.json'
	);

	const weaponIndexResponse = await fetch(
		'https://raw.githubusercontent.com/dval-in/dvalin-data/main/data/EN/Weapon/index.json'
	);

	switch (params.slug) {
		case 'character':
			pageType = 'CharacterEvent';
			break;
		case 'weapon':
			pageType = 'WeaponEvent';
			break;
		case 'standard':
			pageType = 'Standard';
			break;
		case 'beginner':
			pageType = 'Beginner';
			break;
		case 'chronicled':
			pageType = 'Chronicled';
			break;
		default:
			error(404, 'Not found');
	}

	if (characterIndexResponse.ok && weaponIndexResponse.ok) {
		characterIndex = await characterIndexResponse.json();
		weaponIndex = await weaponIndexResponse.json();
		weaponIndex['Unknown3Star'] = { name: 'Unknown 3 star', rarity: 3 };
	} else {
		error(500, 'Internal error');
	}

	// eslint-disable-next-line @typescript-eslint/naming-convention
	return { pageType, index: { Character: characterIndex, Weapon: weaponIndex } };
}
