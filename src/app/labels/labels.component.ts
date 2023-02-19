import { Component } from '@angular/core';
import {Label} from "../models/label.interface";

const LABEL_DATA: Label[] = [
  {id: 1, name: 'label 1'},
  {id: 2, name: 'label 2'},
  {id: 3, name: 'label 3'},
  {id: 4, name: 'label 4'},
  {id: 5, name: 'label 5'},
  {id: 6, name: 'label 6'},
  {id: 7, name: 'label 7'},
  {id: 8, name: 'label 8'},
  {id: 9, name: 'label 9'},
  {id: 10, name: 'label 10'},
];

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = LABEL_DATA;

}
