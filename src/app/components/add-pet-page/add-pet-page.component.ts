import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pet-page',
  standalone: true,
  imports: [
    AsyncPipe,
    IconSpriteModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    NgSelectModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-pet-page.component.html',
  styleUrl: './add-pet-page.component.scss',
})
export class AddPetPageComponent implements OnInit {
  public species$!: Observable<string[]>;
  public sex!: string;
  public chevron: boolean = false;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.species$ = this.service.getSpecies();
  }
  public handleChevron() {
    this.chevron = !this.chevron;
  }
  public handlepick() {}
  public onFileChange(file: any) {}
  public showSex() {
    console.log(this.sex);
  }
}
