import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-depatman',
  templateUrl: './depatman.component.html',
  styleUrls: ['./depatman.component.scss']
})
export class DepatmanComponent implements OnInit {
  @Input('non') non: string;
  @Input('id') id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
