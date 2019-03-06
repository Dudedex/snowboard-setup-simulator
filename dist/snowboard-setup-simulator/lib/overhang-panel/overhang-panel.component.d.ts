import { OnInit } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export declare class OverhangPanelComponent implements OnInit {
    boardData: BoardDataDto;
    leftOverhang: number;
    rightOverhang: number;
    placement: string;
    constructor();
    ngOnInit(): void;
    getWarningLevel(overhang: number): "#03d800" | "#94ec00" | "#dddd00" | "#ed8649" | "#da0000";
    getWarningWidth(overhang: number): 2 | 3 | 4;
}
