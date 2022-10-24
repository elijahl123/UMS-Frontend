import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../../../services/components/features/dashboard/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('primaryContent', { read: ViewContainerRef, static: true }) primaryContent: ViewContainerRef | undefined;
  @ViewChild('secondaryContent', { read: ViewContainerRef, static: true }) secondaryContent: ViewContainerRef | undefined;
  @ViewChild('tertiaryContent', { read: ViewContainerRef, static: true }) tertiaryContent: ViewContainerRef | undefined;
  primaryContentSubscription: Subscription;
  secondaryContentSubscription: Subscription;
  tertiaryContentSubscription: Subscription;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.primaryContentSubscription = this.dashboardService.getPrimaryContent().subscribe((component) => {
      if (component) {
        this.primaryContent?.clear();
        this.primaryContent?.createComponent(component);
      } else {
        this.primaryContent?.clear();
      }
    });

    this.secondaryContentSubscription = this.dashboardService.getSecondaryContent().subscribe((component) => {
      if (component) {
        this.secondaryContent?.clear();
        this.secondaryContent?.createComponent(component);
      } else {
        this.secondaryContent?.clear();
      }
    });

    this.tertiaryContentSubscription = this.dashboardService.getTertiaryContent().subscribe((component) => {
      if (component) {
        this.tertiaryContent?.clear();
        this.tertiaryContent?.createComponent(component);
      } else {
        this.tertiaryContent?.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.primaryContentSubscription.unsubscribe();
    this.secondaryContentSubscription.unsubscribe();
    this.tertiaryContentSubscription.unsubscribe();
  }

}
