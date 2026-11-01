export type InterviewTopicId =
  | 'java'
  | 'spring-framework'
  | 'spring-boot'
  | 'rest-api'
  | 'hibernate'
  | 'kafka'
  | 'elastic-search'
  | 'dsa'
  | 'junit'
  | 'aws'
  | 'azure'
  | 'hld'
  | 'lld'
  | 'microservices'
  | 'docker'
  | 'kubernetes'
  | 'swagger'
  | 'redis-cache'
  | 'git'
  | 'design-pattern';

export interface InterviewQuestion {
  number: number;
  text: string;
  answer?: string;
}

export interface InterviewSection {
  title: string;
  questions: InterviewQuestion[];
}

export interface InterviewTopic {
  id: InterviewTopicId;
  label: string;
  description: string;
  sections: InterviewSection[];
}

export const INTERVIEW_TOPICS: InterviewTopic[] = [
  {
    id: 'java',
    label: 'Java',
    description: 'Core language concepts, runtime behavior, and everyday engineering choices.',
    sections: [
      {
        title: 'Java interview questions',
        questions: [
          {
            number: 1,
            text: 'What are the main features of Java, and what makes it platform-independent?',
            answer: 'Java source is compiled into platform-neutral bytecode. A compatible JVM on each operating system runs that bytecode, which makes Java portable; native libraries or platform-specific assumptions can still limit portability.'
          },
          {
            number: 2,
            text: 'What is the difference between the JDK, JRE, and JVM?',
            answer: 'The JVM executes Java bytecode. The JRE is the runtime concept that includes the JVM and libraries needed to run an application. The JDK adds development tools such as the compiler and debugger; modern Java distributions do not always package a separate JRE.'
          },
          {
            number: 3,
            text: 'How do the four principles of object-oriented programming apply in Java?',
            answer: 'Encapsulation protects state behind a class API; abstraction exposes essential behavior while hiding implementation; inheritance reuses or specializes a type; and polymorphism lets code use a shared interface while different implementations provide their own behavior.'
          },
          {
            number: 4,
            text: 'What is the difference between method overloading and method overriding?',
            answer: 'Overloading defines methods with the same name but different parameter lists, and the compiler selects one from the call arguments. Overriding replaces an inherited instance method with a compatible implementation, and runtime dispatch selects the implementation for the actual object.'
          },
          {
            number: 5,
            text: 'How do abstract classes differ from interfaces?',
            answer: 'An abstract class can hold instance state, constructors, and both implemented and abstract methods, but a class can extend only one class. An interface defines a contract that a class can implement alongside other interfaces; it can also provide default and static methods.'
          },
          {
            number: 6,
            text: 'What is the difference between == and equals() in Java?',
            answer: 'For primitives, == compares values; for object references, it checks whether both references point to the same object. equals() is intended to compare logical value equality when a class overrides it. Classes that override equals() should also implement hashCode() consistently.'
          },
          {
            number: 7,
            text: 'How do checked and unchecked exceptions differ, and when would you use each?',
            answer: 'Checked exceptions must be caught or declared, so they suit conditions a caller can reasonably recover from. Unchecked exceptions extend RuntimeException and are not enforced by the compiler; they are commonly used for programming errors or invalid state. Choose based on whether callers can handle the condition meaningfully.'
          },
          {
            number: 8,
            text: 'What is the Java Collections Framework, and how do List, Set, and Map differ?',
            answer: 'The Collections Framework provides common interfaces and implementations for working with groups of objects. A List preserves order and allows duplicates; a Set enforces uniqueness; and a Map stores values by unique keys. Select an implementation based on ordering, lookup, and concurrency needs.'
          },
          {
            number: 9,
            text: 'How do HashMap and ConcurrentHashMap differ?',
            answer: 'HashMap is not thread-safe and is intended for single-threaded use or external synchronization. ConcurrentHashMap supports safe concurrent access with finer-grained coordination and atomic operations. It does not allow null keys or values, unlike HashMap.'
          },
          {
            number: 10,
            text: 'What are the benefits and trade-offs of Java streams and lambda expressions?',
            answer: 'Lambdas express behavior compactly, and streams make collection processing declarative through operations such as filter and map. Intermediate stream operations are lazy until a terminal operation runs. Streams are single-use, side effects can make code harder to reason about, and parallel streams are not automatically faster.'
          }
        ]
      }
    ]
  },
  {
    id: 'spring-framework',
    label: 'Spring Framework',
    description: 'The container, dependency injection, and the foundations behind Spring applications.',
    sections: [
      {
        title: 'Spring Framework interview questions',
        questions: [
          { number: 1, text: 'What problems does the Spring Framework solve?' },
          { number: 2, text: 'What is inversion of control, and how does dependency injection implement it?' },
          { number: 3, text: 'What is the difference between constructor, setter, and field injection?' },
          { number: 4, text: 'What is a Spring bean, and how does the application context manage it?' },
          { number: 5, text: 'What are the common Spring bean scopes?' },
          { number: 6, text: 'How do @Component, @Service, @Repository, and @Controller differ?' },
          { number: 7, text: 'How does Spring AOP work, and what are common use cases for it?' },
          { number: 8, text: 'How does declarative transaction management work in Spring?' },
          { number: 9, text: 'What is the difference between BeanFactory and ApplicationContext?' },
          { number: 10, text: 'How does Spring resolve multiple beans of the same type for injection?' }
        ]
      }
    ]
  },
  {
    id: 'spring-boot',
    label: 'Spring Boot',
    description: 'Practical application setup, configuration, and production-ready Spring services.',
    sections: [
      {
        title: 'Spring Boot interview questions',
        questions: [
          { number: 1, text: 'What is Spring Boot, and how does it differ from the Spring Framework?' },
          { number: 2, text: 'How does Spring Boot auto-configuration work?' },
          { number: 3, text: 'What are starter dependencies, and why are they useful?' },
          { number: 4, text: 'How do application.properties and application.yml configure a Boot application?' },
          { number: 5, text: 'How do Spring profiles help manage environment-specific configuration?' },
          { number: 6, text: 'What is the purpose of Spring Boot Actuator?' },
          { number: 7, text: 'How would you customize or exclude a Spring Boot auto-configuration?' },
          { number: 8, text: 'How does Spring Boot package and run an application with an embedded server?' },
          { number: 9, text: 'How do you validate configuration properties in a Spring Boot application?' },
          { number: 10, text: 'How would you test a Spring Boot application at unit and integration levels?' }
        ]
      }
    ]
  },
  {
    id: 'rest-api',
    label: 'REST API',
    description: 'A complete 100-question practice set, organized by the original ten study sections.',
    sections: [
      {
        title: 'REST API Fundamentals',
        questions: [
          { number: 1, text: 'What is REST, and what architectural constraints define RESTful services?' },
          { number: 2, text: 'What is the difference between REST and RESTful APIs?' },
          { number: 3, text: 'What is the difference between REST and SOAP?' },
          { number: 4, text: 'Explain statelessness in REST. Why is it important?' },
          { number: 5, text: 'What are resources, URIs, and representations in REST?' },
          { number: 6, text: 'Explain the difference between PUT, POST, PATCH, GET, and DELETE.' },
          { number: 7, text: 'What is the difference between PUT and PATCH? Give real-world examples.' },
          { number: 8, text: 'What are safe and idempotent HTTP methods?' },
          { number: 9, text: 'What happens when an HTTP request is sent from a client to a server?' },
          { number: 10, text: 'What is HATEOAS, and when would you use it?' }
        ]
      },
      {
        title: 'HTTP Methods, Status Codes & Headers',
        questions: [
          { number: 11, text: 'Explain HTTP status code categories: 1xx, 2xx, 3xx, 4xx, and 5xx.' },
          { number: 12, text: 'When should you return 200 OK, 201 Created, 202 Accepted, and 204 No Content?' },
          { number: 13, text: 'What is the difference between 400 Bad Request and 422 Unprocessable Content?' },
          { number: 14, text: 'What is the difference between 401 Unauthorized and 403 Forbidden?' },
          { number: 15, text: 'When should an API return 404 Not Found versus 410 Gone?' },
          { number: 16, text: 'What is HTTP 409 Conflict? Explain with a real example.' },
          { number: 17, text: 'What is the difference between 500, 502, 503, and 504 errors?' },
          { number: 18, text: 'What is the purpose of the Content-Type and Accept headers?' },
          { number: 19, text: 'Explain ETag, If-Match, and If-None-Match headers.' },
          { number: 20, text: 'What is HTTP content negotiation, and how does it work?' }
        ]
      },
      {
        title: 'REST API Design Best Practices',
        questions: [
          { number: 21, text: 'How would you design REST APIs for an enterprise-level application?' },
          { number: 22, text: 'What are the best practices for naming REST endpoints?' },
          { number: 23, text: 'How should you design nested resources and relationships?' },
          { number: 24, text: 'What is API versioning, and what strategies are available?' },
          { number: 25, text: 'URI versioning versus header versioning: which would you choose and why?' },
          { number: 26, text: 'How do you design backward-compatible REST APIs?' },
          { number: 27, text: 'How do you implement pagination, sorting, and filtering?' },
          { number: 28, text: 'What is the difference between offset-based and cursor-based pagination?' },
          { number: 29, text: 'How do you handle bulk create, update, and delete operations?' },
          { number: 30, text: 'How would you design consistent request and response DTOs?' }
        ]
      },
      {
        title: 'Spring Boot REST API Implementation',
        questions: [
          { number: 31, text: 'How does Spring Boot process an incoming REST API request internally?' },
          { number: 32, text: 'What is the difference between @Controller and @RestController?' },
          { number: 33, text: 'Explain @RequestMapping, @GetMapping, @PostMapping, @PutMapping, and @PatchMapping.' },
          { number: 34, text: 'What is the difference between @RequestParam, @PathVariable, and @RequestBody?' },
          { number: 35, text: 'How does @RequestBody deserialize JSON into a Java object?' },
          { number: 36, text: 'What is the role of HttpMessageConverter in Spring MVC?' },
          { number: 37, text: 'How do you use ResponseEntity to control API responses?' },
          { number: 38, text: 'How do you implement request validation using @Valid and @Validated?' },
          { number: 39, text: 'How do you implement centralized exception handling with @RestControllerAdvice?' },
          { number: 40, text: 'How would you implement API request and response logging without exposing sensitive information?' }
        ]
      },
      {
        title: 'REST API Security',
        questions: [
          { number: 41, text: 'How do you secure REST APIs in Spring Boot?' },
          { number: 42, text: 'What is the difference between authentication and authorization?' },
          { number: 43, text: 'Explain JWT structure and how JWT authentication works.' },
          { number: 44, text: 'What are the differences between JWT, OAuth 2.0, and OpenID Connect?' },
          { number: 45, text: 'How would you implement OAuth 2.0 authorization code flow with PKCE?' },
          { number: 46, text: 'How do you implement role-based and permission-based access control?' },
          { number: 47, text: 'What is CORS, and how does it differ from CSRF?' },
          { number: 48, text: 'How do you prevent SQL injection, XSS, and broken object-level authorization?' },
          { number: 49, text: 'How do you securely manage access tokens, refresh tokens, and token revocation?' },
          { number: 50, text: 'How would you protect public APIs against brute-force attacks, abuse, and unauthorized access?' }
        ]
      },
      {
        title: 'Performance, Caching & Scalability',
        questions: [
          { number: 51, text: 'How would you improve the performance of a slow REST API?' },
          { number: 52, text: 'How do you identify database bottlenecks in API response times?' },
          { number: 53, text: 'What is API caching, and what caching strategies are available?' },
          { number: 54, text: 'How would you implement Redis caching in Spring Boot?' },
          { number: 55, text: 'What is the difference between Cache-Control, ETag, and application-level caching?' },
          { number: 56, text: 'How do you prevent cache stampedes and stale-data problems?' },
          { number: 57, text: 'What is rate limiting, and how would you implement it in a distributed environment?' },
          { number: 58, text: 'What is the difference between throttling and rate limiting?' },
          { number: 59, text: 'How do connection pooling and HTTP keep-alive improve API performance?' },
          { number: 60, text: 'How would you scale an API handling 100,000 requests per second?' }
        ]
      },
      {
        title: 'Microservices & Distributed REST APIs',
        questions: [
          { number: 61, text: 'How do microservices communicate using REST APIs?' },
          { number: 62, text: 'What is the role of an API Gateway in microservices architecture?' },
          { number: 63, text: 'How would you implement service discovery and client-side versus server-side load balancing?' },
          { number: 64, text: 'What are connection timeouts, read timeouts, and overall request deadlines?' },
          { number: 65, text: 'How do you implement retry mechanisms without causing duplicate operations?' },
          { number: 66, text: 'Explain the Circuit Breaker pattern and its implementation using Resilience4j.' },
          { number: 67, text: 'What is the Bulkhead pattern, and why is it important?' },
          { number: 68, text: 'How do you handle distributed transactions across multiple REST services?' },
          { number: 69, text: 'What is the Saga pattern, and how does it compare with two-phase commit?' },
          { number: 70, text: 'How would you implement distributed tracing and correlation IDs across REST APIs?' }
        ]
      },
      {
        title: 'Reliability, Concurrency & Data Consistency',
        questions: [
          { number: 71, text: 'How do you prevent duplicate resource creation when a client retries a POST request?' },
          { number: 72, text: 'What are idempotency keys, and how would you implement them?' },
          { number: 73, text: 'What is optimistic locking, and how can it be used with REST APIs?' },
          { number: 74, text: 'How do you handle concurrent updates to the same resource?' },
          { number: 75, text: 'What is the lost update problem, and how can HTTP conditional requests prevent it?' },
          { number: 76, text: 'How does @Transactional affect REST API operations in Spring Boot?' },
          { number: 77, text: 'What happens if a database transaction succeeds but an external API call fails?' },
          { number: 78, text: 'How do you design asynchronous APIs for long-running operations?' },
          { number: 79, text: 'What are eventual consistency and read-after-write consistency in distributed APIs?' },
          { number: 80, text: 'How would you guarantee reliable event publication after a REST API updates a database?' }
        ]
      },
      {
        title: 'API Testing, Monitoring & Production Support',
        questions: [
          { number: 81, text: 'How do you write unit tests for REST controllers using MockMvc?' },
          { number: 82, text: 'What is the difference between unit, integration, contract, and end-to-end API testing?' },
          { number: 83, text: 'How would you test REST APIs using RestAssured?' },
          { number: 84, text: 'What is consumer-driven contract testing, and how does Pact work?' },
          { number: 85, text: 'How do you document APIs using OpenAPI and Swagger UI?' },
          { number: 86, text: 'How do you test API performance using JMeter, Gatling, or k6?' },
          { number: 87, text: 'Which metrics would you monitor for REST APIs in production?' },
          { number: 88, text: 'How do you implement health checks, readiness probes, and liveness probes?' },
          { number: 89, text: 'How do you troubleshoot intermittent HTTP 500 and 504 errors in production?' },
          { number: 90, text: 'How would you implement API deprecation and sunset policies without breaking clients?' }
        ]
      },
      {
        title: 'Advanced System Design & Scenario-Based Questions',
        questions: [
          { number: 91, text: 'Design a REST API for an e-commerce order management system.' },
          { number: 92, text: 'Design a payment REST API that prevents duplicate charges.' },
          { number: 93, text: 'Design a file upload and download API for large files.' },
          { number: 94, text: 'Design a REST API for processing one million records asynchronously.' },
          { number: 95, text: 'Design a notification API supporting email, SMS, and push notifications.' },
          { number: 96, text: 'An API works locally but returns 403 in production. How would you debug it?' },
          { number: 97, text: "An API's response time increased from 200 ms to 5 seconds. How would you investigate?" },
          { number: 98, text: 'A downstream microservice is unavailable. How would you design graceful degradation?' },
          { number: 99, text: 'How would you migrate a monolithic REST API to microservices without downtime?' },
          { number: 100, text: 'Design a highly available, secure REST API platform supporting millions of users. Explain load balancing, caching, database scaling, observability, and failure recovery.' }
        ]
      }
    ]
  },
  {
    id: 'hibernate',
    label: 'Hibernate',
    description: 'ORM fundamentals, persistence behavior, and performance in Java applications.',
    sections: [
      {
        title: 'Hibernate interview questions',
        questions: [
          { number: 1, text: 'What is Hibernate, and how does it relate to the JPA specification?' },
          { number: 2, text: 'What are the states in the Hibernate entity lifecycle?' },
          { number: 3, text: 'What is the persistence context, and how does the first-level cache work?' },
          { number: 4, text: 'How do lazy and eager fetching differ, and when would you use each?' },
          { number: 5, text: 'What is the N+1 query problem, and how can you detect and prevent it?' },
          { number: 6, text: 'How do cascade operations differ from orphan removal?' },
          { number: 7, text: 'What is the owning side of a bidirectional relationship, and why does it matter?' },
          { number: 8, text: 'How do optimistic and pessimistic locking differ in Hibernate?' },
          { number: 9, text: 'What is the difference between first-level and second-level caching?' },
          { number: 10, text: 'How would you tune Hibernate batch inserts and updates for a large data import?' }
        ]
      }
    ]
  },
  {
    id: 'kafka',
    label: 'Kafka',
    description: 'Distributed event streaming, consumer groups, delivery, and operations.',
    sections: [
      {
        title: 'Kafka interview questions',
        questions: [
          { number: 1, text: 'What is Apache Kafka, and what kinds of problems is it designed to solve?' },
          { number: 2, text: 'What are topics, partitions, brokers, and offsets?' },
          { number: 3, text: 'How does a consumer group distribute partitions among consumers?' },
          { number: 4, text: 'How do partition keys affect ordering and load distribution?' },
          { number: 5, text: 'What is the difference between at-most-once, at-least-once, and exactly-once processing?' },
          { number: 6, text: 'How do replication factor and in-sync replicas protect Kafka data?' },
          { number: 7, text: 'What causes a consumer group rebalance, and how can its impact be reduced?' },
          { number: 8, text: 'How do idempotent producers and transactions help prevent duplicate processing?' },
          { number: 9, text: 'How would you monitor and troubleshoot consumer lag?' },
          { number: 10, text: 'When would you use Kafka Connect or Kafka Streams instead of a custom consumer?' }
        ]
      }
    ]
  },
  {
    id: 'elastic-search',
    label: 'Elastic Search',
    description: 'Indexing, text analysis, search queries, and cluster fundamentals.',
    sections: [
      {
        title: 'Elastic Search interview questions',
        questions: [
          { number: 1, text: 'What is Elasticsearch, and how is an inverted index used to retrieve documents?' },
          { number: 2, text: 'How do an index, document, field, and mapping relate to one another?' },
          { number: 3, text: 'How do text and keyword field types differ?' },
          { number: 4, text: 'What are analyzers, tokenizers, and filters in a text-analysis pipeline?' },
          { number: 5, text: 'How do primary shards and replica shards affect scalability and availability?' },
          { number: 6, text: 'When should a query clause be placed in query context versus filter context?' },
          { number: 7, text: 'How does Elasticsearch calculate relevance scores, and how can results be boosted?' },
          { number: 8, text: 'How would you index many documents efficiently using the Bulk API?' },
          { number: 9, text: 'Why can deep offset pagination be expensive, and when would you use search_after?' },
          { number: 10, text: 'How would you investigate a slow search or an unhealthy Elasticsearch cluster?' }
        ]
      }
    ]
  },
  {
    id: 'dsa',
    label: 'DSA',
    description: 'Data structures, algorithms, complexity analysis, and problem-solving trade-offs.',
    sections: [
      {
        title: 'Data structures and algorithms interview questions',
        questions: [
          { number: 1, text: 'What do time complexity and space complexity measure, and how do you use Big O notation?' },
          { number: 2, text: 'When would you choose an array over a linked list, or a linked list over an array?' },
          { number: 3, text: 'How does a hash table handle collisions, and what affects its average lookup time?' },
          { number: 4, text: 'How do stacks and queues differ, and what are common use cases for each?' },
          { number: 5, text: 'What conditions must hold before binary search can be used?' },
          { number: 6, text: 'Compare the time and space trade-offs of merge sort and quicksort.' },
          { number: 7, text: 'How do breadth-first search and depth-first search differ, and when is each useful?' },
          { number: 8, text: 'How does dynamic programming differ from a greedy approach?' },
          { number: 9, text: 'What is a heap, and how can it be used to find the top K elements efficiently?' },
          { number: 10, text: 'How do balanced search trees keep operations efficient as data is inserted and removed?' }
        ]
      }
    ]
  },
  {
    id: 'junit',
    label: 'JUnit',
    description: 'Java test structure, assertions, test lifecycle, and reliable test design.',
    sections: [
      {
        title: 'JUnit interview questions',
        questions: [
          { number: 1, text: 'What are the main features introduced by JUnit 5?' },
          { number: 2, text: 'What is the purpose of @Test, @BeforeEach, @AfterEach, and @Nested?' },
          { number: 3, text: 'How do assertions verify expected behavior in a unit test?' },
          { number: 4, text: 'How do you test that a method throws a particular exception?' },
          { number: 5, text: 'What are parameterized tests, and when are they more useful than separate tests?' },
          { number: 6, text: 'How do JUnit and Mockito work together, and what should you mock?' },
          { number: 7, text: 'What is the difference between a unit test and an integration test?' },
          { number: 8, text: 'How would you test Spring MVC endpoints with MockMvc?' },
          { number: 9, text: 'What causes flaky tests, and how would you make a test suite more reliable?' },
          { number: 10, text: 'How should tests be organized and named to make failures easy to understand?' }
        ]
      }
    ]
  },
  {
    id: 'aws',
    label: 'AWS',
    description: 'Core AWS services, identity, networking, and cloud architecture choices.',
    sections: [
      {
        title: 'AWS interview questions',
        questions: [
          { number: 1, text: 'How do AWS Regions and Availability Zones differ?' },
          { number: 2, text: 'How do IAM users, roles, and policies work, and why are roles preferred for workloads?' },
          { number: 3, text: 'When would you choose Amazon EC2, AWS Lambda, or a managed container service?' },
          { number: 4, text: 'How do S3 storage classes differ, and how would you choose one?' },
          { number: 5, text: 'What is a VPC, and how do public and private subnets differ?' },
          { number: 6, text: 'How do security groups differ from network ACLs?' },
          { number: 7, text: 'When would you choose Amazon RDS over DynamoDB, or DynamoDB over RDS?' },
          { number: 8, text: 'How do Amazon SQS and Amazon SNS differ, and when might you use both?' },
          { number: 9, text: 'Which signals would you monitor with Amazon CloudWatch for a production service?' },
          { number: 10, text: 'How would you design a highly available AWS application with backup and recovery plans?' }
        ]
      }
    ]
  },
  {
    id: 'azure',
    label: 'Azure',
    description: 'Azure identity, compute, networking, data services, and cloud operations.',
    sections: [
      {
        title: 'Azure interview questions',
        questions: [
          { number: 1, text: 'How do Azure subscriptions, resource groups, and resources relate to one another?' },
          { number: 2, text: 'How do Microsoft Entra ID authentication and Azure role-based access control differ?' },
          { number: 3, text: 'When would you use an Azure Virtual Machine, Azure Functions, or App Service?' },
          { number: 4, text: 'How do Azure Blob Storage access tiers differ, and how would you select one?' },
          { number: 5, text: 'What are Azure Virtual Networks, subnets, and network security groups?' },
          { number: 6, text: 'When would you choose Azure Kubernetes Service instead of Azure App Service?' },
          { number: 7, text: 'How do Azure SQL Database and Azure Cosmos DB differ in data model and use cases?' },
          { number: 8, text: 'How do Azure Service Bus and Event Grid differ?' },
          { number: 9, text: 'How would you use Azure Monitor and Application Insights to diagnose a slow service?' },
          { number: 10, text: 'How would you design for availability-zone failure and regional disaster recovery in Azure?' }
        ]
      }
    ]
  },
  {
    id: 'hld',
    label: 'HLD',
    description: 'High-level architecture, scale, reliability, and system-wide trade-offs.',
    sections: [
      {
        title: 'High-level design interview questions',
        questions: [
          { number: 1, text: 'How do you clarify functional and non-functional requirements before designing a system?' },
          { number: 2, text: 'How would you estimate storage, bandwidth, and request volume for a new service?' },
          { number: 3, text: 'Why are stateless application services easier to scale horizontally?' },
          { number: 4, text: 'How do load balancers differ from API gateways?' },
          { number: 5, text: 'How do you decide between a relational database and a NoSQL database?' },
          { number: 6, text: 'Where would you add caching, and how would you handle expiration and invalidation?' },
          { number: 7, text: 'When is database partitioning or sharding needed, and what trade-offs does it introduce?' },
          { number: 8, text: 'How do consistency, availability, and latency requirements shape a distributed design?' },
          { number: 9, text: 'When would you choose asynchronous messaging over a synchronous service call?' },
          { number: 10, text: 'How would you design observability and graceful degradation into a critical service?' }
        ]
      }
    ]
  },
  {
    id: 'lld',
    label: 'LLD',
    description: 'Object-oriented modeling, interfaces, extensibility, and component-level design.',
    sections: [
      {
        title: 'Low-level design interview questions',
        questions: [
          { number: 1, text: 'How do you turn a problem statement into use cases, domain objects, and responsibilities?' },
          { number: 2, text: 'How do encapsulation, abstraction, inheritance, and polymorphism influence a design?' },
          { number: 3, text: 'When would you prefer composition over inheritance?' },
          { number: 4, text: 'How do the SOLID principles help keep a design maintainable?' },
          { number: 5, text: 'How would you design an extensible notification system that supports multiple channels?' },
          { number: 6, text: 'How would you model a parking lot system and its core interactions?' },
          { number: 7, text: 'How would you design a rate limiter that supports multiple policies?' },
          { number: 8, text: 'How would you make a shared component safe for concurrent use?' },
          { number: 9, text: 'How do interfaces and dependency injection help isolate components for testing?' },
          { number: 10, text: 'How do you avoid overengineering while keeping a design open to likely changes?' }
        ]
      }
    ]
  },
  {
    id: 'microservices',
    label: 'Microservices',
    description: 'Service boundaries, communication, resilience, and distributed data management.',
    sections: [
      {
        title: 'Microservices interview questions',
        questions: [
          { number: 1, text: 'What characteristics distinguish a microservices architecture from a modular monolith?' },
          { number: 2, text: 'How would you identify service boundaries around business capabilities?' },
          { number: 3, text: 'When should services communicate synchronously, and when should they use events?' },
          { number: 4, text: 'What responsibilities belong in an API gateway?' },
          { number: 5, text: 'Why should each service own its data, and what challenges does that create?' },
          { number: 6, text: 'How does the Saga pattern coordinate a transaction across multiple services?' },
          { number: 7, text: 'How do timeouts, retries, circuit breakers, and bulkheads improve resilience?' },
          { number: 8, text: 'How do you make event handlers idempotent and safe to retry?' },
          { number: 9, text: 'How would you trace a request across services and diagnose elevated latency?' },
          { number: 10, text: 'How can service contracts be changed without breaking existing consumers?' }
        ]
      }
    ]
  },
  {
    id: 'docker',
    label: 'Docker',
    description: 'Container images, runtime configuration, networking, and secure builds.',
    sections: [
      {
        title: 'Docker interview questions',
        questions: [
          { number: 1, text: 'How does a Docker container differ from a virtual machine?' },
          { number: 2, text: 'What is the difference between a Docker image and a running container?' },
          { number: 3, text: 'How do Dockerfile layers affect image caching and build performance?' },
          { number: 4, text: 'How do CMD and ENTRYPOINT differ, and when would you combine them?' },
          { number: 5, text: 'How do bind mounts and named volumes differ?' },
          { number: 6, text: 'How does Docker bridge networking allow containers to communicate?' },
          { number: 7, text: 'How do you pass configuration into a container without baking it into the image?' },
          { number: 8, text: 'What is a multi-stage build, and how can it reduce image size?' },
          { number: 9, text: 'How would you make a Docker image smaller and safer to run in production?' },
          { number: 10, text: 'What does Docker Compose provide for local multi-container development?' }
        ]
      }
    ]
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    description: 'Container orchestration, workload configuration, networking, and troubleshooting.',
    sections: [
      {
        title: 'Kubernetes interview questions',
        questions: [
          { number: 1, text: 'What are the main components of the Kubernetes control plane?' },
          { number: 2, text: 'How do Pods, Deployments, and ReplicaSets relate to one another?' },
          { number: 3, text: 'How do ClusterIP, NodePort, and LoadBalancer Services differ?' },
          { number: 4, text: 'How do ConfigMaps and Secrets provide configuration to workloads?' },
          { number: 5, text: 'How do CPU and memory requests differ from limits?' },
          { number: 6, text: 'How do readiness, liveness, and startup probes differ?' },
          { number: 7, text: 'How does a rolling Deployment update maintain application availability?' },
          { number: 8, text: 'How does the Horizontal Pod Autoscaler decide when to scale a workload?' },
          { number: 9, text: 'How do service accounts and RBAC control permissions inside a cluster?' },
          { number: 10, text: 'How would you troubleshoot a Pod stuck in Pending or repeatedly restarting?' }
        ]
      }
    ]
  },
  {
    id: 'swagger',
    label: 'Swagger',
    description: 'OpenAPI descriptions, API documentation, validation, and tooling.',
    sections: [
      {
        title: 'Swagger and OpenAPI interview questions',
        questions: [
          { number: 1, text: 'What is the OpenAPI Specification, and how is it related to Swagger tools?' },
          { number: 2, text: 'What information should an OpenAPI document include for an API operation?' },
          { number: 3, text: 'How do schemas describe request bodies, responses, and reusable data models?' },
          { number: 4, text: 'How do path, query, header, and cookie parameters differ?' },
          { number: 5, text: 'How do you document authentication schemes and protected operations?' },
          { number: 6, text: 'How does the $ref keyword help reuse schemas and parameters?' },
          { number: 7, text: 'How would you document error responses and common response formats consistently?' },
          { number: 8, text: 'How can OpenAPI descriptions support client and server code generation?' },
          { number: 9, text: 'How would you keep API documentation synchronized with implementation changes?' },
          { number: 10, text: 'What risks should be considered before exposing Swagger UI in production?' }
        ]
      }
    ]
  },
  {
    id: 'redis-cache',
    label: 'Redis Cache',
    description: 'In-memory data structures, caching strategies, persistence, and reliability.',
    sections: [
      {
        title: 'Redis Cache interview questions',
        questions: [
          { number: 1, text: 'What Redis data structures are available, and how do you choose among them?' },
          { number: 2, text: 'How does the cache-aside pattern work, and what are its trade-offs?' },
          { number: 3, text: 'How do TTL and eviction policies affect cached data?' },
          { number: 4, text: 'How do Redis RDB snapshots and AOF persistence differ?' },
          { number: 5, text: 'How do Redis replication, Sentinel, and Cluster address availability and scale?' },
          { number: 6, text: 'How do Redis Pub/Sub and Redis Streams differ?' },
          { number: 7, text: 'What is a cache stampede, and how can an application reduce its impact?' },
          { number: 8, text: 'How would you investigate a hot key or uneven load in a Redis deployment?' },
          { number: 9, text: 'What challenges arise when using Redis for distributed locks?' },
          { number: 10, text: 'How would you monitor memory usage, latency, and cache hit rate in production?' }
        ]
      }
    ]
  },
  {
    id: 'git',
    label: 'Git',
    description: 'Version control fundamentals, collaboration workflows, and history recovery.',
    sections: [
      {
        title: 'Git interview questions',
        questions: [
          { number: 1, text: 'What is the difference between the working tree, staging area, and repository?' },
          { number: 2, text: 'How do Git branches and commits represent project history?' },
          { number: 3, text: 'How do merge and rebase differ, and when would you use each?' },
          { number: 4, text: 'How do git revert and git reset differ when undoing changes?' },
          { number: 5, text: 'What does git cherry-pick do, and when is it useful?' },
          { number: 6, text: 'How do you resolve a merge conflict while preserving both intended changes?' },
          { number: 7, text: 'What is git reflog, and how can it help recover a moved or deleted branch?' },
          { number: 8, text: 'How does git stash work, and when would you use it?' },
          { number: 9, text: 'Why does adding a file to .gitignore not remove it if it is already tracked?' },
          { number: 10, text: 'How would you use git bisect to find the commit that introduced a bug?' }
        ]
      }
    ]
  },
  {
    id: 'design-pattern',
    label: 'Design Pattern',
    description: 'Reusable object-oriented design approaches and the trade-offs behind them.',
    sections: [
      {
        title: 'Design pattern interview questions',
        questions: [
          { number: 1, text: 'What are creational, structural, and behavioral design patterns?' },
          { number: 2, text: 'How do Factory Method and Abstract Factory differ?' },
          { number: 3, text: 'When is the Builder pattern useful for constructing complex objects?' },
          { number: 4, text: 'What are the risks of using a Singleton, especially in tests and concurrent code?' },
          { number: 5, text: 'How does the Strategy pattern allow behavior to vary without conditional-heavy code?' },
          { number: 6, text: 'How does the Observer pattern support event-based communication?' },
          { number: 7, text: 'How does the Decorator pattern add behavior while preserving an interface?' },
          { number: 8, text: 'When would you use Adapter to integrate an incompatible interface?' },
          { number: 9, text: 'How does the Template Method pattern differ from Strategy?' },
          { number: 10, text: 'How do you decide whether a design pattern improves a solution or adds unnecessary complexity?' }
        ]
      }
    ]
  }
];
