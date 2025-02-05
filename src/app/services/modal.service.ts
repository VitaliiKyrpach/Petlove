import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalOpen$ = new BehaviorSubject<boolean>(false);
  public data$ = new Subject<string | User | null>();
  public type$ = new Subject<string>();
  constructor() {}
  public openModal(type: string, data?: string | User): void {
    this.modalOpen$.next(true);
    if (data) {
      this.data$.next(data);
    } else {
      this.data$.next(null);
    }
    this.type$.next(type);
  }
  public closeModal(): void {
    this.modalOpen$.next(false);
    this.data$.next(null);
  }
}
