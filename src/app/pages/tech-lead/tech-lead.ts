import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tech-lead',
  styleUrl: './tech-lead.css',
  templateUrl: './tech-lead.html',
})
export class TechLead {

  menuOpen = false;
  readonly resumeHref = 'data:text/plain;charset=utf-8,' + encodeURIComponent(
    'Sumit Singh\nSenior Software Engineer | Tech Lead\n\n7.5+ years of experience designing, building, and scaling high-performance applications using Java, Spring Boot and modern cloud technologies.\n\nCore technologies: Java, Spring Boot, Microservices, REST APIs, Angular, React, TypeScript, JavaScript, MySQL, MongoDB, PostgreSQL, Redis, AWS, Docker, Kubernetes, Jenkins.\n\nExperience\nSenior Software Engineer — Current Company | 2021 – Present\nSoftware Engineer — Previous Company | 2018 – 2021\nAssociate Software Engineer — 2016 – 2018'
  );

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
