import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { DatasetsLibService } from 'datasets-lib';
import { UuidService } from 'shared-lib';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './models/character.model';

@Injectable({
  providedIn: 'root',
})

export class CharactersLibService implements OnInit {
  private charactersStream: BehaviorSubject<Character[]>;
  private currentStream: BehaviorSubject<Character>;
  private initialized: boolean;

  constructor(
    public localStorageService: LocalStorageService,
    public uuidService: UuidService,
    private datasetService: DatasetsLibService
    ) {
    this.initialized = false;
    this.charactersStream = new BehaviorSubject<Character[]>(null);
    this.currentStream = new BehaviorSubject<Character>(null);
  }

  public get characters(): Observable<Character[]> {
    return this.charactersStream.asObservable();
  }
  private setCharacters(charactersArray) {
    this.charactersStream.next(charactersArray);
    this.localStorageService.set('characters', charactersArray);
  }

  public getCharacter(character?): Observable<Character> {
    if (!character) {
      return this.charactersStream.pipe(
        map(chrs => chrs[0])
      );
      }
    return this.charactersStream.pipe(
      map(chrs => chrs.find(chr => chr.uuid === character.uuid))
    );
  }

  public getCharacterById(uuid: number) {
    return this.charactersStream.pipe(
      map(chrs => chrs.find(chr => chr.uuid === uuid))
    );
  }

  public get current(): Observable<Character> {
    return this.currentStream.asObservable();
  }
  public setCurrent(character: Character): void {
    this.currentStream.next(character);
    this.localStorageService.set('currentCharacter', character);
  }

  public ngOnInit() {}

  public init(): Promise<any> {
    if (!this.initialized) {
      this.loadCharacters();
      this.initialized = true;
    }
    return new Promise(resolve => {
      resolve(this.initialized);
    });
  }
  private loadCharacters(): void {
    const charactersObs = this.datasetService.getCharacters();
    let chrArray: any[];
    charactersObs.subscribe(chrs => {
      chrArray = chrs;
      console.log(chrArray);
      this.setCharacters(chrArray);
      this.loadCurrent();
      console.log('Characters loaded from SwAPI.co!');
    });
  }

  private loadCurrent(): void {
    let chr = this.localStorageService.get('current');
    if (!chr) {
      console.log('No current character in LocalStorage.');
      this.characters.subscribe(chrs => chr = chrs[0]);
    }
    this.setCurrent(chr);
    console.log('Current set to: ', chr.title);
  }

  public createCharacter(): Character {
    const chr = new Character();
    chr.uuid = this.uuidService.generate();
    return chr;
  }

  public addCharacters(charactersArray) {
    console.log('adding chrs: ', charactersArray);
    for (const chr of charactersArray) {
      this.uuidService.cache(chr.uuid);
    }
    this.setCharacters(charactersArray);
  }

  public addCharacter(character: Character) {
    this.uuidService.cache(character.uuid);
    const charactersArray = [ ...this.charactersStream.getValue(), character ];
    this.setCharacters(charactersArray);
  }

  public updateCharacter(character: Character) {
    const charactersArray = [ ...this.charactersStream.getValue()];
    const index = charactersArray.findIndex(item => item.uuid === character.uuid);
    charactersArray.splice(index, 1, character);
    this.setCharacters(charactersArray);
  }

  public deleteCharacter(character: Character) {
    const charactersArray = this.charactersStream.getValue().filter(chr => chr.uuid !== character.uuid);
    this.uuidService.release(character.uuid);

    // If deleting character leaves Characters empty, create and add new default character.
    if (!charactersArray.length) {
      const chr = this.createCharacter();
      charactersArray.push(chr);
    }
    this.setCharacters(charactersArray);

    // If current, set to first in characters list.
    let currentUuid: string;
    this.current.subscribe(curr => currentUuid = curr.uuid);
    if (character.uuid === currentUuid) {
      let chr: Character;
      this.characters.subscribe(chrs => chr = chrs[0]);
      this.setCurrent(chr);
    }
  }

}
