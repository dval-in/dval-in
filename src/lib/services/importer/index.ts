import { PaimonMoeImporterService } from '$lib/services/importer/paimon';
import { DvalinImporterService } from '$lib/services/importer/dvalin';
import type { ISettings } from '$lib/types/settings';
import type { ApplicationState } from '$lib/types/application_state';

const importerServices: { [key: string]: IImporterService } = {
	dvalin: new DvalinImporterService(),
	paimon: new PaimonMoeImporterService()
};

export type ImporterServices = keyof typeof importerServices;

export interface IImporterService {
	import(data: unknown, applicationSettings: ISettings): ApplicationState;
}

export default class ImporterService {
	getImporterService(key: ImporterServices) {
		return importerServices[key];
	}
}
