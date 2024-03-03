// listecommune.component.ts
import { Component, OnInit } from '@angular/core';
import { AppService } from '../data.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule


@Component({
  selector: 'app-listecommune',
  standalone: true,
  templateUrl: './listecommune.component.html',
  styleUrls: ['./listecommune.component.css'],
  imports: [CommonModule]

})
export class ListecommuneComponent implements OnInit {
  communes: any[] = [];
  jsonData: any;


  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.communes = data;
      this.jsonData = data;

    });
  }
}
