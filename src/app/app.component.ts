import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cardSharp,
  cashSharp,
  cogSharp,
  hammerSharp,
  homeSharp,
  mailOutline,
  personSharp,
  ribbonSharp,
  statsChartSharp,
  walletSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  selectedItem: any;
  public appPages = [
    { title: 'Dashboard', url: '/folder/inbox', icon: 'home-sharp' },
    { title: 'Transactions', url: '/folder/outbox', icon: 'wallet-sharp' },
    { title: 'Accounts', url: '/folder/favorites', icon: 'person-sharp' },
    {
      title: 'Investments',
      url: '/folder/archived',
      icon: 'stats-chart-sharp',
    },
    { title: 'Credit Cards', url: '/folder/trash', icon: 'card-sharp' },
    { title: 'Loans', url: '/folder/spam', icon: 'cash-sharp' },
    { title: 'Services', url: '/folder/spam', icon: 'hammer-sharp' },
    { title: 'My Privilages', url: '/folder/spam', icon: 'ribbon-sharp' },
    { title: 'Settings', url: '/folder/spam', icon: 'cog-sharp' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    this.selectedItem = this.appPages[this.appPages.length - 1];
    addIcons({
      mailOutline,
      homeSharp,
      walletSharp,
      personSharp,
      statsChartSharp,
      cardSharp,
      cashSharp,
      hammerSharp,
      ribbonSharp,
      cogSharp,
    });
  }
}
