import { Component, OnInit } from '@angular/core';
import {BoardDataDto} from '../classes/board-data-dto';

@Component({
  selector: 'app-board-panel',
  templateUrl: './board-panel.component.html',
  styleUrls: ['./board-panel.component.css']
})
export class BoardPanelComponent implements OnInit {

  public boardData: BoardDataDto;

  constructor() {
    this.boardData = new BoardDataDto();
    this.boardData.length = 155;
    this.boardData.waist = 25.5;
    this.boardData.sidecutInM = 7.6;
    this.boardData.sidecutSetbackInInches = 0;
    this.boardData.stance = 53;
    this.boardData.leftAngle = 15;
    this.boardData.rightAngle = -6;
    this.boardData.bootSize = 30.5;
    this.boardData.bindingOffsetLeft = 0;
    this.boardData.bindingOffsetRight = 0;
    this.boardData.setBackInInches = 1;
  }

  ngOnInit() {
  }

}
