import { PillowCaseService } from './../pillow-case/pillow-case.service';
import { CandyStoreService } from './candy-store.service';
import { Candy } from './../models/candy.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candy-store',
  templateUrl: './candy-store.component.html',
  styleUrls: ['./candy-store.component.css'],
})
export class CandyStoreComponent implements OnInit {
  candySaleSub: Subscription;

  candiesForSale: Candy[] = [];

  constructor(
    private candyStoreService: CandyStoreService,
    private pillowCaseService: PillowCaseService
  ) {}

  ngOnInit(): void {
    this.candiesForSale = this.candyStoreService.getCandiesForSale();
    this.candySaleSub = this.candyStoreService.candySaleUpdate.subscribe((candy) => {
      console.log(candy);
      this.candiesForSale = candy;
    });
  }

  onSaveCandyToBag(candyName: string): void {
    this.pillowCaseService.addNewCandy(candyName);
  }

  onNewDelivery() {
    this.candyStoreService.addFiveCandies();
  }
}
