import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InsertRequest } from 'src/app/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  activationComplete: boolean = false;
  constructor(
    private client: HttpClient
  ) { }

  /**
   * To make API call for inserting row into sheet.
   * @param {InsertRequest} row Data to be inserted
   * @returns {Observable<Object>} API response as observable
   */
  insertRow(row: InsertRequest): Observable<Object> {
    return this.client.post('https://sheetdb.io/api/v1/niv7gut3fe6ck', row);
  }

  /**
   * To update activation status.
   * @param {boolean} status Status to be updated
   */
  toggleIsActivate(status: boolean): void {
    this.activationComplete = status;
  }

  /**
   * To return current activation status.
   * @returns {boolean} Current activation status
   */
  isActivated(): boolean {
    return this.activationComplete;
  }
}
