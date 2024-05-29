import { Component, OnInit } from '@angular/core';
import {Store}  from '../../../store/Store'
import {SloganComponent} from "../slogan/slogan.component";
import {NgForOf} from "@angular/common";
import {SloganService} from "../../../service/slogan/slogan.service";
import {ThemeService} from "../../../service/theme/theme.service";

@Component({
  selector: 'app-slogans',
  standalone: true,
  imports: [SloganComponent, NgForOf],
  templateUrl: './slogans.component.html',
  styleUrl: './slogans.component.css'
})
export class SlogansComponent {
  constructor(
    public store: Store,
    private sloganService: SloganService,
    private themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    this.sloganService.fetchSlogans()
    this.themeService.fetchThemes()
  }
}
