import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit, OnDestroy {
  private myCandiesSub: Subscription;

  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.myCandiesSub = this.pillowCaseService.candyListChanged.subscribe((candy) => {
      console.log(candy);
      this.myCandies = candy;
    });
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }

  ngOnDestroy(): void {
    this.myCandiesSub.unsubscribe();
  }

}
