export type CategoryId =
  | "setting"
  | "hardening"
  | "grinding"
  | "dressing"
  | "cutting"
  | "coiling"
  | "gauges";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface ProductSection {
  heading: string;
  body: string;
}

export interface KeySpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  machineType: string;
  slug: string;
  category: CategoryId;
  shortDescription: string;
  sections: ProductSection[];
  keySpecs?: KeySpec[];
  images: string[];
  pdfUrl: string;
  videoUrl?: string;
}
