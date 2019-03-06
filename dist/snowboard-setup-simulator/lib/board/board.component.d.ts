import { OnInit } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class BoardComponent implements OnInit, DoCheck {
    boardData: BoardDataDto;
    cmInPixelFactor: number;
    inchesInCm: number;
    mInPixelFactor: number;
    currentRightToeOverhang: number;
    currentLeftToeOverhang: number;
    currentRightHeelOverhang: number;
    currentLeftHeelOverhang: number;
    constructor();
    ngOnInit(): void;
    ngDoCheck(): void;
    getContainerHeight(): number;
    getSidecutMargin(): 1 | -1 | 0 | 6 | 2 | 3 | 4 | 5 | -2;
    private calculateRightOverhang;
    private calculateLeftOverhang;
    private calculateWidthAtInserts;
    private calculateAbsBoardWidthAtInserts;
}
