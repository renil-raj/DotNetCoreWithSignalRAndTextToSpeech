import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

declare function TreeWalker(params:string):any;

@Injectable({
  providedIn: 'root'
})
export class MultilingualTTSService {
  public synth : SpeechSynthesis;
  public lng : SpeechSynthesisVoice[];
  voice: EventEmitter<object> =  new EventEmitter<object>();
  
  constructor() {
    //https://stackoverflow.com/questions/49506716/speechsynthesis-getvoices-returns-empty-array-on-windows
    setTimeout(() => {
      this.lng=window.speechSynthesis.getVoices();
      this.voice.emit(this.lng);
  }, 50);
    this.synth = window.speechSynthesis;
   }
   loadScript(url: string):void {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  sayIt(txt:string,ln:string): void {
    var utterThis = new SpeechSynthesisUtterance(txt);
    this.lng.forEach(element => {
      if(element.lang==ln){
        utterThis.voice=element;
      }
    });
    this.synth.speak(utterThis);

}

}
