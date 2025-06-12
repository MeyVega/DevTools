// Tipos de categorías para herramientas organizadas por área funcional
export type Category =
  // === DESARROLLO CORE ===
  | "frontend"           // React, Vue, Angular, HTML/CSS tools
  | "backend"            // Node.js, Django, Spring, APIs
  | "fullstack"          // Next.js, Nuxt, T3 Stack
  | "mobile"             // React Native, Flutter, iOS/Android
  | "desktop"            // Electron, Tauri, native apps
  | "api"                // REST, GraphQL, API tools
  | "languages"          // Compiladores, interpretes, SDKs

  // === INFRAESTRUCTURA Y OPERACIONES ===
  | "devops"             // CI/CD, containerización, orquestación
  | "hosting"            // Vercel, Netlify, AWS, servidores
  | "cloud"              // AWS, Azure, GCP, servicios cloud
  | "infrastructure"     // Terraform, CloudFormation, IaC
  | "networking"         // DNS, load balancers, CDN config
  | "cdn"                // Cloudflare, AWS CloudFront
  | "monitoring"         // Uptime, logs, métricas
  | "performance"        // Optimización, profiling, benchmarks

  // === DATOS Y PERSISTENCIA ===
  | "database"           // MySQL, PostgreSQL, MongoDB
  | "storage"            // S3, file systems, cloud storage
  | "backup"             // Respaldos, disaster recovery
  | "analytics"          // Google Analytics, mixpanel, BI tools
  | "data-engineering"   // ETL, pipelines, big data

  // === HERRAMIENTAS DE DESARROLLO ===
  | "testing"            // Jest, Cypress, unit/e2e testing
  | "security"           // Auth, encryption, vulnerability scanning
  | "automation"         // Scripts, workflows, task runners
  | "documentation"      // Gitiles, Notion, wikis, API docs
  | "version-control"    // Git, SVN, merge tools

  // === DISEÑO Y UX ===
  | "design"             // Figma, Sketch, prototyping
  | "ui-libraries"       // Component libraries, design systems

  // === PRODUCTIVIDAD ===
  | "productivity"       // Editors, IDEs, workflow tools
  | "collaboration"      // Slack, Discord, team tools
  | "project-management" // Jira, Trello, Asana

  // === TECNOLOGÍAS EMERGENTES ===
  | "ai"                 // Machine learning, LLMs, AI tools
  | "blockchain"         // Web3, smart contracts, DeFi
  | "iot"                // Internet of Things, embedded
  | "ar-vr"              // Realidad aumentada/virtual

  // === APLICACIONES ESPECÍFICAS ===
  | "cms"                // WordPress, Strapi, headless CMS
  | "ecommerce"          // Shopify, WooCommerce, stores
  | "gaming"             // Game engines, gaming tools
  | "social"             // Social media tools, community

  // === SERVICIOS DE NEGOCIO ===
  | "payment"            // Stripe, PayPal, billing
  | "email"              // SendGrid, Mailchimp, SMTP
  | "sms"                // Twilio, messaging services
  | "crm"                // Salesforce, HubSpot, customer management
  | "erp"                // Enterprise resource planning
  | "marketing"          // Marketing automation, campaigns
  | "seo"                // Search optimization, SEO tools

  // === UTILIDADES ===
  | "localization"       // i18n, translation tools
  | "education"          // Learning platforms, courses
  | "utilities";         // Misc tools, converters, generators

// Tipos de etiquetas para herramientas organizadas por categorías
export type Tag =
  // === LENGUAJES DE PROGRAMACIÓN ===
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "c#"
  | "c++"
  | "php"
  | "ruby"
  | "go"
  | "rust"
  | "swift"
  | "kotlin"
  | "dart"

  // === TECNOLOGÍAS WEB ===
  | "html"
  | "css"
  | "react"
  | "vue"
  | "angular"
  | "nodejs"
  | "framework"
  | "library"
  | "responsive"

  // === CONCEPTOS DE DESARROLLO ===
  | "frontend"
  | "backend"
  | "fullstack"
  | "api"
  | "rest"
  | "graphql"
  | "websockets"
  | "microservices"
  | "serverless"
  | "jamstack"
  | "headless"
  | "pwa"
  | "spa"
  | "ssr"
  | "ssg"
  | "lowcode"
  | "nocode"

  // === INFRAESTRUCTURA Y DEVOPS ===
  | "docker"
  | "kubernetes"
  | "containers"
  | "ci/cd"
  | "devops"
  | "deployment"
  | "cloud"
  | "aws"
  | "azure"
  | "gcp"
  | "hosting"
  | "cdn"
  | "networking"

  // === BASES DE DATOS ===
  | "database"
  | "sql"
  | "nosql"
  | "relational"
  | "document"
  | "json"

  // === HERRAMIENTAS DE DESARROLLO ===
  | "editor"
  | "ide"
  | "version-control"
  | "git"
  | "testing"
  | "debugging"
  | "automation"
  | "build-tools"

  // === TIPOS DE APLICACIONES ===
  | "web"
  | "mobile"
  | "desktop"
  | "cross-platform"
  | "gaming"
  | "ecommerce"
  | "cms"

  // === INTELIGENCIA ARTIFICIAL ===
  | "ai"
  | "machine-learning"
  | "deep-learning"
  | "nlp"
  | "chatbot"
  | "computer-vision"

  // === BLOCKCHAIN Y WEB3 ===
  | "blockchain"
  | "web3"
  | "cryptocurrency"
  | "smart-contracts"

  // === DISEÑO Y UX/UI ===
  | "design"
  | "ui"
  | "ux"
  | "prototyping"
  | "wireframing"
  | "graphics"
  | "templates"

  // === PRODUCTIVIDAD ===
  | "productivity"
  | "collaboration"
  | "project-management"
  | "documentation"
  | "communication"

  // === MONITOREO Y ANÁLISIS ===
  | "monitoring"
  | "analytics"
  | "logging"
  | "performance"
  | "visualization"
  | "metrics"

  // === SEGURIDAD ===
  | "security"
  | "authentication"
  | "authorization"
  | "encryption"
  | "vulnerability-scanning"

  // === SERVICIOS DE NEGOCIO ===
  | "payment"
  | "email"
  | "sms"
  | "crm"
  | "erp"
  | "marketing"
  | "seo"
  | "social-media"

  // === ALMACENAMIENTO Y BACKUP ===
  | "storage"
  | "backup"
  | "file-management"
  | "data-sync"

  // === EDUCACIÓN Y APRENDIZAJE ===
  | "education"
  | "learning"
  | "courses"
  | "certifications"
  | "training"
  | "tutorials"

  // === CARACTERÍSTICAS TÉCNICAS ===
  | "opensource"
  | "free-tier"
  | "paid"
  | "enterprise"
  | "self-hosted"
  | "saas"
  | "realtime"
  | "scalability"
  | "high-performance"
  | "low-latency"

  // === PLATAFORMAS Y EMPRESAS ===
  | "microsoft"
  | "google"
  | "amazon"
  | "facebook"
  | "github"
  | "gitlab"

  // === TECNOLOGÍAS ESPECÍFICAS ===
  | "infrastructure"
  | "data-pipeline"
  | "etl"
  | "component-library"
  | "iot"
  | "ar"
  | "vr"

  // === OTROS ===
  | "localization"
  | "internationalization"
  | "accessibility"
  | "search"
  | "extensions"
  | "plugins"
  | "utilities";

// Interfaz para herramientas
export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  tags: Tag[];
  image?: string;
  isFree: boolean;
  hasPremium?: boolean;
  hasFreeTier?: boolean;
  stars?: number;
  lastUpdated: string;
  isNew?: boolean;
  isFeatured?: boolean;
  githubUrl?: string;
  docsUrl?: string;
  demoUrl?: string;
  authorName?: string;
  documentationUrl?: string;
  alternatives?: string[];
  descriptionLarge?: string;
}

