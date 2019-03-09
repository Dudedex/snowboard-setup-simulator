/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export class OverhangPanelComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} overhang
     * @return {?}
     */
    getWarningLevel(overhang) {
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
    }
    /**
     * @param {?} overhang
     * @return {?}
     */
    getWarningWidth(overhang) {
        if (overhang < 2) {
            return 2;
        }
        if (overhang < 2.5) {
            return 3;
        }
        return 4;
    }
}
OverhangPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-overhang-panel',
                template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\r\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\r\n        [style.float]=\"'left'\"\r\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\r\n        [style.float]=\"'right'\"\r\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <div class=\"overhang-{{placement}}-title\">\r\n    <ng-container *ngIf=\"placement === 'top'\">\r\n      Toe overhang:\r\n    </ng-container>\r\n    <ng-container *ngIf=\"placement === 'bot'\">\r\n      Heel overhang:\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                styles: [".overhang{position:relative;margin:10px auto;text-align:center}.overhang-label--top{position:absolute;bottom:-2.5rem}.overhang-label--bot{position:absolute;top:-2.5rem}.overhang-top-title{margin-bottom:4rem}.overhang-bot-title{margin-top:4rem}.overhang-warning-top{position:absolute;bottom:-5.2rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed}.overhang-warning-bot{margin-top:-2.7rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed;position:absolute;top:-2.5rem}"]
            }] }
];
/** @nocollapse */
OverhangPanelComponent.ctorParameters = () => [];
OverhangPanelComponent.propDecorators = {
    boardData: [{ type: Input }],
    leftOverhang: [{ type: Input }],
    rightOverhang: [{ type: Input }],
    placement: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmhhbmctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9vdmVyaGFuZy1wYW5lbC9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQU92RCxNQUFNLE9BQU8sc0JBQXNCO0lBY2pDO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1pREFBOEM7O2FBRS9DOzs7Ozt3QkFHRSxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBVE4sMkNBQytCOztJQUUvQiw4Q0FDNEI7O0lBRTVCLCtDQUM2Qjs7SUFFN0IsMkNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1vdmVyaGFuZy1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJoYW5nLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJoYW5nUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGVmdE92ZXJoYW5nOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJpZ2h0T3Zlcmhhbmc6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2FybmluZ0xldmVsKG92ZXJoYW5nOiBudW1iZXIpIHtcclxuICAgIGlmIChvdmVyaGFuZyA8IDEuNzUpIHtcclxuICAgICAgcmV0dXJuICcjMDNkODAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIpIHtcclxuICAgICAgcmV0dXJuICcjOTRlYzAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuMjUpIHtcclxuICAgICAgcmV0dXJuICcjZGRkZDAwJztcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xyXG4gICAgICByZXR1cm4gJyNlZDg2NDknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcjZGEwMDAwJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXYXJuaW5nV2lkdGgob3Zlcmhhbmc6IG51bWJlcikge1xyXG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xyXG4gICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xyXG4gICAgICByZXR1cm4gMztcclxuICAgIH1cclxuICAgIHJldHVybiA0O1xyXG4gIH1cclxufVxyXG4iXX0=