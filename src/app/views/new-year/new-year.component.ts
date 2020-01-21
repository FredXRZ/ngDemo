import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-year',
  templateUrl: './new-year.component.html',
  styleUrls: ['./new-year.component.scss']
})
export class NewYearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getLocation()
  }
  getLocation = () => {
    console.log(window);
    
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos);
      });
    } else {
      alert("浏览器不支持地理定位");
    }
    //调用coords的latitude和longitude即可获取到用户的纬度和经度。
  };
}
