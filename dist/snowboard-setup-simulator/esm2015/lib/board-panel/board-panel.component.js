/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export class BoardPanelComponent {
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
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BoardPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-board-panel',
                template: "<div class=\"panel main\">\r\n  <h2>Snowboard Setup</h2>\r\n  <hr>\r\n  <div class=\"panel__bd board\">\r\n    <app-board [boardData]=\"boardData\"></app-board>\r\n  </div>\r\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\r\n</div>\r\n",
                styles: [".board{min-height:80px;margin:0 auto}.main{width:100%;min-width:300px;margin-bottom:5rem}"]
            }] }
];
/** @nocollapse */
BoardPanelComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    BoardPanelComponent.prototype.boardData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1wYW5lbC9ib2FyZC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixpUkFBMkM7O2FBRTVDOzs7Ozs7SUFHQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ib2FyZC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JvYXJkLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib2FyZC1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvYXJkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgYm9hcmREYXRhOiBCb2FyZERhdGFEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2FyZERhdGEgPSBuZXcgQm9hcmREYXRhRHRvKCk7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5sZW5ndGggPSAxNTU7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS53YWlzdCA9IDI1LjU7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NID0gNy42O1xyXG4gICAgdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyA9IDA7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5zdGFuY2UgPSA1MztcclxuICAgIHRoaXMuYm9hcmREYXRhLmxlZnRBbmdsZSA9IDE1O1xyXG4gICAgdGhpcy5ib2FyZERhdGEucmlnaHRBbmdsZSA9IC02O1xyXG4gICAgdGhpcy5ib2FyZERhdGEuYm9vdFNpemUgPSAzMC41O1xyXG4gICAgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldExlZnQgPSAwO1xyXG4gICAgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ID0gMDtcclxuICAgIHRoaXMuYm9hcmREYXRhLnNldEJhY2tJbkluY2hlcyA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==