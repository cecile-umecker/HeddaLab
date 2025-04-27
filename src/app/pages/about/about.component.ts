import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit() {
    const elem = document.querySelector('.tap-target');
    if (elem) {
      const instance = M.TapTarget.init(elem);
      instance.open();
      // Fermeture automatique après 5 secondes
      setTimeout(() => {
        instance.close();
      }, 5000);
    }
  }
  

}
