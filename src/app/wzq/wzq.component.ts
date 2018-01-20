import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wzq',
  templateUrl: './wzq.component.html',
  styleUrls: ['./wzq.component.scss']
})
export class WzqComponent implements OnInit {
  wzqArr: any[] = [];
  inputColor = 'black';
  game = {over: false, info: ''};
  index: number = 0;

  constructor() {
    this.clear();
  }

  check(y, x) {
    if (this.wzqArr[y][x].color !== 'none') {
      return;
    }
    this.wzqArr[y][x].color = this.inputColor;
    this.checkWin(this.checkNum(y, x, a => a - 1, b => b - 1), this.checkNum(y, x, a => a + 1, b => b + 1)) ||
    this.checkWin(this.checkNum(y, x, a => a - 1, b => b), this.checkNum(y, x, a => a + 1, b => b)) ||
    this.checkWin(this.checkNum(y, x, a => a - 1, b => b + 1), this.checkNum(y, x, a => a + 1, b => b - 1)) ||
    this.checkWin(this.checkNum(y, x, a => a, b => b - 1), this.checkNum(y, x, a => a, b => b + 1));
    this.inputColor === 'black' ? this.inputColor = 'white' : this.inputColor = 'black';
  }

  checkWin(indexFn, index2Fn) {
    if (this.index === 4) {
      this.game.over = true;
      this.inputColor === 'white' ? this.game.info = '白子赢了' : this.game.info = '黑子赢了';
      this.index = 0;
      return true;
    }
    this.index = 0;
  }

  clear() {
    this.game = {over: false, info: ''};
    this.wzqArr = [];
    for (let i = 0; i < 16; i++) {
      const lineArr: any[] = [];
      for (let x = 0; x < 16; x++) {
        lineArr.push({color: 'none'});
      }
      this.wzqArr.push(lineArr);
    }
  }

  checkNum(col, line, fn1, fn2) {
    if (fn1(col) < 0 || fn2(line) < 0 || fn1(col) >= 16 || fn2(line) >= 16 || this.wzqArr[fn1(col)][fn2(line)].color !== this.inputColor) {
      return;
    } else {
      this.index++;
      this.checkNum(fn1(col), fn2(line), fn1, fn2);
    }
  }

  ngOnInit() {
  }

}
