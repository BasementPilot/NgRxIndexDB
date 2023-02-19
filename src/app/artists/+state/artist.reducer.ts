import {ArtistState} from "./artist.state";
import {DatabaseService} from "../../db/database.service";
import {createReducer, on} from "@ngrx/store";
import {Actions} from "@ngrx/effects";
import {addArtist} from "./artist.actions";
import {Artist} from "../../models/artist.interface";


let injectedState:boolean = false;
export let initialState!: ArtistState;

export async function fillInitialState() {
  const dbService = new DatabaseService()
  const artists = await dbService.table('artists').toArray()
  return initialState = {
    artists: artists
  }
}

export const artistInitReducer = (state = initialState,action:Actions)=> {
    if(!state && !injectedState){
      injectedState = true;
      return initialState
    }
    return artistReducer(state,action as any)
};

export const artistReducer = createReducer(
  initialState,
  on(addArtist, (state, { artist}): ArtistState => {
    return {
      ...state,
      artists: [...state.artists, artist]
    }
  }),
);
