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
  index = 0;

  constructor() {
    this.clear();
  }

  check(y, x) {
    if (this.wzqArr[y][x].empty) {
      return;
    }
    this.wzqArr[y][x].color = this.inputColor;
    this.wzqArr[y][x].empty = true;
    this.checkWin(this.checkNum(y, x,'col-1','line-1'), this.checkNum(y, x,'col+1','line+1'))
    this.checkWin(this.checkNum(y, x,'col-1','line'), this.checkNum(y, x,'col+1','line'))
    this.checkWin(this.checkNum(y, x,'col-1','line+1'), this.checkNum(y, x,'col+1','line-1'))
    this.checkWin(this.checkNum(y, x,'col','line-1'), this.checkNum(y, x,'col','line+1'))
    this.inputColor === 'black' ? this.inputColor = 'white' : this.inputColor = 'black';
  }

  checkWin(indexFn, index2Fn) {
    if (this.index === 4) {
      this.game.over = true;
      this.inputColor === 'white' ? this.game.info = '白子赢了' : this.game.info = '黑子赢了';
    }
    this.index = 0;
  }

  clear() {
    this.game = {over: false, info: ''};
    this.wzqArr = [];
    for (let i = 0; i < 16; i++) {
      let lineArr: any[] = [];
      for (let x = 0; x < 16; x++) {
        lineArr.push({color: 'none', empty: false});
      }
      this.wzqArr.push(lineArr);
    }
  }

  checkNum(col, line,fn1,fn2) {
      if ( eval(fn1) < 0 || eval(fn2) < 0 ||eval(fn1) >=16 ||eval(fn2)>= 16|| this.wzqArr[eval(fn1)][eval(fn2)].empty === false || this.wzqArr[eval(fn1)][eval(fn2)].color !== this.inputColor) {
        return;
      } else {
        this.index++;
        this.checkNum(eval(fn1), eval(fn2),fn1,fn2);
      }
    }

  ngOnInit() {
  }

}
