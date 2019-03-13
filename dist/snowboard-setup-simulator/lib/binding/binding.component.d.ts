import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class BindingComponent implements OnInit, OnChanges {
    angle: number;
    bootSize: number;
    boardWidth: number;
    bindingOffset: number;
    isActive: string;
    activeType: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getFootbedClass(): "" | "plate-active";
    getBidingClass(): "" | "binding-active";
}
