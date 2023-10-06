import { Injectable } from '@angular/core';
import { Room } from '../Models/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  baseUrl: string = 'http://localhost:5239/api/Room_'
  constructor(private http: HttpClient) { }

  public GetAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }
}

