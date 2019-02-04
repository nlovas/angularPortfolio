import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

import { Program } from "../models/Program";

/*
This will show one programming project in detail
*/

@Component({
  selector: "codeProject",
  templateUrl: "./codeProject.component.html",
  styleUrls: ["./codeProject.component.scss"]
})
export class CodeProjectComponent implements OnInit, OnChanges {
  @Input() program: any; //Program;
  @Input() test: number;

  ngOnInit() {
    console.log(this.program);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
