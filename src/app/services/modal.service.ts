import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalOpen$ = new BehaviorSubject<boolean>(false);
  public id$ = new Subject<string | null>();
  public type$ = new Subject<string>();
  constructor() {}
  public openModal(type: string, id?: string): void {
    this.modalOpen$.next(true);
    if (id) {
      this.id$.next(id);
    } else {
      this.id$.next(null);
    }
    this.type$.next(type);
  }
  public closeModal(): void {
    this.modalOpen$.next(false);
    this.id$.next(null);
  }
}
