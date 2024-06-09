import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SloganService} from "../../../service/slogan/slogan.service";
import {Store} from "../../../store/Store";
import {NgForOf, NgStyle} from "@angular/common";
import {SloganComponent} from "../slogan/slogan.component";
import { Router, ActivatedRoute } from '@angular/router'
import {ITheme, IThemeOption} from "../../../types/types";
import {ThemeService} from "../../../service/theme/theme.service";

@Component({
  selector: 'app-add-slogan',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf, SloganComponent, NgStyle],
  templateUrl: './add-slogan.component.html',
  styleUrl: './add-slogan.component.css'
})
export class AddSloganComponent implements OnInit{
  // the form to add slogans
  sloganForm = this.formBuilder.group({
    slogan: ''
  })

  selectedTheme: number;
  previewTheme: ITheme;
  editSloganId: number | null;


  constructor(
    public sloganService: SloganService,
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    public store: Store
  ) {
    this.selectedTheme = 1;
    this.previewTheme = store.getThemeById(this.selectedTheme);
    this.editSloganId = null;
  }

  ngOnInit() {


    this.themeService.fetchThemeOptions()

    this.route.params.subscribe(params => {
      this.editSloganId = parseInt(params['id']); // Access the 'id' parameter from the URL

      if(this.editSloganId) {
        this.sloganForm.controls.slogan.setValue( this.store.getSloganById(this.editSloganId).slogan)
        this.selectedTheme = this.store.getSloganById(this.editSloganId).themeId
        this.previewTheme = this.store.getThemeById(this.selectedTheme);
      }
    });
  }

  onChange(event: any) {
    this.selectedTheme = event.target.value * 1;
    this.previewTheme = this.store.getThemeById(this.selectedTheme);
  }

  public getGradientBackground(theme: ITheme) {
    return theme ? `repeating-conic-gradient(at 100%,#0000 0.000045%, #000d 0.0005%),
    linear-gradient(${theme?.backgroundColor}, transparent),
    linear-gradient(to top left, ${theme?.backgroundColorLeft}, transparent),
    linear-gradient(to top right, ${theme?.backgroundColorRight}, transparent)` : ''
  }

  onSubmit() {
    this.sloganService.addSlogan({
      id: this.editSloganId,
      slogan: this.sloganForm.value.slogan as string,
      themeId: this.selectedTheme || 1})
    this.sloganForm.reset();
    this.router.navigate(['/slogans'])
  }
}
