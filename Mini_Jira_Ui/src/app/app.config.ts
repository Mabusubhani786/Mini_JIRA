import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  heroHome,
  heroDocumentText,
  heroFolder,
  heroUsers,
  heroArrowLeftOnRectangle,
} from '@ng-icons/heroicons/outline';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideIcons({
      heroHome,
      heroDocumentText,
      heroFolder,
      heroUsers,
      heroArrowLeftOnRectangle,
    }),
  ],
};
