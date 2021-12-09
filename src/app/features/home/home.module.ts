import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';
import { SendFormComponent } from './pages/send-form/send-form.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OurServicesComponent,
    MenuComponent,
    ContactComponent,
    FormComponent,
    SendFormComponent,
    ContactSectionComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class HomeModule {}
