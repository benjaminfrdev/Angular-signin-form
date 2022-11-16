import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnChanges {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  name: string = 'Benjamin';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      
  }

  toggle(){
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
