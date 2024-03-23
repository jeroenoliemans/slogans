import { Component } from '@angular/core';
import {Store}  from '../store/Store'
import {SloganService} from "../service/slogan.service";
import {FormsModule, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SloganComponent} from "../slogan/slogan.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-slogans',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SloganComponent, NgForOf],
  templateUrl: './slogans.component.html',
  styleUrl: './slogans.component.css'
})
export class SlogansComponent {
  // the form to add slogans
  sloganForm = this.formBuilder.group({
    slogan: ''
  })
  constructor(
    public sloganService: SloganService,
    private formBuilder: FormBuilder,
    public store: Store
  ) {
  }

  onSubmit() {
    this.sloganService.addSlogan({id: null, slogan: this.sloganForm.value.slogan as string, themeId: 1})
    this.sloganForm.reset();
    this.sloganService.fetchSlogans()
  }
}
