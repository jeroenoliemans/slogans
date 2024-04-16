import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SloganService} from "../service/slogan.service";
import {Store} from "../store/Store";
import {NgForOf} from "@angular/common";
import {SloganComponent} from "../slogan/slogan.component";
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-slogan',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf, SloganComponent],
  templateUrl: './add-slogan.component.html',
  styleUrl: './add-slogan.component.css'
})
export class AddSloganComponent {
  // the form to add slogans
  sloganForm = this.formBuilder.group({
    slogan: ''
  })

  constructor(
    public sloganService: SloganService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {
  }

  onSubmit() {
    this.sloganService.addSlogan({id: null, slogan: this.sloganForm.value.slogan as string, themeId: 1})
    this.sloganForm.reset();
    this.router.navigate(['/slogans'])
    // navigate to list
    // this.sloganService.fetchSlogans()
  }
}
