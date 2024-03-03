import { Component, Input, Injectable, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ListecommuneComponent} from "../listecommune/listecommune.component";
import { CommonModule } from '@angular/common';


@Component
({
  selector: 'app-content',
  standalone: true,
  imports: [HttpClientModule, ListecommuneComponent, NgForOf, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
@Injectable
({
  providedIn: 'root'
})
export class ContentComponent implements OnInit
{
  constructor(private http: HttpClient)
  {

  }

  jsonData: any;

  listeCommunes:Array<any> = [];

  ngOnInit()
  {
    this.http.get<any>('assets/communes-nc_v1.json').subscribe(data =>
      {
      this.jsonData = data;
      this.listeCommunes = this.jsonData;
      console.log(this.jsonData);
    });
  }

  //border-color en fonction de la province et opacity en fonction de la superficie
  couleurProvince(province: string, superficie: number): string
  {
    console.log('Province:', province);
    console.log('Superficie:', superficie);

    if (province === 'Sud') {
      return '3px solid rgba(0,170,0,' + this.opaciteCommune(superficie) + ')';
    } else if (province === 'Nord') {
      return '3px solid rgba(170,0,0,' + this.opaciteCommune(superficie) + ')';
    } else if (province === 'Iles') {
      return '3px solid rgba(0,0,170,' + this.opaciteCommune(superficie) + ')';
    } else {
      return '3px solid rgba(0,0,0,' + this.opaciteCommune(superficie) + ')';
    }
  }


  // Fontsize en fonction de la superficie (>=15)
  tailleCommune(population: number): number {
    return Math.ceil((population / 2000) + 15) // f(x) = x/2000 + 10 arrondi à l'entier supérieur
  }

  // Opacité de la bordure en fonction de la superficie de la commune
  opaciteCommune(superficie: number): number {
    return superficie / 1300; // f(x) = x/1300
  }
}