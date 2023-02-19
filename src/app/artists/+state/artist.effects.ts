import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DatabaseService} from "../../db/database.service";
import {async, catchError, exhaustMap, from, map, mergeMap, of, switchMap, tap} from "rxjs";
import {
  addArtist,
  artistsAddedError,
  artistsAddedSuccess,
} from "./artist.actions";
import {on} from "@ngrx/store";


@Injectable()
export class ArtistEffects{
  constructor(
    private actions$: Actions,
    private databaseService: DatabaseService
  ) {}


  // #TODO web api sync
  addArtist$ = createEffect(()=>
    this.actions$.pipe(
      ofType(addArtist),
      exhaustMap(action =>
        from(this.databaseService.table('artists').add(action.artist)).pipe(
          map(user => artistsAddedSuccess()),
          catchError(error => of(artistsAddedError()))
        )
      )
    )
  )

}
