import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';
export declare class CharactersProfileComponent implements OnInit {
    private charactersLibService;
    current: Observable<Character>;
    constructor(charactersLibService: CharactersLibService);
    ngOnInit(): void;
}
