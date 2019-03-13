/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
var OverhangPanelComponent = /** @class */ (function () {
    function OverhangPanelComponent() {
    }
    /**
     * @return {?}
     */
    OverhangPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} overhang
     * @return {?}
     */
    OverhangPanelComponent.prototype.getWarningLevel = /**
     * @param {?} overhang
     * @return {?}
     */
    function (overhang) {
        if (overhang < 1.75) {
            return '#03d800';
        }
        if (overhang < 2) {
            return '#94ec00';
        }
        if (overhang < 2.25) {
            return '#dddd00';
        }
        if (overhang < 2.5) {
            return '#ed8649';
        }
        return '#da0000';
    };
    /**
     * @param {?} overhang
     * @return {?}
     */
    OverhangPanelComponent.prototype.getWarningWidth = /**
     * @param {?} overhang
     * @return {?}
     */
    function (overhang) {
        if (overhang < 2) {
            return 2;
        }
        if (overhang < 2.5) {
            return 3;
        }
        return 4;
    };
    OverhangPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-overhang-panel',
                    template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\r\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\r\n        [style.float]=\"'left'\"\r\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\r\n        [style.float]=\"'right'\"\r\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <div class=\"overhang-{{placement}}-title\">\r\n    <ng-container *ngIf=\"placement === 'top'\">\r\n      {{'page.snowboardSetup.toeOverhang' | translate}}\r\n    </ng-container>\r\n    <ng-container *ngIf=\"placement === 'bot'\">\r\n      {{'page.snowboardSetup.heelOverhang' | translate}}\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                    styles: [".overhang{position:relative;margin:10px auto;text-align:center}.overhang-label--top{position:absolute;bottom:-2.5rem}.overhang-label--bot{position:absolute;top:-2.5rem}.overhang-top-title{margin-bottom:4rem}.overhang-bot-title{margin-top:4rem}.overhang-warning-top{position:absolute;bottom:-5.2rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed}.overhang-warning-bot{margin-top:-2.7rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed;position:absolute;top:-2.5rem}"]
                }] }
    ];
    /** @nocollapse */
    OverhangPanelComponent.ctorParameters = function () { return []; };
    OverhangPanelComponent.propDecorators = {
        boardData: [{ type: Input }],
        leftOverhang: [{ type: Input }],
        rightOverhang: [{ type: Input }],
        placement: [{ type: Input }]
    };
    return OverhangPanelComponent;
}());
export { OverhangPanelComponent };
if (false) {
    /** @type {?} */
    OverhangPanelComponent.prototype.boardData;
    /** @type {?} */
    OverhangPanelComponent.prototype.leftOverhang;
    /** @type {?} */
    OverhangPanelComponent.prototype.rightOverhang;
    /** @type {?} */
    OverhangPanelComponent.prototype.placement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmhhbmctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9vdmVyaGFuZy1wYW5lbC9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQW1CRTtJQUNBLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVNLGdEQUFlOzs7O0lBQXRCLFVBQXVCLFFBQWdCO1FBQ3JDLElBQUksUUFBUSxHQUFHLElBQUksRUFBRTtZQUNuQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksRUFBRTtZQUNuQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNsQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQWU7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7UUFDckMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QiwybURBQThDOztpQkFFL0M7Ozs7OzRCQUdFLEtBQUs7K0JBR0wsS0FBSztnQ0FHTCxLQUFLOzRCQUdMLEtBQUs7O0lBa0NSLDZCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksc0JBQXNCOzs7SUFFakMsMkNBQytCOztJQUUvQiw4Q0FDNEI7O0lBRTVCLCtDQUM2Qjs7SUFFN0IsMkNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1vdmVyaGFuZy1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJoYW5nLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJoYW5nUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGVmdE92ZXJoYW5nOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJpZ2h0T3Zlcmhhbmc6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2FybmluZ0xldmVsKG92ZXJoYW5nOiBudW1iZXIpIHtcclxuICAgIGlmIChvdmVyaGFuZyA8IDEuNzUpIHtcclxuICAgICAgcmV0dXJuICcjMDNkODAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIpIHtcclxuICAgICAgcmV0dXJuICcjOTRlYzAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuMjUpIHtcclxuICAgICAgcmV0dXJuICcjZGRkZDAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xyXG4gICAgICByZXR1cm4gJyNlZDg2NDknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcjZGEwMDAwJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXYXJuaW5nV2lkdGgob3Zlcmhhbmc6IG51bWJlcikge1xyXG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xyXG4gICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xyXG4gICAgICByZXR1cm4gMztcclxuICAgIH1cclxuICAgIHJldHVybiA0O1xyXG4gIH1cclxufVxyXG4iXX0=