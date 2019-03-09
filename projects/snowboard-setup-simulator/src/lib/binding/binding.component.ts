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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
