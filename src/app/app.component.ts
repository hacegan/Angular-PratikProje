import { Component } from '@angular/core';
import { TranslateService } from 'src/app/servisler/translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pratik Proje';
  countries: any[];
  selectedCountry: any;

  constructor(public translateService: TranslateService) {
    this.countries = [
      { name: 'tr', flag: 'turkish-flag.png' },
      { name: 'en', flag: 'usa-flag.png' }
    ];
    this.selectedCountry = this.countries[0];
  }



}
