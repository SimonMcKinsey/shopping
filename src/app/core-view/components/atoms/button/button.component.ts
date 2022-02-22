import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() isDisabled = false;
  @Input() type = 'button'; // | submit
  @Input() color = 'accent';
  @Input() variant: 'contained' | 'outlined' | 'basic' = 'basic';
  constructor() {}

  ngOnInit(): void {}
}
