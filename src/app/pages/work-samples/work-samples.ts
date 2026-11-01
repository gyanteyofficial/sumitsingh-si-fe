import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
interface Project {
  id: number;
  name: string;
  category: string;
  categoryClass: string;
  icon: string;
  requirement: string;
  result: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  documentation?: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-work-samples',
  styleUrl: './work-samples.css',
  templateUrl: './work-samples.html',
})
export class WorkSamples {

   selectedCategory = 'All';
  searchText = '';

  categories = [
    'All',
    'Web Apps',
    'Mobile Apps',
    'Microservices',
    'AI/ML'
  ];

  projects: Project[] = [
    {
      id: 1,
      name: 'User Account Management System',
      category: 'Web Apps',
      categoryClass: 'web',
      icon: '🔐',
      requirement:
        'Develop a centralized user account management system where administrators can manage users, roles, permissions and account activities.',
      result:
        'Implemented a secure user management platform with authentication, role-based access control, user CRUD operations and audit tracking.',
      techStack: [
        'Angular',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'MySQL'
      ],
      liveDemo: 'https://uam.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/uam',
      documentation: 'https://uam.sumitsingh.si/docs'
    },
    {
      id: 2,
      name: 'Payment Enquiry System',
      category: 'Web Apps',
      categoryClass: 'enterprise',
      icon: '💳',
      requirement:
        'Build a payment enquiry platform to allow users to search, track and investigate payment transactions with appropriate filters.',
      result:
        'Developed an enquiry dashboard with advanced filtering, transaction status tracking, pagination and detailed payment information.',
      techStack: [
        'Angular',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'REST API'
      ],
      liveDemo: 'https://paymentenq.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/paymentenq',
      documentation: 'https://paymentenq.sumitsingh.si/docs'
    },
    {
      id: 3,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 4,
      name: 'LinkPro',
      category: 'Web Apps',
      categoryClass: 'Social Media',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://linkpro.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/linkpro',
      documentation: 'https://linkpro.sumitsingh.si/docs'
    },/**
    {
      id: 5,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 6,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 7,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 8,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },{
      id: 9,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 10,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 11,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },
    {
      id: 12,
      name: 'Learning Management System',
      category: 'Web Apps',
      categoryClass: 'education',
      icon: '🎓',
      requirement:
        'Create an online learning platform where students can purchase courses, access learning materials and attempt mock examinations.',
      result:
        'Built a course management platform with student enrollment, video lessons, online payments and examination management.',
      techStack: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Razorpay',
        'JWT'
      ],
      liveDemo: 'https://lms.sumitsingh.si/',
      github: 'https://github.com/sumitsinghofficial/lms',
      documentation: 'https://lms.sumitsingh.si/docs'
    },  */
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(project => {

      const matchesCategory =
        this.selectedCategory === 'All' ||
        project.category === this.selectedCategory;

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(search) ||
        project.techStack.some(tech =>
          tech.toLowerCase().includes(search)
        );

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
