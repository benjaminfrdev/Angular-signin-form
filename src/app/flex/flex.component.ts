import {Component, HostBinding, Input, OnInit} from '@angular/core';

export type flexDirection = 'row' | 'column'| 'row-reverse';

@Component({
  selector: 'flex-container',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  @Input() flexDirection: flexDirection = 'row';

  @HostBinding('style.display') get display(){
      return 'flex';
  }

  @HostBinding('style.flex-direction') get direction(){
    console.log('ssss')
    return this.flexDirection;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
