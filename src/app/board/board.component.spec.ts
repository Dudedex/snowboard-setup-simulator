import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {OverhangPanelComponent} from '../overhang-panel/overhang-panel.component';
import {BindingComponent} from '../binding/binding.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {BoardPanelComponent} from '../board-panel/board-panel.component';
import {DataInputFormComponent} from '../data-input-form/data-input-form.component';
import {FormsModule} from '@angular/forms';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

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
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
