import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  // employee details
  public employeeDetails!: User;

  constructor(
    private userService: UserService
  ) {
    this.employeeDetails = this.userService.selectedUser;
  }

  ngOnInit(): void {
  }

}
