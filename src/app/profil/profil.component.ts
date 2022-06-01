import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  @Input() name = "Basel";
  @Input() text = "magt freunde";
  @Input() bild = "../assets/images/hamster/hamster-3604592_640.jpg";
  @Input() canFollow = true;

  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}
