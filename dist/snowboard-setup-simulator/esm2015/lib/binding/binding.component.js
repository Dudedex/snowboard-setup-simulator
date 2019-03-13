/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BindingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
BindingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-binding',
                template: "<div class=\"binding\" [style.transform]=\"'rotate(' + (360 - angle) + 'deg)'\" [style.height.px]=\"bootSize * 2\"\n     [style.width.px]=\"bootSize/5 * 4\" [style.margin-left.px]=\"-bootSize/5 * 2\" [style.margin-top.px]=\"(boardWidth - bootSize *2)/2  - bindingOffset*2\">\n  <div class=\"footbed\" [style.width.px]=\"bootSize/5 * 4 -2\" [style.height.px]=\"bootSize * 1.25\" [style.margin-top.px]=\"bootSize/5 * 1.7\">\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\n  </div>\n</div>\n",
                styles: [".binding{border-radius:40% 40% 38% 38%;border:1px solid #000;border-bottom:5px solid #000;border-top:2px solid #000;position:absolute;overflow:hidden;z-index:10;margin-top:0}.footbed{text-align:center;overflow:hidden;font-size:.6rem;background-color:gray}"]
            }] }
];
/** @nocollapse */
BindingComponent.ctorParameters = () => [];
BindingComponent.propDecorators = {
    angle: [{ type: Input }],
    bootSize: [{ type: Input }],
    boardWidth: [{ type: Input }],
    bindingOffset: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BindingComponent.prototype.angle;
    /** @type {?} */
    BindingComponent.prototype.bootSize;
    /** @type {?} */
    BindingComponent.prototype.boardWidth;
    /** @type {?} */
    BindingComponent.prototype.bindingOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL2JpbmRpbmcvYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sZ0JBQWdCO0lBYTNCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUNsQyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwrN0JBQXVDOzthQUV4Qzs7Ozs7b0JBRUUsS0FBSzt1QkFHTCxLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSzs7OztJQVROLGlDQUNxQjs7SUFFckIsb0NBQ3dCOztJQUV4QixzQ0FDMEI7O0lBRTFCLHlDQUM2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmluZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9iaW5kaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmluZGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmluZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcHVibGljIGFuZ2xlOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJvb3RTaXplOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJvYXJkV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYmluZGluZ09mZnNldDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gIH1cblxufVxuIl19