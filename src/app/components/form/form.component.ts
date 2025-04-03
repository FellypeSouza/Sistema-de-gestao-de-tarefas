import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  inputNome: string = "";
  inputSenha:string = "";

  Login(inputNome:string, inputSenha:string):void{
    if (inputNome == "" || inputSenha=="") {
        alert("Preencha todos os campos");
    }
    else{
      alert(inputNome);
      alert(inputSenha);
    }
  }
}
