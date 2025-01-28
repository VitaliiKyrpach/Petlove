import { Component, Input } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-pet-modal',
  standalone: true,
  imports: [DatePipe, IconSpriteModule],
  templateUrl: './pet-modal.component.html',
  styleUrl: './pet-modal.component.scss',
})
export class PetModalComponent {
  @Input() data!: Pet;
}
