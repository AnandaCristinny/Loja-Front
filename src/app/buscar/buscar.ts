import { Component } from '@angular/core';
import { Produto } from '../produto';
import { LojaService } from '../loja-service';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css'
})
export class Buscar {
  produto: Produto | undefined = undefined
  Id: string = '';

  constructor(private ls: LojaService){}

  Buscar(Cdg: string): void{
    this.Id = Cdg
    this.ls.obterProdutoPorId(this.Id).subscribe(res => {
        this.produto = res
    });
  }
}