// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-teachers',
//   standalone: true,
//   imports: [],
//   templateUrl: './teachers.component.html',
//   styleUrl: './teachers.component.css'
// })
// export class TeachersComponent {
//   rating = 4; 
//   rating1 = 2; 
//   rating2 = 3; 
//   imageUrl: string = 'https://via.placeholder.com/150'; 
//   title: string = 'Nombre'; 
//   text: string = 'Descripcion'; 
// }







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
  // rating = 4; 
  // rating1 = 2; 
  // rating2 = 3; 
  // imageUrl: string = ''; 
  // title: string = 'Nombre'; 
  // text: string = 'Descripcion';

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.getTeachers();
    
  }

  getTeachers(): void {
    // this.teachersService.getTeachers()
    //   .subscribe(teachers => this.teachers = teachers);
    this.teachers = [
    { id: 1, name: 'John Doe', description: 'Math Teacher', rating: 4, imageUrl:'https://via.placeholder.com/150'},
    { id: 2, name: 'Jane Smith', description: 'Science Teacher', rating: 2, imageUrl:'https://via.placeholder.com/150'},
    { id: 3, name: 'Jim Brown', description: 'History Teacher', rating: 3, imageUrl:'https://via.placeholder.com/150'},
    { id: 4, name: 'John Doe', description: 'Math Teacher', rating: 4, imageUrl:'https://via.placeholder.com/150'},
    { id: 5, name: 'Jane Smith', description: 'Science Teacher', rating: 2, imageUrl:'https://via.placeholder.com/150'},
    { id: 6, name: 'Jim Brown', description: 'History Teacher', rating: 3, imageUrl:'https://via.placeholder.com/150'},
    { id: 7, name: 'John Doe', description: 'Math Teacher', rating: 4, imageUrl:'https://via.placeholder.com/150'},
    { id: 8, name: 'Jane Smith', description: 'Science Teacher', rating: 2, imageUrl:'https://via.placeholder.com/150'},
    { id: 9, name: 'Jim Brown', description: 'History Teacher', rating: 3, imageUrl:'https://via.placeholder.com/150'},
    { id: 10, name: 'John Doe', description: 'Math Teacher', rating: 4, imageUrl:'https://via.placeholder.com/150'},];
  }

  

  updateRating(id: number, rating: number): void {
    // this.teachersService.updateRating(id, rating)
    //   .subscribe(() => this.getTeachers());
  }
}
