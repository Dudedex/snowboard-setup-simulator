import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardPanelComponent } from './board-panel/board-panel.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from '@angular/forms';
import { OverhangPanelComponent } from './overhang-panel/overhang-panel.component';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: BoardPanelComponent },
  { path: '**', component: BoardPanelComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardPanelComponent,
    BindingComponent,
    OverhangPanelComponent,
    DataInputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
