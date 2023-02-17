import { Component, OnInit } from '@angular/core';

declare function smoothFunction(): any;
declare function themeFunction(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export default class AppComponent implements OnInit {
  title = 'rifasAuto';

  ngOnInit(): void {
    
    smoothFunction();
    themeFunction();
    
  }

  onActivate(event:any) {

    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }

    }, 16);
  }
}
