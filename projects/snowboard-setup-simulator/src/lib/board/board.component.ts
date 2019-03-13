import {Component, Input, OnInit} from '@angular/core';
import {BoardDataDto} from '../classes/board-data-dto';
import {DoCheck} from '@angular/core/src/metadata/lifecycle_hooks';

declare function $(element: string);

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, DoCheck {

  @Input()
  public boardData: BoardDataDto;

  public cmInPixelFactor = 2;
  public inchesInCm = 2.54;
  public mInPixelFactor = 200;

  public currentRightToeOverhang: number;
  public currentLeftToeOverhang: number;
  public currentRightHeelOverhang: number;
  public currentLeftHeelOverhang: number;

  constructor() {
  }

  ngOnInit() {

  }

  ngDoCheck() {
    if (this.boardData) {
      this.calculateRightOverhang();
      this.calculateLeftOverhang();
    }
  }

  public getContainerHeight() {
    // Container height minus border width
    if ($('.board-container')) {
      return $('.board-container').height() - 2;
    }
    return 0;
  }

  public getBoardClass() {
    if (this.boardData.markPart === 'length') {
      return 'red';
    }
    return '';
  }

  public getWaistClass() {
    if (this.boardData.markPart === 'waist') {
      return 'red';
    }
    return '';
  }

  public getSidecutClass() {
    if (['sidecut', 'length'].indexOf(this.boardData.markPart) >= 0 ) {
      return 'red';
    }
    return '';
  }

  public isBindingActive(binding: string) {
    if (['bindings', 'boots'].indexOf(this.boardData.markPart) >= 0) {
      return true;
    }

    if (binding === 'right' && ['rightBinding', 'bindingsBootPlateRight'].indexOf(this.boardData.markPart) >= 0) {
      console.log('right active');
      return true;
    }

    if (binding === 'left' && ['leftBinding', 'bindingsBootPlateLeft'].indexOf(this.boardData.markPart) >= 0) {
      console.log('left active');
      return true;
    }
  }

  public getSidecutMargin() {
    if (this.boardData.sidecutInM < 6.3) {
      return -2;
    }
    if (this.boardData.sidecutInM < 6.7) {
      return -1;
    }
    if (this.boardData.sidecutInM < 7.2) {
      return 0;
    }
    if (this.boardData.sidecutInM < 7.6) {
      return 1;
    }
    if (this.boardData.sidecutInM < 8.5) {
      return 2;
    }
    if (this.boardData.sidecutInM < 9) {
      return 3;
    }
    if (this.boardData.sidecutInM < 9.4) {
      return 4;
    }
    if (this.boardData.sidecutInM <= 10) {
      return 5;
    }
    return 6;
  }

  private calculateRightOverhang() {
    const widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 + this.boardData.setBackInInches * 2.54 - this.boardData.sidecutSetbackInInches * 2.54);
    const absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, widthAtInsert);
    const offset = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, 1);
    this.currentRightHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetRight * offset) * 100) / 100;
    this.currentRightToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetRight * offset) * 100) / 100;
  }

  private calculateLeftOverhang() {
    const widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 - this.boardData.setBackInInches * 2.54 + this.boardData.sidecutSetbackInInches * 2.54);
    const absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, widthAtInsert);
    const offset = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, 1);
    this.currentLeftToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetLeft * offset) * 100) / 100;
    this.currentLeftHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetLeft * offset) * 100) / 100;
  }

  private calculateWidthAtInserts(stancePlacement) {
    const hypoInCm = this.boardData.sidecutInM * 100;
    const kat1 = stancePlacement;
    const hypoPow = Math.pow(hypoInCm, 2);
    const kat1Pow = Math.pow(kat1, 2);
    const kat2Pow = hypoPow - kat1Pow;
    const kat2 = Math.sqrt(kat2Pow);
    return this.boardData.waist + (hypoInCm - kat2) * 2;
  }

  private calculateAbsBoardWidthAtInserts(angleValue: number, widthAtInserts: number) {
    /**
     * right triangle with
     * a = widthAtInserts
     * angle a/b = 90°
     * angle a/c = angleValue
     */
    let alpha;
    let beta;
    const gamma = 90;
    if (angleValue >= 0) {
      beta = angleValue;
    } else {
      beta = -angleValue;
    }
    const a = widthAtInserts;
    if (beta === 0 || a === 0) {
      return a;
    } else {
      alpha = 90 - beta;
    }
    const c = a * Math.sin(gamma * Math.PI / 180) / Math.sin(alpha * Math.PI / 180);
    return c;
  }
}
