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
                    template: "<div class=\"panel main\">\r\n  <h2>Snowboard Setup</h2>\r\n  <hr>\r\n  <div class=\"panel__bd board\">\r\n    <app-board [boardData]=\"boardData\"></app-board>\r\n  </div>\r\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1wYW5lbC9ib2FyZC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXZEO0lBU0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGlSQUEyQzs7aUJBRTVDOzs7O0lBdUJELDBCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksbUJBQW1COzs7SUFFOUIsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYm9hcmQtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ib2FyZC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYm9hcmQtcGFuZWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb2FyZFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYm9hcmREYXRhID0gbmV3IEJvYXJkRGF0YUR0bygpO1xyXG4gICAgdGhpcy5ib2FyZERhdGEubGVuZ3RoID0gMTU1O1xyXG4gICAgdGhpcy5ib2FyZERhdGEud2Fpc3QgPSAyNS41O1xyXG4gICAgdGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA9IDcuNjtcclxuICAgIHRoaXMuYm9hcmREYXRhLnNpZGVjdXRTZXRiYWNrSW5JbmNoZXMgPSAwO1xyXG4gICAgdGhpcy5ib2FyZERhdGEuc3RhbmNlID0gNTM7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5sZWZ0QW5nbGUgPSAxNTtcclxuICAgIHRoaXMuYm9hcmREYXRhLnJpZ2h0QW5nbGUgPSAtNjtcclxuICAgIHRoaXMuYm9hcmREYXRhLmJvb3RTaXplID0gMzAuNTtcclxuICAgIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRMZWZ0ID0gMDtcclxuICAgIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRSaWdodCA9IDA7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgPSAxO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=