import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  @Input() navList: any[];
  @Input() titleSectionProp: any;

  constructor() { }

  ngOnInit() {
  }
}
