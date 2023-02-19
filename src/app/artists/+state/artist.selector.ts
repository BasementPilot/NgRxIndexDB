import {createSelector} from "@ngrx/store";
import {AppState} from "../../+state/app.state";
import {ArtistState} from "./artist.state";

export const selectFeature = (state: AppState) => state.artistFeature;
export const selectAllArtists = createSelector( selectFeature,(state: ArtistState) => state.artists);
