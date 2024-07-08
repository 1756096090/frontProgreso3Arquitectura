import { Component } from '@angular/core';
import { AuthService } from './log-in.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  usuarioEstudiante: string = '';
  passwordEstudiante: string = '';

  modalTitle: string = '';
  modalMessage: string = '';

  constructor(private authService: AuthService, private modalService: NgbModal) {}

  onSubmit() {
    const loginData = {
      usuarioEstudiante: this.usuarioEstudiante,
      passwordEstudiante: this.passwordEstudiante
    };

    this.authService.login(loginData).subscribe(
      response => {
        if (response === true) {
          this.modalTitle = 'Inicio de Sesión Exitoso';
          this.modalMessage = 'Ha iniciado sesión correctamente.';
          sessionStorage.setItem('usuarioEstudiante', this.usuarioEstudiante);
        } else {
          this.modalTitle = 'Error en Inicio de Sesión';
          this.modalMessage = 'Credenciales incorrectas, por favor vuelva a intentar.';
          sessionStorage.clear();
        }
        this.openModal();
      },
      error => {
        this.modalTitle = 'Error';
        this.modalMessage = 'Ocurrió un error en el servidor, por favor intente más tarde.';
        sessionStorage.clear();
        this.openModal();
      }
    );
  }

  openModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.modalTitle = this.modalTitle;
    modalRef.componentInstance.modalMessage = this.modalMessage;
  }
}
