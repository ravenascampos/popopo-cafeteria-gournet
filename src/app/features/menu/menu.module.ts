import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './pages/menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { ToDrinkComponent } from './components/to-drink/to-drink.component';
import { ToPetsComponent } from './components/to-pets/to-pets.component';
import { ToEatComponent } from './components/to-eat/to-eat.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    ToDrinkComponent,
    ToPetsComponent,
    ToEatComponent,
  ],
  imports: [CommonModule, SharedModule, NgbModule],
})
export class MenuModule {}
