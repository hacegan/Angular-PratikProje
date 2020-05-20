import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalisanlarComponent } from './kisiler/calisanlar/calisanlar.component';
import { MusterilerComponent } from './kisiler/musteriler/musteriler.component';
import { UrunlerComponent } from './urun/urunler/urunler.component';
import { FinansalvarliklarComponent } from './finans/finansalvarliklar/finansalvarliklar.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GorevlerComponent } from './kisiler/calisanlar/gorevler/gorevler.component';
import { ProfilComponent } from './kisiler/calisanlar/profil/profil.component';


const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'calisanlar', component: CalisanlarComponent },
  { path: 'gorevler', component: GorevlerComponent },
  { path: 'musteriler', component: MusterilerComponent },
  { path: 'urunler', component: UrunlerComponent },
  { path: 'finansalvarliklar', component: FinansalvarliklarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
