import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  areaArr: any[] = [];
  snakeArr: any[] = [];
  keyOpen = true;
  direction: string = 'right';

  constructor() {
    this.clear();
    const n = setInterval(() => {
      switch (this.direction) {
        case 'right' :
          const rightHead = {y: this.snakeArr[this.snakeArr.length - 1]['y'], x: this.snakeArr[this.snakeArr.length - 1]['x'] + 1};
          this.gameThink(rightHead, n);
          break;
        case 'left' :
          const leftHead = {y: this.snakeArr[this.snakeArr.length - 1]['y'], x: this.snakeArr[this.snakeArr.length - 1]['x'] - 1};
          this.gameThink(leftHead, n);
          break;
        case 'up' :
          const upHead = {y: this.snakeArr[this.snakeArr.length - 1]['y'] - 1, x: this.snakeArr[this.snakeArr.length - 1]['x'] };
          this.gameThink(upHead, n);
          break;
        case 'down' :
          const downHead = {y: this.snakeArr[this.snakeArr.length - 1]['y'] + 1, x: this.snakeArr[this.snakeArr.length - 1]['x'] };
          this.gameThink(downHead, n);
          break;
        default: break;
      }
    }, 200)
    $(() => {
      $(window).keydown(event => {
        event.preventDefault();
        if ( !this.keyOpen ) {return; }
        switch (event.keyCode) {
          case 37: this.checkDirec('right', 'left'); break;
          case 38: this.checkDirec('down', 'up'); break;
          case 39: this.checkDirec('left', 'right'); break;
          case 40: this.checkDirec('up', 'down'); break;
          default: break;
        }});
    });
  }
  gameThink(headJson, n ) {
    if (headJson['y'] > 49 || headJson['x'] > 49 || headJson['y'] < 0 || headJson['x'] < 0 || this.areaArr[headJson['y']][headJson['x']]['inner'] === 'snakeBody' ) {
      alert('游戏结束');
      clearInterval(n);
      return;
    }
    this.snakeArr.push(headJson);
    if (this.areaArr[headJson['y']][headJson['x']]['inner'] !== 'food') {
      this.areaArr[this.snakeArr[0]['y']][this.snakeArr[0]['x']]['inner'] = 'none';
      this.snakeArr.splice(0, 1);
    }else {
      this.addFood();
    }
    this.drawSnake();
  }
  checkDirec(oldDirec, newDirec) {
    if (this.direction !== oldDirec) {
      this.direction = newDirec;
      this.keyOpen = false;
    }
  }
  clear() {
    this.areaArr = [];
    for (let x = 0; x < 50; x++) {
      const arr = [];
      for (let y = 0; y < 50; y++) {
        arr.push({inner: 'none'});
      }
      this.areaArr.push(arr);
    }
    this.snakeArr = [{y: 25, x: 24}, {y: 25, x: 25}, {y: 25, x: 26}]
    this.drawSnake();
    this.addFood();
  }
  drawSnake() {
    this.snakeArr.map((data) => {this.areaArr[data.y][data.x]['inner'] = 'snakeBody'; });
    this.keyOpen = true;
  }
  addFood() {
    const x = parseInt(String(Math.random() * 50), 10);
    const y = parseInt(String(Math.random() * 50), 10);
    this.areaArr[y][x]['inner'] !== 'none' ? this.addFood() : this.areaArr[y][x]['inner'] = 'food';
  }
  ngOnInit() {}
}
