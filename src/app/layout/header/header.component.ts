import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'versed-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostBinding('class') classes = 'header';
  // @Input() topmenu: string[] = [];

  private topmenu: any[] = [
    { title: 'Versed', route: '/' },
    { title: 'Characters', icon: 'cog', route: '/characters' },
    { title: 'User', icon: 'user', route: '/user' }
  ];

}

