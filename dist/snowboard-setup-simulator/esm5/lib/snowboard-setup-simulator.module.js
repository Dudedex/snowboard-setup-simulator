/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SnowboardSetupSimulatorComponent } from './snowboard-setup-simulator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { BoardComponent } from './board/board.component';
import { BoardPanelComponent } from './board-panel/board-panel.component';
import { BindingComponent } from './binding/binding.component';
import { OverhangPanelComponent } from './overhang-panel/overhang-panel.component';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';
import { TranslateModule } from '@ngx-translate/core';
registerLocaleData(localeDe);
registerLocaleData(localeEn);
var SnowboardSetupSimulatorModule = /** @class */ (function () {
    function SnowboardSetupSimulatorModule() {
    }
    SnowboardSetupSimulatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BoardComponent,
                        BoardPanelComponent,
                        BindingComponent,
                        OverhangPanelComponent,
                        DataInputFormComponent,
                        SnowboardSetupSimulatorComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        CommonModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [SnowboardSetupSimulatorComponent]
                },] }
    ];
    return SnowboardSetupSimulatorModule;
}());
export { SnowboardSetupSimulatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFN0I7SUFBQTtJQWlCNkMsQ0FBQzs7Z0JBakI3QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixnQ0FBZ0M7cUJBQ2pDO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDNUM7O0lBQzRDLG9DQUFDO0NBQUEsQUFqQjlDLElBaUI4QztTQUFqQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudCB9IGZyb20gJy4vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCByZWdpc3RlckxvY2FsZURhdGF9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCBsb2NhbGVEZSBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9kZSc7XHJcbmltcG9ydCBsb2NhbGVFbiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lbic7XHJcbmltcG9ydCB7Qm9hcmRDb21wb25lbnR9IGZyb20gJy4vYm9hcmQvYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtCb2FyZFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2JvYXJkLXBhbmVsL2JvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5nL2JpbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPdmVyaGFuZ1BhbmVsQ29tcG9uZW50fSBmcm9tICcuL292ZXJoYW5nLXBhbmVsL292ZXJoYW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGF0YUlucHV0Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9kYXRhLWlucHV0LWZvcm0vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVEZSk7XHJcbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVFbik7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQm9hcmRDb21wb25lbnQsXHJcbiAgICBCb2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgQmluZGluZ0NvbXBvbmVudCxcclxuICAgIE92ZXJoYW5nUGFuZWxDb21wb25lbnQsXHJcbiAgICBEYXRhSW5wdXRGb3JtQ29tcG9uZW50LFxyXG4gICAgU25vd2JvYXJkU2V0dXBTaW11bGF0b3JDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNub3dib2FyZFNldHVwU2ltdWxhdG9yTW9kdWxlIHsgfVxyXG4iXX0=