import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BindingComponent} from './binding/binding.component';
import {OverhangPanelComponent} from './overhang-panel/overhang-panel.component';
import {DataInputFormComponent} from './data-input-form/data-input-form.component';
import {BoardPanelComponent} from './board-panel/board-panel.component';
import {BoardComponent} from './board/board.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardPanelComponent,
    BindingComponent,
    OverhangPanelComponent,
    DataInputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    BoardPanelComponent
  ],
  bootstrap: [BoardPanelComponent]
})
export class SnowboardBindingSimulatorModule {
}
