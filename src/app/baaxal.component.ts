import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"

@Component({
  selector: 'baaxal-root',
  templateUrl: './baaxal.component.html',
  styleUrls: ['./baaxal.component.scss']
})
export class BaaxalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
