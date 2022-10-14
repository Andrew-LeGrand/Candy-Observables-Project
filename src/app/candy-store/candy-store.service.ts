import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Candy } from '../models/candy.model';

@Injectable({
  providedIn: 'root',
})
export class CandyStoreService {
  candySaleUpdate = new Subject<Candy[]>();

  private candiesForSale: Candy[] = [
    new Candy('Milky Way', 1),
    new Candy('Snickers', 2),
    new Candy('Twix', 1.5),
    new Candy('Skittles', 3),
    new Candy('M&M', 4),
  ];

  getCandiesForSale() {
    this.candySaleUpdate.next(this.candiesForSale.slice())
    return this.candiesForSale.slice();
  }

  addFiveCandies() {
    this.candiesForSale.push(
      new Candy('Milky Way', 1),
      new Candy('Snickers', 2),
      new Candy('Twix', 1.5),
      new Candy('Skittles', 3),
      new Candy('M&M', 4)
    );
    this.candySaleUpdate.next(this.candiesForSale.slice())
  }
}
