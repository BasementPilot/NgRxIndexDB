import {Component, OnInit} from '@angular/core';
import {Artist} from "../models/artist.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ArtistState} from "./+state/artist.state";
import {addArtist, loadArtists} from "./+state/artist.actions";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {selectAllArtists} from "./+state/artist.selector";
import {AppState} from "../+state/app.state";

const ARTIST_DATA: Artist[] = [
  {id: 1, name: 'artist 1'},
  {id: 2, name: 'artist 2'},
  {id: 3, name: 'artist 3'},
  {id: 4, name: 'artist 4'},
  {id: 5, name: 'artist 5'},
  {id: 6, name: 'artist 6'},
  {id: 7, name: 'artist 7'},
  {id: 8, name: 'artist 8'},
  {id: 9, name: 'artist 9'},
  {id: 10, name: 'artist 10', belongsToLabel: 1},
];




@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent{

  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;

  data: any;


  constructor(private store: Store<AppState>) {
    this.data = this.store.pipe(select(selectAllArtists)).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  addArtist() {
    this.store.dispatch(addArtist({artist: {id:100,name:'Hi'}}));
  }



}
