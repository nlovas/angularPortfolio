import {makeStateKey, TransferState} from '@angular/platform-browser';
import {PLATFORM_ID, Injectable, Inject} from '@angular/core';

/*
This service exists to get the projects
Using the TransferState API for Universal
*/

@Injectable()
export class ProjectService {

    constructor(
        private transferState:TransferState,
        @Inject(PLATFORM_ID) private platformId) {}

}