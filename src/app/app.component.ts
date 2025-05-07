import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HeddaLab';

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    if (window.pageYOffset > 300) {
      button.classList.add('show');
      button.classList.remove('hide');
    } else {
      button.classList.add('hide');
      button.classList.remove('show');
    }
  }

  ngOnInit() {
    const button = document.getElementById('back-to-top');
    button?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
