import { Component } from '@angular/core';
import {Store}  from '../store/Store'
import {NgForOf} from "@angular/common";
import {ThemeComponent} from "../theme/theme.component";

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [ NgForOf, ThemeComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
  constructor(
    public store: Store
  ) {
  }
}
