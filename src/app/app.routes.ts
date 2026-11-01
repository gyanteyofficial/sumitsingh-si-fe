import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { WorkSamples } from './pages/work-samples/work-samples';
import { Blogs } from './pages/blogs/blogs';
import { About } from './pages/about/about';
import { Courses } from './pages/courses/courses';
import { TechLead } from './pages/tech-lead/tech-lead';
import { Resume } from './pages/resume/resume';
import { Sitemap } from './pages/sitemap/sitemap';
import { InterviewQuestions } from './pages/interview-questions/interview-questions';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'projects', component: Projects },
    { path: 'worksamples', component: WorkSamples },
    { path: 'blogs', component: Blogs },
    { path: 'courses', component: Courses },
    { path: 'about', component: About },
    { path: 'resume', component: Resume },
    { path: 'techlead', component: TechLead },
    { path: 'sitemap', component: Sitemap },
    { path: 'interviewquestions', component: InterviewQuestions },

    { path: '**', redirectTo: '' }


];
