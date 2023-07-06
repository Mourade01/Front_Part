import { Component } from '@angular/core';

@Component({
  selector: 'app-chinguitel',
  templateUrl: './chinguitel.component.html',
  styleUrls: ['./chinguitel.component.scss']
})
export class CardsComponent {

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  constructor() { }

}
