/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
var BoardPanelComponent = /** @class */ (function () {
    function BoardPanelComponent() {
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
    BoardPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BoardPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-board-panel',
                    template: "<div class=\"main\">\n  <div class=\"panel__bd board\">\n    <app-board [boardData]=\"boardData\"></app-board>\n  </div>\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\n</div>\n",
                    styles: [".board{min-height:80px;margin:0 auto}.main{width:100%;min-width:300px;margin-bottom:5rem}"]
                }] }
    ];
    /** @nocollapse */
    BoardPanelComponent.ctorParameters = function () { return []; };
    return BoardPanelComponent;
}());
export { BoardPanelComponent };
if (false) {
    /** @type {?} */
    BoardPanelComponent.prototype.boardData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1wYW5lbC9ib2FyZC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXZEO0lBU0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHVOQUEyQzs7aUJBRTVDOzs7O0lBdUJELDBCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksbUJBQW1COzs7SUFFOUIsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9hcmREYXRhRHRvfSBmcm9tICcuLi9jbGFzc2VzL2JvYXJkLWRhdGEtZHRvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJvYXJkLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvYXJkLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm9hcmQtcGFuZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvYXJkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkRGF0YSA9IG5ldyBCb2FyZERhdGFEdG8oKTtcbiAgICB0aGlzLmJvYXJkRGF0YS5sZW5ndGggPSAxNTU7XG4gICAgdGhpcy5ib2FyZERhdGEud2Fpc3QgPSAyNS41O1xuICAgIHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPSA3LjY7XG4gICAgdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyA9IDA7XG4gICAgdGhpcy5ib2FyZERhdGEuc3RhbmNlID0gNTM7XG4gICAgdGhpcy5ib2FyZERhdGEubGVmdEFuZ2xlID0gMTU7XG4gICAgdGhpcy5ib2FyZERhdGEucmlnaHRBbmdsZSA9IC02O1xuICAgIHRoaXMuYm9hcmREYXRhLmJvb3RTaXplID0gMzAuNTtcbiAgICB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCA9IDA7XG4gICAgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ID0gMDtcbiAgICB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgPSAxO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19