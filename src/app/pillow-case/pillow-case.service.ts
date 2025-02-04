import { Candy } from './../models/candy.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PillowCaseService {
  candyListChanged = new Subject<Candy[]>();

  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
    this.candyListChanged.next(this.myCandies.slice());
    console.log('this.myCandies:', this.myCandies);
  }

  clearCandy() {
    this.myCandies = [];
    this.candyListChanged.next(this.myCandies.slice());
  }
}
