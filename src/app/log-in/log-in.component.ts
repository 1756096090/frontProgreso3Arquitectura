// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-log-in',
//   standalone: true,
//   imports: [],
//   templateUrl: './log-in.component.html',
//   styleUrl: './log-in.component.css'
// })
// export class LogInComponent {

// }


import { Component } from '@angular/core';
import { AuthService } from './log-in.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  // onSubmit(): void {
  //   this.authService.compareCredentials(this.email, this.password).subscribe(isValid => {
  //     if (isValid) {
  //       console.log('Log-in successful');
      
  //     } else {
  //       console.log('Invalid credentials');
        
  //     }
  //   });
  // }
}
