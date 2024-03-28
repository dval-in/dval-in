import { isPaimonData, type PaimonCharacters, type PaimonPulls } from '$lib/types/import/paimon';
import type { ApplicationState } from '$lib/types/application_state';
import { isServerKey } from '$lib/types/keys/ServerKey';
import type { IWish } from '$lib/types/wish';
import type { WeaponKey } from '$lib/types/keys/WeaponKey';
import type { CharacterKey } from '$lib/types/keys/CharacterKey';
import type { ISettings } from '$lib/types/settings';
import type { ICharacters } from '$lib/types/character';
import type { BannerKey } from '$lib/types/keys/BannerKey';
import type { IImporterService } from '$lib/services/importer/index';

function convertPaimonCharacter(paimonPullId: string): CharacterKey {
	switch (paimonPullId) {
		case 'albedo':
			return 'Albedo';
		case 'alhaitham':
			return 'Alhaitham';
		case 'aloy':
			return 'Aloy';
		case 'amber':
			return 'Amber';
		case 'arataki_itto':
			return 'AratakiItto';
		case 'baizhu':
			return 'Baizhu';
		case 'barbara':
			return 'Barbara';
		case 'beidou':
			return 'Beidou';
		case 'bennett':
			return 'Bennett';
		case 'candace':
			return 'Candace';
		case 'charlotte':
			return 'Charlotte';
		case 'chevreuse':
			return 'Chevreuse';
		case 'chongyun':
			return 'Chongyun';
		case 'chiori':
			return 'Chiori';
		case 'collei':
			return 'Collei';
		case 'cyno':
			return 'Cyno';
		case 'dehya':
			return 'Dehya';
		case 'diluc':
			return 'Diluc';
		case 'diona':
			return 'Diona';
		case 'dori':
			return 'Dori';
		case 'eula':
			return 'Eula';
		case 'faruzan':
			return 'Faruzan';
		case 'fischl':
			return 'Fischl';
		case 'freminet':
			return 'Freminet';
		case 'furina':
			return 'Furina';
		case 'gaming':
			return 'Gaming';
		case 'ganyu':
			return 'Ganyu';
		case 'gorou':
			return 'Gorou';
		case 'hu_tao':
			return 'HuTao';
		case 'jean':
			return 'Jean';
		case 'kaedehara_kazuha':
			return 'KaedeharaKazuha';
		case 'kaeya':
			return 'Kaeya';
		case 'kamisato_ayaka':
			return 'KamisatoAyaka';
		case 'kamisato_ayato':
			return 'KamisatoAyato';
		case 'kaveh':
			return 'Kaveh';
		case 'keqing':
			return 'Keqing';
		case 'kirara':
			return 'Kirara';
		case 'klee':
			return 'Klee';
		case 'kujou_sara':
			return 'KujouSara';
		case 'kuki_shinobu':
			return 'KukiShinobu';
		case 'layla':
			return 'Layla';
		case 'lisa':
			return 'Lisa';
		case 'lynette':
			return 'Lynette';
		case 'lyney':
			return 'Lyney';
		case 'mika':
			return 'Mika';
		case 'mona':
			return 'Mona';
		case 'nahida':
			return 'Nahida';
		case 'navia':
			return 'Navia';
		case 'neuvillette':
			return 'Neuvillette';
		case 'nilou':
			return 'Nilou';
		case 'ningguang':
			return 'Ningguang';
		case 'noelle':
			return 'Noelle';
		case 'qiqi':
			return 'Qiqi';
		case 'raiden_shogun':
			return 'RaidenShogun';
		case 'razor':
			return 'Razor';
		case 'rosaria':
			return 'Rosaria';
		case 'sangonomiya_kokomi':
			return 'SangonomiyaKokomi';
		case 'sayu':
			return 'Sayu';
		case 'shenhe':
			return 'Shenhe';
		case 'shikanoin_heizou':
			return 'ShikanoinHeizou';
		case 'somnia':
			return 'Somnia';
		case 'sucrose':
			return 'Sucrose';
		case 'tartaglia':
			return 'Tartaglia';
		case 'thoma':
			return 'Thoma';
		case 'tighnari':
			return 'Tighnari';
		case 'traveler':
			return 'Traveler';
		case 'venti':
			return 'Venti';
		case 'wanderer':
			return 'Wanderer';
		case 'wriothesley':
			return 'Wriothesley';
		case 'xiangling':
			return 'Xiangling';
		case 'xianyun':
			return 'Xianyun';
		case 'xiao':
			return 'Xiao';
		case 'xingqiu':
			return 'Xingqiu';
		case 'xinyan':
			return 'Xinyan';
		case 'yae_miko':
			return 'YaeMiko';
		case 'yanfei':
			return 'Yanfei';
		case 'yaoyao':
			return 'Yaoyao';
		case 'yelan':
			return 'Yelan';
		case 'yoimiya':
			return 'Yoimiya';
		case 'yun_jin':
			return 'YunJin';
		case 'zhongli':
			return 'Zhongli';
		default:
			return <CharacterKey>paimonPullId;
	}
}

