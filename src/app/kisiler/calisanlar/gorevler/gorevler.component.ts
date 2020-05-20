import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableCheckbox } from 'primeng/table/table';
import { TranslatePipe } from 'src/app/pipelar/translate.pipe';

@Component({
  selector: 'app-gorevler',
  templateUrl: './gorevler.component.html',
  styleUrls: ['./gorevler.component.scss'],
  providers: [TranslatePipe]
})

export class GorevlerComponent implements OnInit {


  customers: Customer[];
  loading: boolean = true;
  statuses: any[];
  @ViewChild('dt') table: Table;
  exportColumns: any[];
  selectedRecord: any;
  _undefined: undefined = undefined;


  constructor(private translatePipe: TranslatePipe) {

  }

  ngOnInit(): void {
    this.customers = [
      { id: 1, name: "samet", date: new Date().toLocaleString(), status: "yeni" },
      { id: 2, name: "busra", date: new Date().toLocaleString(), status: "yeni" },
      { id: 3, name: "aslı", date: new Date().toLocaleString(), status: "yeni" },
      { id: 4, name: "pelin", date: new Date().toLocaleString(), status: "yapilmis" },
      { id: 5, name: "ceyda", date: new Date().toLocaleString(), status: "yapilmis" }
    ];
    this.statuses = [
      { label: this.translatePipe.transform('yeni'), value: this.translatePipe.transform('yeni') },
      { label: this.translatePipe.transform('yapilmis'), value: this.translatePipe.transform('yapilmis') },
    ];

    this.loading = false;
    console.log(this.selectedRecord);

  }

  onClick() {
    console.log(this.selectedRecord);
  }

  onChange() {
    const choosen = this.selectedRecord[this.selectedRecord.length - 1];
    this.selectedRecord.length = 0;
    this.selectedRecord.push(choosen);
  }

  onSelectionChange(event) {
    if (event.value.length === 1) {
      this.selectedRecord = event.value[0];
    }
    else {
      event.value = [this.selectedRecord];
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
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

  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(this.exportColumns, this.customers);
        doc.save('primengTable.pdf');
      })
    })
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.customers);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "primengTable");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

}

interface Customer {
  id?: number;
  name: string;
  date?: string;
  status?: string;
}


