import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class BindingComponent implements OnInit, OnChanges {
    angle: number;
    bootSize: number;
    boardWidth: number;
    bindingOffset: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
