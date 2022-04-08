import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { CourseComponent } from './pages/course/course.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';

const routes: Routes = [
  {
    path:'student',
    component: StudentComponent
  },
  {
    path:'lesson',
    component: LessonComponent
  },
  {
    path:'course',
    component: CourseComponent
  },
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNoFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