export const getTagColorClass = (tag: Tag): string => {
  const colors: Record<Tag, string> = {
    // === LENGUAJES DE PROGRAMACIÓN ===
    javascript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    typescript: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    python: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    java: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    "c#": "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    "c++": "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    php: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    ruby: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    go: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    rust: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    swift: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    kotlin: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    dart: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",

    // === TECNOLOGÍAS WEB ===
    html: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    css: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    react: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    vue: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    angular: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    nodejs: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    framework: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    library: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    responsive: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",

    // === CONCEPTOS DE DESARROLLO ===
    frontend: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    backend: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    fullstack: "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    api: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    rest: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    graphql: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    websockets: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    microservices: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    serverless: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    jamstack: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    headless: "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    pwa: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    spa: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    ssr: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    ssg: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    lowcode: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    nocode: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",

    // === INFRAESTRUCTURA Y DEVOPS ===
    docker: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    kubernetes: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    containers: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    "ci/cd": "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    devops: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    deployment: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    cloud: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    aws: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    azure: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    gcp: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    hosting: "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    cdn: "bg-sky-100 text-sky-800 dark:bg-sky-800/20 dark:text-sky-300",
    networking: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300",

    // === BASES DE DATOS ===
    database: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    sql: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    nosql: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    relational: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    document: "bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300",
    json: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",

    // === HERRAMIENTAS DE DESARROLLO ===
    editor: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    ide: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    "version-control": "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    git: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    testing: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    debugging: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    automation: "bg-stone-100 text-stone-800 dark:bg-stone-800/20 dark:text-stone-300",
    "build-tools": "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",

    // === TIPOS DE APLICACIONES ===
    web: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    mobile: "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    desktop: "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    "cross-platform": "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    gaming: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    ecommerce: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    cms: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",

    // === INTELIGENCIA ARTIFICIAL ===
    ai: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300",
    "machine-learning": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300",
    "deep-learning": "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    nlp: "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300",
    chatbot: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300",
    "computer-vision": "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300",

    // === BLOCKCHAIN Y WEB3 ===
    blockchain: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    web3: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    cryptocurrency: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    "smart-contracts": "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",

    // === DISEÑO Y UX/UI ===
    design: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    ui: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    ux: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    prototyping: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    wireframing: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    graphics: "bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300",
    templates: "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",

    // === PRODUCTIVIDAD ===
    productivity: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    collaboration: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    "project-management": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    documentation: "bg-neutral-100 text-neutral-800 dark:bg-neutral-800/20 dark:text-neutral-300",
    communication: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",

    // === MONITOREO Y ANÁLISIS ===
    monitoring: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    analytics: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    logging: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    performance: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    visualization: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    metrics: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",

    // === SEGURIDAD ===
    security: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    authentication: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    authorization: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    encryption: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    "vulnerability-scanning": "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",

    // === SERVICIOS DE NEGOCIO ===
    payment: "bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300",
    email: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300",
    sms: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300",
    crm: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    erp: "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    marketing: "bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300",
    seo: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    "social-media": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300",

    // === ALMACENAMIENTO Y BACKUP ===
    storage: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    backup: "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    "file-management": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    "data-sync": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",

    // === EDUCACIÓN Y APRENDIZAJE ===
    education: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    learning: "bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300",
    courses: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    certifications: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    training: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    tutorials: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",

    // === CARACTERÍSTICAS TÉCNICAS ===
    opensource: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    "free-tier": "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    paid: "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    enterprise: "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    "self-hosted": "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    saas: "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    realtime: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300",
    scalability: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",
    "high-performance": "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
    "low-latency": "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",

    // === PLATAFORMAS Y EMPRESAS ===
    microsoft: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    google: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    amazon: "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300",
    facebook: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
    github: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    gitlab: "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300",

    // === TECNOLOGÍAS ESPECÍFICAS ===
    infrastructure: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    "data-pipeline": "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    etl: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    "component-library": "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    iot: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    ar: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    vr: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",

    // === OTROS ===
    localization: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    internationalization: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    accessibility: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
    search: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    extensions: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    plugins: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    utilities: "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
  };

  return (
    colors[tag] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300"
  );
};

