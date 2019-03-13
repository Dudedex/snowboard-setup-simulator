/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './translation/translation-provider';
var SnowboardSetupSimulatorComponent = /** @class */ (function () {
    function SnowboardSetupSimulatorComponent(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    SnowboardSetupSimulatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.translationSetup();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SnowboardSetupSimulatorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.translationSetup();
    };
    /**
     * @private
     * @return {?}
     */
    SnowboardSetupSimulatorComponent.prototype.translationSetup = /**
     * @private
     * @return {?}
     */
    function () {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    };
    SnowboardSetupSimulatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-snowboard-setup-simulator',
                    template: "\n    <app-board-panel></app-board-panel>\n  "
                }] }
    ];
    /** @nocollapse */
    SnowboardSetupSimulatorComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    SnowboardSetupSimulatorComponent.propDecorators = {
        locale: [{ type: Input }]
    };
    return SnowboardSetupSimulatorComponent;
}());
export { SnowboardSetupSimulatorComponent };
if (false) {
    /** @type {?} */
    SnowboardSetupSimulatorComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    SnowboardSetupSimulatorComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFdkU7SUFXRSwwQ0FBcUIsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFaEQsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsc0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sMkRBQWdCOzs7O0lBQXhCO1FBQ0UsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsK0NBRVQ7aUJBRUY7Ozs7Z0JBVE8sZ0JBQWdCOzs7eUJBV3JCLEtBQUs7O0lBbUJSLHVDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FwQlksZ0NBQWdDOzs7SUFDM0Msa0RBQ3NCOzs7OztJQUVULHFEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0aW9uUHJvdmlkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb24vdHJhbnNsYXRpb24tcHJvdmlkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhcHAtYm9hcmQtcGFuZWw+PC9hcHAtYm9hcmQtcGFuZWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9uU2V0dXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2xhdGlvblNldHVwKCkge1xyXG4gICAgVHJhbnNsYXRpb25Qcm92aWRlci5zZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodGhpcy50cmFuc2xhdGUsIHRoaXMubG9jYWxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==