function convertPaimonWeapon(paimonPullId: string): WeaponKey {
	switch (paimonPullId) {
		case 'unknown_3_star':
			return 'Unknown3Star';
		case 'a_thousand_floating_dreams':
			return 'AThousandFloatingDreams';
		case 'akuoumaru':
			return 'Akuoumaru';
		case 'alley_hunter':
			return 'AlleyHunter';
		case 'amenoma_kageuchi':
			return 'AmenomaKageuchi';
		case 'amos_bow':
			return 'AmosBow';
		case 'apprentices_notes':
			return 'ApprenticesNotes';
		case 'aqua_simulacra':
			return 'AquaSimulacra';
		case 'aquila_favonia':
			return 'AquilaFavonia';
		case 'ballad_of_the_boundless_blue':
			return 'BalladOfTheBoundlessBlue';
		case 'ballad_of_the_fjords':
			return 'BalladOfTheFjords';
		case 'beacon_of_the_reed_sea':
			return 'BeaconOfTheReedSea';
		case 'beginners_protector':
			return 'BeginnersProtector';
		case 'black_tassel':
			return 'BlackTassel';
		case 'blackcliff_agate':
			return 'BlackcliffAgate';
		case 'blackcliff_longsword':
			return 'BlackcliffLongsword';
		case 'blackcliff_pole':
			return 'BlackcliffPole';
		case 'blackcliff_slasher':
			return 'BlackcliffSlasher';
		case 'blackcliff_warbow':
			return 'BlackcliffWarbow';
		case 'bloodtainted_greatsword':
			return 'BloodtaintedGreatsword';
		case 'calamity_queller':
			return 'CalamityQueller';
		case 'cashflow_supervision':
			return 'CashflowSupervision';
		case 'cinnabar_spindle':
			return 'CinnabarSpindle';
		case 'compound_bow':
			return 'CompoundBow';
		case 'cool_steel':
			return 'CoolSteel';
		case 'cranes_echoing_call':
			return 'CranesEchoingCall';
		case 'crescent_pike':
			return 'CrescentPike';
		case 'dark_iron_sword':
			return 'DarkIronSword';
		case 'deathmatch':
			return 'Deathmatch';
		case 'debate_club':
			return 'DebateClub';
		case 'dialogues_of_the_desert_sages':
			return 'DialoguesOfTheDesertSages';
		case 'dodoco_tales':
			return 'DodocoTales';
		case 'dragons_bane':
			return 'DragonsBane';
		case 'dragonspine_spear':
			return 'DragonspineSpear';
		case 'dull_blade':
			return 'DullBlade';
		case 'elegy_for_the_end':
			return 'ElegyForTheEnd';
		case 'emerald_orb':
			return 'EmeraldOrb';
		case 'end_of_the_line':
			return 'EndOfTheLine';
		case 'engulfing_lightning':
			return 'EngulfingLightning';
		case 'everlasting_moonglow':
			return 'EverlastingMoonglow';
		case 'eye_of_perception':
			return 'EyeOfPerception';
		case 'fading_twilight':
			return 'FadingTwilight';
		case 'favonius_codex':
			return 'FavoniusCodex';
		case 'favonius_greatsword':
			return 'FavoniusGreatsword';
		case 'favonius_lance':
			return 'FavoniusLance';
		case 'favonius_sword':
			return 'FavoniusSword';
		case 'favonius_warbow':
			return 'FavoniusWarbow';
		case 'ferrous_shadow':
			return 'FerrousShadow';
		case 'festering_desire':
			return 'FesteringDesire';
		case 'fillet_blade':
			return 'FilletBlade';
		case 'finale_of_the_deep':
			return 'FinaleOfTheDeep';
		case 'fleuve_cendre_ferryman':
			return 'FleuveCendreFerryman';
		case 'flowing_purity':
			return 'FlowingPurity';
		case 'forest_regalia':
			return 'ForestRegalia';
		case 'freedom-sworn':
			return 'FreedomSworn';
		case 'frostbearer':
			return 'Frostbearer';
		case 'fruit_of_fulfillment':
			return 'FruitOfFulfillment';
		case 'hakushin_ring':
			return 'HakushinRing';
		case 'halberd':
			return 'Halberd';
		case 'hamayumi':
			return 'Hamayumi';
		case 'haran_geppaku_futsu':
			return 'HaranGeppakuFutsu';
		case 'harbinger_of_dawn':
			return 'HarbingerOfDawn';
		case 'hunters_bow':
			return 'HuntersBow';
		case 'hunters_path':
			return 'HuntersPath';
		case 'ibis_piercer':
			return 'IbisPiercer';
		case 'iron_point':
			return 'IronPoint';
		case 'iron_sting':
			return 'IronSting';
		case 'jadefalls_splendor':
			return 'JadefallsSplendor';
		case 'kagotsurube_isshin':
			return 'KagotsurubeIsshin';
		case 'kaguras_verity':
			return 'KagurasVerity';
		case 'katsuragikiri_nagamasa':
			return 'KatsuragikiriNagamasa';
		case 'key_of_khaj-nisut':
			return 'KeyOfKhajNisut';
		case 'kings_squire':
			return 'KingsSquire';
		case 'kitain_cross_spear':
			return 'KitainCrossSpear';
		case 'light_of_foliar_incision':
			return 'LightOfFoliarIncision';
		case 'lions_roar':
			return 'LionsRoar';
		case 'lithic_blade':
			return 'LithicBlade';
		case 'lithic_spear':
			return 'LithicSpear';
		case 'lost_prayer_to_the_sacred_winds':
			return 'LostPrayerToTheSacredWinds';
		case 'luxurious_sea_lord':
			return 'LuxuriousSeaLord';
		case 'magic_guide':
			return 'MagicGuide';
		case 'mailed_flower':
			return 'MailedFlower';
		case 'makhaira_aquamarine':
			return 'MakhairaAquamarine';
		case 'mappa_mare':
			return 'MappaMare';
		case 'memory_of_dust':
			return 'MemoryOfDust';
		case 'messenger':
			return 'Messenger';
		case 'missive_windspear':
			return 'MissiveWindspear';
		case 'mistsplitter_reforged':
			return 'MistsplitterReforged';
		case 'mitternachts_waltz':
			return 'MitternachtsWaltz';
		case 'moonpiercer':
			return 'Moonpiercer';
		case 'mouuns_moon':
			return 'MouunsMoon';
		case 'oathsworn_eye':
			return 'OathswornEye';
		case 'old_mercs_pal':
			return 'OldMercsPal';
		case 'otherworldly_story':
			return 'OtherworldlyStory';
		case 'pocket_grimoire':
			return 'PocketGrimoire';
		case 'polar_star':
			return 'PolarStar';
		case 'portable_power_saw':
			return 'PortablePowerSaw';
		case 'predator':
			return 'Predator';
		case 'primordial_jade_cutter':
			return 'PrimordialJadeCutter';
		case 'primordial_jade_winged-spear':
			return 'PrimordialJadeWingedSpear';
		case 'prospectors_drill':
			return 'ProspectorsDrill';
		case 'prototype_amber':
			return 'PrototypeAmber';
		case 'prototype_archaic':
			return 'PrototypeArchaic';
		case 'prototype_crescent':
			return 'PrototypeCrescent';
		case 'prototype_rancour':
			return 'PrototypeRancour';
		case 'prototype_starglitter':
			return 'PrototypeStarglitter';
		case 'quantum_catalyst':
			return 'QuantumCatalyst';
		case 'rainslasher':
			return 'Rainslasher';
		case 'range_gauge':
			return 'RangeGauge';
		case 'raven_bow':
			return 'RavenBow';
		case 'recurve_bow':
			return 'RecurveBow';
		case 'redhorn_stonethresher':
			return 'RedhornStonethresher';
		case 'rightful_reward':
			return 'RightfulReward';
		case 'royal_bow':
			return 'RoyalBow';
		case 'royal_greatsword':
			return 'RoyalGreatsword';
		case 'royal_grimoire':
			return 'RoyalGrimoire';
		case 'royal_longsword':
			return 'RoyalLongsword';
		case 'royal_spear':
			return 'RoyalSpear';
		case 'rust':
			return 'Rust';
		case 'sacrificial_bow':
			return 'SacrificialBow';
		case 'sacrificial_fragments':
			return 'SacrificialFragments';
		case 'sacrificial_greatsword':
			return 'SacrificialGreatsword';
		case 'sacrificial_jade':
			return 'SacrificialJade';
		case 'sacrificial_sword':
			return 'SacrificialSword';
		case 'sapwood_blade':
			return 'SapwoodBlade';
		case 'scion_of_the_blazing_sun':
			return 'ScionOfTheBlazingSun';
		case 'seasoned_hunters_bow':
			return 'SeasonedHuntersBow';
		case 'serpent_spine':
			return 'SerpentSpine';
		case 'sharpshooters_oath':
			return 'SharpshootersOath';
		case 'silver_sword':
			return 'SilverSword';
		case 'skyrider_greatsword':
			return 'SkyriderGreatsword';
		case 'skyrider_sword':
			return 'SkyriderSword';
		case 'skyward_atlas':
			return 'SkywardAtlas';
		case 'skyward_blade':
			return 'SkywardBlade';
		case 'skyward_harp':
			return 'SkywardHarp';
		case 'skyward_pride':
			return 'SkywardPride';
		case 'skyward_spine':
			return 'SkywardSpine';
		case 'slingshot':
			return 'Slingshot';
		case 'snow_tombed_starsilver':
			return 'SnowTombedStarsilver';
		case 'solar_pearl':
			return 'SolarPearl';
		case 'song_of_broken_pines':
			return 'SongOfBrokenPines';
		case 'song_of_stillness':
			return 'SongOfStillness';
		case 'splendor_of_tranquil_waters':
			return 'SplendorOfTranquilWaters';
		case 'staff_of_homa':
			return 'StaffOfHoma';
		case 'staff_of_the_scarlet_sands':
			return 'StaffOfTheScarletSands';
		case 'summit_shaper':
			return 'SummitShaper';
		case 'sword_of_descension':
			return 'SwordOfDescension';
		case 'sword_of_narzissenkreuz':
			return 'SwordOfNarzissenkreuz';
		case 'talking_stick':
			return 'TalkingStick';
		case 'the_alley_flash':
			return 'TheAlleyFlash';
		case 'the_bell':
			return 'TheBell';
		case 'the_black_sword':
			return 'TheBlackSword';
		case 'the_catch':
			return 'TheCatch';
		case 'the_dockhands_assistant':
			return 'TheDockhandsAssistant';
		case 'the_first_great_magic':
			return 'TheFirstGreatMagic';
		case 'the_flute':
			return 'TheFlute';
		case 'the_stringless':
			return 'TheStringless';
		case 'the_unforged':
			return 'TheUnforged';
		case 'the_viridescent_hunt':
			return 'TheViridescentHunt';
		case 'the_widsith':
			return 'TheWidsith';
		case 'thrilling_tales_of_dragon_slayers':
			return 'ThrillingTalesOfDragonSlayers';
		case 'thundering_pulse':
			return 'ThunderingPulse';
		case 'tidal_shadow':
			return 'TidalShadow';
		case 'tome_of_the_eternal_flow':
			return 'TomeOfTheEternalFlow';
		case 'toukabou_shigure':
			return 'ToukabouShigure';
		case 'travelers_handy_sword':
			return 'TravelersHandySword';
		case 'tulaytullahs_remembrance':
			return 'TulaytullahsRemembrance';
		case 'twin_nephrite':
			return 'TwinNephrite';
		case 'ultimate_overlords_mega_magic_sword':
			return 'UltimateOverlordsMegaMagicSword';
		case 'uraku_misugiri':
			return 'UrakuMisugiri';
		case 'verdict':
			return 'Verdict';
		case 'vortex_vanquisher':
			return 'VortexVanquisher';
		case 'wandering_evenstar':
			return 'WanderingEvenstar';
		case 'waster_greatsword':
			return 'WasterGreatsword';
		case 'wavebreakers_fin':
			return 'WavebreakersFin';
		case 'white_iron_greatsword':
			return 'WhiteIronGreatsword';
		case 'white_tassel':
			return 'WhiteTassel';
		case 'whiteblind':
			return 'Whiteblind';
		case 'windblume_ode':
			return 'WindblumeOde';
		case 'wine_and_song':
			return 'WineAndSong';
		case 'wolf_fang':
			return 'WolfFang';
		case 'wolfs_gravestone':
			return 'WolfsGravestone';
		case 'xiphos_moonlight':
			return 'XiphosMoonlight';
		default:
			return <WeaponKey>paimonPullId;
	}
}

