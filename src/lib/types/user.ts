import type { ServerKey } from '$lib/types/keys/ServerKey';

export interface IUser {
	server?: ServerKey;
	ar: number;
	uid?: number;
	wl: number;
}
