import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpcagrilariService } from 'src/app/servisler/httpcagrilari.service';

@Component({
  selector: 'app-calisanlar',
  templateUrl: './calisanlar.component.html',
  styleUrls: ['./calisanlar.component.css']
})
export class CalisanlarComponent implements OnInit {

  data: TreeNode[];

  selectedNode: TreeNode;

  constructor(private httpservice: HttpcagrilariService) { }

  ngOnInit(): void {

    this.httpservice.userTree().subscribe(
      (response) => {
        this.data = response as TreeNode[];
      },
      (error) => {
        console.log(error);
      }
    );




  }


  onNodeSelect(event) {
    // this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
  }

}
