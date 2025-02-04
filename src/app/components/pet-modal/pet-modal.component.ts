import { Component, inject, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-pet-modal',
  standalone: true,
  imports: [DatePipe, IconSpriteModule],
  templateUrl: './pet-modal.component.html',
  styleUrl: './pet-modal.component.scss',
})
export class PetModalComponent implements OnInit {
  @Input() id!: string | null;
  public data!: Pet;
  private service = inject(ServiceService);
  ngOnInit(): void {
    if (this.id) {
      this.service.getPet(this.id).subscribe((data) => {
        console.log(data);
        this.data = data;
      });
    }
  }
}
