import { NgModule } from '@angular/core';
import { SnowboardSetupSimulatorComponent } from './snowboard-setup-simulator.component';
import {FormsModule} from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import {BoardComponent} from './board/board.component';
import {BoardPanelComponent} from './board-panel/board-panel.component';
import {BindingComponent} from './binding/binding.component';
import {OverhangPanelComponent} from './overhang-panel/overhang-panel.component';
import {DataInputFormComponent} from './data-input-form/data-input-form.component';
import {TranslateModule} from '@ngx-translate/core';

registerLocaleData(localeDe);
registerLocaleData(localeEn);

@NgModule({
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
})
export class SnowboardSetupSimulatorModule { }
