import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputFormComponent } from './data-input-form.component';
import {BoardComponent} from '../board/board.component';
import {OverhangPanelComponent} from '../overhang-panel/overhang-panel.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {BoardPanelComponent} from '../board-panel/board-panel.component';
import {BindingComponent} from '../binding/binding.component';
import {FormsModule} from '@angular/forms';

describe('DataInputFormComponent', () => {
  let component: DataInputFormComponent;
  let fixture: ComponentFixture<DataInputFormComponent>;

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
    fixture = TestBed.createComponent(DataInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