export const tools: Tool[] = [
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Editor de código gratuito y multiplataforma con soporte para depuración, Git y extensiones.",
    descriptionLarge: "Visual Studio Code es un potente editor de código fuente para Windows, macOS y Linux. Ofrece funcionalidades como depuración integrada, resaltado de sintaxis, control de versiones con Git, autocompletado, fragmentos de código y una amplia galería de extensiones para adaptarlo a cualquier flujo de trabajo. Es gratuito, de código abierto y ampliamente adoptado por la comunidad de desarrolladores.",
    url: "https://code.visualstudio.com/",
    category: "productivity",
    tags: [
      "editor",
      "ide",
      "cross-platform",
      "extensions",
      "microsoft",
      "productivity",
      "opensource",
      "git",
      "debugging",
      "javascript",
      "typescript"
    ],
    image: "/img/tools/vscode.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-15",
    isFeatured: true,
    githubUrl: "https://github.com/microsoft/vscode",
    documentationUrl: "https://code.visualstudio.com/docs"
  },
  {
    id: "react",
    name: "React",
    description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.",
    descriptionLarge: "React es una biblioteca de JavaScript de código abierto creada por Facebook para desarrollar interfaces de usuario dinámicas y escalables. Se basa en un enfoque declarativo y componible, lo que permite construir aplicaciones web complejas mediante componentes reutilizables. Es ampliamente adoptada por empresas y desarrolladores debido a su ecosistema, rendimiento eficiente gracias al Virtual DOM, y la integración fluida con otras bibliotecas y herramientas del frontend moderno.",
    url: "https://reactjs.org/",
    category: "frontend",
    tags: [
      "react",
      "javascript",
      "typescript",
      "frontend",
      "library",
      "ui",
      "spa",
      "component-library",
      "opensource",
      "facebook"
    ],
    image: "/img/tools/react.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-04-02",
    isFeatured: true,
    githubUrl: "https://github.com/facebook/react",
    documentationUrl: "https://reactjs.org/docs/getting-started.html",
    alternatives: ["vue", "angular", "svelte"]
  },
  {
    id: "node",
    name: "Node.js",
    description: "Entorno de ejecución de JavaScript orientado a servidores, basado en el motor V8 de Chrome.",
    descriptionLarge: "Node.js es un entorno de ejecución de JavaScript de código abierto que permite ejecutar JavaScript fuera del navegador, ideal para desarrollar aplicaciones backend escalables y de alto rendimiento. Utiliza el motor V8 de Chrome, soporta un ecosistema masivo de paquetes vía npm, y es ampliamente usado para APIs, aplicaciones en tiempo real y microservicios.",
    url: "https://nodejs.org/",
    category: "backend",
    tags: [
      "javascript",
      "typescript",
      "backend",
      "api",
      "serverless",
      "realtime",
      "opensource",
      "cross-platform",
      "productivity",
      "microservices",
    ],
    image: "/img/tools/nodejs.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-03-20",
    githubUrl: "https://github.com/nodejs/node",
    documentationUrl: "https://nodejs.org/en/docs/"
  },
  {
    id: "docker",
    name: "Docker",
    description: "Plataforma para crear, desplegar y ejecutar aplicaciones en contenedores de forma portátil y eficiente.",
    descriptionLarge: "Docker es una plataforma de código abierto que permite a los desarrolladores empaquetar aplicaciones en contenedores ligeros y portátiles, asegurando consistencia en diferentes entornos. Facilita la creación, despliegue y gestión de aplicaciones mediante contenedores, integrándose con herramientas de orquestación como Kubernetes y ofreciendo un ecosistema robusto para DevOps.",
    url: "https://www.docker.com/",
    category: "devops",
    tags: [
      "docker",
      "containers",
      "devops",
      "ci/cd",
      "deployment",
      "cloud",
      "microservices",
      "opensource",
      "cross-platform",
      "productivity",
      "kubernetes"
    ],
    image: "/img/tools/docker.svg",
    isFree: true,
    hasFreeTier: true,
    stars: 4.6,
    lastUpdated: "2025-04-10",
    githubUrl: "https://github.com/docker",
    documentationUrl: "https://docs.docker.com/"
  },
  {
    id: "figma",
    name: "Figma",
    description: "Herramienta de diseño colaborativo en la nube para interfaces modernas de productos digitales.",
    descriptionLarge: "Figma es una plataforma de diseño basada en la nube que permite a equipos colaborar en tiempo real en el diseño de interfaces de usuario, prototipos interactivos y sistemas de diseño. Ofrece herramientas para diseño vectorial, edición colaborativa y flujos de trabajo integrados con desarrolladores, siendo ideal para proyectos de UX/UI.",
    url: "https://www.figma.com/",
    category: "design",
    tags: [
      "design",
      "ui",
      "collaboration",
      "productivity",
      "ux",
      "prototyping",
      "web",
      "saas",
      "realtime"
    ],
    image: "/img/tools/figma.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.9,
    lastUpdated: "2025-04-05",
    documentationUrl: "https://help.figma.com/"
  },
  {
    id: "jest",
    name: "Jest",
    description: "Framework de pruebas de JavaScript enfocado en la simplicidad, velocidad y cobertura completa del código.",
    descriptionLarge: "Jest es un framework de pruebas de código abierto para JavaScript, diseñado para ser fácil de usar y altamente configurable. Es ideal para probar aplicaciones basadas en JavaScript, especialmente con React, ofreciendo funcionalidades como pruebas unitarias, de integración, snapshots y mocking. Es mantenido por la comunidad y ampliamente adoptado por su velocidad y simplicidad.",
    url: "https://jestjs.io/",
    category: "testing",
    tags: [
      "javascript",
      "testing",
      "facebook",
      "opensource",
      "react",
    ],
    image: "/img/tools/jest.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-03-15",
    githubUrl: "https://github.com/facebook/jest",
    documentationUrl: "https://jestjs.io/docs/getting-started"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Sistema de base de datos relacional de código abierto conocido por su estabilidad, rendimiento y extensibilidad.",
    descriptionLarge: "PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto, conocido por su robustez, escalabilidad y cumplimiento de estándares SQL. Soporta características avanzadas como consultas complejas, índices, triggers, vistas materializadas y JSONB para datos no relacionales. Es ideal para aplicaciones empresariales, analíticas y web.",
    url: "https://www.postgresql.org/",
    category: "database",
    tags: [
      "database",
      "sql",
      "relational",
      "json",
      "opensource",
      "enterprise",
    ],
    image: "/img/tools/postgresql.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-03-30",
    githubUrl: "https://github.com/postgres/postgres",
    documentationUrl: "https://www.postgresql.org/docs/"
  },
  {
    id: "postman",
    name: "Postman",
    description: "Plataforma completa para diseñar, probar y documentar APIs, con funcionalidades colaborativas para equipos de desarrollo.",
    descriptionLarge: "Postman es una plataforma líder para el desarrollo y prueba de APIs. Facilita a los desarrolladores el diseño, documentación, simulación, monitoreo y pruebas automatizadas de APIs REST, SOAP y GraphQL. Su interfaz visual intuitiva permite gestionar colecciones de peticiones, variables de entorno, flujos de trabajo automatizados y generación de documentación en tiempo real. Postman también ofrece colaboración en equipo, gestión de versiones, integraciones CI/CD y controles de acceso, lo que la convierte en una herramienta esencial para equipos que trabajan con APIs modernas.",
    url: "https://www.postman.com/",
    category: "api",
    tags: ["api", "testing", "collaboration", "productivity"],
    image: "/img/tools/postman.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.7,
    lastUpdated: "2025-04-12",
    documentationUrl: "https://learning.postman.com/docs/getting-started/introduction/"
  },
  {
    id: "github",
    name: "GitHub",
    description: "Plataforma web para control de versiones y colaboración en proyectos de software basada en Git.",
    descriptionLarge: "GitHub es una plataforma líder para el control de versiones con Git, que permite a equipos colaborar en proyectos de software mediante repositorios, pull requests, issues y acciones de CI/CD. Ofrece herramientas para gestión de proyectos, revisión de código y automatización, siendo esencial para desarrolladores individuales y empresas. Es ampliamente utilizado en proyectos de código abierto y privados.",
    url: "https://github.com/",
    category: "version-control",
    tags: [
      "git",
      "version-control",
      "collaboration",
      "ci/cd",
      "opensource",
      "productivity",
      "automation",
      "github",
      "project-management"
    ],
    image: "/img/tools/github.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.9,
    lastUpdated: "2025-04-18",
    documentationUrl: "https://docs.github.com/en"
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Superconjunto de JavaScript que añade tipado estático y herramientas para mejorar la calidad del código.",
    descriptionLarge: "TypeScript es un lenguaje de programación de código abierto que extiende JavaScript al agregar tipado estático y características orientadas a objetos. Es ideal para desarrollar aplicaciones a gran escala, mejorando la mantenibilidad y detección de errores en tiempo de compilación. Se integra con herramientas como Node.js, React y Angular, siendo ampliamente adoptado en proyectos web modernos.",
    url: "https://www.typescriptlang.org/",
    category: "languages",
    tags: [
      "typescript",
      "javascript",
      "frontend",
      "backend",
      "fullstack",
      "opensource",
      "microsoft",
      "productivity",
      "web"
    ],
    image: "/img/tools/typescript.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-08",
    githubUrl: "https://github.com/microsoft/TypeScript",
    documentationUrl: "https://www.typescriptlang.org/docs/"
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    description: "Plataforma líder de computación en la nube que ofrece servicios de infraestructura, plataforma y software escalables y seguros.",
    descriptionLarge: "Amazon Web Services (AWS) es una plataforma integral de servicios en la nube que ofrece soluciones para computación, almacenamiento, bases de datos, analíticas, machine learning y más. Es utilizada por empresas y desarrolladores para construir aplicaciones escalables, seguras y de alto rendimiento, con herramientas como EC2, S3, Lambda y RDS. AWS es líder en la industria del cloud computing.",
    url: "https://aws.amazon.com/",
    category: "cloud",
    tags: [
      "cloud",
      "aws",
      "infrastructure",
      "devops",
      "storage",
      "database",
      "serverless",
      "scalability",
      "amazon",
      "enterprise"
    ],
    image: "/img/tools/aws.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.6,
    lastUpdated: "2025-04-15",
    documentationUrl: "https://docs.aws.amazon.com/"
  },
  {
    id: "owasp",
    name: "OWASP",
    description: "Comunidad global que ofrece recursos abiertos para mejorar la seguridad en aplicaciones web.",
    descriptionLarge: "El Proyecto de Seguridad de Aplicaciones Web Abiertas (OWASP) es una comunidad en línea que proporciona artículos, metodologías, documentación, herramientas y tecnologías de código abierto para mejorar la seguridad de aplicaciones web. OWASP es conocido por su enfoque en la educación y concienciación sobre vulnerabilidades, y por proyectos emblemáticos como el 'Top Ten' de vulnerabilidades más críticas en aplicaciones web. Su misión es ayudar a desarrolladores, profesionales de seguridad y organizaciones a construir software más seguro.",
    url: "https://owasp.org/",
    category: "security",
    tags: ["security", "web", "opensource"],
    image: "/img/tools/owasp.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-03-25",
    documentationUrl: "https://owasp.org/www-project-top-ten/"
  },
  {
    id: "flutter",
    name: "Flutter",
    description: "El kit de herramientas de interfaz de usuario de Google para construir aplicaciones nativas para móviles, web y escritorio desde una única base de código.",
    descriptionLarge: "Flutter es un kit de desarrollo de software (SDK) de código abierto creado por Google para construir aplicaciones compiladas nativamente en plataformas móviles (iOS, Android), web y escritorio utilizando una única base de código. Utiliza el lenguaje Dart y ofrece una experiencia de desarrollo rápida con hot reload, widgets personalizables y alto rendimiento. Flutter facilita el desarrollo multiplataforma con interfaces atractivas y consistentes.",
    url: "https://flutter.dev/",
    category: "mobile",
    tags: ["dart", "cross-platform", "google", "ui", "mobile", "opensource"],
    image: "/img/tools/flutter.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-20",
    isNew: true,
    githubUrl: "https://github.com/flutter/flutter",
    documentationUrl: "https://flutter.dev/docs"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    description: "Una plataforma de código abierto de extremo a extremo para aprendizaje automático, con un ecosistema completo y flexible de herramientas, bibliotecas y recursos comunitarios.",
    descriptionLarge: "TensorFlow es una plataforma de aprendizaje automático de código abierto desarrollada por Google. Permite a desarrolladores e investigadores crear, entrenar y desplegar modelos de machine learning y deep learning a escala. TensorFlow ofrece una amplia variedad de herramientas, bibliotecas y recursos para facilitar desde tareas simples hasta proyectos avanzados en inteligencia artificial, soportando múltiples lenguajes como Python, C++ y JavaScript.",
    url: "https://www.tensorflow.org/",
    category: "ai",
    tags: ["google", "python", "ai", "opensource",],
    image: "/img/tools/tensorflow.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-01",
    isFeatured: true,
    githubUrl: "https://github.com/tensorflow/tensorflow",
    documentationUrl: "https://www.tensorflow.org/guide"
  },
  {
    id: "eslint",
    name: "ESLint",
    description: "Una herramienta de análisis estático para identificar y reportar patrones problemáticos en el código JavaScript, ayudando a mantener un código consistente y libre de errores.",
    descriptionLarge: "ESLint es una herramienta muy popular en el ecosistema JavaScript que permite analizar el código fuente para detectar problemas de estilo, errores potenciales y malas prácticas. Configurable y extensible, ESLint ayuda a los desarrolladores a mantener estándares de calidad en sus proyectos, integrándose fácilmente en procesos de desarrollo y CI/CD.",
    url: "https://eslint.org/",
    category: "testing",
    tags: ["javascript", "testing", "opensource"],
    image: "/img/tools/eslint.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-01",
    githubUrl: "https://github.com/eslint/eslint",
    documentationUrl: "https://eslint.org/docs/latest/"
  },
  {
    id: "webpack",
    name: "Webpack",
    description: "Un empaquetador de módulos para aplicaciones JavaScript modernas, que procesa recursos y genera bundles optimizados para producción.",
    descriptionLarge: "Webpack es una herramienta esencial en el desarrollo frontend que permite empaquetar múltiples recursos, incluyendo JavaScript, CSS, imágenes y más, en archivos optimizados para ser servidos en producción. Ofrece configuraciones personalizables, soporte para loaders y plugins que amplían su funcionalidad, mejorando la performance y manteniendo el código modular.",
    url: "https://webpack.js.org/",
    category: "frontend",
    tags: ["javascript", "frontend", "deployment"],
    image: "/img/tools/webpack.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-03-28",
    githubUrl: "https://github.com/webpack/webpack",
    documentationUrl: "https://webpack.js.org/concepts/"
  },
  {
    id: "circleci",
    name: "CircleCI",
    description: "Una plataforma de integración continua y entrega continua que automatiza las pruebas y despliegues de software.",
    descriptionLarge: "CircleCI es una solución en la nube y autoalojada que facilita la integración y entrega continua para proyectos de software, permitiendo ejecutar pipelines que construyen, prueban y despliegan código automáticamente. Soporta múltiples lenguajes y plataformas, integrándose con herramientas populares de desarrollo y proporcionando métricas para optimizar el flujo de trabajo DevOps.",
    url: "https://circleci.com/",
    category: "devops",
    tags: ["devops", "automation", "deployment", "ci/cd"],
    image: "/img/tools/circleci.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.4,
    lastUpdated: "2025-03-30",
    documentationUrl: "https://circleci.com/docs/"
  },
  {
    id: "wordpress",
    name: "WordPress",
    description: "Un sistema de gestión de contenido (CMS) de código abierto muy popular para crear sitios web y blogs fácilmente.",
    descriptionLarge: "WordPress es un CMS de código abierto ampliamente utilizado que permite a usuarios y desarrolladores crear sitios web, blogs y tiendas en línea sin necesidad de profundos conocimientos técnicos. Ofrece una gran variedad de temas, plugins y herramientas SEO para personalizar y optimizar los sitios web.",
    url: "https://wordpress.org/",
    category: "cms",
    tags: ["opensource", "cms", "php", "web", "seo", "marketing"],
    image: "/img/tools/wordpress.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-15",
    documentationUrl: "https://wordpress.org/support/"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "Un sistema de orquestación de contenedores open source para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores.",
    descriptionLarge: "Kubernetes es una plataforma de código abierto para automatizar la gestión, despliegue y escalado de aplicaciones en contenedores. Permite a los desarrolladores y equipos de DevOps administrar clústeres de contenedores, asegurando alta disponibilidad, balanceo de carga y recuperación automática.",
    url: "https://kubernetes.io/",
    category: "devops",
    tags: ["containers", "devops", "deployment", "opensource", "automation"],
    image: "/img/tools/kubernetes.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-10",
    documentationUrl: "https://kubernetes.io/docs/home/"
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Una plataforma de pago en línea que permite a las empresas aceptar pagos a través de internet de manera sencilla y segura.",
    descriptionLarge: "Stripe es una plataforma global de pagos online que ofrece soluciones para aceptar pagos, gestionar suscripciones, prevenir fraudes y optimizar flujos de pago. Compatible con múltiples monedas y métodos de pago, Stripe es ampliamente usada en ecommerce y servicios digitales.",
    url: "https://stripe.com/",
    category: "payment",
    tags: ["payment", "api", "automation", "security", "cloud"],
    image: "/img/tools/stripe.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.7,
    lastUpdated: "2025-04-05",
    documentationUrl: "https://stripe.com/docs"
  },
  {
    id: "firebase",
    name: "Firebase",
    description: "Una plataforma de desarrollo de aplicaciones móviles y web de Google que ofrece base de datos en tiempo real, autenticación, hosting y más.",
    descriptionLarge: "Firebase es una plataforma integral para el desarrollo rápido de aplicaciones móviles y web. Proporciona servicios como base de datos en tiempo real, autenticación segura, hosting, funciones en la nube y análisis, facilitando a los desarrolladores construir aplicaciones escalables y de alto rendimiento.",
    url: "https://firebase.google.com/",
    category: "backend",
    tags: ["backend", "cloud", "hosting", "database", "realtime", "google", "mobile", "opensource"],
    image: "/img/tools/firebase.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-04-12",
    documentationUrl: "https://firebase.google.com/docs"
  },
  {
    id: "grafana",
    name: "Grafana",
    description: "Una plataforma open source para monitoreo y visualización de métricas, logs y datos en tiempo real, ampliamente usada para observabilidad.",
    descriptionLarge: "Grafana es una plataforma de código abierto que permite la visualización y análisis de datos en tiempo real. Con soporte para múltiples fuentes de datos y paneles personalizables, Grafana es muy usada en equipos DevOps para monitorear infraestructura, aplicaciones y rendimiento de servicios.",
    url: "https://grafana.com/",
    category: "monitoring",
    tags: ["monitoring", "opensource", "visualization", "automation", "cloud"],
    image: "/img/tools/grafana.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-14",
    documentationUrl: "https://grafana.com/docs/"
  },
  {
    id: "raycast",
    name: "Raycast",
    description: "Una herramienta de productividad que permite ejecutar comandos, buscar apps y automatizar tareas desde tu escritorio.",
    descriptionLarge: "Raycast es una aplicación para macOS que mejora tu flujo de trabajo. Puedes ejecutar comandos, buscar archivos, integrarte con servicios como GitHub, Jira o Notion, y extender funcionalidades mediante extensiones personalizadas.",
    url: "https://www.raycast.com/",
    category: "productivity",
    tags: ["productivity", "automation"],
    image: "/img/tools/raycast.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-06-08",
    documentationUrl: "https://manual.raycast.com/"
  },
  {
    id: "retool",
    name: "Retool",
    description: "Una plataforma para construir interfaces internas con rapidez usando componentes listos para bases de datos y APIs.",
    descriptionLarge: "Retool permite construir aplicaciones internas rápidamente con una interfaz drag-and-drop. Soporta conexiones con bases de datos y APIs como PostgreSQL, MongoDB, REST y más.",
    url: "https://retool.com/",
    category: "frontend",
    tags: ["frontend", "automation", "database", "api", "productivity"],
    image: "/img/tools/retool.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-06-05",
    documentationUrl: "https://docs.retool.com/"
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "Una plataforma líder en modelos de IA y procesamiento de lenguaje natural con enfoque en código abierto.",
    descriptionLarge: "Hugging Face es conocida por su biblioteca Transformers, que ofrece modelos de NLP, machine learning y deep learning de manera accesible y colaborativa.",
    url: "https://huggingface.co/",
    category: "ai",
    tags: ["ai", "opensource", "python"],
    image: "/img/tools/huggingface.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-06-03",
    documentationUrl: "https://huggingface.co/docs"
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Plataforma para desplegar aplicaciones frontend con alto rendimiento y flujos de trabajo optimizados.",
    descriptionLarge: "Vercel es una plataforma enfocada en el desarrollo frontend moderno. Permite desplegar proyectos directamente desde repositorios como GitHub, GitLab o Bitbucket. Ofrece CI/CD, vista previa automática de cambios y un rendimiento optimizado con su red global.",
    url: "https://vercel.com/",
    category: "hosting",
    tags: ["hosting", "deployment", "frontend", "cloud"],
    image: "/img/tools/vercel.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-06-08",
    documentationUrl: "https://vercel.com/docs"
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description: "Framework CSS basado en utilidades para construir interfaces modernas rápidamente.",
    descriptionLarge: "Tailwind CSS es un framework de bajo nivel que proporciona clases utilitarias para construir interfaces personalizadas sin necesidad de escribir CSS desde cero. Es altamente personalizable, rápido y popular entre desarrolladores frontend.",
    url: "https://tailwindcss.com/",
    category: "frontend",
    tags: ["frontend", "ui", "design", "opensource"],
    image: "/img/tools/tailwindcss.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-06-08",
    documentationUrl: "https://tailwindcss.com/docs"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "Asistente de codificación basado en IA que ayuda a escribir código más rápido con sugerencias inteligentes.",
    descriptionLarge: "GitHub Copilot es un asistente de programación desarrollado por GitHub y OpenAI. Utiliza modelos de lenguaje para autocompletar funciones, escribir tests, y sugerir líneas de código completas en tiempo real desde tu editor.",
    url: "https://github.com/features/copilot",
    category: "ai",
    tags: ["ai", "automation", "productivity", "cloud"],
    image: "/img/tools/github-copilot.svg",
    isFree: false,
    stars: 4.6,
    lastUpdated: "2025-06-08",
    documentationUrl: "https://docs.github.com/en/copilot"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "Base de datos NoSQL orientada a documentos con alto rendimiento.",
    descriptionLarge: "MongoDB es una base de datos NoSQL líder que almacena datos en documentos flexibles tipo JSON. Ideal para aplicaciones escalables que manejan grandes volúmenes de datos no estructurados. Ofrece consultas ad-hoc, indexación avanzada y replicación automática para alta disponibilidad.",
    url: "https://www.mongodb.com/",
    category: "database",
    tags: ["database", "nosql", "document", "json", "scalability", "cloud"],
    image: "/img/tools/mongodb.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-05-20",
    isFeatured: true,
    documentationUrl: "https://docs.mongodb.com/",
    alternatives: ["postgresql", "firestore", "dynamodb"]
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description: "Framework front-end para desarrollar interfaces responsive con componentes predefinidos.",
    descriptionLarge: "Bootstrap es el framework CSS más popular para construir sitios web responsive y mobile-first. Incluye un sistema de grid, componentes UI preestilizados (navbar, cards, modales) y plugins JavaScript. Perfecto para prototipado rápido y desarrolladores que priorizan la productividad.",
    url: "https://getbootstrap.com/",
    category: "frontend",
    tags: ["css", "framework", "responsive", "ui", "javascript", "frontend"],
    image: "/img/tools/bootstrap.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-15",
    isFeatured: true,
    githubUrl: "https://github.com/twbs/bootstrap",
    alternatives: ["tailwindcss", "foundation", "bulma"]
  },
  {
    id: "apache",
    name: "Apache HTTP Server",
    description: "Servidor web open-source ampliamente utilizado en entornos de producción.",
    descriptionLarge: "Apache HTTP Server es uno de los servidores web más confiables y extendidos, con soporte para módulos dinámicos (como PHP), autenticación y virtual hosting. Aunque ha perdido terreno frente a Nginx en algunos escenarios, sigue siendo una opción sólida para hosting tradicional.",
    url: "https://httpd.apache.org/",
    category: "hosting",
    tags: ["web", "opensource", "hosting", "backend"],
    image: "/img/tools/apache.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-03-10",
    isFeatured: false,
    alternatives: ["nginx", "caddy", "litespeed"]
  },
  {
    id: "canva",
    name: "Canva",
    description: "Plataforma de diseño gráfico simplificado con plantillas para no diseñadores.",
    descriptionLarge: "Canva democratiza el diseño gráfico con una interfaz drag-and-drop y miles de plantillas profesionales para redes sociales, presentaciones, pósters y más. Ofrece herramientas colaborativas, biblioteca de assets y funcionalidades avanzadas en su versión Pro.",
    url: "https://www.canva.com/",
    category: "design",
    tags: ["design", "ui", "ux", "templates", "graphics", "productivity", "collaboration"],
    image: "/img/tools/canva.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-05-01",
    isFeatured: false,
    alternatives: ["figma", "adobe-express", "piktochart"]
  },
  {
    id: "bolt",
    name: "Bolt",
    description: "CMS PHP moderno para desarrollo web rápido y escalable.",
    descriptionLarge: "Bolt es un CMS flexible construido con Symfony que combina la simplicidad de uso con la potencia de PHP moderno. Ideal para sitios content-focused donde los editores necesitan facilidad de uso y los desarrolladores requieren flexibilidad técnica.",
    url: "https://boltcms.io/",
    category: "cms",
    tags: ["php", "cms", "opensource"],
    image: "/img/tools/bolt.svg",
    isFree: true,
    stars: 4.2,
    lastUpdated: "2025-02-28",
    isFeatured: false,
    alternatives: ["wordpress", "drupal", "joomla"]
  },
  {
    id: "claude",
    name: "Claude AI",
    description: "Asistente de IA conversacional desarrollado por Anthropic, enfocado en seguridad y ética.",
    descriptionLarge: "Claude es un modelo de lenguaje avanzado especializado en interacciones seguras y útiles. Destaca por su capacidad para manejar contextos largos (hasta 200K tokens) y su enfoque en reducir respuestas dañinas o sesgadas. Ofrece APIs para integración en productos.",
    url: "https://claude.ai/",
    category: "ai",
    tags: ["ai", "chatbot", "nlp", "productivity", "api"],
    image: "/img/tools/claude.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-05-18",
    isFeatured: true,
    alternatives: ["chatgpt", "bard", "grok"]
  },
  {
    id: "grok",
    name: "Grok",
    description: "Modelo de IA de xAI con integración nativa en la plataforma X (Twitter).",
    descriptionLarge: "Desarrollado por xAI (empresa de Elon Musk), Grok se distingue por su personalidad 'rebelde' y acceso en tiempo real a datos de X. Ofrece respuestas menos filtradas que otros chatbots y funcionalidades avanzadas para suscriptores de X Premium+.",
    url: "https://x.ai/grok",
    category: "ai",
    tags: ["ai", "chatbot", "nlp"],
    image: "/img/tools/grok.svg",
    isFree: false,
    stars: 4.3,
    lastUpdated: "2025-04-30",
    isFeatured: false,
    alternatives: ["claude", "chatgpt", "copilot"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Motor de búsqueda especializado en código y documentación técnica.",
    descriptionLarge: "DeepSeek indexa repositorios de código, Stack Overflow y documentación oficial para proporcionar resultados ultra-relevantes a desarrolladores. Soporta búsquedas semánticas y filtros por lenguaje/framework. Ideal para resolver problemas técnicos complejos.",
    url: "https://deepseek.com/",
    category: "documentation",
    tags: ["search", "documentation", "productivity"],
    image: "/img/tools/deepseek.svg",
    isFree: true,
    stars: 4.4,
    lastUpdated: "2025-03-22",
    isFeatured: false,
    alternatives: ["github-search", "krugle", "sourcegraph"]
  },
  {
    id: "drupal",
    name: "Drupal",
    description: "Sistema de gestión de contenido (CMS) flexible y robusto para construir sitios web y aplicaciones digitales.",
    descriptionLarge: "Drupal es un CMS de código abierto altamente personalizable utilizado por desarrolladores y organizaciones para crear sitios web complejos, seguros y escalables. Ofrece una arquitectura modular, control de acceso avanzado, soporte multilingüe, y una comunidad activa que contribuye con miles de módulos y temas. Ideal para portales gubernamentales, sitios de educación, e-commerce y medios de comunicación.",
    url: "https://www.drupal.org/",
    category: "cms",
    tags: [
      "cms",
      "opensource",
      "php",
      "security",
    ],
    image: "/img/tools/drupal.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-06-08",
    isFeatured: false,
    githubUrl: "https://github.com/drupal/drupal",
    documentationUrl: "https://www.drupal.org/docs"
  },
  {
    id: "trello",
    name: "Trello",
    description: "Herramienta de gestión de proyectos basada en tableros visuales y listas para organizar tareas.",
    descriptionLarge: "Trello es una plataforma de productividad basada en la metodología Kanban que permite organizar proyectos y tareas mediante tableros, listas y tarjetas. Es ideal para equipos y usuarios individuales que buscan una forma visual de colaborar y planificar su trabajo. Trello se integra con herramientas populares como Slack, Google Drive y Jira, y permite automatizaciones con reglas personalizadas mediante Butler.",
    url: "https://trello.com/",
    category: "productivity",
    tags: [
      "productivity",
      "project-management",
      "collaboration",
      "automation",
    ],
    image: "/img/tools/trello.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-06-08",
    isFeatured: false,
    documentationUrl: "https://support.atlassian.com/trello/"
  },
  {
    id: "slack",
    name: "Slack",
    description: "Plataforma de mensajería para equipos que facilita la comunicación, colaboración y productividad en el trabajo.",
    descriptionLarge: "Slack es una herramienta de comunicación diseñada para equipos. Permite organizar conversaciones por canales, compartir archivos, hacer videollamadas e integrarse con cientos de aplicaciones como Google Drive, GitHub, Trello o Zoom. Su interfaz intuitiva y su potente sistema de búsqueda facilitan la colaboración en entornos remotos o híbridos. Slack también ofrece automatizaciones, flujos de trabajo personalizados y compatibilidad con bots.",
    url: "https://slack.com/",
    category: "productivity",
    tags: [
      "communication",
      "collaboration",
      "productivity",
    ],
    image: "/img/tools/slack.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-06-08",
    isFeatured: false,
    documentationUrl: "https://slack.com/help"
  },
  {
    id: "cisco-netacad",
    name: "Cisco Networking Academy",
    description: "Plataforma educativa gratuita de Cisco para aprender redes, ciberseguridad, IoT y habilidades tecnológicas.",
    descriptionLarge: "Cisco Networking Academy (NetAcad) es un programa global de educación tecnológica impulsado por Cisco. Ofrece cursos gratuitos en redes, ciberseguridad, Internet de las Cosas (IoT), programación y habilidades profesionales. Su enfoque práctico, basado en laboratorios y simuladores como Packet Tracer, permite a estudiantes y profesionales adquirir habilidades relevantes para el mundo laboral. Está disponible en múltiples idiomas y es respaldado por instituciones educativas en todo el mundo.",
    url: "https://www.netacad.com/",
    category: "education",
    tags: [
      "learning",
      "networking",
      "iot",
      "education",
      "certifications",
    ],
    image: "/img/tools/cisco-netacad.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-06-08",
    isFeatured: true,
    documentationUrl: "https://www.netacad.com/portal/resources"
  },
  {
    id: "php",
    name: "PHP",
    description: "Lenguaje de programación del lado del servidor ampliamente utilizado para el desarrollo web.",
    descriptionLarge: "PHP (Hypertext Preprocessor) es un lenguaje de scripting de propósito general que se adapta especialmente al desarrollo web. Es rápido, flexible y práctico, y está instalado en millones de servidores y sitios web. Su sintaxis sencilla y su amplia comunidad lo hacen ideal para principiantes y profesionales por igual.",
    url: "https://www.php.net/",
    category: "languages",
    tags: [
      "php",
      "backend",
      "web",
      "opensource",
      "serverless",
    ],
    image: "/img/tools/php.svg",
    isFree: true,
    stars: 4.3,
    lastUpdated: "2025-05-10",
    documentationUrl: "https://www.php.net/docs.php"
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "Framework PHP moderno y elegante para el desarrollo de aplicaciones web.",
    descriptionLarge: "Laravel es un framework PHP de código abierto diseñado para el desarrollo de aplicaciones web con una sintaxis elegante y expresiva. Ofrece herramientas integradas para enrutamiento, autenticación, migraciones, pruebas, y más. Es ideal para crear aplicaciones robustas y escalables de forma rápida y sencilla.",
    url: "https://laravel.com/",
    category: "backend",
    tags: [
      "php",
      "backend",
      "framework",
      "web",
      "opensource",
      "serverless"
    ],
    image: "/img/tools/laravel.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-04-25",
    githubUrl: "https://github.com/laravel/laravel",
    documentationUrl: "https://laravel.com/docs"
  },
  {
    id: "brilliantdirectories",
    name: "BrilliantDirectories",
    description: "Plataforma todo en uno para crear sitios de directorios con funcionalidades empresariales.",
    descriptionLarge: "BrilliantDirectories es una plataforma SaaS para crear sitios de membresía, directorios empresariales, redes profesionales y marketplaces. Incluye herramientas integradas de CRM, pagos, SEO, email marketing y administración de contenido, todo sin necesidad de programar.",
    url: "https://www.brilliantdirectories.com/",
    category: "cms",
    tags: [
      "cms",
      "nocode",
      "saas",
      "seo",
      "crm",
      "ecommerce",
      "project-management"
    ],
    image: "/img/tools/brilliantdirectories.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.1,
    lastUpdated: "2025-05-18"
  },  
  {
    id: "supabase",
    name: "Supabase",
    description: "Alternativa open-source a Firebase con base de datos PostgreSQL y backend listo para producción.",
    descriptionLarge: "Supabase es una plataforma backend como servicio que proporciona una base de datos PostgreSQL, autenticación, almacenamiento y funciones serverless en tiempo real. Está pensada para desarrolladores que desean una solución completa, autoalojable y con soporte para aplicaciones modernas.",
    url: "https://supabase.com/",
    category: "backend",
    tags: [
      "database",
      "backend",
      "fullstack",
      "realtime",
      "opensource",
      "cloud",
      "serverless",
      "authentication",
      "api"
    ],
    image: "/img/tools/supabase.svg",
    isFree: true,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.9,
    lastUpdated: "2025-04-30",
    githubUrl: "https://github.com/supabase/supabase",
    documentationUrl: "https://supabase.com/docs"
  },  
  {
    id: "namecheap",
    name: "Namecheap",
    description: "Proveedor de dominios, hosting, SSL y correo electrónico con precios competitivos.",
    descriptionLarge: "Namecheap es una empresa popular de servicios de dominios, hosting compartido y dedicado, certificados SSL y correo profesional. Su interfaz intuitiva y soporte accesible lo hacen ideal para desarrolladores, freelancers y pequeñas empresas que buscan administrar su presencia en línea.",
    url: "https://www.namecheap.com/",
    category: "hosting",
    tags: [
      "hosting",
      "email",
      "cloud",
      "deployment",
      "networking"
    ],
    image: "/img/tools/namecheap.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-05-12"
  }
];

