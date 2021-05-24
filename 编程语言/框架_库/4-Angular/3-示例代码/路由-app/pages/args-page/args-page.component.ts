import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-args-page',
  templateUrl: './args-page.component.html',
  styleUrls: ['./args-page.component.css']
})
export class ArgsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  id: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
  }

}
