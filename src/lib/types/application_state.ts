import type { ISettings } from '$lib/types/settings';
import type { IUser } from '$lib/types/user';
import type { ICharacters } from '$lib/types/character';
import type { IArtifact } from '$lib/types/artifact';
import type { IAchievementCategory } from '$lib/types/achievement';
import type { IFurnishings } from '$lib/types/furnishing';
import type { IMaterials } from '$lib/types/material';
import type { IWeapon } from '$lib/types/weapon';
import type { IWishes } from '$lib/types/wish';

export interface ApplicationState {
	format: 'dvalin';
	version: number;
	settings: ISettings;
	user: IUser;
	achievements?: IAchievementCategory;
	artifacts?: IArtifact[];
	characters?: ICharacters;
	furnishing?: IFurnishings;
	materials?: IMaterials;
	weapons?: IWeapon[];
	wishes?: IWishes;
}

export const isApplicationData = (object: unknown): object is ApplicationState => {
	if (typeof object === 'object' && object !== null) {
		if ('format' in object) {
			if (object.format === 'dvalin') {
				return true;
			}
		}
	}
	return false;
};
