import {TranslateService} from '@ngx-translate/core';
import {De} from './de';
import {En} from './en';

export class TranslationProvider {
  public static setupTranslationProvider(translate: TranslateService, defaultLocale?: string) {
    translate.setTranslation('de', De.translation());
    translate.setTranslation('en', En.translation());
    if (defaultLocale) {
      translate.setDefaultLang(defaultLocale);
    } else {
      translate.setDefaultLang('de');
    }
  }
}
