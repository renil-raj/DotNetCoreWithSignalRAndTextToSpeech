import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    //this.startHttpRequest();
  }

  public startHttpRequest = (val:string) => {
    this.http.get('https://localhost:5001/api/TTSSupport?val='+val)
      .subscribe(res => {
        console.log(res);
      })
  }

}
