import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DatabaseService} from "../../db/database.service";
import {catchError, from, map, mergeMap, of} from "rxjs";
import {artistsLoaded, artistsLoadError, loadArtists} from "./artist.actions";
import {on} from "@ngrx/store";


@Injectable({
  providedIn: "root",
})
export class ArtistEffects{
  constructor(
    private actions$: Actions,
    private databaseService: DatabaseService
  ) {}

  loadArtists$ = createEffect(() => this.actions$.pipe(
    ofType(loadArtists),
    mergeMap(
      () => from(this.databaseService.table('artists').toArray())
        .pipe(
          map(artists => (artistsLoaded({artists}))),
          catchError(() => of(artistsLoadError))
         )
      )
    )
  );

}
