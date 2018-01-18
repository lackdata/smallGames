import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wzq',
  templateUrl: './wzq.component.html',
  styleUrls: ['./wzq.component.scss']
})
export class WzqComponent implements OnInit {
  wzqArr: any[] = [];
  inputColor = 'black';
  game = {over: false, info: ''}
  index1 = 0;
  index2 = 0;

  constructor() {
    for (let i = 0; i < 16; i++) {
      let lineArr: any[] = [];
      for (let x = 0; x < 16; x++) {
        lineArr.push({color: 'none', empty: false});
      }
      this.wzqArr.push(lineArr);
    }
  }

  check(y, x) {
    if (this.wzqArr[y][x].empty) {
      return;
    }
    this.wzqArr[y][x].color = this.inputColor;
    this.wzqArr[y][x].empty = true;
    this.checkWin(this.checkWin1(y, x), this.checkWin8(y, x))
    this.checkWin(this.checkWin2(y, x), this.checkWin7(y, x))
    this.checkWin(this.checkWin3(y, x), this.checkWin6(y, x))
    this.checkWin(this.checkWin4(y, x), this.checkWin5(y, x))
    this.inputColor === 'black' ? this.inputColor = 'white' : this.inputColor = 'black';
  }

  checkWin(index1Fn, index2Fn) {
    console.log(this.index1 + ',' + this.index2);
    if (this.index1 + this.index2 === 4) {
      this.game.over = true;
      this.inputColor === 'white' ? this.game.info = '白子赢了' : this.game.info = '黑子赢了';
      return;
    }
    this.index1 = 0;
    this.index2 = 0;
  }

  clear() {
    this.game = {
      over: false,
      info: ''
    };
    this.wzqArr = [];
    for (let i = 0; i < 16; i++) {
      let lineArr: any[] = [];
      for (let x = 0; x < 16; x++) {
        lineArr.push({color: 'none', empty: false});
      }
      this.wzqArr.push(lineArr);
    }
    this.index1 = 0;
    this.index2 = 0;
  }

  checkWin1(col, line) {
    if (col - 1 < 0 || line - 1 < 0) {
      return;
    }
    if (this.wzqArr[col - 1][line - 1].empty === false || this.wzqArr[col - 1][line - 1].color !== this.inputColor) {
      return;
    } else {
      this.index1++;
      this.checkWin1(col - 1, line - 1);
    }
  }

  checkWin2(col, line) {
    if (col - 1 < 0 || line < 0) {
      return;
    }
    if (this.wzqArr[col - 1][line].empty === false || this.wzqArr[col - 1][line].color !== this.inputColor) {
      return;
    } else {
      this.index1++;
      this.checkWin2(col - 1, line);
    }
  }

  checkWin3(col, line) {
    if (col - 1 < 0 || line + 1 >= 16) {
      return;
    }
    if (this.wzqArr[col - 1][line + 1].empty === false || this.wzqArr[col - 1][line + 1].color !== this.inputColor) {
      return;
    } else {
      this.index1++;
      this.checkWin3(col - 1, line + 1);
    }
  }

  checkWin4(col, line) {
    if (col < 0 || line - 1 < 0) {
      return;
    }
    if (this.wzqArr[col][line - 1].empty === false || this.wzqArr[col][line - 1].color !== this.inputColor) {
      return;
    } else {
      this.index1++;
      this.checkWin4(col, line - 1);
    }
  }

  checkWin5(col, line) {
    if (col < 0 || line + 1 >= 16) {
      return;
    }
    if (this.wzqArr[col][line + 1].empty === false || this.wzqArr[col][line + 1].color !== this.inputColor) {
      return;
    } else {
      this.index2++;
      this.checkWin5(col, line + 1);
    }
  }

  checkWin6(col, line) {
    if (col + 1 >= 16 || line - 1 < 0) {
      return;
    }
    if (this.wzqArr[col + 1][line - 1].empty === false || this.wzqArr[col + 1][line - 1].color !== this.inputColor) {
      return;
    } else {
      this.index2++;
      this.checkWin6(col + 1, line - 1);
    }
  }

  checkWin7(col, line) {
    if (col + 1 >= 16 || line < 0) {
      return;
    }
    if (this.wzqArr[col + 1][line].empty === false || this.wzqArr[col + 1][line].color !== this.inputColor) {
      return;
    } else {
      this.index2++;
      this.checkWin7(col + 1, line);
    }
  }

  checkWin8(col, line) {
    if (col + 1 >= 16 || line + 1 >= 16) {
      return;
    }
    ;
    if (this.wzqArr[col + 1][line + 1].empty === false || this.wzqArr[col + 1][line + 1].color !== this.inputColor) {
      return;
    } else {
      this.index2++;
      this.checkWin8(col + 1, line + 1);
    }
  }


  ngOnInit() {
  }

}
