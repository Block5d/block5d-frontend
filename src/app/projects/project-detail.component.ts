import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Project }        from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.css' ],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  keys = ["Preliminaries", "Substructure works"]
  
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
      .subscribe(project => this.project = project);
  }

  save(): void {
    this.projectService.update(this.project)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}