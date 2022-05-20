import { DatabaseResult } from "./database-result.model";

export class ImageDetails extends DatabaseResult {
  imageSource: string;
  alt: string;
  title: string;
  subTitle?: string;

  constructor() {
    super();
    this.imageSource = '';
    this.alt = '';
    this.title = '';
    this.subTitle = '';
  }
}
