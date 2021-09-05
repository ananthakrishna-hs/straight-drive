import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Regexps, errorTypes, DataHandlerService, InsertResponse } from 'src/app/core';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnDestroy {
  @ViewChild('error', { static: false })
  errorModal: any;

  @ViewChild('confirm', { static: false })
  confirmModal: any;

  name: string = '';
  countryCode: string = '';
  number: string = '';
  email: string = '';
  state: any = null;
  confirmation: boolean = false;

  states: Array<string>;
  faTimes = faTimes;

  isFormValid: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private modal: NgbModal,
    private dataHandler: DataHandlerService,
    private router: Router
  ) {
    this.states = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
      'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
      'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
      'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
      'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 
      'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
      'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
    ];
  }

  /**
   * To reset all values on form reset event.
   */
  handleReset(): void {
    this.state = null;
    this.confirmation = false;
    this.errorMessage = '';
  }

  /**
   * To display error modal.
   * @param {string} errorMessage Error message to be displayed on modal 
   */
  showError(errorMessage: string): void {
    this.errorMessage = errorMessage;
    this.modal.open(this.errorModal, {
      size: 'xl', centered: true
    });
  }

  /**
   * To show confirmation modal on valid input.
   */
  showConfirm(): void {
    this.errorMessage = '';
    this.modal.open(this.confirmModal, {
      size: 'xl', centered: true
    });
  }

  /**
   * To handle submission of form.
   * @description Function validates all fields and calls `showError` on failure or `showConfirm` on success.
   */
  handleSubmit(): void {
    if (!this.name || !this.name.match(Regexps.NAME_REGEX)) {
      this.showError(errorTypes.NAME_INVALID);
      return;
    }

    if (!this.countryCode || isNaN(Number(this.countryCode)) || !this.countryCode.match(Regexps.NUMBER_REGEX)) {
      this.showError(errorTypes.COUNTRY_CODE_INVALID);
      return;
    }

    if (!this.number || isNaN(Number(this.number)) || this.number.length < 9 ||
    this.number.length > 13 || !this.number.match(Regexps.NUMBER_REGEX)) {
      this.showError(errorTypes.NUMBER_INVALID);
      return;
    }

    if (!this.email || !this.email.match(Regexps.EMAIL_REGEX)) {
      this.showError(errorTypes.EMAIL_INVALID);
      return;
    }

    if (!this.state || !this.states.includes(this.state)) {
      this.showError(errorTypes.STATE_INVALID);
      return;
    }

    if (!this.confirmation) {
      this.showError(errorTypes.NOT_AGREED);
      return;
    }
    
    this.showConfirm();
  }

  /**
   * To close the open modals if any.
   */
  closeModal(): void {
    this.modal.dismissAll();
  }

  ngOnDestroy(): void {
    this.closeModal();
  }

  /**
   * To display error alert message.
   * @param {string} message The alert messge to be shown 
   */
  errorHandler(message: string): void {
    alert(message);
    this.isLoading = false;
  }

  /**
   * To route on success.
   * @param {InsertResponse} data Success response from API
   */
  succesHandler(data: InsertResponse): void {
    if (data.created === 1) {
      this.dataHandler.toggleIsActivate(true);
      this.router.navigate(['/success']);
    }
  }

  /**
   * To handle confirmation event by user.
   * @description Calls API to insert row into sheets.
   */
  handleConfirm(): void {
    this.isLoading = true;
    this.dataHandler.insertRow({
      name: this.name,
      phone: '+' + this.countryCode + this.number,
      email: this.email,
      state: this.state
    }).subscribe({
      next: (value: any) => this.succesHandler(value),
      error: (err: any) => this.errorHandler(err.message)
    });
  }

}
