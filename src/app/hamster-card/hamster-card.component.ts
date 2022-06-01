import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss']
})
export class HamsterCardComponent implements OnInit {
  /*
  //erste Methode
  @Input() text: String = "";
  @Input() image: String = "";
  */
 @Input() hamsterInfos: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
