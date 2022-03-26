import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-area',
  templateUrl: './box-area.component.html',
  styleUrls: ['./box-area.component.scss']
})
export class BoxAreaComponent implements OnInit {

  @Input() value: 'X' | 'O' | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
