import { createAction } from "@ngrx/store";

export const addArtist = createAction('[Artists Component] Add Artist', (artist) => ({artist}));
export const deleteArtist = createAction('[Artists Component] Delete Artist');
export const updateArtist = createAction('[Artists Component] Update Artist');

export const loadArtists = createAction('[Artists Component] Load Artists');

export const artistsLoaded = createAction('[Artists Component] Artists Loaded', (artists) => ({artists}));

export const artistsLoadError = createAction('[Artists Component] Artists Load Error');
