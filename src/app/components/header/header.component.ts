import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  logoInstagram,
  logoWhatsapp,
  logoFacebook,
  logoGoogle,
  close,
  pencil,
  searchOutline,
  notificationsOutline,
  informationCircleOutline,
  menu,
} from 'ionicons/icons';
addIcons({
  close,
  logoInstagram,
  logoFacebook,
  logoGoogle,
  logoWhatsapp,
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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ informationCircleOutline, notificationsOutline, searchOutline });
  }
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  ngOnInit() {}
}
