import {createAction, props} from "@ngrx/store";
import {Artist} from "../../models/artist.interface";

export const addArtist = createAction('[Artists Component] Add Artist',
  props<{ artist: Artist}>());
export const deleteArtist = createAction('[Artists Component] Delete Artist');
export const updateArtist = createAction('[Artists Component] Update Artist');

export const loadArtists = createAction('[Artists Component] Load Artists');

export const artistsLoaded = createAction('[Artists Component] Artists Loaded', (artists) => ({artists}));

export const artistsAddedError = createAction('[Artists Component] Artist Add Error');
export const artistsAddedSuccess = createAction('[Artists Component] Artist Add Success ');
