import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SnowboardBindingAppSimulatorModule } from './app/snowboard-binding-app-simulator.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SnowboardBindingAppSimulatorModule)
  .catch(err => console.log(err));
