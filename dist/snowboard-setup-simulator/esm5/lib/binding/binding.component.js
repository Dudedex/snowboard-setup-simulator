/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var BindingComponent = /** @class */ (function () {
    function BindingComponent() {
    }
    /**
     * @return {?}
     */
    BindingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BindingComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    BindingComponent.prototype.getFootbedClass = /**
     * @return {?}
     */
    function () {
        if (this.isActive) {
            if (['bindingsBootPlateLeft', 'bindingsBootPlateRight', 'boots'].indexOf(this.activeType) >= 0) {
                return 'plate-active';
            }
        }
        return '';
    };
    /**
     * @return {?}
     */
    BindingComponent.prototype.getBidingClass = /**
     * @return {?}
     */
    function () {
        if (this.isActive) {
            if (['bindings', 'leftBinding', 'rightBinding', 'boots'].indexOf(this.activeType) >= 0) {
                return 'binding-active';
            }
        }
        return '';
    };
    BindingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-binding',
                    template: "<div class=\"binding {{getBidingClass()}}\" [style.transform]=\"'rotate(' + (360 - angle) + 'deg)'\" [style.height.px]=\"bootSize * 2\"\r\n     [style.width.px]=\"bootSize/5 * 4\" [style.margin-left.px]=\"-bootSize/5 * 2\" [style.margin-top.px]=\"(boardWidth - bootSize *2)/2  - bindingOffset*2\">\r\n  <div class=\"footbed {{getFootbedClass()}}\" [style.width.px]=\"bootSize/5 * 4 -2\" [style.height.px]=\"bootSize * 1.25\" [style.margin-top.px]=\"bootSize/5 * 1.7\">\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n  </div>\r\n</div>\r\n",
                    styles: [".binding{border-radius:40% 40% 38% 38%;border:1px solid #000;border-bottom:5px solid #000;border-top:2px solid #000;position:absolute;overflow:hidden;z-index:10;margin-top:0}.footbed{text-align:center;overflow:hidden;font-size:.6rem;background-color:gray}.plate-active{background-color:rgba(255,0,0,.5)}.binding-active{border:3px solid red}"]
                }] }
    ];
    /** @nocollapse */
    BindingComponent.ctorParameters = function () { return []; };
    BindingComponent.propDecorators = {
        angle: [{ type: Input }],
        bootSize: [{ type: Input }],
        boardWidth: [{ type: Input }],
        bindingOffset: [{ type: Input }],
        isActive: [{ type: Input }],
        activeType: [{ type: Input }]
    };
    return BindingComponent;
}());
export { BindingComponent };
if (false) {
    /** @type {?} */
    BindingComponent.prototype.angle;
    /** @type {?} */
    BindingComponent.prototype.bootSize;
    /** @type {?} */
    BindingComponent.prototype.boardWidth;
    /** @type {?} */
    BindingComponent.prototype.bindingOffset;
    /** @type {?} */
    BindingComponent.prototype.isActive;
    /** @type {?} */
    BindingComponent.prototype.activeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL2JpbmRpbmcvYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQXdCRTtJQUFnQixDQUFDOzs7O0lBRWpCLG1DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFTSwwQ0FBZTs7O0lBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUYsT0FBTyxjQUFjLENBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVNLHlDQUFjOzs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0RixPQUFPLGdCQUFnQixDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDBnQ0FBdUM7O2lCQUV4Qzs7Ozs7d0JBRUUsS0FBSzsyQkFHTCxLQUFLOzZCQUdMLEtBQUs7Z0NBR0wsS0FBSzsyQkFHTCxLQUFLOzZCQUdMLEtBQUs7O0lBNkJSLHVCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksZ0JBQWdCOzs7SUFDM0IsaUNBQ3FCOztJQUVyQixvQ0FDd0I7O0lBRXhCLHNDQUMwQjs7SUFFMUIseUNBQzZCOztJQUU3QixvQ0FDd0I7O0lBRXhCLHNDQUMwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYmluZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JpbmRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JpbmRpbmcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFuZ2xlOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJvb3RTaXplOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJvYXJkV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYmluZGluZ09mZnNldDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpc0FjdGl2ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVUeXBlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvb3RiZWRDbGFzcygpIHtcclxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgIGlmIChbJ2JpbmRpbmdzQm9vdFBsYXRlTGVmdCcsICdiaW5kaW5nc0Jvb3RQbGF0ZVJpZ2h0JywgJ2Jvb3RzJ10uaW5kZXhPZih0aGlzLmFjdGl2ZVR5cGUpID49IDApIHtcclxuICAgICAgICByZXR1cm4gJ3BsYXRlLWFjdGl2ZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCaWRpbmdDbGFzcygpIHtcclxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgIGlmIChbJ2JpbmRpbmdzJywgJ2xlZnRCaW5kaW5nJywgJ3JpZ2h0QmluZGluZycsICdib290cyddLmluZGV4T2YodGhpcy5hY3RpdmVUeXBlKSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICdiaW5kaW5nLWFjdGl2ZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==