import { Component } from '@angular/core';
import {Store}  from '../store/Store'
import {SloganComponent} from "../slogan/slogan.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-slogans',
  standalone: true,
  imports: [SloganComponent, NgForOf],
  templateUrl: './slogans.component.html',
  styleUrl: './slogans.component.css'
})
export class SlogansComponent {
  constructor(
    public store: Store
  ) {
  }
}
