import { Component } from '@angular/core';
import {Store}  from '../store/Store'
import {ThemeService} from '../service/themes.service'
import {NgForOf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SloganComponent} from "../slogan/slogan.component";

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule, SloganComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
  constructor(
    public themeService: ThemeService,
    public store: Store
  ) {
  }
}