export const getCategoryLabel = (category: Category): string => {
  const labels: Record<Category, string> = {
    // === DESARROLLO CORE ===
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Fullstack",
    mobile: "Móvil",
    desktop: "Escritorio",
    api: "API",
    languages: "Lenguajes de Programación",

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops: "DevOps",
    hosting: "Hosting",
    cloud: "Cloud",
    infrastructure: "Infraestructura",
    networking: "Redes",
    cdn: "CDN",
    monitoring: "Monitoreo",
    performance: "Rendimiento",

    // === DATOS Y PERSISTENCIA ===
    database: "Base de Datos",
    storage: "Almacenamiento",
    backup: "Respaldo",
    analytics: "Analíticas",
    "data-engineering": "Ingeniería de Datos",

    // === HERRAMIENTAS DE DESARROLLO ===
    testing: "Testing",
    security: "Seguridad",
    automation: "Automatización",
    documentation: "Documentación",
    "version-control": "Control de Versiones",

    // === DISEÑO Y UX ===
    design: "Diseño",
    "ui-libraries": "Bibliotecas de UI",

    // === PRODUCTIVIDAD ===
    productivity: "Productividad",
    collaboration: "Colaboración",
    "project-management": "Gestión de Proyectos",

    // === TECNOLOGÍAS EMERGENTES ===
    ai: "IA",
    blockchain: "Blockchain",
    iot: "IoT",
    "ar-vr": "AR/VR",

    // === APLICACIONES ESPECÍFICAS ===
    cms: "CMS",
    ecommerce: "E-commerce",
    gaming: "Gaming",
    social: "Redes Sociales",

    // === SERVICIOS DE NEGOCIO ===
    payment: "Pagos",
    email: "Email",
    sms: "SMS",
    crm: "CRM",
    erp: "ERP",
    marketing: "Marketing",
    seo: "SEO",

    // === UTILIDADES ===
    localization: "Localización",
    education: "Educación",
    utilities: "Utilidades",
  };

  return labels[category] || category;
};

