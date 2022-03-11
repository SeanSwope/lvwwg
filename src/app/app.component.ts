import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Lehigh Valley Woodworkes Guild';
  menuItems!: MenuItem[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
  ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;

      this.menuItems = [
        {label: 'Home', id: '101', icon: 'far fa-handshake' },
        {label: 'Meetings', id: '102', icon: 'far fa-handshake' },
        {label: 'Newsletter', id: '103', icon: 'far fa-newspaper' },
        {label: 'Gallery', id: '104', icon: 'far fa-images' },
        {label: 'Give Back', id: '105', icon: 'fas fa-tasks' },
        {label: 'Members Market', id: '106', icon: 'fas fa-store' },
        // {label: 'Wood Deals', id: '107', icon: 'fas fa-comment-dollar' },
        {label: 'Showcase', id: '108', icon: 'fas fa-users' },
        {label: 'Links', id: '109', icon: 'fas fa-info-circle' },
        {label: 'About Us', id: '110', icon: 'far fa-envelope' },
        // {label: 'Contact Us', id: '110', icon: 'far fa-envelope' },
    ];
  }

  onAction(menuItem: MenuItem) {
    const navigationDetails: string[] = [];

    switch (menuItem.id) {
      case '101':
        navigationDetails.push('/home');
        break;
      case '102':
        navigationDetails.push('/meetings');
        break;
      case '103':
        navigationDetails.push('/newsletter');
      break;
      case '104':
        navigationDetails.push('/gallery');
        break;
      case '105':
        navigationDetails.push('/give-back');
      break;
      case '106':
        navigationDetails.push('/market');
      break;
      case '107':
      break;
      case '108':
        navigationDetails.push('/showcase');
      break;
      case '109':
        navigationDetails.push('/links');
        break;
      case '110':
        navigationDetails.push('/about-us');
      break;
    }

    this.router.navigate(navigationDetails);
  }
}
