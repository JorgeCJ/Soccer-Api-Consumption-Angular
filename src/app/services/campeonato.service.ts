import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  key: string = 'test_457ae041afd50456a45889d98dc332';
  constructor(private httpClient: HttpClient) { }

  getTabelaSerieC():Observable<any>{
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.key}`
      });

      const requestOptions = { headers: headers};

      return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/16/tabela', requestOptions);
  }
}
