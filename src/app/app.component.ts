import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Lehigh Valley Woodworkes Guild';
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;

      this.items = [
        {label: 'Update', icon: 'pi pi-refresh', command: () => { this.onSave(); }},
        {label: 'Delete', icon: 'pi pi-times', command: () => { this.onSave(); }},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator: true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }

  onSave() {
    alert('onSave() pressed');
  }
}
