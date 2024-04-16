import { Routes } from '@angular/router';
import {SlogansComponent} from "./slogans/slogans.component";
import {ThemesComponent} from "./themes/themes.component";
import {AddSloganComponent} from "./add-slogan/add-slogan.component"
import {AddThemeComponent} from "./add-theme/add-theme.component"

export const routes: Routes = [
  {path: '', redirectTo: '/slogans', pathMatch: 'full'},
  {path: 'slogans', component: SlogansComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'add-slogan', component: AddSloganComponent},
  {path: 'add-theme', component: AddThemeComponent}
];
