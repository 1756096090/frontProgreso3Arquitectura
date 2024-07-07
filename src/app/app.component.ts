import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion';
  menus: any[] = [
    { title: 'Login', link: 'login' },
    { title: 'Profesores', link: 'teachers' },
    // { title: 'Estudiantes', link: 'students' },
    { title: 'Tutores', link: 'advisor' },
    { title: 'Chat', link: 'chat' },
  ];
}
