import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
  {
    path: '',
    component: SlideWelcomeComponent
  },
  {
    path: 'before-we-start',
    component: SlideBeforeWeStartComponent
  },
  {
    path: 'template-creation',
    component: SlideTemplateCreationComponent
  },
  {
    path: 'model-manipulation',
    component: SlideModelManipulationComponent
  },
  {
    path: 'business-logic',
    component: SlideBusinessLogicComponent
  },
  {
    path: 'detecting-changes',
    component: SlideDetectingChangesComponent
  },
  {
    path: 'filters',
    component: SlideFiltersComponent
  },
  {
    path: 'data-validation',
    component: SlideDataValidationComponent
  },
  {
    path: 'asynchronous-calls',
    component: SlideAsynchronousCallsComponent
  },
  {
    path: 'final-thoughts',
    component: SlideFinalThoughtsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);