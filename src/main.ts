import { registerLicense } from '@syncfusion/ej2-base';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { registerLicense }
registerLicense("Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIf0x0Qnxbf1x0ZFRGalhQTnNZUj0eQnxTdEFiWH1ecnZRR2VaUUFxWg==");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
