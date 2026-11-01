import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})
export class Resume {

  resume = {
    name: 'SUMIT KUMAR SINGH',
    headline: 'Senior Java Full Stack Developer | Technical Lead | Solution Engineer | Assistant Manager',
    phone: '+91 9062360027',
    email: 'ssbax27@gmail.com',
    left1: [
      { title: 'Full-Stack Engineering' }, { title: 'Microservices & REST APIs' },
      { title: 'Digital Banking Solutions' }, { title: 'System Analysis & Design' },
      { title: 'Access & Security Controls' }, { title: 'Cloud CI/CD Enablement' },
      { title: 'Database & Data Management' }, { title: 'Quality Assurance & Testing' },
      { title: 'Defect Resolution' }, { title: 'Stakeholder & Client Engagement' },
      { title: 'Agile Delivery Management' }, { title: 'Team Leadership' }
    ],
    achievements: [
      'Boosted vehicle-trading sales by 30% at Arval Motortrade through scalable microservices, Kafka messaging and Elasticsearch-powered search.',
      'Mentored a team of four developers to deliver full-stack features within timelines and design standards.',
      'Rolled out the complete NEFT/RTGS payment flow in TCS BaNCS, supporting both online and bulk file-based transfers.',
      'Fortified payment accuracy and security in Bharat Bill Payment with duplicate transaction detection and validation protocols.'
    ],
    softSkills: ['Communication', 'Time Management', 'Analytical Thinking', 'Adaptability'],
    education: 'B.Tech. in Information Technology | Institute of Engineering and Management, Kolkata | 2018',
    personal: ['Address: Pune, Maharashtra, India', 'Languages: English, Hindi, Bhojpuri'],
    summary: [
      'Results-driven Full Stack professional with nearly 8 years of experience in Fintech, Digital Banking, Insurance and Energy-Data Platforms.',
      'Currently working as Assistant Manager at KPMG, steering delivery of a GIS-enabled petroleum data platform for SLB.',
      "Propelled a 30% sales increase on BNP Paribas' Arval Motortrade vehicle trading platform through scalable microservices enhancements.",
      'Directed a four-member developer team to ship full-stack features on schedule, in line with coding standards and design best practices.',
      'Bridged deep core-banking payments expertise (TCS BaNCS, NEFT/RTGS) with modern Spring Boot microservices, Kafka and cloud-ready delivery.'
    ],
    skills: [
      'AI & Productivity Tools: GitHub Copilot, Microsoft Copilot, Generative AI, Prompt Engineering, AI-Assisted Development',
      'Languages & Back-end: Core Java, J2EE, JDBC, JSP, Data Structures & Algorithms',
      'Frameworks: Spring Core, Spring MVC, Spring Boot, Spring Security, Spring Batch, Hibernate',
      'Front-end: Angular, JavaScript, HTML, CSS', 'Database: Oracle, SQL',
      'Search & Messaging: Elasticsearch, Apache Kafka',
      'Architecture & Integration: Microservices Architecture, RESTful APIs, System Integration & Automation',
      'DevOps, Cloud & CI/CD: AWS, Docker, Jenkins, Git, Tanzu',
      'Testing & QA: JUnit, QA Infrastructure, Test Procedures',
      'GIS & Domain Platforms: Esri Technologies, TCS BaNCS'
    ],
    jobs: [
      { company: 'KPMG', role: 'Assistant Manager', dates: 'Dec 2025 – Present', project: 'Decision Point – Prosource Data Management & Delivery System', client: 'SLB', summary: 'Petroleum data platform that aggregates real-time, vendor-neutral data, embeds Esri-based GIS visualization and offers data loading, validation, quality control and export for corporate petroleum repositories.', points: [
        'Assembled scalable GIS visualization modules with Java, JSP, JavaScript and REST APIs, and sustained them through continuous maintenance.',
        'Embedded real-time data aggregation to power bidding and pricing workflow.',
        'Streamlined wells data processing by scripting repository-driven workflow in Java, JSP, JavaScript and REST APIs.',
        'Crafted responsive UI components using JSP, HTML and CSS.'
      ], tech: 'Java, JSP, JavaScript, REST APIs, HTML, CSS, Esri Technologies, GitHub Copilot, Microsoft Copilot' },
      { company: 'Capgemini', role: 'Consultant', dates: 'Dec 2022 – Oct 2025', project: 'Arval Motortrade – BNP Paribas', client: 'BNP Paribas', summary: 'Vehicle trading platform covering sales, purchases and auctions; system enhancements contributed to a 30% rise in sales.', points: [
        'Architected scalable microservices on Spring Boot, REST APIs and Spring Security, lifting platform capability and sales by 30%.',
        'Enabled asynchronous messaging through Kafka and sharpened vehicle search with Elasticsearch.',
        'Scheduled recurring data operations as Spring Batch jobs.',
        'Shaped responsive UI components with Angular, HTML and CSS.',
        'Accelerated releases through Docker and Jenkins CI/CD pipelines, making deployments faster and more reliable.'
      ], tech: 'Java, Spring Boot, Spring Security, Spring Batch, Microservices, REST APIs, Angular, HTML, CSS, Apache Kafka, Elasticsearch, Docker, Jenkins, Git, GitHub Copilot, Microsoft Copilot' }
    ],
    metlife: { project: 'MetLife Insurance – MetLife', client: 'MetLife', summary: 'Insurance platform managing payment inquiries and settlements for end users and internal stakeholders.', points: [
      'Constructed back-end services in Java, Spring Boot and Hibernate to process payments and settlements.',
      'Delivered secure REST APIs paired with Kafka-based real-time messaging.',
      'Optimized data querying and filtering using Elasticsearch.',
      'Configured Spring Batch jobs to handle large data volumes on a schedule.',
      'Enhanced Angular UI modules and administered deployments through Jenkins and Docker.'
    ], tech: 'Java, Spring Boot, Hibernate, Spring Batch, REST APIs, Apache Kafka, Elasticsearch, Angular, Jenkins, Docker, GitHub Copilot, Microsoft Copilot' },
    tcs: { dates: 'Feb 2019 – Oct 2022', project: 'Payment Module in TCS BaNCS', points: [
      'User Account Management (UAM): Drove end-to-end setup of a secure, scalable role-based access control framework, configuring user accounts against roles and actions.',
      'NEFT/RTGS Payment Flow: Executed the complete NEFT/RTGS flow in the TCS BaNCS Payment module, covering online payment capture and bulk transfers via file uploads to streamline electronic payments.',
      'System Integrator (SI) Tool: Upgraded an internal TCS tool for file format conversion (XML to CSV), priority-based queue creation and inter-system message injection, simplifying mass-transaction communication with RBI.',
      'TCS BaNCS Product Support: Sustained multiple core banking modules, including Payment Processing, Security Processing, Insurance, Real-time Payments and Digital Online Account Opening.'
    ], billing: [
      'Billing Lifecycle Management: Owned the full billing lifecycle spanning Biller Registration, Bill Fetch, Ad hoc and Non-Ad hoc Bill Payment, Payment Posting and Future Dated Payment Settlement for seamless transactions.',
      'Feature Development: Introduced duplicate transaction detection and stringent credit card payment validations, improving payment accuracy and security.'
    ], tech: 'Core Java, J2EE, Spring MVC, Hibernate, SQL, Oracle, XML, CSV, TCS BaNCS' }
  };

  updateText(event: Event, target: any, key: string): void {
    target[key] = (event.target as HTMLElement).innerText.trim();
  }
  updateItem(event: Event, item: any, key: string): void {
    item[key] = (event.target as HTMLElement).innerText.trim();
  }
  addItem(list: any[], value: any): void { list.push(value); }
  removeItem(list: any[], index: number): void { list.splice(index, 1); }
  downloadPdf(): void { window.print(); }
}
