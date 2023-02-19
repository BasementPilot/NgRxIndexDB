import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Artist} from "../models/artist.interface";
import {Label} from "../models/label.interface";

@Injectable({
  providedIn: 'root'
})

export class DatabaseService extends Dexie {

  artists!: Dexie.Table<Artist, number>;
  labels!: Dexie.Table<Label, number>;


  constructor() {
    super("MyDatabase");
    this.version(1).stores({
      artists: '++id',
      labels: '++id'
    });
    this.on('populate', () => this.populate());
  }

  private async populate() {
    await this.artists.clear();
    await this.labels.clear();
    await this.artists.bulkAdd([
      {name: 'The Beatles', belongsToLabel: 1},
      {name: 'The Rolling Stones', belongsToLabel: 2},
      {name: 'The Who', belongsToLabel: 3},
      {name: 'Indie Band'},
    ]);
    await this.labels.bulkAdd([
      {name: 'Apple Records'},
      {name: 'Rolling Stones Records'},
      {name: 'Universal Music'},
    ]);
  }
}
