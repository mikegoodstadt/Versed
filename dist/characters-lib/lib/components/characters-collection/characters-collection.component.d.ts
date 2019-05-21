import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';
export declare class CharactersCollectionComponent {
    private router;
    private breakpointObserver;
    private charactersLibService;
    characters: Observable<any[]>;
    cols: Observable<number>;
    constructor(router: Router, breakpointObserver: BreakpointObserver, charactersLibService: CharactersLibService);
    viewCharacter(card: Character): void;
}
