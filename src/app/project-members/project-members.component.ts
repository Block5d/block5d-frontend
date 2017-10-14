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
    /*
    this.projectMembersService.getAllUsers().subscribe(users => {
      console.log("->>>-->");
      this.users = users;
    });*/
  }

}
