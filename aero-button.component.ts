import {Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChange} from '@angular/core';


@Component({
    selector: 'aero-button',
    template: `
<button type="button" class="btn btn-sm btn-white " (click)="onClickButton()">  
  <span [ngSwitch]="buttonChoice">
   <span *ngSwitchCase="'edit'" class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
   <span *ngSwitchCase="'del'" class="glyphicon glyphicon-remove" aria-hidden="true"></span>
   <span *ngSwitchCase="'plus'" class="glyphicon glyphicon-plus" aria-hidden="true"></span>
    <span *ngSwitchCase="'upload'" class="glyphicon glyphicon-upload" aria-hidden="true"></span>
    <span *ngSwitchCase="'download'" class="glyphicon glyphicon-download" aria-hidden="true"></span>
     <span *ngSwitchCase="'trash'" class="glyphicon glyphicon-trash" aria-hidden="true"></span>\n\
    <span *ngSwitchCase="'ok'" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
  </span>
</button>

    `
})

/**
 * AeroButtonComponent
 */
export class AeroButtonComponent implements OnInit, OnChanges {

    @Input() data: any;
    @Output() clickEvent = new EventEmitter<Object>();
    public state: boolean = true;
    public buttonChoice: string;

    constructor() {

    }

    ngOnInit() {

        this.buttonChoice = this.data.buttonType;
    }


    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {


    }

    onClickButton() {
        this.clickEvent.emit(this.data);
    }

}

