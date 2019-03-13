import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from 'snowboard-setup-simulator/translation/translation-provider';
import {De} from 'snowboard-setup-simulator/translation/de';
import {En} from 'snowboard-setup-simulator/translation/en';

@Component({
  selector: 'lib-snowboard-setup-simulator',
  template: `
    <app-board-panel></app-board-panel>
  `,
  styles: []
})
export class SnowboardSetupSimulatorComponent implements OnInit, OnChanges {
  @Input()
  public locale: string;

  constructor( private translate: TranslateService) {

  }

  ngOnInit() {
    this.translationSetup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.translationSetup();
  }

  private translationSetup() {
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

}
