import {Component, Signal, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SloganService } from './service/slogan.service'
import {FormsModule, FormBuilder} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {Store}  from './store/Store'
import {SloganComponent} from './components/slogan/slogan/slogan.component'
import {ThemeService} from "./service/themes.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, SloganComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // the form to add slogans
  sloganForm = this.formBuilder.group({
    slogan: ''
  })

  constructor(
    public sloganService: SloganService,
    public themeService:ThemeService,
    private formBuilder: FormBuilder,
    public store: Store
  ) {
  }
}
