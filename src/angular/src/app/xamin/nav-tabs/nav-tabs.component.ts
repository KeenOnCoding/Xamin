import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html'
})
export class NavTabsComponent implements OnInit {

  @Input() navList: any[];

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.show_content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }

}
