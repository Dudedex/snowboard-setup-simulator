import { OnInit } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export declare class DataInputFormComponent implements OnInit {
    boardData: BoardDataDto;
    constructor();
    ngOnInit(): void;
    setMarkPart(type: string): void;
}
