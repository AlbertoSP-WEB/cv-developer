const en = {
  meta: {
    title: "Alberto Sánchez Plaza - CV",
    description: "CV of Alberto Sánchez Plaza",
  },
  sidebar: {
    name: "Alberto Sánchez Plaza",
    role: "Full Stack Web Developer",
    photoAlt: "Professional portrait of a young developer",
    photoAltExpanded: "Professional portrait of a young developer (enlarged)",
    close: "Close",
    location: "Alicante, Spain · Remote",
    linkedinLabel: "linkedin.com/in/albertosánchezplaza",
  },
  sections: {
    profile: {
      heading: "Profile",
      body: "Full Stack Developer with over 7 years of experience designing, building and maintaining production web applications and platforms. Specialized in Next.js, React, Gatsby, TypeScript, JavaScript, Node.js, Express.js and Supabase, with experience in end-to-end project development spanning architecture, frontend, backend, databases, APIs, authentication, technical SEO, performance, analytics and infrastructure.\n\nI have built multiple corporate web platforms from scratch for real businesses across different sectors, including education, fitness, HVAC/climate control, coaching and services, taking part in every phase of the software lifecycle: requirements analysis, architecture design, development, deployment, maintenance and product evolution.\n\nI have extensive experience designing custom headless CMSs, admin panels and REST APIs, building solutions tailored to each project's needs rather than relying on traditional CMS platforms. I have also implemented architectures based on the Git-as-a-Database pattern, using GitHub as the persistence layer to manage content and automate deployments, as well as Supabase-backed applications for scenarios requiring authentication, storage and real-time databases.\n\nI have worked on implementing advanced technical SEO, including dynamic metadata, structured data (JSON-LD), Open Graph, Twitter Cards, sitemaps, robots.txt, internationalization, 301 redirects, Core Web Vitals optimization and integration with Google Analytics 4, Google Tag Manager and Google Search Console.\n\nMy usual stack includes Next.js, React, Gatsby, TypeScript, JavaScript, Node.js, Express.js, Supabase, Tailwind CSS, Sass, PostgreSQL, Git, GitHub, Vercel and REST APIs, always prioritizing scalability, performance, maintainability and a good user experience.\n\nI also integrate AI tools such as Claude, ChatGPT and GitHub Copilot into my daily workflow to speed up development, automate repetitive tasks and improve productivity, while maintaining high quality standards and good software engineering practices.",
      highlight:
        "For additional references, the contacts listed in the attached recommendation letters can be reached directly.",
    },
    experience: {
      heading: "Recent highlighted experience",
      items: [
        {
          title: "Full Stack Developer",
          company: "Freelance (Self-employed) · Alicante · Remote",
          dates: "November 2025 – Present · 9 months · Combined with TrustCloud Tech SL",
          description:
            "End-to-end delivery of web projects for my own clients across diverse sectors (industrial, education, fitness and agri-food), outside of my working hours at TrustCloud, owning the full cycle: UI design in Figma, frontend and backend development, custom headless CMS, technical SEO, GDPR compliance and production deployment. Stack: Next.js, React, Gatsby, TypeScript, Tailwind, Node.js/Express, GitHub API, Supabase/MongoDB, Mailjet and JWT, under JAMstack architectures and Git-as-a-Database CMS. **Full details of each project, with verifiable recommendation letters, in the Projects section.**",
        },
        {
          title: "Full Stack Developer",
          company: "TrustCloud Tech SL · Remote",
          dates: "May 2020 – May 2026 · 6 years 1 month",
          description:
            "Technology company specialized in digital identity, identity verification (KYC), electronic signature and digital trust solutions for regulated industries, building secure AI-based platforms with regulatory compliance (eIDAS, GDPR and AML).\n\nLead developer of [codeego.com](https://codeego.com) (Next.js, React, Supabase, Express.js), responsible for defining the stack, hour estimation, technical SEO and deployment on Vercel with GitHub integration to automate deployments. Contributed to UI improvements on [idvia.com](https://idvia.com) and independently built the Qryption project (see Projects). Also worked on the Angular frontend of the company's flagship product, [trustcloud.tech](https://trustcloud.tech), a video identification, electronic signature and end-to-end management platform, building reusable Angular components, hand-coding 100% responsive layouts with HTML and CSS, and developing frontend functionality and API communication with JavaScript.\n\nThroughout my entire time at the company, I worked hand in hand with the design director, who provided exact designs created in Adobe XD or Figma, and my job was to break those designs into components, build them out and translate them pixel-perfect into responsive HTML and CSS, achieving the exact intended result.\n\nWe worked under the Scrum methodology, with daily standups to coordinate the team and track progress.",
        },
        {
          title: "Front-end Developer",
          company: "Alvea Soluciones Tecnológicas S.L. (Ibermática Digital client project) · Madrid, Spain",
          dates: "March 2019 – June 2019 · 4 months",
          description:
            "I worked as an external contractor for Ibermática Digital on an Angular project in the healthcare sector. I was responsible for frontend development with Angular, PrimeNG, HTML, CSS and JavaScript, implementing the full visual and functional part of the user interface.",
        },
        {
          title: "Front-end Developer",
          company: "Tilo Motion, S.L. · Madrid, Spain",
          dates: "October 2018 – January 2019 · 4 months",
          description:
            "I was responsible for the visual redesign and frontend development with HTML, CSS and JavaScript on Portuguese used-car sales websites, improving the interface and user experience.",
        },
        {
          title: "Front-end Developer",
          company: "Altia Consultores S.A. (Everis client project) · Madrid, Spain",
          dates: "July 2018 – September 2018 · 3 months",
          description:
            "Frontend development of a web application for the banking sector using Angular and PrimeNG. Implemented full functionality with JavaScript, HTML5 and CSS3, ensuring responsive, accessible interfaces aligned with client requirements.\n\nCreated and integrated services to connect the web application with the backend, handling communication via REST APIs and real-time data consumption.\n\nWorked as part of an agile team, collaborating with backend developers, designers and project managers to deliver quality solutions in a financial services environment.",
        },
      ],
    },
    projects: {
      heading: "Projects",
      items: [
        {
          name: "Klimakos",
          url: "https://klimakos.com",
          label: "klimakos.com",
          description:
            "End-to-end development of **KLIMAKOS**, the bilingual (ES/EN) corporate website for a refrigerant gas distributor in the HVAC/climate-control sector. The project includes a custom headless CMS, a dynamic technical product catalog, a transactional contact form, custom internationalization and a full technical SEO strategy, covering every phase of development from architecture to production deployment.\n\nI designed a databaseless CMS following the **Git-as-a-Database** pattern, where blog content and assets are stored on GitHub and managed through its REST API. Every change automatically generates a commit and triggers a new deployment on Vercel via Deploy Hooks, simplifying infrastructure and maintenance.\n\nI implemented a custom internationalization system (ES/EN) with middleware for automatic browser language detection, keeping an SEO-optimized structure compatible with search engine crawlers.\n\nI built a dynamic technical catalog of refrigerant gases (R32, R410A, R134a, etc.) with structured product pages aimed at SEO.\n\nI implemented advanced technical SEO with dynamic metadata, JSON-LD, Open Graph, Twitter Cards, and programmatic sitemap and robots.txt, along with Google Tag Manager and Google Search Console integration.\n\nI also built an admin panel with authentication, a contact form with transactional delivery via Mailjet and HTML injection protection, plus conversion components such as a floating WhatsApp button, a cookie consent banner and a QR code generator.\n\n**Stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4, Headless UI, Next.js API Routes, GitHub REST API, Mailjet API, Vercel, JSON, QRCode and JAMstack architecture.\n[See recommendation letter](/Carta-de-recomendacion-klimakos.pdf)",
        },
        {
          name: "Schoola English College",
          url: "https://schoola.net",
          label: "schoola.net",
          description:
            "End-to-end development of **Schoola English College** (schoola.net), the corporate website for an English academy in Alicante. The project includes conversion-optimized landing pages, a blog with a custom headless CMS, an admin panel, a contact form with transactional email, advanced technical SEO and automated deployment. I was involved in every phase of development, from architecture to production launch.\n\nI designed a databaseless headless CMS following the **Git-as-a-Database/JAMstack** pattern, where blog content is stored in a versioned JSON file and managed through the GitHub Contents API. Every post or image automatically generates a commit in the repository and triggers a new deployment on Vercel, removing the need for database infrastructure.\n\nI implemented an admin panel with HttpOnly cookie authentication, protected admin routes and APIs, server-side validation with Google reCAPTCHA v3 (score-based) and transactional email delivery via Mailjet.\n\nI optimized search rankings with advanced technical SEO: dynamic sitemap, JSON-LD (Schema.org), Open Graph, Twitter Cards, robots.txt, 301 redirects, Google Tag Manager, Google Analytics 4 and Google Search Console.\n\n**Stack:** Next.js 16 (App Router), React 19, JavaScript, Tailwind CSS v4, Headless UI, Heroicons, Next.js Route Handlers, GitHub Contents API, Mailjet API, Google reCAPTCHA v3, Vercel and JAMstack architecture.\n[See recommendation letter](/Carta-de-recomendacion-schoola.pdf)",
        },
        {
          name: "Carolinas Fitness Gym",
          url: "https://carolinasgym.com",
          label: "carolinasgym.com",
          description:
            "Development and maintenance of **Carolinas Fitness Gym** (carolinasgym.com), the production corporate website for a gym in Alicante with its own mobile app. Built on a JAMstack architecture with React and Gatsby, covering frontend development, technical SEO, analytics, performance optimization and GDPR compliance.\n\nI designed a fully responsive multi-page website with sections for activities, facilities, nutrition, contact, app download and legal pages, prioritizing user experience and performance.\n\nI implemented a GDPR-compliant cookie consent system from scratch, with conditional loading of Google Analytics 4 only after user acceptance and versioned consent persistence.\n\nI built a dynamic class schedule with an adaptive layout (table on desktop, accordion on mobile), automatic highlighting of the current day and a real-time gym status indicator (Open/Closed) calculated from business hours.\n\nI optimized search rankings with advanced technical SEO: per-page metadata, JSON-LD structured data (Schema.org), automatic sitemap generation and Google Search Console integration.\n\nI integrated the website with the gym's mobile apps (App Store and Google Play), Google Maps and direct contact channels via phone, email and WhatsApp Business.\n\nI optimized images, load times and static assets using Gatsby's build-time optimization tools, implementing lazy loading, responsive images, font preloading and CSS minification to maximize performance.\n\n**Stack:** React 18, Gatsby 5 (JAMstack/SSG), Sass (SCSS), Bootstrap 5, React Helmet, JSON-LD, Google Analytics 4, Google Search Console, Google Maps, WhatsApp Business, Git and npm.\n[See recommendation letter](/Carta-de-recomendacion-carolinasgym.pdf)",
        },
        {
          name: "Miguel Ángel Sellés — blog/portfolio",
          url: "https://miguelangelselles.com",
          label: "miguelangelselles.com",
          description:
            "End-to-end development of **Miguel Ángel Sellés**'s professional blog and portfolio (HR & Coaching), implementing a custom headless CMS built from scratch, without using solutions like WordPress, Contentful or Sanity. The project includes an admin panel, a rich content editor, secure authentication, technical SEO and an architecture based on GitHub as the persistence layer.\n\nI designed a headless backend with no traditional database, using the GitHub REST API to store content in a versioned JSON file. Every action from the admin panel generates a real commit in the repository, providing change history, version control and a lightweight infrastructure with no database servers required.\n\nI built an admin panel with JWT authentication stored in HttpOnly cookies, route protection via middleware and file validation.\n\nI implemented a rich text editor with TipTap for creating and editing articles, including support for images, links, alignment and advanced formatting, along with an image upload system to the GitHub repository itself via a custom API.\n\nI optimized performance using Incremental Static Regeneration (ISR), allowing content to update dynamically without rebuilding the entire application, in addition to implementing advanced technical SEO via the Metadata API, Open Graph, sitemap and dynamic robots.\n\nI also built a transactional email system via Mailjet.\n\n**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, TipTap, Next.js Route Handlers, GitHub REST API, JWT, Mailjet API, ISR, Vercel and Git.",
        },
        {
          name: "La Huerta del Volcán",
          url: "https://lahuertadelvolcan.com",
          label: "lahuertadelvolcan.com",
          description:
            "Development of a responsive landing page for La Huerta del Volcán, a rural tourism and educational farm project aimed at families and school groups. The goal was to design an attractive, conversion-optimized visual experience, creating three complete design proposals over the same content to validate the visual identity before the final version.\n\nThe app was built with Next.js and React, prioritizing performance, ease of maintenance and fast loading through static generation.\n\nI designed a styling system with Tailwind CSS, combining CSS Grid and Flexbox utilities and a mobile-first approach to build a fully responsive interface. I also created custom SVG illustrations and iconography, embedded as React components to keep a coherent visual identity.\n\nI implemented integrations with **WhatsApp Business**, **OpenStreetMap**, Google Maps and Google Fonts, optimizing load times with `next/image`, `next/font` and Next.js's native optimization techniques.\n\nThe interface includes HTML5 video, adaptive galleries, accessible accordions using semantic elements (`details`/`summary`) and a contact form with validation, delivering a lightweight, accessible experience compatible with all modern browsers.\n\nStack: Next.js, React, Tailwind CSS, CSS Grid, Flexbox, SVG, Google Fonts, OpenStreetMap, Google Maps, WhatsApp Business and Git.",
        },
        {
          name: "Qryption",
          label: "Independent project (unreleased)",
          description:
            "App developed 100% solo at TrustCloud Tech, from conception to completion, to encrypt files hosted in the user's Google Drive account and decrypt them only through the Qryption app itself. Designed the architecture, frontend and backend with MongoDB as the database, REST APIs, authentication and business logic. Stack: Next.js, Express.js, MongoDB, JWT. Not released due to commercial viability reasons.",
        },
      ],
    },
    education: {
      heading: "Education",
      items: [
        {
          title: "Web Developer, Computer Science",
          dates: "Ironhack — 2018",
          description:
            "Intensive 9-week (540-hour) web development bootcamp. Technologies: MEAN & MERN Stack, JavaScript, HTML5 and CSS3. Focus on best practices: clean code, design patterns and TDD.",
        },
      ],
    },
    skills: {
      heading: "Skills",
      text: "HTML5 / CSS3 / Sass / Bootstrap / Tailwind · JavaScript / TypeScript · React / Next.js / Angular / PrimeNG / Gatsby / JAMstack · Node.js / Express · PostgreSQL / MongoDB / Supabase · REST APIs / JWT · Custom headless CMS / Git-as-a-Database · TipTap / reCAPTCHA v3 / ISR · Technical SEO: JSON-LD / Open Graph / Twitter Cards / sitemaps / robots.txt / i18n / Core Web Vitals · Google Analytics 4 / Tag Manager / Search Console · Git / GitHub / CI/CD · Vercel / Azure · Figma · Mailjet · Postman · AI: Claude / GitHub Copilot / ChatGPT Codex",
    },
    languages: {
      heading: "Languages",
      text: "Spanish — Native · English — A2-B1",
    },
  },
};

export default en;
