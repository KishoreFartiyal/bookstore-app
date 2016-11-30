import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {BookStoreAppModule} from './bookstore-app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(BookStoreAppModule);