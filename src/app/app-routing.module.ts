import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LabelsComponent} from "./labels/labels.component";
import {ArtistsComponent} from "./artists/artists.component";
import {TogetherComponent} from "./together/together.component";

const routes: Routes = [
  {path: 'labels', component: LabelsComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'together', component: TogetherComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
