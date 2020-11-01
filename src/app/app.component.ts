import {Component, OnInit} from '@angular/core';
import {OpendataHaitiService} from './opendata-haiti.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aplikasyon-tichaiti-live';
  lisDepatman: any;
  constructor(sevis: OpendataHaitiService) {
    sevis.ranmaseDepatman().subscribe((data: any) => {
      this.lisDepatman = data.items.filter((item: any) => item.level === 1)
        .map((depatman: any) => {
          return {
            non: depatman.name,
            ...depatman
          };
        });
    });
  }

  ngOnInit(): void {
  }
}
