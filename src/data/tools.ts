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
  | "svelte"
  | "languages"
  | "compiler"
  | "android"
  | "functional"

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
  | "scientific"

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
  | "payments"

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
  | "business-model"

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
  | "2d"
  | "3d"
  | "data-engineering"
  | "linux"
  | "server"

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
    svelte: "bg-red-100 text-orange-800 dark:bg-red-800/20 dark:text-red-300",
    "languages": "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    "functional": "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    "compiler": "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    android: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",

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
    nocode: "bg-yellow-100 text-pink-800 dark:bg-yellow-800/20 dark:text-orange-300",
    scientific: "bg-green-100 text-green-800 dark:bg-blue-800/20 dark:text-green-300",

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
    "payments": "bg-rose-100 text-rose-800 dark:bg-rose-800/20 dark:text-rose-300",
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
    "business-model": "bg-lime-100 text-lime-800 dark:bg-lime-800/20 dark:text-lime-300",
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
    "data-engineering": "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    etl: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    "component-library": "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    iot: "bg-teal-100 text-teal-800 dark:bg-teal-800/20 dark:text-teal-300",
    ar: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    vr: "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    "2d": "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300",
    "3d": "bg-indigo-100 text-indigo-800 dark:bg-indigo-600/20 dark:text-indigo-300",
    "linux": "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    "server": "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",

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
  },
  {
    id: "vue",
    name: "Vue.js",
    description: "Un framework progresivo de JavaScript para construir interfaces de usuario interactivas y reactivas.",
    descriptionLarge: "Vue.js es un framework de JavaScript de código abierto, accesible y de alto rendimiento para construir interfaces de usuario. Su curva de aprendizaje suave, su excelente documentación y su enfoque en componentes lo hacen ideal tanto para proyectos pequeños como para aplicaciones a gran escala. Permite una integración gradual en proyectos existentes.",
    url: "https://vuejs.org/",
    category: "frontend",
    tags: [
      "vue",
      "javascript",
      "typescript",
      "frontend",
      "framework",
      "ui",
      "spa",
      "component-library",
      "opensource"
    ],
    image: "/img/tools/vuejs.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-28",
    isFeatured: true,
    githubUrl: "https://github.com/vuejs/core",
    documentationUrl: "https://vuejs.org/guide/introduction.html",
    alternatives: ["react", "angular", "svelte"]
  },
  {
    id: "angular",
    name: "Angular",
    description: "Plataforma de desarrollo de aplicaciones web basada en TypeScript y liderada por Google.",
    descriptionLarge: "Angular es una plataforma para construir aplicaciones de una sola página (SPA) utilizando HTML y TypeScript. Es mantenido por Google y ofrece una estructura robusta y opinada, ideal para aplicaciones empresariales grandes y complejas, con características como inyección de dependencias y un potente CLI.",
    url: "https://angular.io/",
    category: "frontend",
    tags: [
      "angular",
      "typescript",
      "javascript",
      "frontend",
      "framework",
      "google",
      "ui",
      "spa",
      "enterprise",
      "opensource"
    ],
    image: "/img/tools/angular.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-05-05",
    isFeatured: true,
    githubUrl: "https://github.com/angular/angular",
    documentationUrl: "https://angular.io/docs",
    alternatives: ["react", "vue", "svelte"]
  },
  {
    id: "svelte",
    name: "Svelte",
    description: "Un enfoque radical para construir interfaces de usuario, compilando el código en JavaScript eficiente.",
    descriptionLarge: "Svelte es un compilador que convierte componentes declarativos en código JavaScript altamente optimizado que actualiza el DOM directamente. A diferencia de frameworks que usan un DOM Virtual, Svelte traslada el trabajo al paso de compilación, resultando en un rendimiento excepcional y paquetes de código más pequeños.",
    url: "https://svelte.dev/",
    category: "frontend",
    tags: [
      "svelte",
      "javascript",
      "typescript",
      "frontend",
      "framework",
      "high-performance",
      "opensource",
      "ui"
    ],
    image: "/img/tools/svelte.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-05-10",
    isFeatured: true,
    githubUrl: "https://github.com/sveltejs/svelte",
    documentationUrl: "https://svelte.dev/docs",
    alternatives: ["react", "vue", "angular"]
  },
  {
    id: "astro",
    name: "Astro",
    description: "Framework web para construir sitios rápidos y centrados en el contenido con menos JavaScript del lado del cliente.",
    descriptionLarge: "Astro es un framework web para construir sitios web rápidos como blogs, portfolios y sitios de marketing. Se destaca por su arquitectura de 'islas', que envía cero JavaScript al cliente por defecto, hidratando solo los componentes interactivos que lo necesitan. Es compatible con React, Svelte, Vue y más.",
    url: "https://astro.build/",
    category: "fullstack",
    tags: [
      "javascript",
      "typescript",
      "fullstack",
      "frontend",
      "framework",
      "ssg",
      "jamstack",
      "performance",
      "opensource"
    ],
    image: "/img/tools/astro.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-05-20",
    isFeatured: true,
    githubUrl: "https://github.com/withastro/astro",
    documentationUrl: "https://docs.astro.build/",
    alternatives: ["nextjs", "sveltekit", "remix"]
  },
  {
    id: "express",
    name: "Express",
    description: "Framework de aplicación web minimalista y flexible para Node.js, ideal para construir APIs y aplicaciones web.",
    descriptionLarge: "Express es el framework estándar de facto para Node.js. Es rápido, sin opiniones y minimalista. Proporciona un conjunto robusto de características para aplicaciones web y móviles, permitiendo crear potentes APIs de forma sencilla y rápida. Su simplicidad lo convierte en un punto de partida popular para muchos proyectos.",
    url: "https://expressjs.com/",
    category: "backend",
    tags: [
      "nodejs",
      "javascript",
      "typescript",
      "backend",
      "framework",
      "api",
      "rest",
      "microservices",
      "opensource"
    ],
    image: "/img/tools/express.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-04-20",
    githubUrl: "https://github.com/expressjs/express",
    documentationUrl: "https://expressjs.com/en/starter/installing.html",
    alternatives: ["fastapi", "django", "springboot"]
  },
  {
    id: "django",
    name: "Django",
    description: "Framework web de Python de alto nivel que fomenta el desarrollo rápido y el diseño limpio y pragmático.",
    descriptionLarge: "Django es un framework de Python que sigue el patrón de diseño 'Baterías Incluidas', proporcionando funcionalidades listas para usar como un ORM, panel de administración automático y autenticación. Es conocido por su seguridad, escalabilidad y su capacidad para construir aplicaciones complejas rápidamente.",
    url: "https://www.djangoproject.com/",
    category: "backend",
    tags: [
      "python",
      "backend",
      "framework",
      "sql",
      "fullstack",
      "rest",
      "opensource",
      "security"
    ],
    image: "/img/tools/django.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-05-15",
    isFeatured: true,
    githubUrl: "https://github.com/django/django",
    documentationUrl: "https://docs.djangoproject.com/en/stable/",
    alternatives: ["fastapi", "springboot", "express"]
  },
  {
    id: "springboot",
    name: "Spring Boot",
    description: "Framework basado en Java para crear aplicaciones autónomas y de grado de producción con mínima configuración.",
    descriptionLarge: "Spring Boot facilita la creación de aplicaciones basadas en Spring que se pueden ejecutar de forma autónoma. Se enfoca en la convención sobre configuración para simplificar el desarrollo. Es ideal para construir microservicios y aplicaciones web robustas en el ecosistema de Java.",
    url: "https://spring.io/projects/spring-boot",
    category: "backend",
    tags: [
      "java",
      "kotlin",
      "backend",
      "framework",
      "microservices",
      "enterprise",
      "opensource",
      "api"
    ],
    image: "/img/tools/springboot.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-05-01",
    githubUrl: "https://github.com/spring-projects/spring-boot",
    documentationUrl: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
    alternatives: ["django", "fastapi", "express"]
  },
  {
    id: "fastapi",
    name: "FastAPI",
    description: "Framework web moderno y rápido para Python, ideal para construir APIs con un rendimiento similar a Node.js.",
    descriptionLarge: "FastAPI es un framework web de Python 3.7+ para construir APIs. Sus principales características son su alta velocidad y su facilidad de desarrollo. Genera automáticamente documentación interactiva (Swagger UI) y se basa en los estándares de OpenAPI, lo que lo hace extremadamente productivo.",
    url: "https://fastapi.tiangolo.com/",
    category: "backend",
    tags: [
      "python",
      "backend",
      "framework",
      "api",
      "rest",
      "graphql",
      "high-performance",
      "opensource"
    ],
    image: "/img/tools/fastapi.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-05-18",
    isFeatured: true,
    githubUrl: "https://github.com/tiangolo/fastapi",
    documentationUrl: "https://fastapi.tiangolo.com/",
    alternatives: ["django", "express", "springboot"]
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "El framework de React para producción, con renderizado híbrido estático y del lado del servidor.",
    descriptionLarge: "Next.js es un framework de React de código abierto que permite funcionalidades como renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG). Es conocido por su excelente experiencia de desarrollador, optimizaciones de rendimiento y su robusto ecosistema.",
    url: "https://nextjs.org/",
    category: "fullstack",
    tags: [
      "react",
      "javascript",
      "typescript",
      "fullstack",
      "frontend",
      "framework",
      "ssr",
      "ssg",
      "jamstack",
      "opensource"
    ],
    image: "/img/tools/nextjs.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-05-25",
    isFeatured: true,
    githubUrl: "https://github.com/vercel/next.js",
    documentationUrl: "https://nextjs.org/docs",
    alternatives: ["remix", "nuxt", "astro"]
  },
  {
    id: "nuxt",
    name: "Nuxt.js",
    description: "El framework intuitivo de Vue para crear aplicaciones universales, estáticas y de una sola página.",
    descriptionLarge: "Nuxt.js es un framework de alto nivel construido sobre Vue.js para crear aplicaciones web modernas. Su objetivo es simplificar el desarrollo de aplicaciones universales o de una sola página, ofreciendo SSR y SSG de forma predeterminada.",
    url: "https://nuxt.com/",
    category: "fullstack",
    tags: [
      "vue",
      "javascript",
      "typescript",
      "fullstack",
      "frontend",
      "framework",
      "ssr",
      "ssg",
      "jamstack",
      "opensource"
    ],
    image: "/img/tools/nuxt.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-05-22",
    githubUrl: "https://github.com/nuxt/nuxt",
    documentationUrl: "https://nuxt.com/docs",
    alternatives: ["nextjs", "remix", "astro"]
  },
  {
    id: "remix",
    name: "Remix",
    description: "Framework web full-stack enfocado en los fundamentos de la web para una experiencia de usuario rápida.",
    descriptionLarge: "Remix es un framework full-stack para React que aprovecha las características nativas del navegador y del servidor. Se enfoca en la carga de datos, las mutaciones y el enrutamiento anidado para construir aplicaciones web resilientes y de alto rendimiento.",
    url: "https://remix.run/",
    category: "fullstack",
    tags: [
      "react",
      "javascript",
      "typescript",
      "fullstack",
      "frontend",
      "framework",
      "ssr",
      "performance",
      "opensource"
    ],
    image: "/img/tools/remix.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-05-19",
    githubUrl: "https://github.com/remix-run/remix",
    documentationUrl: "https://remix.run/docs",
    alternatives: ["nextjs", "astro", "sveltekit"]
  },
  {
    id: "react-native",
    name: "React Native",
    description: "Framework para crear aplicaciones móviles nativas para iOS y Android utilizando React.",
    descriptionLarge: "React Native permite a los desarrolladores web crear aplicaciones móviles robustas utilizando React. Se escribe código en JavaScript y el framework renderiza interfaces de usuario verdaderamente nativas, logrando una experiencia de usuario de alta calidad.",
    url: "https://reactnative.dev/",
    category: "mobile",
    tags: [
      "react",
      "javascript",
      "mobile",
      "cross-platform",
      "framework",
      "opensource",
      "facebook"
    ],
    image: "/img/tools/react-native.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-05-14",
    isFeatured: true,
    githubUrl: "https://github.com/facebook/react-native",
    documentationUrl: "https://reactnative.dev/docs/getting-started",
    alternatives: ["flutter", "swift", "kotlin"]
  },
  {
    id: "swift",
    name: "Swift",
    description: "Lenguaje de programación potente e intuitivo de Apple para desarrollar apps en iOS, macOS y más.",
    descriptionLarge: "Swift es un lenguaje de programación compilado, moderno, seguro y rápido, diseñado por Apple. Es el lenguaje principal para el desarrollo de aplicaciones en todo el ecosistema de Apple, conocido por su sintaxis limpia y expresiva.",
    url: "https://developer.apple.com/swift/",
    category: "languages",
    tags: ["swift", "mobile", "desktop", "opensource", "high-performance"],
    image: "/img/tools/swift.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-06-10",
    githubUrl: "https://github.com/apple/swift",
    documentationUrl: "https://www.swift.org/documentation/",
    alternatives: ["kotlin", "react-native", "flutter"]
  },
  {
    id: "kotlin",
    name: "Kotlin",
    description: "Lenguaje de programación moderno y preferido por Google para el desarrollo de Android nativo.",
    descriptionLarge: "Kotlin es un lenguaje de tipado estático que se ejecuta en la JVM y es totalmente interoperable con Java. Es el lenguaje recomendado por Google para el desarrollo de Android por su sintaxis concisa y sus características de seguridad.",
    url: "https://kotlinlang.org/",
    category: "languages",
    tags: ["kotlin", "java", "mobile", "backend", "google", "opensource"],
    image: "/img/tools/kotlin.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-06-05",
    githubUrl: "https://github.com/JetBrains/kotlin",
    documentationUrl: "https://kotlinlang.org/docs/home.html",
    alternatives: ["swift", "java", "react-native"]
  },
  {
    id: "electron",
    name: "Electron",
    description: "Framework para crear aplicaciones de escritorio multiplataforma con JavaScript, HTML y CSS.",
    descriptionLarge: "Electron permite construir aplicaciones de escritorio para Windows, macOS y Linux utilizando tecnologías web. Emplea Node.js para el backend y Chromium para la interfaz, lo que permite reutilizar código y habilidades web.",
    url: "https://www.electronjs.org/",
    category: "desktop",
    tags: ["javascript", "nodejs", "desktop", "cross-platform", "framework", "opensource", "github"],
    image: "/img/tools/electron.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-04-30",
    githubUrl: "https://github.com/electron/electron",
    documentationUrl: "https://www.electronjs.org/docs",
    alternatives: ["tauri"]
  },
  {
    id: "tauri",
    name: "Tauri",
    description: "Framework para construir aplicaciones de escritorio más pequeñas, rápidas y seguras con un frontend web.",
    descriptionLarge: "Tauri es una alternativa a Electron enfocada en la seguridad y el rendimiento. Utiliza Rust para el backend y el renderizador web nativo del sistema, resultando en aplicaciones más ligeras y seguras. Es agnóstico al framework frontend.",
    url: "https://tauri.app/",
    category: "desktop",
    tags: [
      "rust",
      "javascript",
      "desktop",
      "cross-platform",
      "framework",
      "opensource",
      "security",
      "high-performance"
    ],
    image: "/img/tools/tauri.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-05-28",
    isFeatured: true,
    githubUrl: "https://github.com/tauri-apps/tauri",
    documentationUrl: "https://tauri.app/v1/guides/",
    alternatives: ["electron"]
  },
  {
    id: "swagger",
    name: "Swagger / OpenAPI",
    description: "Especificación para describir, construir y visualizar servicios web RESTful.",
    descriptionLarge: "OpenAPI (anteriormente Swagger) es una especificación estándar para describir APIs REST. Las herramientas de Swagger permiten diseñar, construir, documentar y consumir APIs basadas en esta especificación, facilitando la comprensión de las capacidades de una API sin acceder al código fuente.",
    url: "https://swagger.io/",
    category: "api",
    tags: ["api", "rest", "documentation", "testing", "opensource"],
    image: "/img/tools/swagger.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-06-12",
    githubUrl: "https://github.com/swagger-api",
    documentationUrl: "https://swagger.io/docs/"
  },
  {
    id: "graphql",
    name: "GraphQL",
    description: "Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan.",
    descriptionLarge: "GraphQL es un lenguaje de consulta de código abierto para APIs, desarrollado por Facebook. Permite a los clientes solicitar exactamente los datos que necesitan y nada más, lo que facilita la evolución de las APIs a lo largo del tiempo. Es una alternativa flexible y potente a REST.",
    url: "https://graphql.org/",
    category: "api",
    tags: ["api", "graphql", "facebook", "opensource", "backend", "frontend"],
    image: "/img/tools/graphql.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-06-20",
    isFeatured: true,
    githubUrl: "https://github.com/graphql",
    documentationUrl: "https://graphql.org/learn/",
    alternatives: ["rest"]
  },
  {
    id: "jenkins",
    name: "Jenkins",
    description: "Servidor de automatización de código abierto que ayuda a automatizar el proceso de desarrollo de software.",
    descriptionLarge: "Jenkins es una herramienta de integración continua (CI) y entrega continua (CD) líder en el mercado. Permite a los desarrolladores automatizar las fases de construcción, prueba y despliegue de sus aplicaciones. Es altamente extensible a través de un vasto ecosistema de plugins.",
    url: "https://www.jenkins.io/",
    category: "devops",
    tags: ["devops", "ci/cd", "automation", "java", "opensource", "deployment"],
    image: "/img/tools/jenkins.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-06-08",
    githubUrl: "https://github.com/jenkinsci/jenkins",
    documentationUrl: "https://www.jenkins.io/doc/"
  },
  {
    id: "netlify",
    name: "Netlify",
    description: "Plataforma que automatiza el código para crear sitios y aplicaciones web de alto rendimiento (Jamstack).",
    descriptionLarge: "Netlify es una plataforma que ofrece hosting y backend sin servidor. Es conocida por su flujo de trabajo basado en Git, que automatiza la construcción, despliegue y gestión de sitios web, facilitando la implementación de la arquitectura Jamstack.",
    url: "https://www.netlify.com/",
    category: "hosting",
    tags: ["hosting", "jamstack", "serverless", "ci/cd", "deployment", "frontend", "cdn"],
    image: "/img/tools/netlify.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-07-01",
    isFeatured: true,
    documentationUrl: "https://docs.netlify.com/",
    alternatives: ["vercel", "digitalocean", "gcp"]
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    description: "Conjunto de servicios de computación en la nube ofrecidos por Google.",
    descriptionLarge: "Google Cloud Platform (GCP) es una suite de servicios que se ejecuta en la misma infraestructura que Google utiliza para sus productos. Ofrece servicios de computación, almacenamiento, redes, big data y aprendizaje automático.",
    url: "https://cloud.google.com/",
    category: "cloud",
    tags: ["cloud", "gcp", "hosting", "database", "machine-learning", "google", "infrastructure"],
    image: "/img/tools/gcp.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-07-15",
    isFeatured: true,
    documentationUrl: "https://cloud.google.com/docs",
    alternatives: ["aws", "azure"]
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    description: "Servicio de computación en la nube de Microsoft para construir, probar y desplegar aplicaciones.",
    descriptionLarge: "Microsoft Azure es una plataforma en la nube que ayuda a las organizaciones a enfrentar sus desafíos empresariales. Proporciona una gran colección de servicios, incluyendo IaaS, PaaS y SaaS, compatibles con una amplia variedad de lenguajes y frameworks.",
    url: "https://azure.microsoft.com/",
    category: "cloud",
    tags: ["cloud", "azure", "hosting", "database", "ai", "microsoft", "infrastructure"],
    image: "/img/tools/azure.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-07-14",
    isFeatured: true,
    documentationUrl: "https://docs.microsoft.com/azure/",
    alternatives: ["aws", "gcp"]
  },
  {
    id: "digitalocean",
    name: "DigitalOcean",
    description: "Proveedor de infraestructura en la nube simple y orientado a desarrolladores.",
    descriptionLarge: "DigitalOcean simplifica la computación en la nube. Es conocido por sus 'Droplets' (servidores virtuales), precios predecibles, una interfaz de usuario limpia y una excelente documentación para la comunidad de desarrolladores.",
    url: "https://www.digitalocean.com/",
    category: "hosting",
    tags: ["hosting", "cloud", "deployment", "database", "kubernetes"],
    image: "/img/tools/digitalocean.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-06-25",
    documentationUrl: "https://docs.digitalocean.com/",
    alternatives: ["aws", "gcp", "azure"]
  },
  {
    id: "terraform",
    name: "Terraform",
    description: "Herramienta para construir y versionar la infraestructura como código (IaC) de forma segura y eficiente.",
    descriptionLarge: "Terraform de HashiCorp es una herramienta de IaC que permite definir y aprovisionar la infraestructura usando un lenguaje declarativo. Es compatible con múltiples proveedores de nube como AWS, Azure y GCP, facilitando la gestión de entornos complejos.",
    url: "https://www.terraform.io/",
    category: "infrastructure",
    tags: ["infrastructure", "devops", "automation", "cloud", "aws", "azure", "gcp", "opensource"],
    image: "/img/tools/terraform.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-07-20",
    isFeatured: true,
    githubUrl: "https://github.com/hashicorp/terraform",
    documentationUrl: "https://developer.hashicorp.com/terraform/docs"
  },
  {
    id: "ansible",
    name: "Ansible",
    description: "Herramienta de automatización para configurar sistemas, desplegar software y orquestar flujos de trabajo.",
    descriptionLarge: "Ansible es una plataforma de automatización de código abierto que automatiza la gestión de configuración y el despliegue de aplicaciones. Utiliza un lenguaje simple (YAML) y no requiere agentes en los nodos gestionados, lo que facilita su uso.",
    url: "https://www.ansible.com/",
    category: "automation",
    tags: ["automation", "devops", "infrastructure", "deployment", "opensource"],
    image: "/img/tools/ansible.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-07-18",
    githubUrl: "https://github.com/ansible/ansible",
    documentationUrl: "https://docs.ansible.com/"
  },
  {
    id: "datadog",
    name: "Datadog",
    description: "Servicio de monitoreo y análisis para aplicaciones en la nube, servidores, bases de datos y más.",
    descriptionLarge: "Datadog es una plataforma de observabilidad para aplicaciones a gran escala. Proporciona monitoreo de infraestructura, gestión del rendimiento (APM), gestión de logs y monitoreo de la experiencia del usuario en una única plataforma.",
    url: "https://www.datadoghq.com/",
    category: "monitoring",
    tags: ["monitoring", "analytics", "logging", "performance", "metrics", "saas", "devops"],
    image: "/img/tools/datadog.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-08-01",
    documentationUrl: "https://docs.datadoghq.com/"
  },
  {
    id: "prometheus",
    name: "Prometheus",
    description: "Sistema de monitoreo y alerta de código abierto, popular en el ecosistema de Kubernetes.",
    descriptionLarge: "Prometheus es una solución de monitoreo de código abierto que recopila y almacena métricas como series temporales. Es un proyecto graduado de la Cloud Native Computing Foundation (CNCF) y es fundamental para la observabilidad en entornos nativos de la nube.",
    url: "https://prometheus.io/",
    category: "monitoring",
    tags: ["monitoring", "metrics", "opensource", "devops", "kubernetes"],
    image: "/img/tools/prometheus.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-07-25",
    githubUrl: "https://github.com/prometheus/prometheus",
    documentationUrl: "https://prometheus.io/docs/introduction/overview/"
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "El sistema de gestión de bases de datos relacionales de código abierto más popular del mundo.",
    descriptionLarge: "MySQL es un RDBMS de código abierto desarrollado por Oracle. Es un componente clave de la pila LAMP y es utilizado por muchas de las aplicaciones web más grandes del mundo, como Facebook y Wikipedia, por su fiabilidad y rendimiento.",
    url: "https://www.mysql.com/",
    category: "database",
    tags: ["database", "sql", "relational", "backend", "opensource"],
    image: "/img/tools/mysql.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-07-10",
    documentationUrl: "https://dev.mysql.com/doc/"
  },
  {
    id: "redis",
    name: "Redis",
    description: "Almacén de datos en memoria, usado como base de datos, caché y agente de mensajes.",
    descriptionLarge: "Redis es un almacén de estructuras de datos en memoria de código abierto conocido por su velocidad y versatilidad. Se utiliza comúnmente como caché, base de datos en tiempo real y para colas de mensajes, soportando múltiples estructuras de datos.",
    url: "https://redis.io/",
    category: "database",
    tags: ["database", "nosql", "backend", "opensource", "high-performance", "realtime"],
    image: "/img/tools/redis.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.9,
    lastUpdated: "2025-08-05",
    isFeatured: true,
    githubUrl: "https://github.com/redis/redis",
    documentationUrl: "https://redis.io/docs/"
  },
  {
    id: "cypress",
    name: "Cypress",
    description: "Herramienta de pruebas end-to-end de nueva generación construida para la web moderna.",
    descriptionLarge: "Cypress es un framework de pruebas de JavaScript que permite escribir pruebas end-to-end, de integración y unitarias. Se ejecuta directamente en el navegador, proporcionando resultados rápidos, consistentes y fiables con una excelente depuración.",
    url: "https://www.cypress.io/",
    category: "testing",
    tags: ["testing", "javascript", "automation", "frontend", "opensource"],
    image: "/img/tools/cypress.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-07-28",
    githubUrl: "https://github.com/cypress-io/cypress",
    documentationUrl: "https://docs.cypress.io/"
  },
  {
    id: "playwright",
    name: "Playwright",
    description: "Framework de pruebas end-to-end de Microsoft que permite la automatización web fiable en todos los navegadores.",
    descriptionLarge: "Playwright es una biblioteca de Node.js de Microsoft para automatizar Chromium, Firefox y WebKit con una única API. Permite pruebas end-to-end multiplataforma y multinavegador que son rápidas, capaces y fiables.",
    url: "https://playwright.dev/",
    category: "testing",
    tags: ["testing", "javascript", "typescript", "automation", "microsoft", "opensource"],
    image: "/img/tools/playwright.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-08-02",
    githubUrl: "https://github.com/microsoft/playwright",
    documentationUrl: "https://playwright.dev/docs/intro"
  },
  {
    id: "gitlab",
    name: "GitLab",
    description: "Una plataforma DevOps completa entregada como una única aplicación para todo el ciclo de vida del software.",
    descriptionLarge: "GitLab es una plataforma web que proporciona un completo ciclo de vida DevOps, incluyendo gestión de repositorios Git, CI/CD, seguimiento de problemas y más. Puede ser autoalojado o utilizado como un servicio SaaS.",
    url: "https://about.gitlab.com/",
    category: "version-control",
    tags: ["version-control", "git", "devops", "ci/cd", "collaboration", "saas", "self-hosted"],
    image: "/img/tools/gitlab.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-07-30",
    documentationUrl: "https://docs.gitlab.com/"
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    description: "El control de versiones de Git de Atlassian para equipos profesionales, con integración con Jira.",
    descriptionLarge: "Bitbucket es un servicio de alojamiento de repositorios Git de Atlassian. Ofrece repositorios privados gratuitos y se integra profundamente con herramientas como Jira y Trello, ideal para equipos que ya utilizan ese ecosistema.",
    url: "https://bitbucket.org/",
    category: "version-control",
    tags: ["version-control", "git", "collaboration", "ci/cd", "saas"],
    image: "/img/tools/bitbucket.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-07-22",
    documentationUrl: "https://support.atlassian.com/bitbucket-cloud/"
  },
  {
    id: "auth0",
    name: "Auth0",
    description: "Plataforma de identidad flexible y fácil de implementar para desarrolladores (autenticación y autorización).",
    descriptionLarge: "Auth0 es una plataforma de identidad como servicio (IDaaS) que proporciona autenticación y autorización para aplicaciones. Ofrece inicio de sesión social, autenticación multifactor y gestión de usuarios, permitiendo asegurar aplicaciones rápidamente.",
    url: "https://auth0.com/",
    category: "security",
    tags: ["security", "authentication", "authorization", "saas", "api"],
    image: "/img/tools/auth0.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-08-04",
    documentationUrl: "https://auth0.com/docs"
  },
  {
    id: "clerk",
    name: "Clerk",
    description: "Autenticación y gestión de usuarios completa para React, Next.js y el Jamstack moderno.",
    descriptionLarge: "Clerk es una plataforma de autenticación y gestión de usuarios diseñada para la web moderna. Proporciona componentes preconstruidos para React y Next.js que facilitan la integración de flujos de inicio de sesión, registro y perfiles.",
    url: "https://clerk.com/",
    category: "security",
    tags: ["security", "authentication", "react", "jamstack", "saas"],
    image: "/img/tools/clerk.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.9,
    lastUpdated: "2025-08-10",
    isFeatured: true,
    documentationUrl: "https://clerk.com/docs"
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Un kit de herramientas de diseño digital centrado en la interfaz y la experiencia de usuario (UX).",
    descriptionLarge: "Sketch es una herramienta de diseño vectorial muy popular, utilizada principalmente para la creación de interfaces de usuario para aplicaciones web y móviles. Se destaca por su eficiencia, su gran ecosistema de plugins y su enfoque en el diseño de componentes reutilizables.",
    url: "https://www.sketch.com/",
    category: "design",
    tags: ["design", "ui", "ux", "prototyping"],
    image: "/img/tools/sketch.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-08-15",
    alternatives: ["figma", "adobe-xd"]
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    description: "Herramienta de diseño y prototipado de UX/UI basada en vectores de Adobe.",
    descriptionLarge: "Adobe XD es parte del Creative Cloud de Adobe, diseñada para crear diseños de aplicaciones, sitios web y prototipos interactivos. Permite a los diseñadores trabajar de forma colaborativa y pasar de la idea a un prototipo funcional rápidamente.",
    url: "https://www.adobe.com/products/xd.html",
    category: "design",
    tags: ["design", "ui", "ux", "prototyping"],
    image: "/img/tools/adobe-xd.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-07-29",
    alternatives: ["figma", "sketch"]
  },
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    description: "Colección de componentes reutilizables y sin estilo propio que puedes copiar y pegar en tus proyectos React.",
    descriptionLarge: "shadcn/ui no es una librería tradicional, sino una colección de componentes construidos sobre Tailwind CSS y Radix UI. Se enfoca en dar el control total al desarrollador, permitiéndole integrar el código fuente del componente directamente en su proyecto para personalizarlo a fondo.",
    url: "https://ui.shadcn.com/",
    category: "ui-libraries",
    tags: ["library", "react", "typescript", "component-library", "opensource"],
    image: "/img/tools/shadcn-ui.svg",
    isFree: true,
    stars: 5.0,
    lastUpdated: "2025-08-20",
    isNew: true
  },
  {
    id: "chakra-ui",
    name: "Chakra UI",
    description: "Una biblioteca de componentes simple, modular y accesible para crear aplicaciones React.",
    descriptionLarge: "Chakra UI ofrece componentes modulares y personalizables que siguen los estándares de accesibilidad (WAI-ARIA). Está construida pensando en la simplicidad y la velocidad de desarrollo, lo que la hace popular para prototipos rápidos y proyectos a gran escala.",
    url: "https://chakra-ui.com/",
    category: "ui-libraries",
    tags: ["library", "react", "component-library", "responsive", "opensource"],
    image: "/img/tools/chakra-ui.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-07-25"
  },
  {
    id: "mui",
    name: "Material-UI (MUI)",
    description: "La biblioteca de componentes de React más popular que implementa las directrices de Material Design de Google.",
    descriptionLarge: "MUI proporciona una colección exhaustiva de componentes de React listos para usar, que siguen las directrices de diseño de Google (Material Design). Es extremadamente popular y bien mantenida, ofreciendo también componentes avanzados y herramientas de estilo.",
    url: "https://mui.com/",
    category: "ui-libraries",
    tags: ["library", "react", "component-library", "google", "opensource"],
    image: "/img/tools/mui.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-08-10"
  },
  {
    id: "jira",
    name: "Jira",
    description: "La herramienta de gestión de proyectos ágiles líder para equipos de desarrollo de software (Atlassian).",
    descriptionLarge: "Jira es una plataforma robusta utilizada para el seguimiento de errores, la gestión de proyectos y la planificación ágil. Es la herramienta de facto para metodologías Scrum y Kanban en equipos de software, con potentes integraciones y automatizaciones.",
    url: "https://www.atlassian.com/software/jira",
    category: "project-management",
    tags: ["project-management", "collaboration", "saas", "enterprise"],
    image: "/img/tools/jira.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-08-01"
  },
  {
    id: "asana",
    name: "Asana",
    description: "Plataforma de gestión del trabajo que ayuda a los equipos a organizar, seguir y gestionar sus tareas.",
    descriptionLarge: "Asana es una herramienta visual y flexible para la gestión del trabajo en equipo. Permite a los equipos planificar, seguir y finalizar proyectos, ofreciendo vistas de lista, tablero, cronograma y calendario. Es popular por su sencillez y facilidad de uso.",
    url: "https://asana.com/",
    category: "project-management",
    tags: ["project-management", "collaboration", "saas"],
    image: "/img/tools/asana.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-07-15"
  },
  {
    id: "notion",
    name: "Notion",
    description: "Un espacio de trabajo todo en uno para notas, tareas, gestión de proyectos y wikis de equipo.",
    descriptionLarge: "Notion combina notas, documentación, bases de datos, gestión de proyectos y wikis en una única plataforma flexible. Su estructura de bloques permite a los usuarios crear sistemas de trabajo completamente personalizados para equipos y uso personal.",
    url: "https://www.notion.so/",
    category: "productivity",
    tags: ["productivity", "documentation", "project-management", "collaboration", "saas"],
    image: "/img/tools/notion.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.9,
    lastUpdated: "2025-08-22",
    isFeatured: true
  },
  {
    id: "discord",
    name: "Discord",
    description: "Plataforma de comunicación por voz, video y texto popular entre comunidades de código abierto y equipos técnicos.",
    descriptionLarge: "Aunque inicialmente fue diseñado para gamers, Discord se ha convertido en una plataforma esencial para la colaboración en tiempo real y la creación de comunidades técnicas. Ofrece canales de texto, voz y video, ideal para soporte o colaboración inmediata.",
    url: "https://discord.com/",
    category: "collaboration",
    tags: ["collaboration", "communication", "social-media", "realtime", "free-tier"],
    image: "/img/tools/discord.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-08-05"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    description: "Framework de aprendizaje automático de código abierto que facilita la creación de redes neuronales profundas.",
    descriptionLarge: "PyTorch es una librería de machine learning de Python conocida por su flexibilidad y facilidad de uso, especialmente en la investigación. Su característica distintiva es la computación dinámica de gráficos (dynamic computational graph), que la hace muy popular entre investigadores y científicos de datos.",
    url: "https://pytorch.org/",
    category: "ai",
    tags: ["ai", "machine-learning", "deep-learning", "python", "opensource"],
    image: "/img/tools/pytorch.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-08-18",
    isFeatured: true
  },
  {
    id: "pfsense",
    name: "pfSense",
    description: "Un firewall/router de código abierto basado en FreeBSD para redes avanzadas.",
    descriptionLarge: "pfSense es una potente solución de software de firewall y enrutamiento. Se puede instalar en cualquier computadora y se utiliza para crear un firewall de red dedicado. Es altamente configurable y ofrece capacidades de seguridad de grado empresarial.",
    url: "https://www.pfsense.org/",
    category: "networking",
    tags: ["networking", "security", "self-hosted", "opensource", "utilities"],
    image: "/img/tools/pfsense.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-07-10"
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Plataforma líder mundial en gestión de relaciones con clientes (CRM) y servicios en la nube para empresas.",
    descriptionLarge: "Salesforce ofrece una suite de soluciones empresariales centradas en el cliente, incluyendo CRM, automatización de marketing y servicio de atención al cliente. Es una plataforma SaaS masiva y extensible, utilizada por empresas de todos los tamaños.",
    url: "https://www.salesforce.com/",
    category: "crm",
    tags: ["crm", "enterprise", "marketing", "collaboration", "saas"],
    image: "/img/tools/salesforce.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-07-01"
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    description: "Red de entrega de contenido (CDN), seguridad, DNS y servicios de computación edge para sitios web.",
    descriptionLarge: "Cloudflare es una de las redes de entrega de contenido (CDN) más grandes del mundo. Además de acelerar sitios web, ofrece servicios de seguridad, protección DDoS y funciones sin servidor (Workers), siendo fundamental para el rendimiento y la seguridad web.",
    url: "https://www.cloudflare.com/",
    category: "cdn",
    tags: ["cdn", "networking", "security", "hosting", "performance", "free-tier"],
    image: "/img/tools/cloudflare.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-08-25",
    isFeatured: true
  },
  {
    id: "joomla",
    name: "Joomla",
    description: "Un popular sistema de gestión de contenidos (CMS) de código abierto para construir sitios web dinámicos.",
    descriptionLarge: "Joomla es un CMS de código abierto que permite a los usuarios construir sitios web y aplicaciones en línea con gran flexibilidad. Es conocido por su arquitectura MVC (Modelo-Vista-Controlador) y su extensa comunidad de desarrolladores y usuarios.",
    url: "https://www.joomla.org/",
    category: "cms",
    tags: ["cms", "php", "web", "opensource", "fullstack"],
    image: "/img/tools/joomla.svg",
    isFree: true,
    stars: 4.3,
    lastUpdated: "2025-08-08"
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Plataforma de pagos global que permite a negocios y consumidores enviar y recibir dinero en línea.",
    descriptionLarge: "PayPal es una de las plataformas de pago más reconocidas globalmente, ofreciendo soluciones para pagos online, facturación y protección al vendedor. A través de sus APIs (incluyendo Braintree), los desarrolladores pueden integrar pagos directamente en sus sitios web y aplicaciones.",
    url: "https://www.paypal.com/us/business",
    category: "payment",
    tags: ["payment", "ecommerce", "api", "saas", "collaboration", "free-tier"],
    image: "/img/tools/paypal.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.3,
    lastUpdated: "2025-09-01",
    documentationUrl: "https://developer.paypal.com/",
    alternatives: ["stripe", "adyen"]
  },
  {
    id: "adyen",
    name: "Adyen",
    description: "Plataforma de tecnología financiera global que ofrece procesamiento de pagos de extremo a extremo para grandes empresas.",
    descriptionLarge: "Adyen es una plataforma unificada para pagos online, móviles y en puntos de venta (POS) para grandes clientes empresariales globales. Su pila de tecnología patentada cubre todo el flujo de pagos, desde la pasarela hasta el procesamiento, ofreciendo alta escalabilidad y rendimiento.",
    url: "https://www.adyen.com/",
    category: "payment",
    tags: ["payment", "ecommerce", "api", "enterprise", "saas", "high-performance"],
    image: "/img/tools/adyen.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-08-15",
    documentationUrl: "https://docs.adyen.com/",
    alternatives: ["stripe", "paypal"]
  },
  {
    id: "payu",
    name: "PayU Latam",
    description: "Procesador de pagos enfocado en Latinoamérica que soporta métodos de pago locales y transferencias bancarias.",
    descriptionLarge: "PayU ofrece una plataforma de pagos regional con alta cobertura en Latinoamérica. Su fortaleza es la capacidad de procesar no solo tarjetas, sino también métodos de pago locales y el efectivo, lo cual es vital en muchos países de la región, además de ofrecer una API robusta para la integración.",
    url: "https://www.payu.com/",
    category: "payment",
    tags: ["payment", "ecommerce", "api", "saas", "localization", "marketing"],
    image: "/img/tools/payu.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.2,
    lastUpdated: "2025-09-10",
    alternatives: ["stripe", "paypal", "adyen"]
  },
  {
    id: "selenium",
    name: "Selenium",
    description: "Framework de código abierto y librería para la automatización de navegadores web.",
    descriptionLarge: "Selenium es un conjunto de herramientas de código abierto que se utiliza para automatizar navegadores web. Se emplea principalmente para pruebas automatizadas de aplicaciones web, permitiendo a los desarrolladores simular interacciones de usuario en diferentes navegadores. Soporta múltiples lenguajes de programación.",
    url: "https://www.selenium.dev/",
    category: "testing",
    tags: ["testing", "automation", "cross-platform", "opensource", "java", "python", "javascript"],
    image: "/img/tools/selenium.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-09-15",
    githubUrl: "https://github.com/SeleniumHQ/selenium",
    documentationUrl: "https://www.selenium.dev/documentation/en/"
  },
  {
    id: "solarwinds",
    name: "SolarWinds",
    description: "Suite de gestión de TI con herramientas para el monitoreo de redes, servidores y aplicaciones.",
    descriptionLarge: "SolarWinds ofrece una amplia cartera de software que ayuda a las organizaciones a gestionar su infraestructura de TI. Sus herramientas se centran en el monitoreo de rendimiento de red, gestión de sistemas, seguridad y observabilidad para entornos empresariales grandes y complejos.",
    url: "https://www.solarwinds.com/",
    category: "monitoring",
    tags: ["monitoring", "networking", "performance", "logging", "enterprise"],
    image: "/img/tools/solarwinds.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.3,
    lastUpdated: "2025-08-01"
  },
  {
    id: "akamai",
    name: "Akamai",
    description: "Plataforma de computación edge que proporciona servicios de CDN, seguridad web y rendimiento.",
    descriptionLarge: "Akamai es uno de los mayores y más avanzados proveedores de redes de entrega de contenido (CDN) y servicios de computación edge del mundo. Ofrece una amplia gama de soluciones para la seguridad web, el rendimiento de las aplicaciones y el streaming de medios a escala global.",
    url: "https://www.akamai.com/",
    category: "cdn",
    tags: ["cdn", "networking", "security", "performance", "enterprise", "saas"],
    image: "/img/tools/akamai.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-09-20",
    alternatives: ["cloudflare"]
  },
  {
    id: "wireshark",
    name: "Wireshark",
    description: "El analizador de protocolos de red más usado en el mundo para inspeccionar el tráfico en tiempo real.",
    descriptionLarge: "Wireshark es una herramienta de código abierto fundamental para la inspección y el análisis de paquetes de red. Permite a los profesionales de redes y seguridad ver qué está sucediendo en su red a un nivel microscópico, ayudando a solucionar problemas de red y a investigar la seguridad.",
    url: "https://www.wireshark.org/",
    category: "networking",
    tags: ["networking", "security", "debugging", "opensource", "utilities"],
    image: "/img/tools/wireshark.svg",
    isFree: true,
    stars: 5.0,
    lastUpdated: "2025-09-25",
    isFeatured: true
  },
  {
    id: "burp-suite",
    name: "Burp Suite",
    description: "Plataforma líder para realizar pruebas de penetración y escaneo de vulnerabilidades en aplicaciones web.",
    descriptionLarge: "Burp Suite es la herramienta de facto para profesionales de la ciberseguridad que realizan pruebas de penetración en aplicaciones web. Su versión Community es gratuita, mientras que la versión Professional ofrece herramientas avanzadas para la automatización del escaneo y la explotación de vulnerabilidades.",
    url: "https://portswigger.net/burp",
    category: "security",
    tags: ["security", "testing", "vulnerability-scanning", "api", "enterprise", "free-tier"],
    image: "/img/tools/burp-suite.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-09-18"
  },
  {
    id: "unity",
    name: "Unity",
    description: "El motor de juegos 2D/3D líder, popular por su versatilidad, desarrollo móvil y amplia comunidad.",
    descriptionLarge: "Unity es un motor de desarrollo de juegos multiplataforma que soporta la creación de juegos 2D, 3D, realidad aumentada (AR) y realidad virtual (VR). Es conocido por su interfaz amigable y su amplio ecosistema de recursos, lo que lo hace ideal tanto para desarrolladores independientes (indies) como para grandes estudios.",
    url: "https://unity.com/",
    category: "gaming",
    tags: ["gaming", "mobile", "desktop", "framework", "c#", "cross-platform", "free-tier"],
    image: "/img/tools/unity.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-09-28",
    isFeatured: true,
    documentationUrl: "https://docs.unity3d.com/"
  },
  {
    id: "unreal-engine",
    name: "Unreal Engine",
    description: "Motor de juegos 3D de alto rendimiento de Epic Games, enfocado en gráficos fotorrealistas y calidad AAA.",
    descriptionLarge: "Unreal Engine (UE) es uno de los motores de juegos más avanzados del mundo, desarrollado por Epic Games. Es la opción preferida para juegos AAA (de gran presupuesto) y producción virtual debido a su renderizado fotorrealista. Utiliza C++ para el desarrollo y ofrece el sistema de programación visual 'Blueprints'.",
    url: "https://www.unrealengine.com/",
    category: "gaming",
    tags: ["gaming", "desktop", "c++", "framework", "high-performance", "free-tier", "enterprise"],
    image: "/img/tools/unreal-engine.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-09-20",
    documentationUrl: "https://docs.unrealengine.com/"
  },
  {
    id: "godot",
    name: "Godot Engine",
    description: "Motor de juegos 2D y 3D ligero, gratuito y de código abierto, con un enfoque en la comunidad.",
    descriptionLarge: "Godot Engine es una opción popular de código abierto, libre de regalías y completamente gratuita. Ofrece un flujo de trabajo intuitivo y un sistema de nodos y escenas flexible. Soporta múltiples plataformas y utiliza su propio lenguaje de scripting (GDScript) similar a Python, además de C#.",
    url: "https://godotengine.org/",
    category: "gaming",
    tags: ["gaming", "2d", "3d", "opensource", "framework", "python", "c#", "free-tier"],
    image: "/img/tools/godot.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-09-10",
    isFeatured: true,
    githubUrl: "https://github.com/godotengine/godot",
    documentationUrl: "https://docs.godotengine.org/en/stable/"
  },
  {
    id: "aws-s3",
    name: "Amazon S3",
    description: "Almacenamiento de objetos escalable, de alta disponibilidad y seguro de Amazon Web Services (AWS).",
    descriptionLarge: "Amazon Simple Storage Service (S3) es el servicio líder de almacenamiento de objetos en la nube, diseñado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar. Es la solución de facto para almacenar archivos estáticos, backups, data lakes, y contenido multimedia debido a su durabilidad y escalabilidad casi ilimitada.",
    url: "https://aws.amazon.com/s3/",
    category: "storage",
    tags: ["storage", "cloud", "aws", "infrastructure", "backend", "scalability", "free-tier"],
    image: "/img/tools/aws-s3.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-09-10",
    isFeatured: true,
    documentationUrl: "https://docs.aws.amazon.com/s3/"
  },
  {
    id: "google-cloud-storage",
    name: "Google Cloud Storage",
    description: "Servicio de almacenamiento de objetos unificado y altamente escalable de Google Cloud Platform (GCP).",
    descriptionLarge: "Google Cloud Storage es el servicio de almacenamiento de objetos equivalente a S3 en GCP. Ofrece diferentes clases de almacenamiento para optimizar costos según la frecuencia de acceso a los datos. Es ideal para aplicaciones que ya utilizan el ecosistema de Google Cloud.",
    url: "https://cloud.google.com/storage",
    category: "storage",
    tags: ["storage", "cloud", "gcp", "infrastructure", "backend", "scalability", "free-tier", "google"],
    image: "/img/tools/gcs.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-08-25",
    documentationUrl: "https://cloud.google.com/storage/docs"
  },
  {
    id: "azure-blob-storage",
    name: "Azure Blob Storage",
    description: "Solución de Microsoft Azure para almacenar grandes cantidades de datos no estructurados, como archivos multimedia y documentos.",
    descriptionLarge: "Azure Blob Storage es el servicio de almacenamiento de objetos de Microsoft. Está optimizado para almacenar terabytes de datos no estructurados a gran escala. Ofrece diferentes niveles de acceso (Hot, Cool y Archive) para gestionar los datos de manera rentable.",
    url: "https://azure.microsoft.com/products/storage/blobs/",
    category: "storage",
    tags: ["storage", "cloud", "azure", "infrastructure", "backend", "scalability", "free-tier", "microsoft"],
    image: "/img/tools/azure-blob.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-09-01",
    documentationUrl: "https://docs.microsoft.com/azure/storage/blobs/"
  },
  {
    id: "apache-spark",
    name: "Apache Spark",
    description: "Un motor de análisis unificado y ultrarrápido para el procesamiento de datos a gran escala y machine learning.",
    descriptionLarge: "Apache Spark es el framework de procesamiento de datos más utilizado para el Big Data. Está diseñado para la computación en clúster y ofrece un rendimiento hasta 100 veces más rápido que Hadoop MapReduce para operaciones de memoria. Es fundamental para construir data pipelines robustos, ETL, streaming de datos y análisis avanzado.",
    url: "https://spark.apache.org/",
    category: "data-engineering",
    tags: ["data-engineering", "data-pipeline", "etl", "python", "java", "scalability", "high-performance", "opensource"],
    image: "/img/tools/apache-spark.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-09-25",
    isFeatured: true,
    githubUrl: "https://github.com/apache/spark",
    documentationUrl: "https://spark.apache.org/docs/latest/"
  },
  {
    id: "apache-kafka",
    name: "Apache Kafka",
    description: "Plataforma de streaming de eventos distribuida y de alta escalabilidad para construir data pipelines en tiempo real.",
    descriptionLarge: "Apache Kafka es una plataforma de código abierto que permite a las aplicaciones publicar, suscribirse, almacenar y procesar flujos de registros en tiempo real. Se utiliza como un 'bus de datos' para conectar sistemas y asegurar que los datos estén disponibles inmediatamente a través de microservicios y data pipelines.",
    url: "https://kafka.apache.org/",
    category: "data-engineering",
    tags: ["data-engineering", "data-pipeline", "realtime", "backend", "microservices", "scalability", "opensource"],
    image: "/img/tools/apache-kafka.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-09-18",
    githubUrl: "https://github.com/apache/kafka",
    documentationUrl: "https://kafka.apache.org/documentation/"
  },
  {
    id: "airflow",
    name: "Apache Airflow",
    description: "Una plataforma para programar, monitorear y orquestar flujos de trabajo (workflows) de datos de forma programática.",
    descriptionLarge: "Apache Airflow es una herramienta de código abierto que utiliza Python para crear, programar y monitorear pipelines de datos complejos (DAGs o Grafos Acíclicos Dirigidos). Es la herramienta estándar para la orquestación de ETL, permitiendo a los ingenieros de datos automatizar secuencias de tareas dependientes.",
    url: "https://airflow.apache.org/",
    category: "data-engineering",
    tags: ["data-engineering", "data-pipeline", "etl", "automation", "python", "devops", "opensource"],
    image: "/img/tools/airflow.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-09-10",
    githubUrl: "https://github.com/apache/airflow",
    documentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/index.html"
  },
  {
    id: "go",
    name: "Go (Golang)",
    description: "Lenguaje de programación de Google, optimizado para concurrencia, alto rendimiento y desarrollo de microservicios.",
    descriptionLarge: "Go, a menudo llamado Golang, es un lenguaje de programación de código abierto diseñado en Google. Se enfoca en la eficiencia, la simplicidad de la sintaxis y la compilación rápida. Es extremadamente popular para el desarrollo de infraestructuras en la nube, microservicios, APIs de alto rendimiento y herramientas de DevOps.",
    url: "https://go.dev/",
    category: "languages",
    tags: [
      "go",
      "backend",
      "high-performance",
      "microservices",
      "google",
      "opensource"
    ],
    image: "/img/tools/go.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-09-01",
    isFeatured: true,
    githubUrl: "https://github.com/golang/go",
    documentationUrl: "https://go.dev/doc/"
  },
  {
    id: "rust",
    name: "Rust",
    description: "Lenguaje de programación centrado en la seguridad de la memoria, la velocidad y la concurrencia, sin recolector de basura.",
    descriptionLarge: "Rust es un lenguaje de programación multiparadigma que garantiza la seguridad de la memoria y la seguridad de los hilos sin depender de un recolector de basura. Esta combinación lo hace ideal para sistemas operativos, motores de juegos, componentes de infraestructura críticos, y para reemplazar componentes escritos en C o C++ donde el rendimiento y la seguridad son vitales.",
    url: "https://www.rust-lang.org/",
    category: "languages",
    tags: [
      "rust",
      "backend",
      "security",
      "high-performance",
      "desktop",
      "opensource"
    ],
    image: "/img/tools/rust.svg",
    isFree: true,
    stars: 4.9,
    lastUpdated: "2025-09-15",
    isFeatured: true,
    githubUrl: "https://github.com/rust-lang/rust",
    documentationUrl: "https://doc.rust-lang.org/book/"
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description: "Plataforma de entrega de correo electrónico transaccional y de marketing con alta capacidad de entrega.",
    descriptionLarge: "SendGrid, ahora parte de Twilio, es un servicio de envío de correos electrónicos basado en la nube. Es la solución líder para enviar correos transaccionales (como confirmaciones de pedidos, restablecimientos de contraseña) y campañas de marketing a gran escala, garantizando altas tasas de entrega.",
    url: "https://sendgrid.com/",
    category: "email",
    tags: ["email", "api", "saas", "marketing", "free-tier", "scalability"],
    image: "/img/tools/sendgrid.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-09-10",
    alternatives: ["mailgun", "postmark"]
  },
  {
    id: "twilio",
    name: "Twilio",
    description: "Plataforma de comunicación en la nube que permite integrar voz, SMS, video y autenticación en tus aplicaciones vía API.",
    descriptionLarge: "Twilio ofrece una suite de APIs programables para construir comunicaciones personalizadas. Es la herramienta de facto para desarrolladores que necesitan integrar funcionalidades de SMS, llamadas de voz o video y soluciones de verificación (2FA) directamente en sus aplicaciones web o móviles.",
    url: "https://www.twilio.com/",
    category: "sms",
    tags: ["sms", "api", "saas", "communication", "realtime", "security"],
    image: "/img/tools/twilio.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-09-15",
    isFeatured: true,
    alternatives: ["nexmo", "messagebird"]
  },
  {
    id: "vault",
    name: "HashiCorp Vault",
    description: "Herramienta para gestionar secretos, claves de cifrado y datos sensibles de forma centralizada y segura.",
    descriptionLarge: "Vault se enfoca en la gestión de secretos (contraseñas, tokens, claves API) de forma segura a través de una API unificada. Es fundamental para la infraestructura moderna de DevOps, ya que elimina la práctica de almacenar credenciales en archivos de configuración o código fuente.",
    url: "https://www.hashicorp.com/products/vault",
    category: "security",
    tags: ["security", "encryption", "api", "infrastructure", "devops", "self-hosted", "enterprise"],
    image: "/img/tools/vault.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-10-01",
    alternatives: ["aws-secrets-manager", "kubernetes-secrets"]
  },
  {
    id: "snyk",
    name: "Snyk",
    description: "Plataforma de seguridad que encuentra y arregla vulnerabilidades en el código, dependencias y contenedores.",
    descriptionLarge: "Snyk es una herramienta de seguridad 'Developer-First' que se integra directamente en el flujo de trabajo CI/CD. Escanea repositorios, contenedores y archivos de configuración para identificar vulnerabilidades conocidas (CVE) y ofrece pasos automatizados para corregirlas.",
    url: "https://snyk.io/",
    category: "security",
    tags: ["security", "vulnerability-scanning", "ci/cd", "automation", "saas", "free-tier"],
    image: "/img/tools/snyk.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-10-05",
    isFeatured: true
  },
  {
    id: "resend",
    name: "Resend",
    description: "Plataforma de correo electrónico para desarrolladores con énfasis en la API y el diseño de correos bonitos.",
    descriptionLarge: "Resend es una API de correo electrónico transaccional moderna y orientada al desarrollador. Se diferencia por su enfoque en la experiencia de codificación y su capacidad para enviar correos electrónicos estéticamente agradables. Es una alternativa reciente y popular a SendGrid y Mailgun.",
    url: "https://resend.com/",
    category: "email",
    tags: ["email", "api", "saas", "frontend", "free-tier"],
    image: "/img/tools/resend.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-10-10",
    isNew: true,
    alternatives: ["sendgrid", "mailgun"]
  },
  {
    id: "posthog",
    name: "PostHog",
    description: "Plataforma de analíticas de producto de código abierto, para rastrear eventos de usuarios, funnels y sesiones.",
    descriptionLarge: "PostHog es una suite de analíticas de producto 'all-in-one' que incluye analíticas de producto, gestión de funciones (feature flags), A/B testing y grabación de sesiones. Su principal atractivo es que puede ser autoalojado, manteniendo la propiedad total de los datos del usuario.",
    url: "https://posthog.com/",
    category: "analytics",
    tags: ["analytics", "monitoring", "self-hosted", "opensource", "saas", "free-tier"],
    image: "/img/tools/posthog.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-10-05"
  },
  {
    id: "stackblitz",
    name: "StackBlitz",
    description: "Plataforma de desarrollo en línea que permite crear y ejecutar proyectos web instantáneamente desde el navegador.",
    descriptionLarge: "StackBlitz es un IDE en el navegador que elimina la necesidad de instalación local, permitiendo crear proyectos de React, Angular, Vue y Node.js al instante. Utiliza la tecnología WebContainers para ejecutar entornos de desarrollo completos con Node.js en el navegador, replicando un entorno de desarrollo local.",
    url: "https://stackblitz.com/",
    category: "productivity",
    tags: ["productivity", "editor", "ide", "collaboration", "saas", "free-tier"],
    image: "/img/tools/stackblitz.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-10-18"
  },
  {
    id: "coolors",
    name: "Coolors",
    description: "Generador ultrarrápido de paletas de colores para el diseño web y de aplicaciones.",
    descriptionLarge: "Coolors es una herramienta en línea que permite a diseñadores y desarrolladores generar, explorar y guardar paletas de colores armónicas. Es muy popular por su rapidez y por ofrecer múltiples herramientas de accesibilidad y exportación de paletas.",
    url: "https://coolors.co/",
    category: "design",
    tags: ["design", "ui", "ux", "utilities", "free-tier"],
    image: "/img/tools/coolors.svg",
    isFree: false,
    hasFreeTier: true,
    stars: 4.7,
    lastUpdated: "2025-09-29"
  },
  {
    id: "looka",
    name: "Looka",
    description: "Diseñador de logotipos impulsado por IA que ayuda a crear una identidad de marca profesional.",
    descriptionLarge: "Looka (anteriormente Logojoy) utiliza inteligencia artificial para generar ideas de logotipos y kits de marca a partir de las preferencias del usuario. Aunque la creación es gratuita, se requiere un pago para descargar los archivos de alta resolución y el kit de marca.",
    url: "https://looka.com/",
    category: "design",
    tags: ["design", "ai", "graphics", "templates"],
    image: "/img/tools/looka.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-08-01"
  },
  {
    id: "miro",
    name: "Miro",
    description: "Pizarra blanca digital para la colaboración visual en tiempo real entre equipos remotos.",
    descriptionLarge: "Miro es una plataforma de espacios de trabajo digitales que permite a los equipos colaborar en línea a través de pizarras blancas infinitas. Se utiliza para lluvia de ideas, diagramas de flujo, mapas mentales, wireframing y sesiones de diseño colaborativo.",
    url: "https://miro.com/es/",
    category: "collaboration",
    tags: ["collaboration", "design", "project-management", "saas", "free-tier"],
    image: "/img/tools/miro.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-10-01"
  },
  {
    id: "make",
    name: "Make (formerly Integromat)",
    description: "Herramienta visual para la automatización de flujos de trabajo (workflows) e integración de aplicaciones SaaS.",
    descriptionLarge: "Make es una poderosa herramienta de automatización 'low-code' que permite conectar diferentes aplicaciones web (SaaS) y servicios, creando flujos de trabajo complejos sin necesidad de escribir código. Es ideal para automatizar tareas de marketing, ventas y operaciones.",
    url: "https://www.make.com/en",
    category: "automation",
    tags: ["automation", "lowcode", "api", "saas", "free-tier"],
    image: "/img/tools/make.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-09-25"
  },
  {
    id: "wix-studio",
    name: "Wix Studio",
    description: "Plataforma de creación web avanzada y colaborativa dirigida a agencias y desarrolladores web.",
    descriptionLarge: "Wix Studio es una versión de Wix diseñada para profesionales, ofreciendo herramientas de diseño más flexibles, funcionalidades de desarrollo con código y herramientas de gestión de proyectos para agencias. Combina la facilidad de uso del constructor visual con el control del desarrollo web tradicional.",
    url: "https://es.wix.com/studio",
    category: "ecommerce",
    tags: ["ecommerce", "lowcode", "web", "design", "saas", "collaboration"],
    image: "/img/tools/wix-studio.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.3,
    lastUpdated: "2025-10-01"
  },
  {
    id: "hostinger",
    name: "Hostinger",
    description: "Proveedor de hosting web asequible y optimizado para WordPress, con dominio y SSL incluidos.",
    descriptionLarge: "Hostinger es popular por ofrecer servicios de hosting compartido de alto rendimiento a precios muy competitivos. Es una opción común para freelancers, blogs personales y pequeñas empresas que buscan un alojamiento fiable con una interfaz sencilla.",
    url: "https://www.hostinger.es/",
    category: "hosting",
    tags: ["hosting", "web", "deployment", "free-tier"],
    image: "/img/tools/hostinger.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.2,
    lastUpdated: "2025-10-18"
  },
  {
    id: "godaddy",
    name: "GoDaddy",
    description: "El registrador de dominios más grande del mundo, que también ofrece hosting, e-commerce y servicios de marketing.",
    descriptionLarge: "GoDaddy es conocido principalmente por su registro masivo de dominios, pero también proporciona una suite completa de productos que incluye hosting compartido, constructores de sitios web y herramientas de marketing digital, siendo una solución 'todo-en-uno' para pequeños negocios.",
    url: "https://www.godaddy.com/",
    category: "hosting",
    tags: ["hosting", "web", "ecommerce", "marketing"],
    image: "/img/tools/godaddy.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.1,
    lastUpdated: "2025-10-15"
  },
  {
    id: "acquia",
    name: "Acquia",
    description: "Plataforma de código abierto en la nube optimizada para Drupal, utilizada para sitios empresariales grandes y complejos.",
    descriptionLarge: "Acquia proporciona soluciones de hosting, gestión y automatización de marketing específicamente diseñadas para el CMS Drupal. Es la opción preferida por las empresas que requieren la seguridad y escalabilidad que ofrece Drupal para sitios web de alto tráfico.",
    url: "https://www.acquia.com/",
    category: "hosting",
    tags: ["hosting", "cms", "cloud", "enterprise", "security"],
    image: "/img/tools/acquia.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-10"
  },
  {
    id: "jquery",
    name: "jQuery",
    description: "La biblioteca de JavaScript más popular que simplifica la manipulación del DOM, el manejo de eventos y las animaciones.",
    descriptionLarge: "jQuery fue durante muchos años el estándar de facto para el desarrollo frontend, simplificando tareas complejas de JavaScript. Aunque los frameworks modernos han tomado su lugar, sigue siendo muy relevante en proyectos heredados y en la manipulación rápida de páginas web.",
    url: "https://jquery.com/",
    category: "frontend",
    tags: ["javascript", "library", "frontend", "web", "opensource"],
    image: "/img/tools/jquery.svg",
    isFree: true,
    stars: 4.0,
    lastUpdated: "2025-10-05",
    githubUrl: "https://github.com/jquery/jquery"
  },
  {
    id: "udemy",
    name: "Udemy",
    description: "Una de las plataformas de aprendizaje en línea más grandes, con miles de cursos en tecnología, desarrollo y negocios.",
    descriptionLarge: "Udemy ofrece un mercado global de aprendizaje y enseñanza donde millones de estudiantes se conectan para dominar nuevas habilidades. Es conocida por su enorme catálogo de cursos sobre desarrollo de software, incluyendo lenguajes, frameworks y certificaciones.",
    url: "https://www.udemy.com/",
    category: "education",
    tags: ["education", "courses", "learning"],
    image: "/img/tools/udemy.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-10-20"
  },
  {
    id: "platzi",
    name: "Platzi",
    description: "Plataforma de educación en línea líder en Latinoamérica, enfocada en carreras y rutas de aprendizaje en tecnología.",
    descriptionLarge: "Platzi se diferencia por su enfoque en rutas de aprendizaje estructuradas (carreras), mentoría y una comunidad muy activa. Ofrece un amplio contenido en desarrollo web, ingeniería de software, IA y diseño, con un modelo de suscripción anual.",
    url: "https://platzi.com/",
    category: "education",
    tags: ["education", "courses", "learning"],
    image: "/img/tools/platzi.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-10-15"
  },
  {
    id: "moodle",
    name: "Moodle",
    description: "Sistema de gestión de aprendizaje (LMS) de código abierto, ampliamente utilizado por instituciones educativas.",
    descriptionLarge: "Moodle es una plataforma de e-learning modular y personalizable. Es la opción preferida por universidades y grandes instituciones para la gestión de cursos en línea, ofreciendo herramientas de evaluación, seguimiento de progreso y comunicación entre estudiantes y profesores.",
    url: "https://moodle.org/",
    category: "education",
    tags: ["education", "learning", "self-hosted", "opensource"],
    image: "/img/tools/moodle.svg",
    isFree: true,
    stars: 4.1,
    lastUpdated: "2025-10-01"
  },
  {
    id: "phrase",
    name: "Phrase",
    description: "Plataforma líder en gestión de localización (LMS) para automatizar el proceso de traducción de software.",
    descriptionLarge: "Phrase (anteriormente PhraseApp) es una solución profesional para la internacionalización (i18n) y localización (l10n). Proporciona herramientas para desarrolladores y traductores para gestionar archivos de idiomas, integrarse vía API en el proceso de desarrollo y asegurar traducciones consistentes.",
    url: "https://phrase.com/",
    category: "localization",
    tags: ["localization", "internationalization", "api", "saas"],
    image: "/img/tools/phrase.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.8,
    lastUpdated: "2025-10-25"
  },
  {
    id: "localize",
    name: "Localize",
    description: "Herramienta que utiliza proxy de traducción para traducir sitios web y aplicaciones sin modificar el código fuente.",
    descriptionLarge: "Localize simplifica la traducción de sitios web mediante un sistema de proxy, lo que significa que puedes empezar a traducir sin hacer cambios masivos en tu base de código. Es ideal para equipos que necesitan lanzar contenido multilingüe rápidamente.",
    url: "https://localizejs.com/",
    category: "localization",
    tags: ["localization", "internationalization", "saas"],
    image: "/img/tools/localize.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-20"
  },
  {
    id: "sap",
    name: "SAP S/4HANA",
    description: "El sistema ERP líder mundial, enfocado en la gestión en tiempo real de finanzas, logística y cadena de suministro.",
    descriptionLarge: "SAP S/4HANA es la suite de planificación de recursos empresariales más grande del mundo, ofreciendo gestión completa para grandes corporaciones. Aunque es un sistema complejo, su integración API y sus soluciones en la nube lo hacen fundamental para los desarrolladores que trabajan en el ecosistema empresarial.",
    url: "https://www.sap.com/products/s4hana-erp.html",
    category: "erp",
    tags: ["erp", "enterprise", "cloud", "api", "saas"],
    image: "/img/tools/sap.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.2,
    lastUpdated: "2025-10-01"
  },
  {
    id: "odoo",
    name: "Odoo",
    description: "Suite de aplicaciones de negocio de código abierto que cubre ERP, CRM, e-commerce, inventario y más.",
    descriptionLarge: "Odoo es una solución ERP modular, lo que permite a las empresas comenzar con una sola aplicación (como CRM o inventario) y agregar funcionalidades a medida que crecen. Al ser de código abierto, ofrece una gran flexibilidad y capacidad de personalización, siendo una excelente opción para Pymes y desarrolladores.",
    url: "https://www.odoo.com/",
    category: "erp",
    tags: ["erp", "crm", "ecommerce", "opensource", "self-hosted", "free-tier"],
    image: "/img/tools/odoo.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-10",
    alternatives: ["netsuite", "sap"]
  },
  {
    id: "oracle",
    name: "Oracle (Plataforma Empresarial)",
    description: "Gigante tecnológico que ofrece bases de datos (DB), infraestructura en la nube (OCI) y sistemas ERP/CRM para empresas.",
    descriptionLarge: "Oracle es un líder mundial en tecnología empresarial, conocido por su sistema de gestión de bases de datos relacionales (Oracle Database) y su infraestructura en la nube (OCI). Ofrece una suite completa de soluciones para desarrollo, incluyendo herramientas de desarrollo de bajo código y su línea de aplicaciones ERP (como NetSuite y Fusion Cloud), siendo fundamental en el entorno empresarial.",
    url: "https://www.oracle.com/",
    category: "erp",
    tags: ["enterprise", "database", "cloud", "erp", "saas", "api", "infrastructure"],
    image: "/img/tools/oracle.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-28",
    isFeatured: true
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Plataforma de software CRM y suite completa de herramientas para marketing, ventas y servicio al cliente.",
    descriptionLarge: "HubSpot es una de las plataformas de Inbound Marketing y CRM más conocidas. Ofrece un conjunto de 'hubs' que incluyen automatización de marketing, herramientas de SEO, gestión de contenido (CMS) y servicio al cliente. Es una solución integral basada en el modelo 'freemium' que escala desde startups hasta empresas grandes.",
    url: "https://www.hubspot.com/",
    category: "marketing",
    tags: ["marketing", "crm", "seo", "automation", "saas", "free-tier", "enterprise"],
    image: "/img/tools/hubspot.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-25",
    alternatives: ["salesforce", "marketo"]
  },
  {
    id: "semrush",
    name: "Semrush",
    description: "Plataforma de inteligencia competitiva y gestión de visibilidad online para SEO, PPC y marketing de contenidos.",
    descriptionLarge: "Semrush es la herramienta líder para la optimización de motores de búsqueda (SEO) y el análisis de la competencia. Permite a los desarrolladores y equipos de marketing investigar palabras clave, auditar el rendimiento técnico de un sitio web, analizar backinks y monitorear la posición en los resultados de búsqueda.",
    url: "https://www.semrush.com/",
    category: "seo",
    tags: ["seo", "marketing", "analytics", "performance", "vulnerability-scanning", "saas"],
    image: "/img/tools/semrush.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-10-18",
    isFeatured: true,
    alternatives: ["ahrefs", "moz"]
  },
  {
    id: "hootsuite",
    name: "Hootsuite",
    description: "Plataforma para gestionar y programar publicaciones en múltiples redes sociales desde un único panel de control.",
    descriptionLarge: "Hootsuite es una de las primeras y más confiables plataformas para la gestión de redes sociales. Permite a los equipos programar contenido, interactuar con la audiencia en diferentes plataformas (Twitter, Facebook, Instagram) y analizar el rendimiento de las campañas sociales.",
    url: "https://www.hootsuite.com/",
    category: "social",
    tags: ["social-media", "marketing", "collaboration", "automation", "analytics", "saas", "free-tier"],
    image: "/img/tools/hootsuite.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-10-10",
    alternatives: ["buffer", "sproutsocial"]
  },
  {
    id: "bd-blocks",
    name: "BDBlocks",
    description: "Software que vende bloques y plugins avanzados para extender la funcionalidad de Brilliant Directories.",
    descriptionLarge: "BDBlocks provee una colección de bloques y funcionalidades prediseñadas que los desarrolladores y propietarios de sitios Brilliant Directories pueden instalar fácilmente. Estos plugins y bloques están diseñados para añadir características avanzadas, mejorar la experiencia de usuario y optimizar la conversión, permitiendo una personalización profunda del CMS.",
    url: "https://thewebsitelauncher.com/",
    category: "cms",
    tags: [
      "cms",
      "plugins",
      "templates",
      "ecommerce",
      "paid",
      "utilities"
    ],
    image: "/img/tools/bdblocks.svg", 
    isFree: false,
    hasPremium: true,
    stars: 5.0, 
    lastUpdated: "2025-06-30",
    isNew: false,
    authorName: "Esteban Arias"
  },
  {
    id: "c-language",
    name: "C",
    description: "Lenguaje de programación fundamental y de propósito general, usado para sistemas operativos y alto rendimiento.",
    descriptionLarge: "C es un lenguaje de programación de bajo nivel que sirve como base para muchos otros lenguajes y sistemas operativos (como Linux). Es esencial para el desarrollo de sistemas embebidos, motores de juegos, compiladores y software que requiere acceso directo al hardware y alto rendimiento.",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    category: "languages",
    tags: ["c++", "high-performance", "opensource", "desktop"],
    image: "/img/tools/c-language.svg",
    isFree: true,
    stars: 4.0,
    lastUpdated: "2025-10-15"
  },
  {
    id: "csharp",
    name: "C#",
    description: "Lenguaje de programación de Microsoft, moderno y orientado a objetos, popular para desarrollo web, móvil y juegos (Unity).",
    descriptionLarge: "C# (C Sharp) es un lenguaje de programación multiparadigma desarrollado por Microsoft. Es el lenguaje principal para el desarrollo en el ecosistema .NET, y es ampliamente utilizado para construir aplicaciones empresariales, servicios web (ASP.NET), aplicaciones de Windows y juegos (gracias al motor Unity).",
    url: "https://learn.microsoft.com/dotnet/csharp/",
    category: "languages",
    tags: ["c#", "microsoft", "backend", "gaming", "enterprise", "opensource"],
    image: "/img/tools/csharp.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-10-20"
  },
  {
    id: "bash",
    name: "Bash",
    description: "Intérprete de comandos (shell) estándar para sistemas operativos Unix, fundamental para el scripting en DevOps.",
    descriptionLarge: "Bash (Bourne Again Shell) es un procesador de comandos que normalmente se ejecuta en una ventana de texto donde los usuarios pueden interactuar con el sistema operativo. Es la herramienta de facto para escribir scripts de automatización, gestionar la infraestructura y ejecutar comandos en servidores Linux/macOS.",
    url: "https://www.gnu.org/software/bash/",
    category: "languages",
    tags: ["automation", "devops", "utilities", "opensource"],
    image: "/img/tools/bash.svg",
    isFree: true,
    stars: 4.2,
    lastUpdated: "2025-10-01"
  },
  {
    id: "cassandra",
    name: "Apache Cassandra",
    description: "Base de datos NoSQL distribuida y altamente escalable, ideal para manejar grandes volúmenes de datos con alta disponibilidad.",
    descriptionLarge: "Apache Cassandra es una base de datos distribuida de código abierto diseñada para manejar datos masivos sin un único punto de falla. Ofrece una arquitectura peer-to-peer que garantiza una alta disponibilidad y escalabilidad lineal, siendo ideal para aplicaciones que requieren un tiempo de actividad del 100%.",
    url: "http://cassandra.apache.org/",
    category: "database",
    tags: ["database", "nosql", "backend", "scalability", "opensource", "high-performance"],
    image: "/img/tools/cassandra.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-10-25"
  },
  {
    id: "cosmosdb",
    name: "Azure Cosmos DB",
    description: "Base de datos NoSQL multimodelo y distribuida globalmente, ofrecida como servicio por Microsoft Azure.",
    descriptionLarge: "Azure Cosmos DB es el servicio de base de datos de Microsoft Azure que ofrece escalabilidad horizontal elástica y garantiza latencias de un solo dígito a nivel global. Soporta múltiples APIs de datos (como SQL, MongoDB, Cassandra y Gremlin), lo que lo hace flexible para aplicaciones modernas y distribuidas.",
    url: "https://azure.microsoft.com/en-us/products/cosmos-db",
    category: "database",
    tags: ["database", "nosql", "cloud", "azure", "microsoft", "scalability", "low-latency", "api"],
    image: "/img/tools/cosmos-db.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-10-28"
  },
  {
    id: "couchdb",
    name: "Apache CouchDB",
    description: "Base de datos NoSQL orientada a documentos que utiliza JSON para el almacenamiento y JavaScript para las consultas.",
    descriptionLarge: "CouchDB se enfoca en la facilidad de uso, la fiabilidad y el rendimiento. Es conocido por su protocolo de replicación de múltiples maestros y su arquitectura 'web amigable', permitiendo el acceso directo a los documentos a través de una API RESTful. Es ideal para aplicaciones móviles y offline.",
    url: "https://couchdb.apache.org/",
    category: "database",
    tags: ["database", "nosql", "document", "json", "api", "opensource"],
    image: "/img/tools/couchdb.svg",
    isFree: true,
    stars: 4.1,
    lastUpdated: "2025-10-05"
  },
  {
    id: "atom",
    name: "Atom",
    description: "Editor de texto de código abierto, altamente personalizable y construido por GitHub, enfocado en la experiencia del desarrollador.",
    descriptionLarge: "Atom fue un editor de texto moderno, basado en Electron (HTML, CSS y JavaScript), que ofrecía una gran personalización a través de plugins y temas. Aunque ya no tiene soporte activo, fue muy popular por su integración con Git y su comunidad.",
    url: "https://github.com/atom/atom",
    category: "productivity",
    tags: ["editor", "productivity", "opensource", "javascript", "desktop"],
    image: "/img/tools/atom.svg",
    isFree: true,
    stars: 4.0,
    lastUpdated: "2025-01-01",
    githubUrl: "https://github.com/atom/atom"
  },
  {
    id: "babel",
    name: "Babel",
    description: "Compilador de JavaScript que permite usar las últimas características del lenguaje en cualquier navegador o entorno.",
    descriptionLarge: "Babel es una herramienta esencial en el ecosistema de JavaScript que traduce código moderno (ES6+) a una versión compatible con entornos antiguos. Es fundamental para el desarrollo frontend y backend, asegurando la compatibilidad de los proyectos con la mayoría de los dispositivos.",
    url: "https://babeljs.io/",
    category: "languages",
    tags: ["javascript", "typescript", "languages","compiler" , "opensource"],
    image: "/img/tools/babel.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-10-10"
  },
  {
    id: "bulma",
    name: "Bulma",
    description: "Framework de CSS ligero basado en Flexbox, que ofrece componentes pre-diseñados y un enfoque 'mobile-first'.",
    descriptionLarge: "Bulma es un framework de CSS de código abierto conocido por su sintaxis clara y modularidad. No tiene dependencias de JavaScript, lo que lo hace ligero y fácil de integrar en cualquier proyecto frontend que necesite un sistema de cuadrícula (grid) y componentes modernos.",
    url: "https://bulma.io/",
    category: "frontend",
    tags: ["css", "frontend", "framework", "responsive", "opensource"],
    image: "/img/tools/bulma.svg",
    isFree: true,
    stars: 4.3,
    lastUpdated: "2025-10-08"
  },
  {
    id: "cmake",
    name: "CMake",
    description: "Herramienta de automatización, código abierto y multiplataforma, para gestionar el proceso de compilación de software.",
    descriptionLarge: "CMake es un sistema de compilación que controla el proceso de creación de software utilizando archivos de configuración sencillos e independientes de la plataforma. Es la herramienta de facto para proyectos grandes escritos en C, C++ y otros lenguajes de sistemas, ya que genera archivos de compilación nativos (como Makefiles o proyectos de Visual Studio).",
    url: "https://cmake.org/",
    category: "automation",
    tags: ["automation", "build-tools", "c++", "languages", "cross-platform", "opensource"],
    image: "/img/tools/cmake.svg",
    isFree: true,
    stars: 4.4,
    lastUpdated: "2025-10-02"
  },
  {
    id: "composer",
    name: "Composer",
    description: "Administrador de dependencias para PHP, esencial para la gestión de librerías y frameworks modernos.",
    descriptionLarge: "Composer permite declarar las librerías de las que depende tu proyecto PHP y las gestiona (las instala/actualiza). Es una herramienta crucial para el desarrollo de frameworks como Laravel y Symfony, estandarizando la forma en que los proyectos PHP manejan sus dependencias.",
    url: "https://getcomposer.org/",
    category: "backend",
    tags: ["php", "backend", "framework", "utilities", "opensource"],
    image: "/img/tools/composer.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-10-01"
  },
  {
    id: "confluence",
    name: "Confluence",
    description: "Espacio de trabajo colaborativo de Atlassian, utilizado para crear wikis de conocimiento y documentación de proyectos.",
    descriptionLarge: "Confluence es una herramienta centralizada de Atlassian (creadores de Jira) que permite a los equipos crear, compartir y organizar el conocimiento de la empresa. Es ampliamente utilizado para la documentación técnica, especificaciones de productos y bases de conocimiento internas.",
    url: "https://www.atlassian.com/software/confluence",
    category: "documentation",
    tags: ["documentation", "collaboration", "project-management", "saas", "enterprise"],
    image: "/img/tools/confluence.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.3,
    lastUpdated: "2025-10-18"
  },
  {
    id: "codepen",
    name: "CodePen",
    description: "Entorno de desarrollo social para la creación rápida y prueba de código frontend (HTML, CSS, JS) en el navegador.",
    descriptionLarge: "CodePen es una de las comunidades de desarrolladores frontend más grandes. Permite escribir código en un entorno en línea que muestra los resultados en tiempo real. Es ideal para probar rápidamente ideas de UI/UX, compartir snippets y encontrar inspiración de diseño.",
    url: "https://codepen.io/",
    category: "productivity",
    tags: ["editor", "frontend", "html", "css", "javascript", "utilities", "free-tier"],
    image: "/img/tools/codepen.svg",
    isFree: false,
    hasFreeTier: true,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-10-22"
  },
  {
    id: "clarity",
    name: "Microsoft Clarity",
    description: "Herramienta gratuita de análisis de comportamiento de usuario, que incluye mapas de calor y grabación de sesiones.",
    descriptionLarge: "Microsoft Clarity es una herramienta gratuita que ayuda a los propietarios de sitios web a comprender cómo interactúan los usuarios con sus páginas. Sus características principales son los mapas de calor (heatmap), que muestran dónde hacen clic los usuarios, y las grabaciones de sesiones, que revelan la experiencia real del usuario.",
    url: "https://clarity.microsoft.com/",
    category: "analytics",
    tags: ["analytics", "monitoring", "microsoft", "free-tier", "web"],
    image: "/img/tools/microsoft-clarity.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-10-12"
  },
  {
    id: "java",
    name: "Java",
    description: "Lenguaje de programación orientado a objetos, usado ampliamente para aplicaciones empresariales, Android y sistemas a gran escala.",
    descriptionLarge: "Java es un lenguaje de programación de propósito general, concurrente y basado en clases, diseñado para tener pocas dependencias de implementación (Write Once, Run Anywhere). Es la base de sistemas empresariales, el desarrollo de Android y muchos microservicios (a menudo con Spring Boot).",
    url: "https://www.java.com/es/",
    category: "languages",
    tags: ["java", "backend", "android", "enterprise", "opensource"],
    image: "/img/tools/java.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-10-25"
  },
  {
    id: "python",
    name: "Python",
    description: "Lenguaje de programación de alto nivel y propósito general, popular para backend, ciencia de datos, machine learning y scripting.",
    descriptionLarge: "Python se destaca por su sintaxis clara y legible. Es el lenguaje dominante en Data Science e IA (gracias a librerías como PyTorch y Pandas). También es muy popular en el desarrollo backend (Django, FastAPI) y la automatización de tareas.",
    url: "https://www.python.org/",
    category: "languages",
    tags: ["python", "backend", "ai", "machine-learning", "automation", "opensource"],
    image: "/img/tools/python.svg",
    isFree: true,
    stars: 4.8,
    lastUpdated: "2025-10-30",
    isFeatured: true
  },
  {
    id: "fortran",
    name: "Fortran",
    description: "El lenguaje de programación más antiguo en uso continuo, especializado en computación numérica, científica y de alto rendimiento.",
    descriptionLarge: "Fortran (Formula Translation) es la opción estándar para la computación científica y de alto rendimiento, como simulaciones climáticas, modelos de física y análisis de elementos finitos. Sigue siendo fundamental en la supercomputación debido a su rendimiento inigualable en operaciones matriciales.",
    url: "https://fortran-lang.org/",
    category: "languages",
    tags: ["languages", "high-performance", "scientific", "opensource"],
    image: "/img/tools/fortran.svg",
    isFree: true,
    stars: 3.8,
    lastUpdated: "2025-10-10"
  },
  {
    id: "linux",
    name: "Linux Kernel",
    description: "El kernel de sistema operativo de código abierto más utilizado, fundamental para servidores, Android y el desarrollo moderno (WSL).",
    descriptionLarge: "Linux es la base de los sistemas operativos más utilizados en servidores (AWS, GCP, Azure), supercomputadoras y dispositivos móviles (Android). Su filosofía de código abierto y su potencia en la línea de comandos lo hacen esencial para los profesionales de DevOps y la infraestructura.",
    url: "https://www.kernel.org/",
    category: "infrastructure",
    tags: ["infrastructure", "devops", "opensource", "cross-platform", "backend"],
    image: "/img/tools/linux.svg",
    isFree: true,
    stars: 5.0,
    lastUpdated: "2025-10-15"
  },
  {
    id: "webstorm",
    name: "WebStorm",
    description: "IDE inteligente de JetBrains para desarrollo frontend (JavaScript, HTML, CSS), conocido por sus potentes refactorizaciones.",
    descriptionLarge: "WebStorm es un Entorno de Desarrollo Integrado (IDE) centrado en el desarrollo web moderno. Ofrece un soporte profundo para frameworks como React, Vue y Angular, con herramientas de depuración, pruebas unitarias y análisis de código que superan a los editores de código más ligeros.",
    url: "https://www.jetbrains.com/webstorm/",
    category: "productivity",
    tags: ["ide", "editor", "productivity", "javascript", "typescript", "frontend"],
    image: "/img/tools/webstorm.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.6,
    lastUpdated: "2025-10-28",
    alternatives: ["vscode"]
  },
  {
    id: "rubymine",
    name: "RubyMine",
    description: "IDE de JetBrains para Ruby y Ruby on Rails, que proporciona herramientas especializadas para el desarrollo de backend.",
    descriptionLarge: "RubyMine está diseñado específicamente para mejorar la productividad en proyectos Ruby, Rails y gemas. Sus características incluyen un depurador gráfico, soporte de pruebas RSpec/Minitest, y refactorizaciones inteligentes que entienden la estructura del framework Rails.",
    url: "https://www.jetbrains.com/rubymine/",
    category: "productivity",
    tags: ["ide", "editor", "productivity", "ruby", "backend", "framework"],
    image: "/img/tools/rubymine.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.4,
    lastUpdated: "2025-10-27",
    alternatives: ["vscode"]
  },
  {
    id: "matlab",
    name: "MATLAB",
    description: "Plataforma de programación y computación numérica para ingenieros y científicos, usada para análisis de datos y modelado.",
    descriptionLarge: "MATLAB (Matrix Laboratory) es un lenguaje de programación y un entorno de desarrollo para algoritmos, visualización de datos y modelado matemático. Es fundamental en la academia y la industria para el procesamiento de señales, visión por computadora y sistemas de control.",
    url: "https://www.mathworks.com/products/matlab.html",
    category: "languages",
    tags: ["languages", "ai", "analytics", "enterprise", "visualization"],
    image: "/img/tools/matlab.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.1,
    lastUpdated: "2025-09-15"
  },
  {
    id: "sourcetree",
    name: "SourceTree",
    description: "Cliente Git y Mercurial de escritorio gratuito de Atlassian, con interfaz gráfica (GUI) para la gestión de repositorios.",
    descriptionLarge: "SourceTree simplifica las operaciones de Git como ramificación (branching), fusión (merging) y gestión de repositorios a través de una interfaz visual. Es ideal para desarrolladores que prefieren no depender de la línea de comandos para el control de versiones, y se integra con Bitbucket y GitHub.",
    url: "https://www.sourcetreeapp.com/",
    category: "version-control",
    tags: ["version-control", "git", "collaboration", "desktop", "free-tier"],
    image: "/img/tools/sourcetree.svg",
    isFree: true,
    stars: 4.2,
    lastUpdated: "2025-10-20"
  },
  {
    id: "putty",
    name: "PuTTY",
    description: "Cliente gratuito de código abierto para SSH, Telnet y Rlogin, fundamental para acceder a servidores remotos en Windows.",
    descriptionLarge: "PuTTY es un emulador de terminal que permite a los desarrolladores y administradores de sistemas acceder de forma segura a máquinas remotas utilizando protocolos como SSH (Secure Shell). Es una herramienta ligera y esencial para la gestión de servidores Linux desde entornos Windows.",
    url: "https://www.putty.org/",
    category: "networking",
    tags: ["networking", "security", "utilities", "desktop", "opensource"],
    image: "/img/tools/putty.svg",
    isFree: true,
    stars: 4.0,
    lastUpdated: "2025-09-01"
  },
  {
    id: "axios",
    name: "Axios",
    description: "Cliente HTTP basado en promesas para el navegador y Node.js, utilizado para realizar peticiones API.",
    descriptionLarge: "Axios es una de las librerías de cliente HTTP más populares en el ecosistema JavaScript. Simplifica la realización de peticiones `fetch` (GET, POST, etc.) a servicios externos o APIs, ofreciendo características como interceptores de peticiones y manejo automático de JSON.",
    url: "https://axios-http.com/",
    category: "api",
    tags: ["javascript", "typescript", "api", "frontend", "backend", "library", "opensource"],
    image: "/img/tools/axios.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-10-18"
  },
  {
    id: "livewire",
    name: "Laravel Livewire",
    description: "Framework fullstack para Laravel que permite construir interfaces dinámicas usando PHP sin escribir JavaScript.",
    descriptionLarge: "Livewire es una librería que permite a los desarrolladores de Laravel (PHP) crear interfaces altamente reactivas y dinámicas. Lo logra renderizando componentes desde el backend en PHP y sincronizando los datos con el frontend usando Ajax, lo que acelera significativamente el desarrollo.",
    url: "https://livewire.laravel.com/",
    category: "fullstack",
    tags: ["php", "fullstack", "frontend", "backend", "framework", "realtime"],
    image: "/img/tools/livewire.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-10-25"
  },
  {
    id: "redux",
    name: "Redux",
    description: "Librería de gestión de estado predecible para aplicaciones JavaScript, popularmente usada con React.",
    descriptionLarge: "Redux proporciona un contenedor predecible del estado para aplicaciones de JavaScript, ayudando a gestionar el estado global de una aplicación compleja de manera centralizada. Sigue los principios de inmutabilidad y un flujo de datos unidireccional, lo que facilita el debugging y la comprensión de cómo cambian los datos.",
    url: "https://redux.js.org/",
    category: "frontend",
    tags: ["react", "javascript", "typescript", "frontend", "library"],
    image: "/img/tools/redux.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-10-10"
  },
  {
    id: "alpine-js",
    name: "Alpine.js",
    description: "Framework minimalista de JavaScript que ofrece la robustez de los frameworks grandes con una sintaxis declarativa directamente en el HTML.",
    descriptionLarge: "Alpine.js es un framework ligero de JavaScript que permite escribir componentes reactivos directamente en el marcado HTML. Es ideal para pequeños efectos de interfaz de usuario, interactividad simple y proyectos donde no se quiere la sobrecarga de un framework grande como React o Vue.",
    url: "https://alpinejs.dev/",
    category: "frontend",
    tags: ["javascript", "frontend", "library", "responsive", "low-latency"],
    image: "/img/tools/alpinejs.svg",
    isFree: true,
    stars: 4.4,
    lastUpdated: "2025-10-05"
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description: "La plataforma de e-commerce de código abierto más popular del mundo, construida sobre WordPress.",
    descriptionLarge: "WooCommerce convierte cualquier instalación de WordPress en una tienda en línea completa. Es conocido por su flexibilidad, la amplia disponibilidad de plugins y su enfoque en la personalización. Es una solución de e-commerce extremadamente popular para pequeñas y medianas empresas.",
    url: "https://woocommerce.com/",
    category: "ecommerce",
    tags: ["ecommerce", "cms", "php", "web", "opensource", "marketing", "payments"],
    image: "/img/tools/woocommerce.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-11-05"
  },
  {
    id: "dart",
    name: "Dart",
    description: "Lenguaje de programación optimizado para UI, creado por Google y usado para construir aplicaciones móviles, web y de escritorio con Flutter.",
    descriptionLarge: "Dart es el lenguaje de programación principal utilizado por Flutter. Está diseñado para un desarrollo rápido tanto en el frontend como en el backend. Su característica principal es su compilación nativa rápida y su enfoque en la creación de interfaces de usuario modernas y de alto rendimiento.",
    url: "https://dart.dev/",
    category: "languages",
    tags: ["dart", "mobile", "frontend", "backend", "google", "opensource"],
    image: "/img/tools/dart.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-11-01",
    githubUrl: "https://github.com/dart-lang/sdk"
  },
  {
    id: "ruby",
    name: "Ruby",
    description: "Lenguaje de programación dinámico y orientado a objetos, famoso por el framework Ruby on Rails.",
    descriptionLarge: "Ruby se enfoca en la simplicidad y la productividad. Su sintaxis elegante y natural ha atraído a muchos desarrolladores. Es la base de Ruby on Rails, uno de los frameworks web de backend más influyentes de la historia, popular en el mundo de las startups.",
    url: "https://www.ruby-lang.org/es/",
    category: "languages",
    tags: ["ruby", "backend", "framework", "opensource"],
    image: "/img/tools/ruby.svg",
    isFree: true,
    stars: 4.4,
    lastUpdated: "2025-10-28",
    githubUrl: "https://github.com/ruby/ruby"
  },
  {
    id: "apache-groovy",
    name: "Apache Groovy",
    description: "Lenguaje dinámico para la plataforma Java (JVM) que se usa como lenguaje de scripting y para la automatización de CI/CD (Jenkins).",
    descriptionLarge: "Groovy es un lenguaje de scripting opcionalmente tipado y dinámico para la plataforma Java (JVM). Se integra perfectamente con cualquier programa Java y es muy popular para escribir scripts de compilación (como Gradle) y para definir pipelines en Jenkins (Groovy DSL).",
    url: "https://groovy-lang.org/",
    category: "languages",
    tags: ["java", "automation", "devops", "languages", "opensource"],
    image: "/img/tools/groovy.svg",
    isFree: true,
    stars: 4.0,
    lastUpdated: "2025-10-25"
  },
  {
    id: "clojure",
    name: "Clojure",
    description: "Un dialecto de Lisp que se ejecuta en la JVM, centrado en la inmutabilidad y la programación funcional para la robustez.",
    descriptionLarge: "Clojure es un lenguaje de programación funcional conocido por su enfoque en la inmutabilidad y los estados persistentes. Se utiliza en sistemas de backend distribuidos y altamente concurrentes que requieren una alta tolerancia a fallos.",
    url: "https://clojure.org/",
    category: "languages",
    tags: ["java", "backend", "languages", "functional", "opensource"],
    image: "/img/tools/clojure.svg",
    isFree: true,
    stars: 4.2,
    lastUpdated: "2025-10-20"
  },
  {
    id: "net-framework",
    name: ".NET (Core)",
    description: "Framework de desarrollo unificado de Microsoft para construir aplicaciones modernas en Windows, Linux y macOS.",
    descriptionLarge: ".NET Core (ahora solo .NET) es la plataforma de desarrollo de código abierto y multiplataforma de Microsoft. Permite a los desarrolladores utilizar C# y F# para construir aplicaciones web (ASP.NET), servicios en la nube, microservicios y APIs de alto rendimiento.",
    url: "https://dotnet.microsoft.com/",
    category: "backend",
    tags: ["c#", "microsoft", "backend", "framework", "cross-platform", "opensource"],
    image: "/img/tools/dotnet.svg",
    isFree: true,
    stars: 4.6,
    lastUpdated: "2025-11-02"
  },
  {
    id: "erlang",
    name: "Erlang",
    description: "Lenguaje de programación diseñado para construir sistemas distribuidos, tolerantes a fallos y de tiempo de ejecución suave.",
    descriptionLarge: "Erlang es un lenguaje funcional conocido por ser la base de WhatsApp y sistemas de telecomunicaciones. Su entorno de ejecución (BEAM) maneja la concurrencia y los fallos de forma excepcional, haciéndolo ideal para el backend de sistemas que requieren una disponibilidad del 99.999% (servidores de chat, bases de datos distribuidas).",
    url: "https://www.erlang.org/",
    category: "languages",
    tags: ["backend", "languages", "realtime", "scalability", "high-performance", "opensource"],
    image: "/img/tools/erlang.svg",
    isFree: true,
    stars: 4.3,
    lastUpdated: "2025-10-15"
  },
  {
    id: "scala",
    name: "Scala",
    description: "Lenguaje que combina programación orientada a objetos y funcional, muy utilizado en el Big Data (Spark, Kafka) y finanzas.",
    descriptionLarge: "Scala se ejecuta en la JVM y está diseñado para abordar los problemas de la Java. Su potencia en la programación funcional lo hace extremadamente popular para la manipulación y el procesamiento de grandes volúmenes de datos, especialmente en data pipelines con Apache Spark.",
    url: "https://www.scala-lang.org/",
    category: "languages",
    tags: ["java", "data-engineering", "backend", "languages", "opensource"],
    image: "/img/tools/scala.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-10-05"
  },
  {
    id: "debian",
    name: "Debian",
    description: "Una de las distribuciones de Linux más antiguas y estables, base de muchas otras distribuciones (Ubuntu).",
    descriptionLarge: "Debian es un sistema operativo de código abierto conocido por su compromiso con la estabilidad y la libertad del software. Es la distribución elegida por muchos administradores de sistemas para servidores críticos debido a su fiabilidad y su vasto repositorio de paquetes.",
    url: "https://www.debian.org/",
    category: "infrastructure",
    tags: ["infrastructure", "linux", "server", "opensource", "self-hosted"],
    image: "/img/tools/debian.svg",
    isFree: true,
    stars: 4.7,
    lastUpdated: "2025-11-01"
  },
  {
    id: "git",
    name: "Git",
    description: "El sistema de control de versiones distribuido más utilizado en el mundo.",
    descriptionLarge: "Git es la base de todo desarrollo moderno, permitiendo a los equipos rastrear cambios, colaborar y manejar diferentes versiones del código fuente de manera eficiente y segura. Plataformas como GitHub, GitLab y Bitbucket se construyen sobre Git.",
    url: "https://git-scm.com/",
    category: "version-control",
    tags: ["version-control", "git", "collaboration", "opensource"],
    image: "/img/tools/git.svg",
    isFree: true,
    stars: 5.0,
    lastUpdated: "2025-11-05"
  },
  {
    id: "clion",
    name: "CLion",
    description: "IDE inteligente de JetBrains diseñado para el desarrollo en C y C++.",
    descriptionLarge: "CLion es un Entorno de Desarrollo Integrado (IDE) centrado en lenguajes de sistemas como C y C++. Ofrece análisis de código avanzado, refactorización, depuración y soporte integrado para CMake, lo que lo convierte en la herramienta ideal para el desarrollo de alto rendimiento.",
    url: "https://www.jetbrains.com/clion/",
    category: "productivity",
    tags: ["ide", "editor", "productivity", "c++", "languages", "desktop"],
    image: "/img/tools/clion.svg",
    isFree: false,
    hasPremium: true,
    stars: 4.5,
    lastUpdated: "2025-10-29",
    alternatives: ["vscode"]
  },
  {
    id: "dbeaver",
    name: "DBeaver",
    description: "Cliente de base de datos universal y de código abierto para desarrolladores y administradores.",
    descriptionLarge: "DBeaver es una herramienta de base de datos multiplataforma que soporta virtualmente cualquier base de datos que tenga un driver JDBC (MySQL, PostgreSQL, Oracle, SQL Server, etc.). Proporciona un editor de SQL robusto, navegación de datos y herramientas de administración.",
    url: "https://dbeaver.io/",
    category: "database",
    tags: ["database", "sql", "nosql", "utilities", "desktop", "opensource", "free-tier"],
    image: "/img/tools/dbeaver.svg",
    isFree: true,
    hasPremium: true,
    stars: 4.7,
    lastUpdated: "2025-11-03"
  },
  {
    id: "karma",
    name: "Karma",
    description: "Un ejecutor de pruebas de código abierto que proporciona un entorno para probar código JavaScript en múltiples navegadores reales.",
    descriptionLarge: "Karma es una herramienta clave en el ecosistema de pruebas frontend. Su función principal es proporcionar un entorno de prueba donde se pueden ejecutar pruebas unitarias y de integración escritas con frameworks como Jasmine o Mocha, asegurando la calidad del código en diferentes navegadores.",
    url: "https://karma-runner.github.io/",
    category: "testing",
    tags: ["testing", "javascript", "automation", "frontend", "opensource"],
    image: "/img/tools/karma.svg",
    isFree: true,
    stars: 4.3,
    lastUpdated: "2025-10-01"
  },
  {
    id: "jasmine",
    name: "Jasmine",
    description: "Framework de pruebas de JavaScript de código abierto, para la realización de pruebas de comportamiento (BDD).",
    descriptionLarge: "Jasmine es un framework de pruebas BDD (Behavior-Driven Development) para JavaScript que se utiliza para escribir pruebas de unidad y de integración. No requiere un DOM ni ningún otro framework JavaScript, lo que lo hace flexible y ligero, y es popular para probar código Angular y otros frameworks.",
    url: "https://jasmine.github.io/",
    category: "testing",
    tags: ["testing", "javascript", "automation", "frontend", "opensource"],
    image: "/img/tools/jasmine.svg",
    isFree: true,
    stars: 4.5,
    lastUpdated: "2025-09-25"
  },
  {
    id: "xml",
    name: "XML (Extensible Markup Language)",
    description: "Lenguaje de marcado utilizado para codificar documentos en un formato que es legible tanto para humanos como para máquinas.",
    descriptionLarge: "XML es un estándar de codificación de datos. Aunque ha sido reemplazado en gran medida por JSON en el desarrollo web moderno, sigue siendo fundamental en áreas como las APIs SOAP, la configuración de software empresarial y la sindicación de datos (RSS), por lo que es una habilidad clave.",
    url: "https://www.w3.org/XML/",
    category: "languages",
    tags: ["languages", "api", "documentation", "utilities"],
    image: "/img/tools/xml.svg",
    isFree: true,
    stars: 3.5,
    lastUpdated: "2025-09-01"
  },
  {
    id: "saas-concept",
    name: "SaaS (Software as a Service)",
    description: "Modelo de distribución de software donde el proveedor aloja la aplicación y la pone a disposición de los clientes a través de Internet.",
    descriptionLarge: "SaaS es el modelo de negocio dominante para la mayoría de las herramientas modernas (como Salesforce, Jira o Slack). Para los desarrolladores, implica construir soluciones que se entregan a través de un navegador web, con la responsabilidad de la infraestructura delegada al proveedor.",
    url: "https://en.wikipedia.org/wiki/Software_as_a_Service",
    category: "utilities",
    tags: ["saas", "cloud", "enterprise", "business-model"],
    image: "/img/tools/saas-concept.svg",
    isFree: true,
    stars: 5.0,
    lastUpdated: "2025-11-05"
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
    "scientific": "Científico",

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