import {Component, Input, OnInit} from '@angular/core';
import {BoardDataDto} from '../classes/board-data-dto';

@Component({
  selector: 'app-overhang-panel',
  templateUrl: './overhang-panel.component.html',
  styleUrls: ['./overhang-panel.component.css']
})
export class OverhangPanelComponent implements OnInit {

  @Input()
  public boardData: BoardDataDto;

  @Input()
  public leftOverhang: number;

  @Input()
  public rightOverhang: number;

  @Input()
  public placement: string;

  constructor() {
  }

  ngOnInit() {
  }

  public getWarningLevel(overhang: number) {
    if (overhang < 1.75) {
      return '#03d800';
    }
    if (overhang < 2) {
      return '#94ec00';
    }
    if (overhang < 2.25) {
      return '#dddd00';
    }
    if (overhang < 2.5) {
      return '#ed8649';
    }
    return '#da0000';
  }

  public getWarningWidth(overhang: number) {
    if (overhang < 2) {
      return 2;
    }
    if (overhang < 2.5) {
      return 3;
    }
    return 4;
  }
}
