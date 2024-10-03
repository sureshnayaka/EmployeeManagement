import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule } from '@angular/forms';

interface Employee {
  position: number;
  department: string;
  employeeType: string;
  name: string;
  age: number;
  currentProject: string;
  projectsWorked: number;
  comments: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-home-view-detials',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './home-view-detials.component.html',
  styleUrls: ['./home-view-detials.component.scss']
})
export class HomeViewDetialsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'department', 'employeeType', 'name', 'age', 'currentProject', 'projectsWorked', 'comments', 'status', 'action'];
  dataSource = new MatTableDataSource<Employee>();
  searchQuery: string = '';

  ngOnInit() {
    this.dataSource.data = this.getEmployees();
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      return data.name.toLowerCase().includes(filter) || data.department.toLowerCase().includes(filter);
    };
  }


  getEmployees(): Employee[] {
    return [
      { position: 1, department: 'Development', employeeType: 'Fulltime', name: 'Surya', age: 28, currentProject: 'ElefantPrint', projectsWorked: 6, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 2, department: 'Design', employeeType: 'Parttime', name: 'Maya', age: 30, currentProject: 'UI Overhaul', projectsWorked: 4, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 3, department: 'Development', employeeType: 'Contract', name: 'Anil', age: 32, currentProject: 'Backend API', projectsWorked: 5, comments: 'Good performance', status: 'Active', action: 'N/A' },
      { position: 4, department: 'HR', employeeType: 'Fulltime', name: 'Riya', age: 29, currentProject: 'Recruitment', projectsWorked: 3, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 5, department: 'Marketing', employeeType: 'Fulltime', name: 'Surya', age: 31, currentProject: 'Social Media', projectsWorked: 7, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 6, department: 'Support', employeeType: 'Parttime', name: 'Priya', age: 26, currentProject: 'Customer Support', projectsWorked: 2, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 7, department: 'Finance', employeeType: 'Fulltime', name: 'Vikram', age: 35, currentProject: 'Budget Planning', projectsWorked: 3, comments: 'N/A', status: 'Inactive', action: 'N/A' },
      { position: 8, department: 'Development', employeeType: 'Fulltime', name: 'Aditi', age: 27, currentProject: 'Web Development', projectsWorked: 6, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 9, department: 'HR', employeeType: 'Contract', name: 'Rohit', age: 34, currentProject: 'Employee Relations', projectsWorked: 4, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 10, department: 'Design', employeeType: 'Fulltime', name: 'Nina', age: 29, currentProject: 'Branding', projectsWorked: 5, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 11, department: 'Development', employeeType: 'Contract', name: 'Sanjay', age: 38, currentProject: 'Mobile App', projectsWorked: 2, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 12, department: 'Support', employeeType: 'Parttime', name: 'Leela', age: 25, currentProject: 'Technical Support', projectsWorked: 3, comments: 'N/A', status: 'Inactive', action: 'N/A' },
      { position: 13, department: 'Marketing', employeeType: 'Fulltime', name: 'Raj', age: 33, currentProject: 'SEO Optimization', projectsWorked: 4, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 14, department: 'HR', employeeType: 'Fulltime', name: 'Sita', age: 30, currentProject: 'Employee Training', projectsWorked: 5, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 15, department: 'Development', employeeType: 'Parttime', name: 'Kiran', age: 26, currentProject: 'Software Testing', projectsWorked: 1, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 16, department: 'Finance', employeeType: 'Contract', name: 'Pooja', age: 31, currentProject: 'Financial Analysis', projectsWorked: 3, comments: 'N/A', status: 'Inactive', action: 'N/A' },
      { position: 17, department: 'Marketing', employeeType: 'Fulltime', name: 'Mohan', age: 28, currentProject: 'Content Strategy', projectsWorked: 4, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 18, department: 'Development', employeeType: 'Fulltime', name: 'Rani', age: 27, currentProject: 'API Development', projectsWorked: 6, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 19, department: 'HR', employeeType: 'Parttime', name: 'Aman', age: 35, currentProject: 'Employee Feedback', projectsWorked: 2, comments: 'N/A', status: 'Active', action: 'N/A' },
      { position: 20, department: 'Design', employeeType: 'Fulltime', name: 'Simran', age: 29, currentProject: 'UX Design', projectsWorked: 5, comments: 'N/A', status: 'Active', action: 'N/A' },
    ];
  }

  applyFilter() {
    if (this.searchQuery == '') {
      this.dataSource.data = this.getEmployees();
      return;
    }
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
    this.dataSource.data = this.dataSource.filteredData;
  }
}
