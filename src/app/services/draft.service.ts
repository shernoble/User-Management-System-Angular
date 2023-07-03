import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor() { }

  private readonly STORAGE_KEY="formDraft";
  saveDraft(data: any) : Observable<boolean>{
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      return of(true);
    } catch (error) {
      console.error('Error saving draft:', error);
      return of(false);
    }
  }

  retrieveDraft(): Observable<any> {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return of(data ? JSON.parse(data) : null);
  }

  clearDraft(): Observable<boolean> {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      return of(true);
    } catch (error) {
      console.error('Error clearing draft:', error);
      return of(false);
    }
  }

  
}
