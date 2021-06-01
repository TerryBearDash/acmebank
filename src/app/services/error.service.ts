import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    error = new BehaviorSubject(null);

    constructor(
    ) { }

    setError(e: any): void {
        this.error.next(e);
    }

}
