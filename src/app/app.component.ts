import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from './services/campeonato.service';

@Component({
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tabela!:any;
 ngOnInit(): void {
  this.tabela = this.campeonatoService.getTabelaSerieC();
 }
constructor(private campeonatoService:CampeonatoService){}
}
