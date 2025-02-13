import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CardData, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalOpen$ = new BehaviorSubject<boolean>(false);
  public data$ = new Subject< CardData |  User | null>();
  public type$ = new Subject<string>();
  constructor() {}
  public openModal(type: string, data?: CardData | User): void {
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
