import {Artist} from "../../models/artist.interface";
import {AppState} from "../../+state/app.state";

export class ArtistState extends AppState {
  artists: Artist[];

  constructor() {
    super();
    this.artists = [];
  }
}
