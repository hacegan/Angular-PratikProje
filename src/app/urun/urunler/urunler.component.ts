import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {

  urunler: Urun[];
  exportColumns: any[];

  constructor() { }

  ngOnInit(): void {
    this.urunler = [{
      urunresmi: '', urunadi: 'asd', urununbironcekifiyati: 'asd', urununsuankifiyati: 'asd', urununendusukfiyati: 'asd',
      urununenyuksekfiyati: 'asd', satilanurunmiktari: 'asd', satilantoplamurununfiyati: 'asd', urunstokmiktari: 'asd', urunfiyatinisondegistirenkisi: 'asd'
    },
    {
      urunresmi: '', urunadi: 'asd', urununbironcekifiyati: 'asd', urununsuankifiyati: 'asd', urununendusukfiyati: 'asd',
      urununenyuksekfiyati: 'asd', satilanurunmiktari: 'asd', satilantoplamurununfiyati: 'asd', urunstokmiktari: 'asd', urunfiyatinisondegistirenkisi: 'asd'
    },
    {
      urunresmi: '', urunadi: 'asd', urununbironcekifiyati: 'asd', urununsuankifiyati: 'asd', urununendusukfiyati: 'asd',
      urununenyuksekfiyati: 'asd', satilanurunmiktari: 'asd', satilantoplamurununfiyati: 'asd', urunstokmiktari: 'asd', urunfiyatinisondegistirenkisi: 'asd'
    },
    {
      urunresmi: '', urunadi: 'asd', urununbironcekifiyati: 'asd', urununsuankifiyati: 'asd', urununendusukfiyati: 'asd',
      urununenyuksekfiyati: 'asd', satilanurunmiktari: 'asd', satilantoplamurununfiyati: 'asd', urunstokmiktari: 'asd', urunfiyatinisondegistirenkisi: 'asd'
    },
    {
      urunresmi: '', urunadi: 'asd', urununbironcekifiyati: 'asd', urununsuankifiyati: 'asd', urununendusukfiyati: 'asd',
      urununenyuksekfiyati: 'asd', satilanurunmiktari: 'asd', satilantoplamurununfiyati: 'asd', urunstokmiktari: 'asd', urunfiyatinisondegistirenkisi: 'asd'
    }];

  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(this.exportColumns, this.urunler);
        doc.save('primengTable.pdf');
      })
    })
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.urunler);
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

class Urun {
  id?: number;
  urunresmi?: string;
  urunadi: string;
  urununbironcekifiyati: string;
  urununsuankifiyati: string;
  urununendusukfiyati: string;
  urununenyuksekfiyati: string;
  satilanurunmiktari: string;
  satilantoplamurununfiyati: string;
  urunstokmiktari: string;
  urunfiyatinisondegistirenkisi: string;

}