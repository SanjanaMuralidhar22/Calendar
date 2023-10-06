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
  http: any;
  constructor(private calservices: RoomServiceService, private timeservices : TimeServiceService){}
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
    // this.timeList.push({
    //   timeId:1,time:"12:00AM"
    // })
    // this.timeList.push({
    //   timeId:2,time:"12:30AM"
    // })
    // this.timeList.push({
    //   timeId:3,time:"01:00AM"
    // })
    // this.timeList.push({
    //   timeId:4,time:"01:30AM"
    // })
    // this.timeList.push({
    //   timeId:5,time:"02:00AM"
    // })
    // this.timeList.push({
    //   timeId:6,time:"02:30AM"
    // })
    // this.timeList.push({
    //   timeId:7,time:"03:00AM"
    // })
    // this.timeList.push({
    //   timeId:8,time:"03:30AM"
    // })
    // this.timeList.push({
    //   timeId:9,time:"04:00AM"
    // })
    // this.timeList.push({
    //   timeId:10,time:"04:30AM"
    // })
    // this.timeList.push({
    //   timeId:11,time:"05:00AM"
    // })
    // this.timeList.push({
    //   timeId:12,time:"05:30AM"
    // })
    // this.timeList.push({
    //   timeId:13,time:"06:00AM"
    // })
    // this.timeList.push({
    //   timeId:14,time:"06:30AM"
    // })
    // this.timeList.push({
    //   timeId:15,time:"07:00AM"
    // })
    // this.timeList.push({
    //   timeId:16,time:"07:30AM"
    // })
    // this.timeList.push({
    //   timeId:17,time:"08:00AM"
    // })
    // this.timeList.push({
    //   timeId:18,time:"08:30AM"
    // })
    // this.timeList.push({
    //   timeId:19,time:"09:00AM"
    // })
    // this.timeList.push({
    //   timeId:20,time:"09:30AM"
    // })
    // this.timeList.push({
    //   timeId:21,time:"10:00AM"
    // })
    // this.timeList.push({
    //   timeId:22,time:"10:30AM"
    // })
    // this.timeList.push({
    //   timeId:23,time:"11:00AM"
    // })
    // this.timeList.push({
    //   timeId:24,time:"11:30AM"
    // })
    // this.timeList.push({
    //   timeId:25,time:"12:00PM"
    // })
    // this.timeList.push({
    //   timeId:26,time:"12:30PM"
    // })
    // this.timeList.push({
    //   timeId:27,time:"01:00PM"
    // })
    // this.timeList.push({
    //   timeId:28,time:"01:30PM"
    // })
    // this.timeList.push({
    //   timeId:29,time:"02:00PM"
    // })
    // this.timeList.push({
    //   timeId:30,time:"02:30PM"
    // })
    // this.timeList.push({
    //   timeId:31,time:"03:00PM"
    // })
    // this.timeList.push({
    //   timeId:32,time:"03:30PM"
    // })
    // this.timeList.push({
    //   timeId:33,time:"04:00PM"
    // })
    // this.timeList.push({
    //   timeId:34,time:"04:30PM"
    // })
    // this.timeList.push({
    //   timeId:35,time:"05:00PM"
    // })
    // this.timeList.push({
    //   timeId:36,time:"05:30PM"
    // })
    // this.timeList.push({
    //   timeId:37,time:"06:00PM"
    // })
    // this.timeList.push({
    //   timeId:38,time:"06:30PM"
    // })
    // this.timeList.push({
    //   timeId:39,time:"07:00PM"
    // })
    // this.timeList.push({
    //   timeId:40,time:"07:30PM"
    // })
    // this.timeList.push({
    //   timeId:41,time:"08:00PM"
    // })
    // this.timeList.push({
    //   timeId:42,time:"08:30PM"
    // })
    // this.timeList.push({
    //   timeId:43,time:"09:00PM"
    // })
    // this.timeList.push({
    //   timeId:44,time:"09:30PM"
    // })
    // this.timeList.push({
    //   timeId:45,time:"10:00PM"
    // })
    // this.timeList.push({
    //   timeId:46,time:"10:30PM"
    // })
    // this.timeList.push({
    //   timeId:47,time:"11:00PM"
    // })
    // this.timeList.push({
    //   timeId:48,time:"11:30PM"
    // })
  //   // this.roomList.push({
  //   //   roomId:1,roomName:'Gurukul',roomCapacity:25,roomLocation:'Ground Floor'
  //   // })
  //   // this.roomList.push({
  //   //   roomId:2,roomName:'Milkah',roomCapacity:40,roomLocation:'Second Floor'
  //   // })  
  //   // this.roomList.push({
  //   //   roomId:3,roomName:'Ekalavya',roomCapacity:30,roomLocation:'Third Floor'
  //   // }) 
  // }
  // ngOnInit(): void {
  //  this.getRoomList();
  //  this.getTimeList();
  // }

  // getRoomList() {
  //   this.http.get("http://localhost:5239/api/Room_").subscribe((res: any) => {
  //     this.roomList = res.data;
  //     alert("hai");
  //   })
  // }
  // getTimeList(){
  //   this.http.get("http://localhost:5239/api/TimeList").subscribe((res: any) => {
  //     this.timeList = res.data;
  //   })
  // }
  this.timeservices.GetAllTime().subscribe((data:TimeList[])=>{
    this.timeList=data;
  })
  this.calservices.GetAllRoom().subscribe((data : Room[]) => {
    this.roomList=data;
  }) 
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


