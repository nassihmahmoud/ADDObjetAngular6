import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent {

 @Input('is-clic') isSelected: boolean = false;
 @Output('change') click = new EventEmitter();
  onClickSurButton() {
      this.isSelected = !this.isSelected;
      this.click.emit({newState: this.isSelected});
  }
}
