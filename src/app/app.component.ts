import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularism';
  subscription: Subscription;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.subscription = this.appService
      .getData()
      .subscribe((res) => console.log(res));

    console.log(this.subscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // console.log(this.subscription); provare negli altri componenti
  }
}
