import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table/table';
import { MessageService } from 'primeng/api';
import { TranslatePipe } from 'src/app/pipelar/translate.pipe';

@Component({
  selector: 'app-musteriler',
  templateUrl: './musteriler.component.html',
  styleUrls: ['./musteriler.component.scss'],
  providers: [MessageService, TranslatePipe]
})
export class MusterilerComponent implements OnInit {

  selectedRecord: any;
  customers: Customer[];
  newCustomer: Customer;
  @ViewChild('dt') table: Table;
  displayAddDialog: boolean;

  constructor(private messageService: MessageService, private translatePipe: TranslatePipe) { }

  ngOnInit(): void {
    this.customers = [
      { id: 1, name: "samet", phoneNumber: "5123123", address: "Akıncılar, Akıncılar Cd. No:16, 42100 Selçuklu/Konya", startDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), alinanpaket: "yeni", yapilanodeme: "545.5 TL" },
      { id: 2, name: "busra", phoneNumber: "5123123", address: "Akıncılar, Akıncılar Cd. No:16, 42100 Selçuklu/Konya", startDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), alinanpaket: "yeni", yapilanodeme: "545.5 TL" },
      { id: 3, name: "aslı", phoneNumber: "5123123", address: "Akıncılar, Akıncılar Cd. No:16, 42100 Selçuklu/Konya", startDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), alinanpaket: "yeni", yapilanodeme: "545.5 TL" },
      { id: 4, name: "pelin", phoneNumber: "5123123", address: "Akıncılar, Akıncılar Cd. No:16, 42100 Selçuklu/Konya", startDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), alinanpaket: "yapilmis", yapilanodeme: "545.5 TL" },
      { id: 5, name: "ceyda", phoneNumber: "5123123", address: "Akıncılar, Akıncılar Cd. No:16, 42100 Selçuklu/Konya", startDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), alinanpaket: "yapilmis", yapilanodeme: "545.5 TL" }
    ];
    this.newCustomer = new Customer();
    this.displayAddDialog = false;
  }

  registerNewCustomer() {
    this.messageService.add({//basariliysa
      severity: 'success', summary: this.translatePipe.transform('kayitbasarili')
      , detail: this.newCustomer.name + this.translatePipe.transform('kayitbasarili')
    });

   /* this.messageService.add({//hata varsa
      severity: 'success', summary: this.translatePipe.transform('kayitbasarili')
      , detail: this.newCustomer.name + this.translatePipe.transform('kayitbasarili')
    });*/

  }


  showAddDialog() {
    this.displayAddDialog = true;
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

}


class Customer {
  id?: number;
  name: string;
  phoneNumber: string;
  address: string;
  startDate?: string;
  endDate?: string;
  alinanpaket?: string;
  yapilanodeme?: string;
}
