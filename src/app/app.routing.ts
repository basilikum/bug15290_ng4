import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { ItemResolver } from './item.resolve';

const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent, resolve: { i: ItemResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
