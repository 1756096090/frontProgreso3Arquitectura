// advisor.component.ts
import { Component, OnInit } from '@angular/core';
import { AdvisorService } from './advisor.service';
import { Tutor, Tutoria } from './tutor.model';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent implements OnInit {
  tutors: Tutor[] = [];
  modalTitle: string = '';
  modalMessage: string = '';

  constructor(private advisorService: AdvisorService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getTutors();
  }

  getTutors(): void {
    this.advisorService.getTutors()
      .subscribe(tutors => this.tutors = tutors);
  }

  reservarMentor(tutor: Tutor): void {
    const usuarioEstudiante = sessionStorage.getItem('usuarioEstudiante');
    if (usuarioEstudiante) {
      this.advisorService.getActiveTutoria(usuarioEstudiante, tutor.id).subscribe(activeTutoria => {
        if (!activeTutoria) {
          this.advisorService.reservarMentor(tutor.id, usuarioEstudiante).subscribe(() => {
            this.modalTitle = 'Mentor Reservado';
            this.modalMessage = 'Su mentor ha sido reservado correctamente!';
            this.openModal();
            this.getTutors(); // Refresh the list of tutors
          });
        } else {
          this.modalTitle = 'Error';
          this.modalMessage = 'Ya tiene una tutoría activa con este mentor!';
          this.openModal();
        }
      });
    } else {
      this.modalTitle = 'Error';
      this.modalMessage = 'No se ha encontrado un usuarioEstudiante en el sessionStorage';
      this.openModal();
    }
  }

  cancelarTutoria(tutor: Tutor): void {
    const usuarioEstudiante = sessionStorage.getItem('usuarioEstudiante');
    if (usuarioEstudiante) {
      this.advisorService.getActiveTutoria(usuarioEstudiante, tutor.id).subscribe(activeTutoria => {
        if (activeTutoria) {
          this.advisorService.cancelarTutoria(activeTutoria.id).subscribe(() => {
            this.modalTitle = 'Tutoria Cancelada';
            this.modalMessage = 'La tutoría ha sido cancelada correctamente.';
            this.openModal();
            this.getTutors(); // Refresh the list of tutors
          });
        }
      });
    }
  }

  openModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.modalTitle = this.modalTitle;
    modalRef.componentInstance.modalMessage = this.modalMessage;
  }
}
