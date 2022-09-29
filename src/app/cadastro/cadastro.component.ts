import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro : FormGroup //pra fazer importaçao

  constructor() { }

  ngOnInit(): void {
  }

  initForm(){ //pra resetar formulario/iniciar formulario qdo quiser
    this.formCadastro = new FormGroup({
      "nome" : new FormControl(null, [Validators.required, Validators.minLength(5)]), //valor inicial do campo  Validators == singleton==todo mundo usa a mesma entidade(?)
      "preco" : new FormControl(null, [Validators.required, Validators.min(0)]), //boas praticas colocar null aqui
      "descricao" : new FormControl(null, [Validators.required, Validators.minLength(10)])
      //esse json eh a configuracao de cada um dos campos(nome, preco, descricao (nesse caso))
    });
  }

  fazerCadastro(){ //funcao chamada no html desse componente
    if(this.formCadastro.valid){     //checando se o form e valido --com base nas linhas ali do singleton validators. Se n colocar regra nenhuma, ele ta sempre valido
      let nome = this.formCadastro.get("nome").value;
      let preco = this.formCadastro.get("preco").value;
      let descricao = this.formCadastro.get("descricao").value;

      //nome.setValue();
      //preco.setValue();
      //descricao.setValue();
    
      this.formCadastro.get("nome").setValue("IFSP");

    } else {
        if(this.formCadastro.get("nome").valid) {
          alert("Nome nao esta valido!");
        }
        if(this.formCadastro.get("preco").valid) {
          alert("Preco nao esta valido!");
        }
        if(this.formCadastro.get("descricao").valid) {
          alert("Descricao nao esta valida!");
        }
    }


  }

}
