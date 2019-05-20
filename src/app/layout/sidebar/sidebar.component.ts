import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'versed-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @HostBinding('class') classes = 'sidebar';

  private sidemenu: any[] = [
    { title: 'Projects', route: '/projects' },
    { title: 'Workspace', route: '/workspace' },
    { title: 'Archives', route: '/archives' }
  ];

  constructor() {}

}
