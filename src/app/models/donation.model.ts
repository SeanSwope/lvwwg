import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class DonationDetail extends DatabaseResult {
  id: string;
  organizationName: string;
  donationYear: Date;
  blockSets?: number;
  racecars?: number;
  rockingHorses?: number;
  trains?: number;
  wands?: number;
  misc?: string;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.organizationName = '';
    this.donationYear = new Date();
    this.blockSets = 0;
    this.racecars = 0;
    this.rockingHorses = 0;
    this.trains = 0;
    this.wands = 0;
    this.misc = '';
  }
}
