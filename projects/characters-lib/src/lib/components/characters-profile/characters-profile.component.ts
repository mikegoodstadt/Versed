import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersLibService } from '../../characters-lib.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'characters-profile',
  templateUrl: './characters-profile.component.html',
  styleUrls: ['./characters-profile.component.scss']
})
export class CharactersProfileComponent implements OnInit {
  public current: Observable<Character>;

  constructor(
    private charactersLibService: CharactersLibService
    ) {
    this.current = this.charactersLibService.current;
    }

  ngOnInit() {
    console.log(this.current);
  }

}
