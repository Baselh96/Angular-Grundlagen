import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: String = 'my-first-Project';
/*
//erste Methode
  hamsterTexte = [
    "Hallo mein Name ist Basel!!. Ich bin hier, um neue Freunden zu treffen.",
    "Hallo mein Name ist Eva!!. Ich bin hier, um neue Freunden zu treffen.",
    "Hallo mein Name ist Anna!!. Ich bin hier, um neue Freunden zu treffen.",
    "Hallo mein Name ist Jusuf!!. Ich bin hier, um neue Freunden zu treffen.",
    "Hallo mein Name ist Ela!!. Ich bin hier, um neue Freunden zu treffen."
  ];

  hamsterBilder = [
    "../assets/images/hamster/hamster-3604592_640.jpg",
    "../assets/images/hamster/guinea-pig-2513177_640.jpg",
    "../assets/images/hamster/hamster-7178657_640.jpg",
    "../assets/images/hamster/hamster-4017846_640.jpg",
    "../assets/images/hamster/hamster-727293_640.jpg"
  ];
*/
  /*
  //Methode 2
  hamsterInfos = [
    { 
      text: "Hallo mein Name ist Basel!!. Ich bin hier, um neue Freunden zu treffen.",
      image: "../assets/images/hamster/guinea-pig-2513177_640.jpg" 
    },
    { 
      text: "Hallo mein Name ist Eva!!. Ich bin hier, um neue Freunden zu treffen.",
      image:  "../assets/images/hamster/hamster-727293_640.jpg" 
    },
    { 
      text: "Hallo mein Name ist Anna!!. Ich bin hier, um neue Freunden zu treffen.",
      image: "../assets/images/hamster/hamster-7178657_640.jpg"
    },
    { 
      text: "Hallo mein Name ist Jusuf!!. Ich bin hier, um neue Freunden zu treffen.",
      image: "../assets/images/hamster/hamster-4017846_640.jpg"
    },
    { 
      text: "Hallo mein Name ist Ela!!. Ich bin hier, um neue Freunden zu treffen.",
      image: "../assets/images/hamster/hamster-3604592_640.jpg"
    },
];*/

hamsterInfos = [
  [ 
    "Hallo mein Name ist Basel!!. Ich bin hier, um neue Freunden zu treffen.",
    "../assets/images/hamster/guinea-pig-2513177_640.jpg" 
  ],
  [
    "Hallo mein Name ist Eva!!. Ich bin hier, um neue Freunden zu treffen.",
    "../assets/images/hamster/hamster-727293_640.jpg" 
  ],
  [
    "Hallo mein Name ist Anna!!. Ich bin hier, um neue Freunden zu treffen.",
    "../assets/images/hamster/hamster-7178657_640.jpg"
  ],
  [
    "Hallo mein Name ist Jusuf!!. Ich bin hier, um neue Freunden zu treffen.",
    "../assets/images/hamster/hamster-4017846_640.jpg"
  ],
  [
    "Hallo mein Name ist Ela!!. Ich bin hier, um neue Freunden zu treffen.",
    "../assets/images/hamster/hamster-3604592_640.jpg"
  ],
];

  // Hier wird Js- bzw. Ts-Code geschrieben
  clickFun() {
    alert("Opps falsch gedrückt");
  }
}
