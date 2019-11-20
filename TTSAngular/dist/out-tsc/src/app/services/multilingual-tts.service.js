import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let MultilingualTTSService = class MultilingualTTSService {
    constructor() {
        this.synth = window.speechSynthesis;
    }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    langArray() {
        // var[this.lng.length] r;
        // var i = 0;
        this.lng = this.synth.getVoices();
        // this.lng.forEach(element => {
        //   r[i] = element;
        //   i=i+1;
        // });
        return this.lng;
    }
    sayIt(txt, ln) {
        var utterThis = new SpeechSynthesisUtterance(txt);
        this.lng.forEach(element => {
            if (element.lang == ln) {
                utterThis.voice = element;
            }
        });
        this.synth.speak(utterThis);
    }
};
MultilingualTTSService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MultilingualTTSService);
export { MultilingualTTSService };
//# sourceMappingURL=multilingual-tts.service.js.map