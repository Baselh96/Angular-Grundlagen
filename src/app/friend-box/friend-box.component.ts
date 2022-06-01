import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss']
})
export class FriendBoxComponent implements OnInit {

  //Hiermit kommt eine Instanz der FriendServices in dieses Komponent
  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}
