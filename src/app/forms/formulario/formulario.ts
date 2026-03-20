import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome: string = '';
  filmes: string = '';
  demaior: boolean = false;
  sexo: string = '';

  enviar(propForm: NgForm){
    if(propForm.valid){
      // alert('Formulário enviado com sucesso!\n\nDados:'+JSON.stringify(this));
      alert('Formulário enviado com sucesso!\n\nNome:'+this.nome);
    }
    else{
      alert('Formulário inválido. Por favor, preencha todos os campos corretamente.');
    }
  }
}
