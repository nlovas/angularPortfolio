import { Component, OnInit } from "@angular/core";
import { CodeProjectComponent } from "../codeProject/codeProject.component";
import { Observable } from "rxjs";
import { Program } from "../models/Program";
import { ProjectService } from "../project.service";

/*
This is the page showcasing all of the programming projects
*/

@Component({
  selector: "code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"]
})
export class CodeComponent implements OnInit {
  projects: Observable<Program[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    //this.projects = this.projectService.getCodeProjects(); //.pipe(map);
    //  let tmp = this.projectService.getConfigResponse();
    //console.log(tmp);
    this.showConfigResponse();
  }

  showConfigResponse() {
    this.projectService
      .getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        let headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        let config = { ...resp.body };

        console.log(resp);
      });
  }
}
