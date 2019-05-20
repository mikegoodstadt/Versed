import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'versed-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @HostBinding('class') classes = 'menu';
    @Input() private menulist: any[] = [];
}
