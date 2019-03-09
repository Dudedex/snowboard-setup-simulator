import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComponent } from './binding.component';
import {BoardComponent} from '../board/board.component';
import {OverhangPanelComponent} from '../overhang-panel/overhang-panel.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {BoardPanelComponent} from '../board-panel/board-panel.component';
import {DataInputFormComponent} from '../data-input-form/data-input-form.component';
import {FormsModule} from '@angular/forms';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
