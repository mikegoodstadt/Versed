import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { v5 as url2id } from 'uuid';
import { Url } from 'url';

/*
 * Adapted from https://stackoverflow.com/a/55365334/1667410
 */
@Injectable({
  providedIn: 'root',
})
export class UuidService {
  public idCache: string[] = [];

  constructor() {}

  public generate(url?: Url): string {
    let isUnique = false;
    let tempId = '';

    if (url) {
      tempId = url2id(url, url2id.URL);
    } else {
      tempId = uuid();
    }

    while (!isUnique) {
      if (!this.idExists(tempId)) {
        isUnique = true;
      }
    }
    // console.log(this.idCache);
    return tempId;
  }

  public cache(id: string): void {
    this.idCache.push(id);
  }

  public release(id: string): void {
    const index = this.idCache.indexOf(id);
    this.idCache.splice(index, 1);
  }

  private idExists(id: string): boolean {
    return this.idCache.includes(id);
  }

}
