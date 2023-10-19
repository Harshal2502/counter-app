import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-carlos',
  templateUrl: './carlos.component.html',
  styleUrls: ['./carlos.component.css']
})
export class CarlosComponent {
  constructor(public counterService: CounterService) { }
}
