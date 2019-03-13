/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from 'snowboard-setup-simulator/translation/translation-provider';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFJL0Y7SUFXRSwwQ0FBcUIsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFaEQsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsc0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sMkRBQWdCOzs7O0lBQXhCO1FBQ0UsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsK0NBRVQ7aUJBRUY7Ozs7Z0JBWE8sZ0JBQWdCOzs7eUJBYXJCLEtBQUs7O0lBbUJSLHVDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FwQlksZ0NBQWdDOzs7SUFDM0Msa0RBQ3NCOzs7OztJQUVULHFEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0aW9uUHJvdmlkZXJ9IGZyb20gJ3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24tcHJvdmlkZXInO1xyXG5pbXBvcnQge0RlfSBmcm9tICdzbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yL3RyYW5zbGF0aW9uL2RlJztcclxuaW1wb3J0IHtFbn0gZnJvbSAnc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci90cmFuc2xhdGlvbi9lbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGFwcC1ib2FyZC1wYW5lbD48L2FwcC1ib2FyZC1wYW5lbD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNub3dib2FyZFNldHVwU2ltdWxhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zbGF0aW9uU2V0dXAoKSB7XHJcbiAgICBUcmFuc2xhdGlvblByb3ZpZGVyLnNldHVwVHJhbnNsYXRpb25Qcm92aWRlcih0aGlzLnRyYW5zbGF0ZSwgdGhpcy5sb2NhbGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19