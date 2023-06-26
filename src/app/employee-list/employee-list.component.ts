import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../shared/modals/create-user/create-user.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  userData: MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.userData = new MatTableDataSource(this.userService.getUserList());
  }

  /**
   * Delete an employee
   */
  deleteEmployee(index: number): void {
    if (index) {
      const employee = this.userService.deleteUser(index);
      this.userData = new MatTableDataSource(employee)
    }
  }

  /**
   * View selected employee
   */
  viewEmployee(index: number): void {
    if (index) {
      this.userService.setUserInfo(index);
      this.router.navigate(['user-details']);
    }
  }

  /**
   * Create user modal dialog
   */
  createUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const employee = this.userService.addUser(result);
        if (employee) {
          this.userData = new MatTableDataSource(employee);
        }
        ;
      }
    });
  }

  /**
   * Function to search by email address
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filterPredicate = (data: User, filter: string) => {
      const email = data.email.toLowerCase(); // Assuming email is a property in the User class
      return email.includes(filter);
    };
    this.userData.filter = filterValue.trim().toLowerCase();
  }
}
