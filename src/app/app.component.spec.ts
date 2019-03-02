import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BoardComponent} from './board/board.component';
import {OverhangPanelComponent} from './overhang-panel/overhang-panel.component';
import {BoardPanelComponent} from './board-panel/board-panel.component';
import {BindingComponent} from './binding/binding.component';
import {DataInputFormComponent} from './data-input-form/data-input-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
describe('AppComponent', () => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
