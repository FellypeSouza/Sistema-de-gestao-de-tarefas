import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register-page',
  imports: [NavComponent, RegisterFormComponent, FooterComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  
}
