import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SnowboardSetupSimulatorModule} from 'snowboard-setup-simulator/snowboard-setup-simulator.module';
import {SnowboardSetupSimulatorComponent} from 'snowboard-setup-simulator/snowboard-setup-simulator.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SnowboardSetupSimulatorModule
  ],
  exports: [
    SnowboardSetupSimulatorComponent
  ],
  bootstrap: [SnowboardSetupSimulatorComponent]
})
export class SnowboardBindingAppSimulatorModule {
}
