import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpcagrilariService } from '../servisler/httpcagrilari.service';
import { TranslatePipe } from '../pipelar/translate.pipe';


@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
  providers: [MessageService, TranslatePipe]
})
export class AnasayfaComponent implements OnInit {

  User: any = { 'username': '', 'user_password': '' };

  constructor(private messageService: MessageService, private httpservice: HttpcagrilariService
    , private translatePipe: TranslatePipe) {

  }

  ngOnInit(): void {
  }

  kayitOl() {
    this.httpservice.registerUser(this.User)
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success', summary: this.translatePipe.transform('kayitbasarili')
            , detail: this.User.username + this.translatePipe.transform('kayitbasarili')
          });
        },
        (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error', summary: this.translatePipe.transform('kayitbasarisiz'),
            detail: this.User.username + this.translatePipe.transform('kayitbasarisiz')
          });
        }
      );


  }

  girisyap() {
    this.httpservice.loginUser(this.User).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'girisbasarili | translate', detail: this.User.username + ' girisbasarili | translate' });

      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'girisbasarisiz | translate', detail: this.User.username + 'girisbasarisiz | translate' });

      }
    );
  }




}
