import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/room';
import { TimeList } from 'src/app/Models/time-list';
import { Meetings } from 'src/app/Models/meetings';
import { MeetingServiceService } from 'src/app/Services/meeting-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServiceService } from 'src/app/Services/room-service.service';
import { HttpClient } from '@angular/common/http';
import { TimeServiceService } from 'src/app/Services/time-service.service';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  timeList: any[] = [];
  roomList: any[] = [];
  meetList: any[]=[];
  http: any;
  constructor(private calservices: RoomServiceService, private timeservices : TimeServiceService,private meetingservices:MeetingServiceService){}
  // ngOnInit(): void {
  //   this.calservices.GetAllRoom().subscribe((data : Room[]) => {
  //     this.roomList=data;
  //     //console.log(data); // Check its adding or not
  //   })  
  // }
  meetingObj = {
    "meetingId": 0,
    "meetingDetails": "string",
    "startDate": "2023-10-05",
    "endDate": "2023-10-05",
    "startTime": "string",
    "endTime": "string",
    "employeeId": 0,
    "roomId": 0
  }
  bookingList: any;

  ngOnInit(): void {
  this.timeservices.GetAllTime().subscribe((data:TimeList[])=>{
    this.timeList=data;
  })
  this.calservices.GetAllRoom().subscribe((data : Room[]) => {
    this.roomList=data;
  }) 
  this.meetingservices.getAllMeeting().subscribe((data : Meetings[]) => {
    this.meetList=data;
  }) 
}
  checkIfRoomBooked(roomId:number,timeId:number){
  const bookingData =this.meetList.find(m=>m.roomId==roomId && (m.startTime<=timeId && m.endTime>=timeId));
  if(bookingData){
    return true;
  }
  else{
    return false;
  }
  }
  openBooking() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "block";
    }
  }
  closeBooking() {
    const model = document.getElementById("myModal");
    if (model != null) {
      model.style.display = "none";
    }
  }
  saveBooking() {
    alert("Booking done successfully")

  }

}


