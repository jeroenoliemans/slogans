import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet, RouterLink} from '@angular/router';
import { SloganService } from './service/slogan/slogan.service'
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {Store}  from './store/Store'
import {SloganComponent} from './components/slogan/slogan/slogan.component'
import {ThemeService} from "./service/theme/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    SloganComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public sloganService: SloganService,
    public themeService:ThemeService,
    public store: Store
  ) {
  }
}
