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
    /**
     * @return {?}
     */
    getFootbedClass() {
        if (this.isActive) {
            if (['bindingsBootPlateLeft', 'bindingsBootPlateRight', 'boots'].indexOf(this.activeType) >= 0) {
                return 'plate-active';
            }
        }
        return '';
    }
    /**
     * @return {?}
     */
    getBidingClass() {
        if (this.isActive) {
            if (['bindings', 'leftBinding', 'rightBinding', 'boots'].indexOf(this.activeType) >= 0) {
                return 'binding-active';
            }
        }
        return '';
    }
}
BindingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-binding',
                template: "<div class=\"binding {{getBidingClass()}}\" [style.transform]=\"'rotate(' + (360 - angle) + 'deg)'\" [style.height.px]=\"bootSize * 2\"\r\n     [style.width.px]=\"bootSize/5 * 4\" [style.margin-left.px]=\"-bootSize/5 * 2\" [style.margin-top.px]=\"(boardWidth - bootSize *2)/2  - bindingOffset*2\">\r\n  <div class=\"footbed {{getFootbedClass()}}\" [style.width.px]=\"bootSize/5 * 4 -2\" [style.height.px]=\"bootSize * 1.25\" [style.margin-top.px]=\"bootSize/5 * 1.7\">\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n  </div>\r\n</div>\r\n",
                styles: [".binding{border-radius:40% 40% 38% 38%;border:1px solid #000;border-bottom:5px solid #000;border-top:2px solid #000;position:absolute;overflow:hidden;z-index:10;margin-top:0}.footbed{text-align:center;overflow:hidden;font-size:.6rem;background-color:gray}.plate-active{background-color:rgba(255,0,0,.5)}.binding-active{border:3px solid red}"]
            }] }
];
/** @nocollapse */
BindingComponent.ctorParameters = () => [];
BindingComponent.propDecorators = {
    angle: [{ type: Input }],
    bootSize: [{ type: Input }],
    boardWidth: [{ type: Input }],
    bindingOffset: [{ type: Input }],
    isActive: [{ type: Input }],
    activeType: [{ type: Input }]
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
    /** @type {?} */
    BindingComponent.prototype.isActive;
    /** @type {?} */
    BindingComponent.prototype.activeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL2JpbmRpbmcvYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sZ0JBQWdCO0lBbUIzQixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUYsT0FBTyxjQUFjLENBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEYsT0FBTyxnQkFBZ0IsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwZ0NBQXVDOzthQUV4Qzs7Ozs7b0JBRUUsS0FBSzt1QkFHTCxLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3lCQUdMLEtBQUs7Ozs7SUFmTixpQ0FDcUI7O0lBRXJCLG9DQUN3Qjs7SUFFeEIsc0NBQzBCOztJQUUxQix5Q0FDNkI7O0lBRTdCLG9DQUN3Qjs7SUFFeEIsc0NBQzBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1iaW5kaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmluZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmluZGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJpbmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYW5nbGU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYm9vdFNpemU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYm9hcmRXaWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBiaW5kaW5nT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGlzQWN0aXZlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjdGl2ZVR5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Rm9vdGJlZENsYXNzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgaWYgKFsnYmluZGluZ3NCb290UGxhdGVMZWZ0JywgJ2JpbmRpbmdzQm9vdFBsYXRlUmlnaHQnLCAnYm9vdHMnXS5pbmRleE9mKHRoaXMuYWN0aXZlVHlwZSkgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiAncGxhdGUtYWN0aXZlJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJpZGluZ0NsYXNzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgaWYgKFsnYmluZGluZ3MnLCAnbGVmdEJpbmRpbmcnLCAncmlnaHRCaW5kaW5nJywgJ2Jvb3RzJ10uaW5kZXhPZih0aGlzLmFjdGl2ZVR5cGUpID49IDApIHtcclxuICAgICAgICByZXR1cm4gJ2JpbmRpbmctYWN0aXZlJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbn1cclxuIl19