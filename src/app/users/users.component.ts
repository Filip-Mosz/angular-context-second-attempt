import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { User } from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: Array<User> = [
    {id:1, name:"Jan", phone:123456789, email:"jan@lol"},
    {id:2, name:"Jacek", phone:234567891, email:"jacek@lol"},
    {id:3, name:"Janina", phone:345678912, email:"janina@lol"},
    {id:4, name:"Janush", phone:456789123, email:"janush@lol"},
    {id:5, name:"Adrian", phone:567891234, email:"adrjan@lol"},
    {id:6, name:"Bonawentura", phone:678912345, email:"bona@lol"},
    {id:8, name:"Natalia", phone:891234567, email:"natalia@lol"},
    {id:7, name:"Tomasz", phone:789123456, email:"tomasz@lol"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
