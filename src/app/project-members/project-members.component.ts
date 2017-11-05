import { ProjectMembersService } from './project-members.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']})
export class ProjectMembersComponent implements OnInit {

  constructor(private projectMembersService: ProjectMembersService) { }
  users: any = [];

  ngOnInit() {
    console.log("->>>-->1");
    
    this.projectMembersService.getAllUsers().subscribe(users => {
      console.log("->>>-->" + JSON.stringify(users));
      this.users = users;
    });

  }

}
