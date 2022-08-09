import { Component } from '@angular/core';
import { faBook, faFolder, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeIcon: IconDefinition = faHome;
  libraryIcon: IconDefinition = faBook;
}