function convertPaimonId(
	paimonPullId: string,
	paimonPullType: 'character' | 'weapon'
): CharacterKey | WeaponKey {
	return paimonPullType === 'character'
		? convertPaimonCharacter(paimonPullId)
		: convertPaimonWeapon(paimonPullId);
}

function convertPaimonType(paimonPullType: 'character' | 'weapon'): 'Character' | 'Weapon' {
	switch (paimonPullType) {
		case 'character':
			return 'Character';
		case 'weapon':
			return 'Weapon';
	}
}

function convertWishDateToBanner(): BannerKey {
	return 'BalladInGoblets1';
}

function convertPaimonWishes(paimonWish: PaimonPulls[]): IWish[] {
	return paimonWish.flatMap((pull, count) => {
		return {
			type: convertPaimonType(pull.type),
			number: count,
			key: convertPaimonId(pull.id, pull.type),
			date: new Date(pull.time),
			pity: pull.pity,
			banner: convertWishDateToBanner()
		};
	});
}

function convertPaimonCharacters(paimonCharacters: PaimonCharacters): ICharacters {
	const convertedCharacters: ICharacters = {};

	Object.keys(paimonCharacters).forEach((key) => {
		const convertedKey = convertPaimonCharacter(key);

		convertedCharacters[convertedKey] = {
			level: 0,
			constellation: 0,
			ascension: 0,
			talent: {
				auto: 0,
				skill: 0,
				burst: 0
			}
		};
	});

	return convertedCharacters;
}

