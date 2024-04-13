import { Component, Input } from '@angular/core';
import {ISlogan} from '../types/types'
import {SloganService} from '../service/slogan.service'

@Component({
  selector: 'slogan',
  standalone: true,
  imports: [],
  templateUrl: './slogan.component.html',
  styleUrl: './slogan.component.css'
})
export class SloganComponent {
  @Input() slogan?:ISlogan;
  constructor(
    private sloganService: SloganService
  ) {}

  delete(slogan:ISlogan) {
    this.sloganService.deleteSlogan(slogan)
  }
}
