import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LstComponent } from './app/lst.component';

bootstrapApplication(LstComponent, appConfig)
  .catch((err) => console.error(err));
