export interface GalleryImageItem {
  path: string;
}

export interface GalleryImageItems extends Array<GalleryImageItem> {}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqItems extends Array<FaqItem> {}

export const Regexps = {
  NAME_REGEX: /^[a-z0-9\s]+$/i,
  NUMBER_REGEX: /^[0-9]+$/,
  EMAIL_REGEX: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

export const errorTypes = {
  NAME_INVALID: 'Name is invalid! It can contain only letters and numbers',
  COUNTRY_CODE_INVALID: 'Please mention correct country code',
  NUMBER_INVALID: 'Number should be between 9 and 13 digits',
  EMAIL_INVALID: 'Entered email is invalid',
  STATE_INVALID: 'Please select state',
  NOT_AGREED: 'Please agree to terms and conditions'
};

export interface InsertRequest {
  name: string;
  phone: string;
  email: string;
  state: string;
}

export interface InsertResponse {
  created: number;
}