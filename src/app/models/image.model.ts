import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class ImageDetail extends DatabaseResult {
  id: string;
  imageSource: string;
  alt: string;
  title: string;
  subTitle?: string;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.imageSource = '';
    this.alt = '';
    this.title = '';
    this.subTitle = '';
  }
}
