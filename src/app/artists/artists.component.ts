import {Component, OnInit} from '@angular/core';
import {Artist} from "../models/artist.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ArtistState} from "./+state/artist.state";
import {loadArtists} from "./+state/artist.actions";

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
export class ArtistsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name'];
  dataSource = ARTIST_DATA;

  $artists: Observable<Artist[]>;

  constructor(private store: Store<ArtistState>) {
    this.$artists = store.select('artists');
    this.$artists.subscribe(artists => console.log(artists));

  }

  ngOnInit() {
    //this.store.dispatch(loadArtists());
  }

  addArtist() {

  }



}
