import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModule } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:18657/api/Cars/getall';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModule> {
    return this.httpClient.get<CarResponseModule>(this.apiUrl);
  }
} 
