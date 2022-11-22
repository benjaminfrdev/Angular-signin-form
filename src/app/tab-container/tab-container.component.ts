import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Template} from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() middleFinger!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
