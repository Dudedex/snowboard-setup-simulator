import {Component, Input, OnInit} from '@angular/core';
import {BoardDataDto} from '../classes/board-data-dto';

@Component({
  selector: 'app-data-input-form',
  templateUrl: './data-input-form.component.html',
  styleUrls: ['./data-input-form.component.css']
})
export class DataInputFormComponent implements OnInit {

  @Input()
  public boardData: BoardDataDto;

  constructor() { }

  ngOnInit() {
  }

}
