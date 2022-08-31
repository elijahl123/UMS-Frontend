import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  infoTriangle: IconDefinition = faExclamationTriangle;

  ngOnInit() {
  }
}

