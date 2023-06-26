import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Default employeedata list
 employeeData: User[] = [{
    name: 'John',
    email: 'John@gmail.com',
    phone: 9856787512,
    address: '47 W 13th St, New York, NY 10011, USA'
  },
  {
    name: 'Ram',
    email: 'ram@gmail.com',
    phone: 9856787856,
    address: '20 Cooper Square, New York, NY 10003, USA'
  },
  {
    name: 'David',
    email: 'david@yahoo.com',
    phone: 9856782353,
    address: 'Metrotech Center, Brooklyn, NY 11201, USA'
  },
  {
    name: 'Rock',
    email: 'rock@rock.com',
    phone: 985678433,
    address: '181 Mercer Street, New York, NY 10012, United States'
  },
  {
    name: 'Jack',
    email: 'jack@gmail.com',
    phone: 5454337512,
    address: '715 Broadway, New York, NY 10003, USA'
  },
  {
    name: 'Rahul',
    email: 'rahul@gmail.com',
    phone: 9146787512,
    address: '44 W 4th St, New York, NY 10012, USA'
  },
  {
    name: 'Ravi',
    email: 'ravi@gmail.com',
    phone: 968563213,
    address: '80 Lafayette St, New York, NY 10013, USA'
  },
  {
    name: 'Max',
    email: 'max@mailsite.com',
    phone: 9685325543,
    address: '246 Greene St, New York, NY 10003, USAh'
  }]

  // selected user info
  selectedUser!: User;

  constructor() {
   }

  /**
   * Function to get user list of data.
   * @returns User array
   */
  getUserList(): User[] {
    return this.employeeData;
  }

  /**
   * Function is to delete user from list
   */
  deleteUser(index: number): User[] {
    this.employeeData.splice(index, 1);
    return this.employeeData;
  }

  /**
   * Set user info to display it in other screen
   */
  setUserInfo(index: number) {
    if (index) {
      this.selectedUser = this.employeeData[index];
    }
  }

  /**
   * Add user in user main array
   */
  addUser(user: User): User[] | void {
    if (user) {
      this.employeeData.push(user);
      return this.employeeData;
    }
  }
}
