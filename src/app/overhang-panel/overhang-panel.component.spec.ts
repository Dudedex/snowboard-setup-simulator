import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverhangPanelComponent } from './overhang-panel.component';
import {BoardComponent} from '../board/board.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {BoardPanelComponent} from '../board-panel/board-panel.component';
import {BindingComponent} from '../binding/binding.component';
import {DataInputFormComponent} from '../data-input-form/data-input-form.component';
import {FormsModule} from '@angular/forms';

describe('OverhangPanelComponent', () => {
  let component: OverhangPanelComponent;
  let fixture: ComponentFixture<OverhangPanelComponent>;

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
    fixture = TestBed.createComponent(OverhangPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
