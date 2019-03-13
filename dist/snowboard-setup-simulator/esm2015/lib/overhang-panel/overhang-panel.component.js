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
                template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\n        [style.float]=\"'left'\"\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\n        </span>\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\n        [style.float]=\"'right'\"\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\n        </span>\n  <div class=\"overhang-{{placement}}-title\">\n    <ng-container *ngIf=\"placement === 'top'\">\n      Toe overhang:\n    </ng-container>\n    <ng-container *ngIf=\"placement === 'bot'\">\n      Heel overhang:\n    </ng-container>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmhhbmctcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9vdmVyaGFuZy1wYW5lbC9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQU92RCxNQUFNLE9BQU8sc0JBQXNCO0lBY2pDO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxRQUFnQjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG0vQ0FBOEM7O2FBRS9DOzs7Ozt3QkFHRSxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBVE4sMkNBQytCOztJQUUvQiw4Q0FDNEI7O0lBRTVCLCtDQUM2Qjs7SUFFN0IsMkNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3ZlcmhhbmctcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmhhbmctcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vdmVyaGFuZy1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmhhbmdQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsZWZ0T3Zlcmhhbmc6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcmlnaHRPdmVyaGFuZzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGdldFdhcm5pbmdMZXZlbChvdmVyaGFuZzogbnVtYmVyKSB7XG4gICAgaWYgKG92ZXJoYW5nIDwgMS43NSkge1xuICAgICAgcmV0dXJuICcjMDNkODAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xuICAgICAgcmV0dXJuICcjOTRlYzAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMi4yNSkge1xuICAgICAgcmV0dXJuICcjZGRkZDAwJztcbiAgICB9XG4gICAgaWYgKG92ZXJoYW5nIDwgMi41KSB7XG4gICAgICByZXR1cm4gJyNlZDg2NDknO1xuICAgIH1cbiAgICByZXR1cm4gJyNkYTAwMDAnO1xuICB9XG5cbiAgcHVibGljIGdldFdhcm5pbmdXaWR0aChvdmVyaGFuZzogbnVtYmVyKSB7XG4gICAgaWYgKG92ZXJoYW5nIDwgMikge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmIChvdmVyaGFuZyA8IDIuNSkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIHJldHVybiA0O1xuICB9XG59XG4iXX0=