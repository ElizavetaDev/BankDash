import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  pencil,
  searchOutline,
  notificationsOutline,
  informationCircleOutline,
  menu,
} from 'ionicons/icons';
addIcons({
  pencil,
  searchOutline,
  notificationsOutline,
});

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonIcon,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonAvatar,
} from '@ionic/angular/standalone';
import { ProfileComponent } from '../../components/profile/profile.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonItem,
    IonMenuButton,
    IonButtons,
    IonSearchbar,
    IonIcon,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProfileComponent,
    HeaderComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ informationCircleOutline, notificationsOutline, searchOutline });
  }
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  ngOnInit() {}
}
