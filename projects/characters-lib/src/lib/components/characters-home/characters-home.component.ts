import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  public characters: Observable<Character[]>;
  private _current: Observable<Character>;

  constructor(
    private charactersService: CharactersLibService
   ) {
    this.characters = this.charactersService.characters;
    this._current = this.charactersService.current;
   }

  ngOnInit() {}

  public get current(): any {
    return this._current;
   }
   public set current(character: any) {
     this.charactersService.setCurrent(character);
   }

}
