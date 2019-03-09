import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardPanelComponent} from './board-panel.component';
import {BoardComponent} from '../board/board.component';
import {DataInputFormComponent} from '../data-input-form/data-input-form.component';
import {OverhangPanelComponent} from '../overhang-panel/overhang-panel.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {BindingComponent} from '../binding/binding.component';
import {FormsModule} from '@angular/forms';

describe('BoardPanelComponent', () => {
  let component: BoardPanelComponent;
  let fixture: ComponentFixture<BoardPanelComponent>;

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
    fixture = TestBed.createComponent(BoardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
