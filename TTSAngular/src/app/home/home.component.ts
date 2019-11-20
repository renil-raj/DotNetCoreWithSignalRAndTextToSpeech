import { Component, OnInit } from '@angular/core';

import { SignalRService } from '../services/signal-r.service';
import {MultilingualTTSService} from "../services/multilingual-tts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeText: string;
  public lngA: object;
  public slectedLng : string;

  constructor(public signalRService: SignalRService, private spch: MultilingualTTSService) { 
    
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.slectedLng = event.target.value;
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.signalRService.notification.subscribe((txt:string) =>{
      this.speak(txt);
    });
    this.spch.voice.subscribe((v:object)=>{
      this.lngA=v;
      this.slectedLng=this.lngA[0].lang;
    });
    this.homeText = "WELCOME TO ACCOUNT-OWNER APPLICATION";
  }  

  speak(txt:string):void{
    this.spch.sayIt(txt,this.slectedLng);
  }

}
