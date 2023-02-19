import {Action, createReducer, on} from '@ngrx/store';
import {addArtist, artistsLoaded} from "./artist.actions";
import {ArtistState} from "./artist.state";
import {Injectable} from "@angular/core";
import {DatabaseService} from "../../db/database.service";
import {from} from "rxjs";
import {AppInitAction} from "../../+state/appinit.action";

@Injectable({
  providedIn: "root",
})
export class ArtistReducer {

  private initialState!: ArtistState

  constructor(private dbService: DatabaseService) {
    this.initialState = new ArtistState()
  }


  createReducer() {
    return(state: ArtistState, action: Action) => {
      if(action instanceof AppInitAction && state === undefined) {
        return this.initialState
      } else {
        //on(artistsLoaded, (state, {artists}) => ({state, artists: artists}),
        return
      }
    }
  }

  bootstrap() : Promise<ArtistState> {
    return new Promise(resolve => {
      from(this.dbService.table('artists').toArray()).subscribe( artists=> {
          this.initialState.artists = artists
          resolve(this.initialState)
        }
      );
    })
  }


}
