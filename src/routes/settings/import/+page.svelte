<script lang="ts">
	import DefaultLayout from '$lib/components/layout/DefaultLayout.svelte';
	import { applicationState } from '$lib/store/global_state.js';
	import { toast } from 'svelte-sonner';
	import IconButton from '$lib/components/ui/icon-button/IconButton.svelte';
	import { mdiAlert, mdiImport } from '@mdi/js';
	import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import ImporterService, { type ImporterServices } from '$lib/services/importer';
	import { Button } from '$lib/components/ui/button';
	import {
		AlertDialog,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle
	} from '$lib/components/ui/alert-dialog';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { goto } from '$app/navigation';
	import Text from '$lib/components/typography/Text.svelte';

	let value: ImporterServices = 'dvalin';
	const importerService = new ImporterService();
	let file: File | undefined = undefined;
	let dialogOpen = false;

	const selectFile = () => {
		let element = document.createElement('input');
		element.type = 'file';
		element.style.display = 'none';
		element.onchange = (event) => {
			const target = event.target as HTMLInputElement;
			if (target.files && target.files.length === 1) {
				file = target.files[0];
			}
		};

		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	const handleSettingsImport = () => {
		dialogOpen = false;
		if (file !== undefined) {
			file.text().then((fileContent) => {
				try {
					let data = JSON.parse(fileContent);
					const newApplicationState = importerService
						.getImporterService(value)
						.import(data, $applicationState.settings);

					applicationState.set(newApplicationState);
					toast.success('Imported successfully!', {
						description:
							'Your data has been imported successfully and stored locally in your Browser'
					});
					goto('/settings');
				} catch (e) {
					toast.error('An error happened!', {
						description: 'Make sure you upload the right file format'
					});
				}
			});
		}
	};
</script>

<DefaultLayout title="Import account data">
	<Tabs bind:value>
		<TabsList>
			<TabsTrigger value="dvalin">Dval.in</TabsTrigger>
			<TabsTrigger value="paimon">Paimon.moe</TabsTrigger>
		</TabsList>
	</Tabs>

	<div class="flex items-center gap-2">
		<IconButton icon={mdiImport} on:click={selectFile}>Select file</IconButton>
		{#if file !== undefined}
			{file?.name}
		{:else}
			<Text type="p">No file selected</Text>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<Alert class="gap-6">
			<Icon color="fill-red-500" path={mdiAlert} />
			<AlertTitle>Watch out!</AlertTitle>
			<AlertDescription>This will overwrite your existing data</AlertDescription>
		</Alert>
		<IconButton
			disabled={file === undefined}
			icon={mdiImport}
			on:click={() => {
				dialogOpen = true;
			}}
		>
			Start import
		</IconButton>
	</div>
</DefaultLayout>

<AlertDialog bind:open={dialogOpen}>
	<AlertDialogContent class="sm:max-w-[425px]">
		<AlertDialogHeader>
			<AlertDialogTitle>Are you sure?</AlertDialogTitle>
			<AlertDialogDescription></AlertDialogDescription>
		</AlertDialogHeader>

		<AlertDialogFooter>
			<Button
				on:click={() => {
					dialogOpen = false;
				}}
				variant="outline"
			>
				No
			</Button>
			<Button on:click={handleSettingsImport}>Yes</Button>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