export const getAllCategories = (): Category[] => {
  return [
    // === DESARROLLO CORE ===
    "frontend",
    "backend",
    "fullstack",
    "mobile",
    "desktop",
    "api",
    "languages",

    // === INFRAESTRUCTURA Y OPERACIONES ===
    "devops",
    "hosting",
    "cloud",
    "infrastructure",
    "networking",
    "cdn",
    "monitoring",
    "performance",

    // === DATOS Y PERSISTENCIA ===
    "database",
    "storage",
    "backup",
    "analytics",
    "data-engineering",

    // === HERRAMIENTAS DE DESARROLLO ===
    "testing",
    "security",
    "automation",
    "documentation",
    "version-control",

    // === DISEÑO Y UX ===
    "design",
    "ui-libraries",

    // === PRODUCTIVIDAD ===
    "productivity",
    "collaboration",
    "project-management",

    // === TECNOLOGÍAS EMERGENTES ===
    "ai",
    "blockchain",
    "iot",
    "ar-vr",

    // === APLICACIONES ESPECÍFICAS ===
    "cms",
    "ecommerce",
    "gaming",
    "social",

    // === SERVICIOS DE NEGOCIO ===
    "payment",
    "email",
    "sms",
    "crm",
    "erp",
    "marketing",
    "seo",

    // === UTILIDADES ===
    "localization",
    "education",
    "utilities"
  ];
};

