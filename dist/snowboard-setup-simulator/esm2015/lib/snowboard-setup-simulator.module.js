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
import { TranslationProvider } from './translation/translation-provider';
import { De } from './translation/de';
import { En } from './translation/en';
registerLocaleData(localeDe);
registerLocaleData(localeEn);
export class SnowboardSetupSimulatorModule {
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
                providers: [
                    TranslationProvider,
                    De,
                    En
                ],
                exports: [SnowboardSetupSimulatorComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVwQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQXdCN0IsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBdEJ6QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixnQ0FBZ0M7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixlQUFlLENBQUMsT0FBTyxFQUFFO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsbUJBQW1CO29CQUNuQixFQUFFO29CQUNGLEVBQUU7aUJBQ0g7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudCB9IGZyb20gJy4vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCByZWdpc3RlckxvY2FsZURhdGF9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCBsb2NhbGVEZSBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9kZSc7XHJcbmltcG9ydCBsb2NhbGVFbiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lbic7XHJcbmltcG9ydCB7Qm9hcmRDb21wb25lbnR9IGZyb20gJy4vYm9hcmQvYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtCb2FyZFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2JvYXJkLXBhbmVsL2JvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QmluZGluZ0NvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5nL2JpbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtPdmVyaGFuZ1BhbmVsQ29tcG9uZW50fSBmcm9tICcuL292ZXJoYW5nLXBhbmVsL292ZXJoYW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGF0YUlucHV0Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9kYXRhLWlucHV0LWZvcm0vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGlvblByb3ZpZGVyfSBmcm9tICcuL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyJztcclxuaW1wb3J0IHtEZX0gZnJvbSAnLi90cmFuc2xhdGlvbi9kZSc7XHJcbmltcG9ydCB7RW59IGZyb20gJy4vdHJhbnNsYXRpb24vZW4nO1xyXG5cclxucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZURlKTtcclxucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUVuKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCb2FyZENvbXBvbmVudCxcclxuICAgIEJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBCaW5kaW5nQ29tcG9uZW50LFxyXG4gICAgT3ZlcmhhbmdQYW5lbENvbXBvbmVudCxcclxuICAgIERhdGFJbnB1dEZvcm1Db21wb25lbnQsXHJcbiAgICBTbm93Ym9hcmRTZXR1cFNpbXVsYXRvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBUcmFuc2xhdGlvblByb3ZpZGVyLFxyXG4gICAgRGUsXHJcbiAgICBFblxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1Nub3dib2FyZFNldHVwU2ltdWxhdG9yQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25vd2JvYXJkU2V0dXBTaW11bGF0b3JNb2R1bGUgeyB9XHJcbiJdfQ==