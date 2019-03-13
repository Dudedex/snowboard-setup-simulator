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
                    template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\n        [style.float]=\"'left'\"\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\n        </span>\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\n        [style.float]=\"'right'\"\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\n        </span>\n  <div class=\"overhang-{{placement}}-title\">\n    <ng-container *ngIf=\"placement === 'top'\">\n      Toe overhang:\n    </ng-container>\n    <ng-container *ngIf=\"placement === 'bot'\">\n      Heel overhang:\n    </ng-container>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmhhbmctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9vdmVyaGFuZy1wYW5lbC9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQW1CRTtJQUNBLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVNLGdEQUFlOzs7O0lBQXRCLFVBQXVCLFFBQWdCO1FBQ3JDLElBQUksUUFBUSxHQUFHLElBQUksRUFBRTtZQUNuQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLElBQUksRUFBRTtZQUNuQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNsQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQWU7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7UUFDckMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtL0NBQThDOztpQkFFL0M7Ozs7OzRCQUdFLEtBQUs7K0JBR0wsS0FBSztnQ0FHTCxLQUFLOzRCQUdMLEtBQUs7O0lBa0NSLDZCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksc0JBQXNCOzs7SUFFakMsMkNBQytCOztJQUUvQiw4Q0FDNEI7O0lBRTVCLCtDQUM2Qjs7SUFFN0IsMkNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3ZlcmhhbmctcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmhhbmctcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmhhbmdQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsZWZ0T3Zlcmhhbmc6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcmlnaHRPdmVyaGFuZzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGdldFdhcm5pbmdMZXZlbChvdmVyaGFuZzogbnVtYmVyKSB7XG4gICAgaWYgKG92ZXJoYW5nIDwgMS43NSkge1xuICAgICAgcmV0dXJuICcjMDNkODAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xuICAgICAgcmV0dXJuICcjOTRlYzAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMi4yNSkge1xuICAgICAgcmV0dXJuICcjZGRkZDAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMi41KSB7XG4gICAgICByZXR1cm4gJyNlZDg2NDknO1xuICAgIH1cbiAgICByZXR1cm4gJyNkYTAwMDAnO1xuICB9XG5cbiAgcHVibGljIGdldFdhcm5pbmdXaWR0aChvdmVyaGFuZzogbnVtYmVyKSB7XG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIHJldHVybiA0O1xuICB9XG59XG4iXX0=