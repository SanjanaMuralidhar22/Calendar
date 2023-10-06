import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Meetings } from '../Models/meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  baseUrl: string='http://localhost:5239/api/Meeting';
  constructor(private http: HttpClient) { }
  public getAllMeeting():Observable<Meetings[]>{
    return this.http.get<Meetings[]>(this.baseUrl);
  }
  public getMeetingById(id:number):Observable<Meetings>{
    let tempUrl=this.baseUrl+"/"+id;
    return this.http.get<Meetings>(tempUrl);
  }
  public updateMeeting(meet:Meetings) : Observable<Meetings>{
    let tempUrl = this.baseUrl + "/" + meet.meetingId;
    return this.http.put<Meetings>(tempUrl, meet); 

  }
  public addMeeting(meet : Meetings) : Observable<Meetings>{
    return this.http.post<Meetings>(this.baseUrl, meet);
  }
}


 
  
