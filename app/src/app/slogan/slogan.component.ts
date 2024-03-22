import { Component, Input } from '@angular/core';
import {ISlogan} from '../types/types'
import {SloganService} from '../service/slogan.service'

@Component({
  selector: 'app-slogan',
  standalone: true,
  imports: [],
  templateUrl: './slogan.component.html',
  styleUrl: './slogan.component.css'
})
export class SloganComponent {
  @Input() slogan?:ISlogan;
  constructor(public sloganService: SloganService,) {
  }
}
