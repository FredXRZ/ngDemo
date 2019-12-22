import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardList:Array<any> = [
    {
      name:'Angular环境配置及脚手架构件',
      path:'config'
    },
    {
      name:'文件架构',
      path:'files'
    },
    {
      name:'语法糖',
      path:'grammar'
    },
    {
      name:'路由',
      path:'router'
    },
  ]
  constructor(
    private router:Router
  ) { }
  // 跳转页面
  goTo( url:String ){
    this.router.navigate([`/${url}`]);
  }
  ngOnInit() {
  }

}
