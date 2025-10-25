import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {

  produtos: Produto[] = [];

  constructor(private lojaService: LojaService) {
    this.lojaService.obterProdutos().subscribe((dados) => {
      console.log(this.produtos = dados)
    });
  }
}
