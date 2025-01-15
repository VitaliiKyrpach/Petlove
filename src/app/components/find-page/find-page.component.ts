import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-find-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './find-page.component.html',
  styleUrl: './find-page.component.scss'
})
export class FindPageComponent implements OnInit{
  public data$!: any
  constructor(private service: ServiceService){}
  ngOnInit(): void {
    this.data$ = this.service.getPets().subscribe(data=> console.log(data))
  }
}
