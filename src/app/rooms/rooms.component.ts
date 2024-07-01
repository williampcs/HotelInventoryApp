import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;

  // rooms : Room = {};
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = []

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber:1,
        roomType:'Deluxe Room',
        amenities: 'Free Wi-Fi',
        price: 500,
        photos: 'https://demo-source.imgix.net/house.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5
      },
      {
        roomNumber:2,
        roomType:'Deluxe Room',
        amenities: 'Free Wi-Fi',
        price: 1000,
        photos: 'https://demo-source.imgix.net/house.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.4
      },
      {
        roomNumber:3,
        roomType:'Private Suite',
        amenities: 'Free Wi-Fi',
        price: 15000,
        photos: 'https://demo-source.imgix.net/house.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.6
      }
    ]
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber:4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner',
      price: 500,
      photos:'https://demo-source.imgix.net/house.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
