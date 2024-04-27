import { Routes } from '@angular/router';
import {SlogansComponent} from "./components/slogan/slogans/slogans.component";
import {ThemesComponent} from "./components/theme/themes/themes.component";
import {AddSloganComponent} from "./components/slogan/add-slogan/add-slogan.component"
import {AddThemeComponent} from "./components/theme/add-theme/add-theme.component"

export const routes: Routes = [
  {path: '', redirectTo: '/slogans', pathMatch: 'full'},
  {path: 'slogans', component: SlogansComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'add-slogan', component: AddSloganComponent},
  {path: 'edit-slogan/:id', component: AddSloganComponent},
  {path: 'add-theme', component: AddThemeComponent}
];
