import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';

import { Project }                from './project';
import { ProjectService }         from './project.service';

import {ProjectDetailComponent } from './project-detail.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[];
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  getProjects(): void {
    this.projectService
        .getProjects()
        .then(projects => this.projects = projects);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.projectService.create(name)
      .then(project => {
        this.projects.push(project);
        this.selectedProject = null;
      });
  }

  delete(project: Project): void {
    this.projectService
        .delete(project.id)
        .then(() => {
          this.projects = this.projects.filter(h => h !== project);
          if (this.selectedProject === project) { this.selectedProject = null; }
        });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProject.id]);
  }
}
