import { Injectable } from '@angular/core';

@Injectable({
  //hierbei wird bestätigt, dass diese Service ab root-Ebene verfügbar ist
  providedIn: 'root'
})
export class FriendService {

  namen:string[] = [];
  texts:string[] = [];
  bilder:string[] = [];

  constructor() { }

  addFriend (name:string, bild:string, text:string) {
    this.namen.push(name);
    this.bilder.push(bild);
    this.texts.push(text);
  }
}
