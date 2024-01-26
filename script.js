'use strict';

class App{
    // private members
    #date;
    #currYear;
    #actual_target;
    // protected members
    _days_label;
    _hours_label;
    _mins_label;
    _secs_label;
    
    constructor(){
        this._days_label = document.querySelector('.days');
        this._hours_label = document.querySelector('.hours');
        this._mins_label = document.querySelector('.minutes');
        this._secs_label = document.querySelector('.seconds');
        this.#date = new Date();
        this.#currYear = this.#date.getFullYear();
        this.#actual_target = new Date(`${this.#currYear + 1}-01-01T00:00:00`);

        setInterval(() => {
            this._getTime(this.#actual_target);
        }, 1000);
    }
    _getTime(target){
        const currTime = Date.now();

        const difference = target - currTime;

        let dys = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hrs =  Math.floor(difference / (1000 * 60 * 60)) % 24;
        let mins = Math.floor(difference / (1000 * 60)) % 60;
        let secs = Math.floor(difference / 1000) % 60;
    
        dys = dys.toString().padStart(2,'0');
        hrs = hrs.toString().padStart(2,'0');
        mins = mins.toString().padStart(2,'0');
        secs = secs.toString().padStart(2,'0');

        this._days_label.innerHTML = dys;
        this._hours_label.innerHTML = hrs;
        this._mins_label.innerHTML = mins;
        this._secs_label.innerHTML = secs;
    }
}

let app = new App();