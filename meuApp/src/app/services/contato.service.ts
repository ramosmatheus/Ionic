import { Injectable } from '@angular/core';
import { Contato } from '../modelo/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contato: Contato = new Contato();

  constructor(private afd: AngularFireDatabase, private router: Router) { }

  salvar() {
    this.afd.list('contato').push(this.contato);
    this.contato = new Contato();
    this.router.navigateByUrl('listaContato');
  }
}
