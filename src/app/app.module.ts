import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { BlockUIModule } from 'primeng/blockui';
import { RatingModule } from 'primeng/rating';
import {TreeTableModule} from 'primeng/treetable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './servisler/translate.service';
import { TranslatePipe } from './pipelar/translate.pipe';
import { FinansalvarliklarComponent } from './finans/finansalvarliklar/finansalvarliklar.component';
import { CalisanlarComponent } from './kisiler/calisanlar/calisanlar.component';
import { MusterilerComponent } from './kisiler/musteriler/musteriler.component';
import { UrunlerComponent } from './urun/urunler/urunler.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GorevlerComponent } from './kisiler/calisanlar/gorevler/gorevler.component';
import { ProfilComponent } from './kisiler/calisanlar/profil/profil.component';


export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('tr');
}

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    TranslatePipe,
    ProfilComponent,
    FinansalvarliklarComponent,
    CalisanlarComponent,
    MusterilerComponent,
    UrunlerComponent,
    GorevlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    PasswordModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    OrganizationChartModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ToolbarModule,
    CheckboxModule,
    FieldsetModule,
    DialogModule,
    BlockUIModule,
    RatingModule,
    TreeTableModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [TranslateService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
