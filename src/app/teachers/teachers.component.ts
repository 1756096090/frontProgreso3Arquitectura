import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';
import { Teacher } from './teacher';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    // Aquí es donde harías la llamada a tu API para obtener los datos de los profesores
    this.teachersService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

  updateRating(id: string, rating: number): void {
    // Aquí es donde harías la llamada a tu API para actualizar la calificación de un profesor
    // this.teachersService.updateRating(id, rating)
    //   .subscribe(() => this.getTeachers());
  }

  dislikeTeacher(id: string): void {
    // Aquí es donde harías la llamada a tu API para "dislike" a un profesor
    // this.teachersService.dislikeTeacher(id)
    //   .subscribe(() => this.getTeachers());
  }

  likeTeacher(id: string): void {
    // Aquí es donde harías la llamada a tu API para "like" a un profesor
    // this.teachersService.likeTeacher(id)
    //   .subscribe(() => this.getTeachers());
  }
}
