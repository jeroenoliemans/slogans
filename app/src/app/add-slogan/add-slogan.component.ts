import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SloganService} from "../service/slogan.service";
import {Store} from "../store/Store";
import {NgForOf} from "@angular/common";
import {SloganComponent} from "../slogan/slogan.component";
import { Router } from '@angular/router'
import {IThemeOption} from "../types/types";
import {ThemeService} from "../service/themes.service";

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

  selectedTheme: number;

  constructor(
    public sloganService: SloganService,
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    private router:Router,
    public store: Store
  ) {
    this.selectedTheme = 1
  }

  onChange(event: any) {
    this.selectedTheme = event.target.value;
  }

  onSubmit() {
    console.log(this.selectedTheme)
    console.log(this.sloganForm)

    this.sloganService.addSlogan({
      id: null,
      slogan: this.sloganForm.value.slogan as string,
      themeId: this.selectedTheme || 1})
    this.sloganForm.reset();
    this.router.navigate(['/slogans'])
  }
}
