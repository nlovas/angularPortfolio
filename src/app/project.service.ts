//import { makeStateKey, TransferState } from "@angular/platform-browser";
import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { CodeProjectComponent } from "./codeProject/codeProject.component";
import { Observable } from "rxjs";
import { Program } from "./models/Program";
import { Config } from "protractor";

/*
This service exists to get the projects
and uses the TransferState API for Universal
*/

@Injectable()
export class ProjectService {
  //TODO: change this url into where youre going to host your data
  static readonly codeUrl = "http://localhost:4200/assets/codeProjects.json";

  // private isServer: boolean;

  constructor(
    private http: HttpClient // private transferState: TransferState, //@Inject(PLATFORM_ID) private platformId
  ) {}

  getCodeProjects() {
    /*: Observable<Program[]> {
    return this.http.get<Program[]>(ProjectService.codeUrl);*/
    return this.http.get(ProjectService.codeUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(ProjectService.codeUrl, {
      observe: "response"
    });
  }
}
