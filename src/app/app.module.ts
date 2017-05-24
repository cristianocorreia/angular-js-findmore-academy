import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { SlideWelcomeComponent }  from './components/slide-welcome/slide-welcome.component';
import { SlideBeforeWeStartComponent }  from './components/slide-before-we-start/slide-before-we-start.component';
import { SlideTemplateCreationComponent }  from './components/slide-template-creation/slide-template-creation.component';
import { SlideModelManipulationComponent }  from './components/slide-model-manipulation/slide-model-manipulation.component';
import { SlideBusinessLogicComponent }  from './components/slide-business-logic/slide-business-logic.component';
import { SlideDetectingChangesComponent }  from './components/slide-detecting-changes/slide-detecting-changes.component';
import { SlideFiltersComponent }  from './components/slide-filters/slide-filters.component';
import { SlideDataValidationComponent }  from './components/slide-data-validation/slide-data-validation.component';
import { SlideAsynchronousCallsComponent }  from './components/slide-asynchronous-calls/slide-asynchronous-calls.component';
import { SlideFinalThoughtsComponent }  from './components/slide-final-thoughts/slide-final-thoughts.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    SlideWelcomeComponent,
    SlideBeforeWeStartComponent,
    SlideTemplateCreationComponent,
    SlideModelManipulationComponent,
    SlideBusinessLogicComponent,
    SlideDetectingChangesComponent,
    SlideFiltersComponent,
    SlideDataValidationComponent,
    SlideAsynchronousCallsComponent,
    SlideFinalThoughtsComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule {}