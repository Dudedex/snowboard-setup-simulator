/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from 'snowboard-setup-simulator/translation/translation-provider';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFXL0YsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUkzQyxZQUFxQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUVoRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozs7WUFYTyxnQkFBZ0I7OztxQkFhckIsS0FBSzs7OztJQUFOLGtEQUNzQjs7Ozs7SUFFVCxxREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGlvblByb3ZpZGVyfSBmcm9tICdzbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyJztcclxuaW1wb3J0IHtEZX0gZnJvbSAnc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci90cmFuc2xhdGlvbi9kZSc7XHJcbmltcG9ydCB7RW59IGZyb20gJ3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvdHJhbnNsYXRpb24vZW4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhcHAtYm9hcmQtcGFuZWw+PC9hcHAtYm9hcmQtcGFuZWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9uU2V0dXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2xhdGlvblNldHVwKCkge1xyXG4gICAgVHJhbnNsYXRpb25Qcm92aWRlci5zZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodGhpcy50cmFuc2xhdGUsIHRoaXMubG9jYWxlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==