import { AdvisorComponent } from './advisor/advisor.component';
import { LogInComponent } from './log-in/log-in.component';
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

export const routes: Routes = [
    {
        path:'login',
        component: LogInComponent
    },
    {
        path:'advisor',
        component: AdvisorComponent
    },
    {
        path:'advisor/:id',
        component: AdvisorComponent
    },
    {
        path:'chat',
        component: ChatComponent
    },
    {
        path:'teachers',
        component: TeachersComponent
    },
    {
        path:'students',
        component: StudentsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}