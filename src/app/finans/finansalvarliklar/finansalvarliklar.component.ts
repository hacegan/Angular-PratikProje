import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';

@Component({
  selector: 'app-finansalvarliklar',
  templateUrl: './finansalvarliklar.component.html',
  styleUrls: ['./finansalvarliklar.component.css']
})
export class FinansalvarliklarComponent implements OnInit {

  files1: TreeNode[];

  constructor() { }

  ngOnInit(): void {
  }

}
