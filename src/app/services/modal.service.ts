import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalOpen$ = new BehaviorSubject<boolean>(false);
  public data$ = new Subject<any>();
  public type$ = new Subject<string>();
  constructor() {}
  public openModal(type: string, data?: any): void {
    this.modalOpen$.next(true);
    this.data$.next(data);
    this.type$.next(type);
  }
  public closeModal(): void {
    this.modalOpen$.next(false);
    this.data$.next(null);
  }
}
