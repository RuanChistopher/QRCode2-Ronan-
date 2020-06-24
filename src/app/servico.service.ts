import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private storage: Storage) { }

  public async salvar(resultado: string) {
    await this.storage.set(resultado, resultado);
    return true;
  }

  //public async busca(resultado: string) {
    //let resultado: string;
    //await this.storage.get(resultado).then(valor => { resultado = valor; });
    //return resultado;
  //}

 public async buscarTodos(){
   let resultado = [];
   return await this.storage.forEach((valor) => {
     resultado.push(valor);
   }).then(() => {
     return resultado;
   }).catch(() => {
     resultado = [];
   })
 }
    
  
}
