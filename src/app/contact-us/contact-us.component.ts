import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
  senderName = 'Enter your name';
  senderEmail = 'Enter your email';
  subjectOptions: Array<SelectItem> = [];
  selectedSubject: SelectItem = {label: '', value: ''};
  message = '';
  copyMe = false;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.subjectOptions.push({label: 'Feedback', value: 'feedback'});
    this.subjectOptions.push({label: 'Report a bug', value: 'report-bug'});
    this.subjectOptions.push({label: 'Feature request', value: 'Feature-request'});
    this.selectedSubject = this.subjectOptions[0];
  }

  onSend() {
    // this.emailService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
  }
}