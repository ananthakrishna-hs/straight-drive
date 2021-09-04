import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InsertRequest } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  activationComplete: boolean = false;
  constructor(
    private client: HttpClient
  ) { }

  insertRow(row: InsertRequest) {
    return this.client.post('https://sheetdb.io/api/v1/niv7gut3fe6ck', row);
  }

  toggleIsActivate(status: boolean): void {
    this.activationComplete = status;
  }

  isActivated(): boolean {
    return this.activationComplete;
  }
}
