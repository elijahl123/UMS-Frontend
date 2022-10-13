import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../../../services/components/features/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  @ViewChild('primaryContent', { read: ViewContainerRef, static: true }) primaryContent: ViewContainerRef | undefined;
  @ViewChild('secondaryContent', { read: ViewContainerRef, static: true }) secondaryContent: ViewContainerRef | undefined;
  @ViewChild('tertiaryContent', { read: ViewContainerRef, static: true }) tertiaryContent: ViewContainerRef | undefined;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getPrimaryContent().subscribe((component) => {
      if (component) {
        this.primaryContent?.clear();
        this.primaryContent?.createComponent(component);
      } else {
        this.primaryContent?.clear();
      }
    });

    this.dashboardService.getSecondaryContent().subscribe((component) => {
      if (component) {
        this.secondaryContent?.clear();
        this.secondaryContent?.createComponent(component);
      } else {
        this.secondaryContent?.clear();
      }
    });

    this.dashboardService.getTertiaryContent().subscribe((component) => {
      if (component) {
        this.tertiaryContent?.clear();
        this.tertiaryContent?.createComponent(component);
      } else {
        this.tertiaryContent?.clear();
      }
    });
  }



}
