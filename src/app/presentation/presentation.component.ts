import { Component } from '@angular/core';

@Component({
  selector: '[app-presentation]',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
    showPassword = false;
    log:Date[] = [];

    onToggleDetails(){
      this.showPassword = !this.showPassword;
      // this.log.push(this.log.length + 1);
      this.log.push(new Date());
    }
}
