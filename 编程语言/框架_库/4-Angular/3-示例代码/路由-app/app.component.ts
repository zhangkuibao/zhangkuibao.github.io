import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}

  _inputVal;
  set inputVal(val) {
    console.log(val);
    this._inputVal = val;
  };

  get inputVal() {
    return this._inputVal;
  }
  staticVal = 'static';

  goto(path) {
    this.router.navigate([path]);
  }

  ngOnInit() {

  }
}
