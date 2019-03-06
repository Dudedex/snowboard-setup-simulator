import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SnowboardBindingSimulatorModule } from './app/snowboard-binding-simulator.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SnowboardBindingSimulatorModule)
  .catch(err => console.log(err));
