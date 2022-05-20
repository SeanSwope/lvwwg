import { DatabaseResult } from "./database-result.model";

export class DonationDetails extends DatabaseResult {
  organizationName: string;
  donationYear: string;
  blockSets?: number;
  racecars?: number;
  rockingHorses?: number;
  trains?: number;
  wands?: number;
  misc?: string;

  constructor() {
    super();
    this.organizationName = '';
    this.donationYear = '';
    this.blockSets = 0;
    this.racecars = 0;
    this.rockingHorses = 0;
    this.trains = 0;
    this.wands = 0;
    this.misc = '';
  }
}
