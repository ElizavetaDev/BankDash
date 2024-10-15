import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { pencil, chevronDownOutline } from 'ionicons/icons';
addIcons({
  pencil,
});
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonModal,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  IonAccordion,
  IonSegment,
  IonSegmentButton,
  IonAccordionGroup,
  IonFab,
  IonFabButton,
  IonFabList,
  IonSearchbar,
  IonProgressBar,
  IonPopover,
  IonSkeletonText,
  IonCard,
  IonToast,
  IonAvatar,
  IonDatetime,
  IonCardContent,
  IonDatetimeButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    IonSelectOption,
    IonSelect,
    IonDatetimeButton,
    IonCardContent,
    IonDatetime,
    IonAvatar,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonModal,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonChip,
    IonGrid,
    IonRow,
    IonCol,
    IonAccordion,
    IonSegment,
    IonSegmentButton,
    IonAccordionGroup,
    IonFab,
    IonFabButton,
    IonFabList,
    IonSearchbar,
    IonProgressBar,
    IonPopover,
    IonSkeletonText,
    IonCard,
    IonToast,
    CommonModule,
    FormsModule,
  ],
})
export class ProfileComponent implements OnInit {
  segmentValue: string = 'edit-profile';
  timeOpen: boolean = false;

  profile = {
    name: 'Charene Reed',
    email: 'charenereed@gmail.com',
    dob: '1990-01-25',
    permanentAddress: 'San Jose, California, USA',
    postalCode: '45902',
    userName: 'Charene Reed',
    password: '***',
    presentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    country: 'USA',
  };

  constructor() {
    addIcons({ pencil, chevronDownOutline });
  }
  saveProfile() {
    console.log('Profile saved', this.profile);
  }
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
  setDate(date: any) {
    this.profile.dob = date.detail.value;
  }

  ngOnInit() {}
}