export class PaimonMoeImporterService implements IImporterService {
	import(data: unknown, applicationSettings: ISettings): ApplicationState {
		if (isPaimonData(data)) {
			return {
				format: 'dvalin',
				version: 0,
				settings: {
					...applicationSettings
				},
				user: {
					ar: data.ar,
					...(data.server !== undefined && isServerKey(data.server)
						? { server: data.server }
						: undefined),
					...(data['wish-uid'] !== undefined ? { uid: data['wish-uid'] } : undefined),
					wl: data.wl
				},
				...(data.characters !== undefined
					? { characters: convertPaimonCharacters(data.characters) }
					: undefined),
				wishes: {
					...(data['wish-counter-character-event'] !== undefined
						? {
								// eslint-disable-next-line @typescript-eslint/naming-convention
								CharacterEvent: convertPaimonWishes(data['wish-counter-character-event'].pulls)
							}
						: undefined),
					...(data['wish-counter-weapon-event'] !== undefined
						? // eslint-disable-next-line @typescript-eslint/naming-convention
							{ WeaponEvent: convertPaimonWishes(data['wish-counter-weapon-event'].pulls) }
						: undefined),
					...(data['wish-counter-standard'] !== undefined
						? // eslint-disable-next-line @typescript-eslint/naming-convention
							{ Standard: convertPaimonWishes(data['wish-counter-standard'].pulls) }
						: undefined),
					...(data['wish-counter-beginners'] !== undefined
						? // eslint-disable-next-line @typescript-eslint/naming-convention
							{ Beginner: convertPaimonWishes(data['wish-counter-beginners'].pulls) }
						: undefined),
					...(data['wish-counter-chronicled'] !== undefined
						? // eslint-disable-next-line @typescript-eslint/naming-convention
							{ Chronicled: convertPaimonWishes(data['wish-counter-chronicled'].pulls) }
						: undefined)
				}
			};
		} else {
			throw 'wrong format';
		}
	}
}
