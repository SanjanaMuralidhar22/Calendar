import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { TimeList } from '../Models/time-list';
@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  baseUrl:string='http://localhost:5239/api/TimeList'
  constructor(private http:HttpClient) { }

public GetAllTime() : Observable<TimeList[]>{
    return this.http.get<TimeList[]>(this.baseUrl);
}
}
