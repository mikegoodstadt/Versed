import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';
export declare class CharactersHomeComponent implements OnInit {
    private charactersService;
    characters: Observable<Character[]>;
    private _current;
    constructor(charactersService: CharactersLibService);
    ngOnInit(): void;
    current: any;
}
