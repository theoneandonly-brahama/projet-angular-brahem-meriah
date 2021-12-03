import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    '.column {float: left;width: 33.3%;margin-bottom: 16px;padding: 0 8px;}',
    '.card {box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);margin: 8px;}',
    '.about-section {padding: 50px;text-align: center;background-color: #474e5d;color: white;}',
    '.container {padding: 0 16px;}','.container::after, .row::after {content: "";clear: both;display: table;}',
    '.title {color: grey;}',
  
  '.button {border: none;outline: 0;display: inline-block;padding: 8px;color: white;background-color: #000;text-align: center;cursor: pointer;width: 100%;}'
  
  ,'.button:hover {background-color:#555;}'
  ,'img {widh:500px;height:500px;}'
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
