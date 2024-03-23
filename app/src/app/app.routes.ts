import { Routes } from '@angular/router';
import {SlogansComponent} from "./slogans/slogans.component";
import {ThemesComponent} from "./themes/themes.component";

export const routes: Routes = [
  {path: '', redirectTo: '/slogans', pathMatch: 'full'},
  {path: 'slogans', component: SlogansComponent},
  {path: 'themes', component: ThemesComponent}
];
