import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public setLanguage = (language) => {
        localStorage.setItem('localeId', language);
        console.log('locale set to:' + language);
        location.reload(true);
    }
}