export const getAllTags = (): Tag[] => {
  const tagSet = new Set<Tag>();
  tools.forEach(tool => {
    tool.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getTagLabel = (tag: string): string => {
  const labels: Record<string, string> = {
    // === LENGUAJES DE PROGRAMACIÓN ===
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    java: "Java",
    "c#": "C#",
    "c++": "C++",
    php: "PHP",
    ruby: "Ruby",
    go: "Go",
    rust: "Rust",
    swift: "Swift",
    kotlin: "Kotlin",
    dart: "Dart",

    // === TECNOLOGÍAS WEB ===
    html: "HTML",
    css: "CSS",
    react: "React",
    vue: "Vue",
    angular: "Angular",
    nodejs: "Node.js",
    framework: "Framework",
    library: "Librería",
    responsive: "Responsive",

    // === CONCEPTOS DE DESARROLLO ===
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Fullstack",
    api: "API",
    rest: "REST",
    graphql: "GraphQL",
    websockets: "WebSockets",
    microservices: "Microservicios",
    serverless: "Serverless",
    jamstack: "Jamstack",
    headless: "Headless",
    pwa: "PWA",
    spa: "SPA",
    ssr: "SSR",
    ssg: "SSG",
    lowcode: "Low-Code",
    nocode: "No-Code",

    // === INFRAESTRUCTURA Y DEVOPS ===
    docker: "Docker",
    kubernetes: "Kubernetes",
    containers: "Containers",
    "ci/cd": "CI/CD",
    devops: "DevOps",
    deployment: "Deployment",
    cloud: "Cloud",
    aws: "AWS",
    azure: "Azure",
    gcp: "GCP",
    hosting: "Hosting",
    cdn: "CDN",
    networking: "Networking",

    // === BASES DE DATOS ===
    database: "Base de Datos",
    sql: "SQL",
    nosql: "NoSQL",
    relational: "Relacional",
    document: "Documento",
    json: "JSON",

    // === HERRAMIENTAS DE DESARROLLO ===
    editor: "Editor",
    ide: "IDE",
    "version-control": "Control de Versiones",
    git: "Git",
    testing: "Testing",
    debugging: "Depuración",
    automation: "Automatización",
    "build-tools": "Herramientas de Compilación",

    // === TIPOS DE APLICACIONES ===
    web: "Web",
    mobile: "Móvil",
    desktop: "Escritorio",
    "cross-platform": "Cross-Platform",
    gaming: "Gaming",
    ecommerce: "Ecommerce",
    cms: "CMS",

    // === INTELIGENCIA ARTIFICIAL ===
    ai: "AI",
    "machine-learning": "Machine Learning",
    "deep-learning": "Deep Learning",
    nlp: "NLP",
    chatbot: "Chatbot",
    "computer-vision": "Visión Computacional",

    // === BLOCKCHAIN Y WEB3 ===
    blockchain: "Blockchain",
    web3: "Web3",
    cryptocurrency: "Criptomoneda",
    "smart-contracts": "Contratos Inteligentes",

    // === DISEÑO Y UX/UI ===
    design: "Diseño",
    ui: "UI",
    ux: "UX",
    prototyping: "Prototipado",
    wireframing: "Wireframing",
    graphics: "Gráficos",
    templates: "Plantillas",

    // === PRODUCTIVIDAD ===
    productivity: "Productividad",
    collaboration: "Colaboración",
    "project-management": "Gestión de Proyectos",
    documentation: "Documentación",
    communication: "Comunicación",

    // === MONITOREO Y ANÁLISIS ===
    monitoring: "Monitoring",
    analytics: "Analíticas",
    logging: "Logging",
    performance: "Rendimiento",
    visualization: "Visualización",
    metrics: "Métricas",

    // === SEGURIDAD ===
    security: "Seguridad",
    authentication: "Autenticación",
    authorization: "Autorización",
    encryption: "Cifrado",
    "vulnerability-scanning": "Escaneo de Vulnerabilidades",

    // === SERVICIOS DE NEGOCIO ===
    payment: "Pagos",
    email: "Email",
    sms: "SMS",
    crm: "CRM",
    erp: "ERP",
    marketing: "Marketing",
    seo: "SEO",
    "social-media": "Redes Sociales",

    // === ALMACENAMIENTO Y BACKUP ===
    storage: "Almacenamiento",
    backup: "Backup",
    "file-management": "Gestión de Archivos",
    "data-sync": "Sincronización de Datos",

    // === EDUCACIÓN Y APRENDIZAJE ===
    education: "Educación",
    learning: "Aprendizaje",
    courses: "Cursos",
    certifications: "Certificaciones",
    training: "Entrenamiento",
    tutorials: "Tutoriales",

    // === CARACTERÍSTICAS TÉCNICAS ===
    opensource: "Open Source",
    "free-tier": "Free Tier",
    paid: "Pagado",
    enterprise: "Empresarial",
    "self-hosted": "Autoalojado",
    saas: "SaaS",
    realtime: "Tiempo Real",
    scalability: "Escalabilidad",
    "high-performance": "Alto Rendimiento",
    "low-latency": "Baja Latencia",

    // === PLATAFORMAS Y EMPRESAS ===
    microsoft: "Microsoft",
    google: "Google",
    amazon: "Amazon",
    facebook: "Facebook",
    github: "GitHub",
    gitlab: "GitLab",

    // === TECNOLOGÍAS ESPECÍFICAS ===
    infrastructure: "Infraestructura",
    "data-pipeline": "Pipeline de Datos",
    etl: "ETL",
    "component-library": "Biblioteca de Componentes",
    iot: "IoT",
    ar: "AR",
    vr: "VR",

    // === OTROS ===
    localization: "Localización",
    internationalization: "Internacionalización",
    accessibility: "Accesibilidad",
    search: "Búsqueda",
    extensions: "Extensiones",
    plugins: "Plugins",
    utilities: "Utilidades",
  };

  return labels[tag] ?? tag.charAt(0).toUpperCase() + tag.slice(1);
};

export const getToolsByCategory = (category: Category | "all"): Tool[] => {
  if (category === "all") {
    return tools;
  }

  return tools.filter(tool => tool.category === category);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getToolsByTag = (tag: Tag): Tool[] => {
  return tools.filter(tool => tool.tags.includes(tag));
};

export const getFeaturedTools = (limit?: number): Tool[] => {
  const featuredTools = tools.filter(tool => tool.isFeatured);
  return limit ? featuredTools.slice(0, limit) : featuredTools;
};

export const getNewestTools = (limit?: number): Tool[] => {
  const newestTools = [...tools]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());

  return limit ? newestTools.slice(0, limit) : newestTools;
};

export const getFreeTools = (): Tool[] => {
  return tools.filter(tool => tool.isFree);
};

/**
 * Devuelve todas las herramientas disponibles
 * @returns Arreglo con todas las herramientas
 */
export const getAllTools = (): Tool[] => {
  return tools;
};

export const getSimilarTools = (tool: Tool, limit: number = 3): Tool[] => {
  // Find tools with the same category or common tags, excluding the current tool
  const similarTools = tools
    .filter(t => t.id !== tool.id)
    .map(t => {
      let score = 0;

      // Same category
      if (t.category === tool.category) {
        score += 3;
      }

      // Common tags
      const commonTags = t.tags.filter(tag => tool.tags.includes(tag));
      score += commonTags.length * 2;

      // Check if it's an alternative
      if (tool.alternatives?.includes(t.id)) {
        score += 5;
      }

      return { tool: t, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);

  return similarTools.slice(0, limit);
};

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase();

  return tools.filter(tool =>
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategoryColorClass = (category: Category): string => {
  const colors: Record<Category, string> = {
    // === DESARROLLO CORE ===
    frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',
    backend: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    fullstack: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    mobile: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    desktop: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    api: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    languages: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',

    // === INFRAESTRUCTURA Y OPERACIONES ===
    devops: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    hosting: 'bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300',
    cloud: 'bg-cyan alkoh-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',
    infrastructure: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    networking: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    cdn: 'bg-sky-100 text-sky-800 dark:bg-sky-800/20 dark:text-sky-300',
    monitoring: 'bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300',
    performance: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DATOS Y PERSISTENCIA ===
    database: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    storage: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    backup: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
    analytics: 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',
    'data-engineering': 'bg-slate-100 text-slate-800 dark:bg-slate-800/20 dark:text-slate-300',

    // === HERRAMIENTAS DE DESARROLLO ===
    testing: 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',
    security: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    automation: 'bg-stone-100 text-stone-800 dark:bg-stone-800/20 dark:text-stone-300',
    documentation: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800/20 dark:text-neutral-300',
    'version-control': 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-300',

    // === DISEÑO Y UX ===
    design: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    'ui-libraries': 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',

    // === PRODUCTIVIDAD ===
    productivity: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    collaboration: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',
    'project-management': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300',

    // === TECNOLOGÍAS EMERGENTES ===
    ai: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300',
    blockchain: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    iot: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    'ar-vr': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',

    // === APLICACIONES ESPECÍFICAS ===
    cms: 'bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300',
    ecommerce: 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300',
    gaming: 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300',
    social: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300',

    // === SERVICIOS DE NEGOCIO ===
    payment: 'bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300',
    email: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    sms: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    crm: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300',
    erp: 'bg-violet-100 text-violet-800 dark:bg-violet-800/20 dark:text-violet-300',
    marketing: 'bg-pink-100 text-pink-800 dark:bg-pink-800/20 dark:text-pink-300',
    seo: 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300',

    // === UTILIDADES ===
    localization: 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300',
    education: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/20 dark:text-fuchsia-300',
    utilities: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300',
  };

  return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300';
};