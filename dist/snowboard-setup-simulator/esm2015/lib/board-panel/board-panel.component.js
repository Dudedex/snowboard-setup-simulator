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
                template: "<div class=\"main\">\n  <div class=\"panel__bd board\">\n    <app-board [boardData]=\"boardData\"></app-board>\n  </div>\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\n</div>\n",
                styles: [".board{min-height:80px;margin:0 auto}.main{width:100%;min-width:300px;margin-bottom:5rem}"]
            }] }
];
/** @nocollapse */
BoardPanelComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    BoardPanelComponent.prototype.boardData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1wYW5lbC9ib2FyZC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix1TkFBMkM7O2FBRTVDOzs7Ozs7SUFHQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYm9hcmQtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm9hcmQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib2FyZC1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm9hcmRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmREYXRhID0gbmV3IEJvYXJkRGF0YUR0bygpO1xuICAgIHRoaXMuYm9hcmREYXRhLmxlbmd0aCA9IDE1NTtcbiAgICB0aGlzLmJvYXJkRGF0YS53YWlzdCA9IDI1LjU7XG4gICAgdGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA9IDcuNjtcbiAgICB0aGlzLmJvYXJkRGF0YS5zaWRlY3V0U2V0YmFja0luSW5jaGVzID0gMDtcbiAgICB0aGlzLmJvYXJkRGF0YS5zdGFuY2UgPSA1MztcbiAgICB0aGlzLmJvYXJkRGF0YS5sZWZ0QW5nbGUgPSAxNTtcbiAgICB0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlID0gLTY7XG4gICAgdGhpcy5ib2FyZERhdGEuYm9vdFNpemUgPSAzMC41O1xuICAgIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRMZWZ0ID0gMDtcbiAgICB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0UmlnaHQgPSAwO1xuICAgIHRoaXMuYm9hcmREYXRhLnNldEJhY2tJbkluY2hlcyA9IDE7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=