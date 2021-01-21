import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  description=
  "\tI am majoring in 3rd year of Informaion Technology at Thai-Nichi Institute of Technology"+
  ", The person who is diligent and responsible to any task that is in my responsibility,"+
  "\n\tIn the future I wish to be Fullstack Developer or Cryptocurrency Developer"+
  " and I will try my best to learn everything about Fullstack or Cryptocurrency development.";
  fname="Tanutchakorn";
  lname="Khaisang";
  email="tanutchakornkhaisaeng@gmail.com";
  phone="0952519263";
  frameworks="Angular 11"+
  "\nCodeigniter 3"+
  "\nBootstrap 4"+
  "\njQuery";
  languages="Thai"+
  "\nEnglish (TOEIC 540)"+
  "\nJapanese (JLPT N5)";
  programmings="Java"+
  "\nPython (numpy, pandas, sklearn, cv2)"+
  "\nJavascript (promise, async await)"+
  "\nSQL (query, subquery, PL/SQL)"+
  "\nPHP"+
  "\nHTML5";
  edu1="Rayongwittayakom School";
  edu2="Thai-Nichi Institute of Technology";
  constructor() { }

  ngOnInit(): void {
  }

}
