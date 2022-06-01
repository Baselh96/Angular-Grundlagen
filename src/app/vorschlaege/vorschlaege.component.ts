import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vorschlaege',
  templateUrl: './vorschlaege.component.html',
  styleUrls: ['./vorschlaege.component.scss']
})
export class VorschlaegeComponent implements OnInit {

  namen = [ "Jan", "Markos", "Katrin", "Jusafina"];
  texts = [ "3 Jahre alt.", "gräbt sehr gerne", "spielt mit freuenden", "liebt schaukeln"];
  bilder = [
    "../assets/images/hamster/guinea-pig-2513177_640.jpg",
    "../assets/images/hamster/hamster-7178657_640.jpg",
    "../assets/images/hamster/hamster-4017846_640.jpg",
    "../assets/images/hamster/hamster-727293_640.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
