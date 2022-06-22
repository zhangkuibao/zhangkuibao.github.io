---
date: '2021-09-09 09:45:29'
title: 【Angular】监听值的变化
tags:
  - JavaScript
  - Angular
---

## 使用 getter

在 `Angular` 中可以用 `getter` 来监听某个值的变化，类似于 `Vue` 中的 `computed`

```js
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  _inputVal;

  set inputVal(val) {
    this._inputVal = val;
    this.inputChange();
  }

  get inputVal() {
    return this._inputVal;
  }

  inputChange(val) {
    console.log(val);
  }
}
```
