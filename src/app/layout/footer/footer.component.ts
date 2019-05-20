import { Component, HostBinding, VERSION } from '@angular/core';

@Component({
  selector: 'versed-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @HostBinding('class') classes = 'footer';
  version = VERSION;

  private legalmenu: any[] = [
    { title: 'Legal', link: 'https://mikegoodstadt.org/legal' },
    { title: 'Privacy', link: 'https://mikegoodstadt.org/privacy' },
    { title: 'Cookies', link: 'https://mikegoodstadt.org/cookies' }
  ];

  today: number = Date.now();
}
