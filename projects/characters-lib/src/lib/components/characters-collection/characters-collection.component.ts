import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'characters-collection',
  templateUrl: './characters-collection.component.html',
  styleUrls: ['./characters-collection.component.scss']
})
export class CharactersCollectionComponent {
  @Input() characters: Observable<any[]>;
  public cols: Observable<number>;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private charactersLibService: CharactersLibService
    ) {
    this.characters = this.charactersLibService.characters;

    /** Based on the screen size, switch from standard to one column per row */
    this.cols = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
      ]).pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          return 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          return 2;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          return 3;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          return 4;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          return 5;
        }
      })
    );
  }

  public viewCharacter(card: Character) {
    this.charactersLibService.setCurrent(card);
    this.router.navigate(['profile']);
  }

}
