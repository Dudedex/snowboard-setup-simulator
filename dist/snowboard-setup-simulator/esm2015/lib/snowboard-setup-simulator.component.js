/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './translation/translation-provider';
export class SnowboardSetupSimulatorComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.translationSetup();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.translationSetup();
    }
    /**
     * @private
     * @return {?}
     */
    translationSetup() {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
}
SnowboardSetupSimulatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-snowboard-setup-simulator',
                template: `
    <app-board-panel></app-board-panel>
  `
            }] }
];
/** @nocollapse */
SnowboardSetupSimulatorComponent.ctorParameters = () => [
    { type: TranslateService }
];
SnowboardSetupSimulatorComponent.propDecorators = {
    locale: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SnowboardSetupSimulatorComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    SnowboardSetupSimulatorComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFTdkUsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUkzQyxZQUFxQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUVoRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozs7WUFUTyxnQkFBZ0I7OztxQkFXckIsS0FBSzs7OztJQUFOLGtEQUNzQjs7Ozs7SUFFVCxxREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGlvblByb3ZpZGVyfSBmcm9tICcuL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXNub3dib2FyZC1zZXR1cC1zaW11bGF0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YXBwLWJvYXJkLXBhbmVsPjwvYXBwLWJvYXJkLXBhbmVsPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25vd2JvYXJkU2V0dXBTaW11bGF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9uU2V0dXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNsYXRpb25TZXR1cCgpIHtcclxuICAgIFRyYW5zbGF0aW9uUHJvdmlkZXIuc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRoaXMudHJhbnNsYXRlLCB0aGlzLmxvY2FsZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=