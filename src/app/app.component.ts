import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'ng-shadow-root-exp';
  constructor(private router: Router){}
  ngAfterViewInit(){
    this.router.navigate(['nextPage'])
  }
}
