import type { IImporterService } from '$lib/services/importer/index';
import type { ISettings } from '$lib/types/settings';
import { type ApplicationState, isApplicationData } from '$lib/types/application_state';

export class DvalinImporterService implements IImporterService {
	import(data: unknown, applicationSettings: ISettings): ApplicationState {
		if (isApplicationData(data)) {
			return {
				...data,
				settings: {
					...applicationSettings
				}
			};
		}
		throw 'not dvalin format';
	}
}
