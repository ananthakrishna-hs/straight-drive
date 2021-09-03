export interface GalleryImageItem {
  path: string;
}

export interface GalleryImageItems extends Array<GalleryImageItem> {}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqItems extends Array<FaqItem> {}