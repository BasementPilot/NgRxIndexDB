import {APP_INITIALIZER, ApplicationInitStatus, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { LabelsComponent } from './labels/labels.component';
import { ArtistsComponent } from './artists/artists.component';
import { TogetherComponent } from './together/together.component';
import {MatTableModule} from "@angular/material/table";
import {ArtistEffects} from "./artists/+state/artist.effects";
import {artistInitReducer, fillInitialState} from "./artists/+state/artist.reducer";
import {DatabaseService} from "./db/database.service";
import {AppState} from "./+state/app.state";
import {AppInitAction} from "./+state/appinit.action";
import {ARTIST_FEATURE} from "./artists/+state/artist.state";

@NgModule({
  declarations: [
    AppComponent,
    LabelsComponent,
    ArtistsComponent,
    TogetherComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    MatButtonModule,
    RouterLink,
    AppRoutingModule,
    MatTableModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(ARTIST_FEATURE, artistInitReducer),
    EffectsModule.forRoot([ArtistEffects]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [DatabaseService],
      multi: true,
      useFactory: ()=>fillInitialState
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationInitStatus: ApplicationInitStatus,
              store: Store<AppState>) {
    // dispatch the app init action when all stores have add a chance to rehydrate from indexedDb
    applicationInitStatus.donePromise.then(() => {
      store.dispatch(new AppInitAction())
    })
  }
}
