import { NgModule } from '@angular/core';
import { SnowboardSetupSimulatorComponent } from './snowboard-setup-simulator.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BoardComponent} from './board/board.component';
import {BoardPanelComponent} from './board-panel/board-panel.component';
import {BindingComponent} from './binding/binding.component';
import {OverhangPanelComponent} from './overhang-panel/overhang-panel.component';
import {DataInputFormComponent} from './data-input-form/data-input-form.component';

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
    CommonModule
  ],
  exports: [SnowboardSetupSimulatorComponent]
})
export class SnowboardSetupSimulatorModule { }
