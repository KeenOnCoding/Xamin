import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        // @ts-ignore
        window.$('#loading').show()
      }
    });
  }

  ngOnInit() {
  }

}
