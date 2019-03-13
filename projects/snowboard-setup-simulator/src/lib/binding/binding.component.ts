import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, OnChanges {
  @Input()
  public angle: number;

  @Input()
  public bootSize: number;

  @Input()
  public boardWidth: number;

  @Input()
  public bindingOffset: number;

  @Input()
  public isActive: string;

  @Input()
  public activeType: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public getFootbedClass() {
    if (this.isActive) {
      if (['bindingsBootPlateLeft', 'bindingsBootPlateRight', 'boots'].indexOf(this.activeType) >= 0) {
        return 'plate-active';
      }
    }
    return '';
  }

  public getBidingClass() {
    if (this.isActive) {
      if (['bindings', 'leftBinding', 'rightBinding', 'boots'].indexOf(this.activeType) >= 0) {
        return 'binding-active';
      }
    }
    return '';
  }

}
