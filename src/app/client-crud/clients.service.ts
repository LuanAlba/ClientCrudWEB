import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client';
import { environment } from 'src/environments/environment';


@Injectable()
export class ClientService {
  private readonly API = `${environment.API}clients`;

  constructor(private http: HttpClient) { }


  list() {
    return this.http.get<Client>(this.API);
  }

  add(client: Client) {
    return this.http.post(this.API, client);
  }

  update(client: Client) {
    return this.http.put(`${this.API}/${client.id}`, client);
  }

  delete(client: Client) {
    return this.http.delete(`${this.API}/${client.id}`);
  }
}