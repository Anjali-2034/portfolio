export const projects = [
  {
    id: 1,
    status: 'shipped',
    title: 'Lead Scoring System',
    link: 'https://github.com/shivam310103/Lead_score',
    tags: ['Python', 'Machine Learning', 'AWS Lambda', 'Logistic Regression'],
    views: {
      manager: {
        sub: 'Scoring system that surfaced high-intent leads  -  droppers, payment failures, trial users  -  and automated conversion decisions.',
        body: 'The counselling team had no way to prioritise leads  -  every contact got equal time. Built a model scoring leads on engagement signals and urgency, putting the right users front-and-centre. Added segment-specific rules for payment failures, repeat visitors, and trial users. Deployed on AWS Lambda for automated, scalable operation.',
        highlight: 'Lead prioritisation · conversion accuracy · segment scoring · AWS Lambda',
      },
      engineer: {
        sub: 'Logistic Regression pipeline: session + page-view features, urgency rules, segment weights, AWS Lambda deployment.',
        body: 'Tracked session counts and page views as engagement signals. Built a feedback validation loop against actual conversion data. Implemented domain-specific urgency rules (droppers > 12th-grade students). Replaced static hardcoded rules with a trained Logistic Regression classifier. Deployed automated scoring on AWS Lambda.',
        highlight: 'Python · scikit-learn · Logistic Regression · AWS Lambda · feedback validation loop',
      },
      designer: {
        sub: 'Four-tier segment design  -  payment failures, droppers, repeat visitors, trial users  -  mapped to conversion likelihood.',
        body: 'Segment design before scoring design. Identified four user types requiring distinct treatment and mapped each to a conversion probability tier. Prioritisation logic is urgency-led, not recency-led  -  a dropped student outranks a fresh 12th-grader by design.',
        highlight: 'Segment design · urgency logic · conversion-led prioritisation',
      },
    },
    details: {
      overview: 'Optimised an intelligent lead scoring system focused on user prioritisation and conversion analysis. Worked on engagement tracking, automated score generation using user activity patterns, conversion reliability analysis, and segment-based prioritisation for high-intent users. Also handled deployment workflows and scoring automation improvements.',
      contributions: [
        'Developed session count + page view tracking to measure user engagement frequency',
        'Built a feedback validation loop to verify scoring reliability using actual conversion analysis',
        'Implemented domain-specific urgency logic  -  prioritised droppers over 12th-grade students based on higher conversion probability',
        'Introduced Logistic Regression based automated scoring instead of static hardcoded rules',
        'Added segment-specific prioritisation for: payment failure users, repeat visitors, form submitters, and trial users',
        'Deployed scalable workflows using AWS Lambda',
      ],
      impact: [
        'Improved lead prioritisation accuracy across the counselling team',
        'Enabled data-driven conversion analysis and automated scoring decisions',
      ],
    },
  },
  {
    id: 2,
    status: 'shipped',
    title: 'Academic Workspace',
    link: 'https://github.com/Anjali-2034/academic_repo',
    tags: ['GitHub', 'AI Workflows', 'Content Ops', 'Productivity'],
    views: {
      manager: {
        sub: 'Centralised AI-powered workspace with reference materials, AI workflows, and organised resources  -  cut manual effort across the academic team.',
        body: 'Content and resources were scattered across tools with no shared structure. Built a centralised GitHub-based workspace with organised reference materials, AI-assisted workflows, and task-support systems. Eliminated repetitive effort and gave the team a single source of truth for daily operations.',
        highlight: 'Single source of truth · ops efficiency · AI-assisted workflows · team productivity',
      },
      engineer: {
        sub: 'GitHub repo with AI-assisted workflows, structured resources, and automated task-support for daily academic operations.',
        body: 'Designed a structured GitHub repository for the academic team: organised reference materials, AI workflow integrations, and task-automation support. Enforced naming conventions and folder schema for consistent contribution across team members.',
        highlight: 'GitHub · structured repos · AI workflow integration · naming conventions',
      },
      designer: {
        sub: 'Information architecture validated by team  -  reference materials, AI tools, and tasks structured to match mental models.',
        body: 'Ran a card-sort with team members before building structure. Final architecture maps to how the team thinks about work, not how files happen to be named. AI tools are discoverable alongside reference materials, not hidden in a separate folder.',
        highlight: 'Information architecture · card sorting · AI tool integration · contributor onboarding',
      },
    },
    details: {
      overview: 'Created a centralised AI-powered workspace for the academic team containing organised reference materials, resources, and task-support systems. The platform streamlined academic workflows, reduced manual effort, and improved operational efficiency for daily academic tasks.',
      contributions: [
        'Built a complete working environment containing reference materials, AI-assisted workflows, and organised academic resources',
        'Streamlined repetitive academic tasks through structured automation and resource organisation',
        'Improved team productivity and operational efficiency across daily academic operations',
      ],
      impact: [
        'Reduced manual effort for the academic team',
        'Increased task efficiency and faster resource accessibility',
      ],
    },
  },
  {
    id: 3,
    status: 'shipped',
    title: 'NEETCoaching Website',
    link: 'https://neetcoaching.com/',
    tags: ['HTML/CSS', 'Cloudflare', 'Product', '20,000+ Pages'],
    views: {
      manager: {
        sub: 'Built and maintained a 20,000+ page NEET platform  -  owned structure, branding, content, and Cloudflare deployment.',
        body: 'Worked directly on neetcoaching.com  -  a large-scale NEET prep platform. Managed website structure, design consistency, branding updates, content maintenance, and deployment workflows on Cloudflare. Owned end-to-end delivery across multiple update cycles.',
        highlight: 'Live product · 20,000+ pages · end-to-end ownership · Cloudflare deployment',
      },
      engineer: {
        sub: 'Large-scale site managed end-to-end: UI, design consistency, branding, content, and Cloudflare infrastructure.',
        body: 'Built and maintained a website at 20,000+ page scale. Updated UI elements, enforced design consistency, managed logos and branding materials, updated content structure, and handled deployment and optimisation on Cloudflare. Maintained platform reliability throughout.',
        highlight: 'HTML · CSS · Cloudflare · large-scale content management · deployment pipelines',
      },
      designer: {
        sub: 'Redesigned UI elements, logos, branding, and content structure across a 20,000+ page educational platform.',
        body: 'Improved UI elements, design consistency, and logos across a platform serving lakhs of NEET aspirants. Each change balanced visual consistency with scale  -  updates needed to propagate without breaking existing page structures.',
        highlight: 'UI design · branding · design consistency · content structure · scalable design systems',
      },
    },
    details: {
      overview: 'Worked on building and maintaining a large-scale educational website containing 20,000+ pages. Managed website structure, design consistency, branding materials, content updates, and deployment processes while improving overall platform organisation and user experience.',
      contributions: [
        'Built and managed a website containing 20,000+ pages',
        'Improved UI elements, design consistency, logos and branding materials, and content structure',
        'Updated and maintained large-scale academic content across the platform',
        'Deployed and optimised infrastructure on Cloudflare',
      ],
      impact: [
        'Improved website organisation and scalability',
        'Enhanced platform reliability and user experience',
      ],
    },
  },
  {
    id: 4,
    status: 'shipped',
    title: 'Landing Pages & Campaign Infrastructure',
    link: 'https://github.com/GoodEd/neet-scholarship',
    tags: ['HTML/CSS', 'AWS S3', 'Lead Generation', 'Campaign Management'],
    views: {
      manager: {
        sub: '20+ campaign landing pages  -  responsive, tracked via spreadsheets, deployed on AWS S3 with full lead capture workflow.',
        body: 'Owned the full lifecycle: brief → build → ship → measure. Each page scoped to a campaign goal. Maintained a structured tracking sheet across all pages. Deployments managed on AWS S3. Identified 3 layout patterns that consistently outperformed, standardised into a component library.',
        highlight: 'Lead capture · 20+ pages shipped · AWS S3 · campaign tracking · component library',
      },
      engineer: {
        sub: 'Responsive HTML/CSS pages with integrated lead forms, structured tracking sheets, and AWS S3 deployment pipeline.',
        body: 'Built pages from scratch  -  responsive HTML/CSS with lead forms integrated. Maintained structured spreadsheets for lead organisation and tracking. Designed and updated campaign creatives and layouts. Managed all deployments via AWS S3. After page 5, standardised a component library cutting build time significantly.',
        highlight: 'HTML · CSS · lead forms · AWS S3 · responsive design · component library',
      },
      designer: {
        sub: 'Campaign creatives and layouts for high-intent 16-18 year olds  -  large CTAs, minimal friction, mobile-first.',
        body: 'Visual hierarchy designed around the constraint of slow connections and quick decisions. High contrast, large CTAs, minimal imagery. Designed and updated campaign creatives each cycle. Ran heuristic audits every 5 pages to prevent drift from the design system.',
        highlight: 'Visual hierarchy · campaign creatives · constraint-led design · accessibility · mobile-first',
      },
    },
    details: {
      overview: 'Built and managed 20+ landing pages for campaigns and lead generation initiatives. Worked on form integration, spreadsheet organisation, design updates, deployment management, and maintaining smooth campaign workflows for marketing operations.',
      contributions: [
        'Developed responsive landing pages and lead forms for 20+ campaigns',
        'Maintained structured spreadsheets for lead organisation and tracking across all pages',
        'Designed and updated campaign creatives and layouts each cycle',
        'Managed all deployments using AWS S3',
      ],
      impact: [
        'Supported marketing campaigns with scalable lead capture systems',
        'Improved organisation and deployment efficiency across the growth team',
      ],
    },
  },
  {
    id: 5,
    status: 'shipped',
    title: 'Lead Exam Year Dashboard',
    link: 'https://github.com/Anjali-2034/neetprep-lead_exam_year-dashboard',
    tags: ['Python', 'Dashboard', 'Cloudflare', 'Data Visualisation'],
    views: {
      manager: {
        sub: 'Centralised dashboard tracking leads across exam years 2026, 2027, and 2028  -  deployed on Cloudflare for team access.',
        body: 'The team had no visibility into which exam-year cohort was growing or shrinking. Built a structured dashboard segmenting leads by target year (2026, 2027, 2028) with filtering and trend tracking. Deployed on Cloudflare for real-time team-wide access. Simplified lead analysis from a manual, multi-step process to a single view.',
        highlight: 'Real-time cohort view · exam-year segmentation · Cloudflare deployment · team accessibility',
      },
      engineer: {
        sub: 'Structured data visualisation by exam year with filtering and Cloudflare deployment for operational use.',
        body: 'Organised and visualised lead data across three exam year cohorts (2026, 2027, 2028). Built structured dashboards with filtering for easy tracking. Deployed and hosted on Cloudflare. System designed for operational daily use  -  fast load, minimal setup required by end users.',
        highlight: 'Python · data visualisation · Cloudflare · structured dashboards · filtering',
      },
      designer: {
        sub: 'Exam year as the primary lens  -  structured cohort view with drill-down filtering and trend indicators.',
        body: 'Designed for the weekly stand-up. Exam year cohorts above the fold with trend indicators. Drill-down is one click. Minimal colour system  -  growth vs. decline  -  to reduce scan time and speed up decision-making.',
        highlight: '5-second read · cohort-first design · 2-colour system · stand-up ready',
      },
    },
    details: {
      overview: 'Developed a centralised dashboard to organise and visualise lead data across multiple exam years including 2026, 2027, and 2028. The system improved lead tracking, segmentation, and accessibility for easier analysis and operational usage.',
      contributions: [
        'Organised and visualised lead data for exam years 2026, 2027, and 2028',
        'Built structured dashboards for easy tracking and filtering across cohorts',
        'Deployed the platform using Cloudflare for team-wide access',
      ],
      impact: [
        'Simplified lead analysis and segmentation workflows for the growth team',
        'Improved accessibility of lead data across teams',
      ],
    },
  },
  {
    id: 6,
    status: 'shipped',
    title: 'Automated Retargeting Sheet',
    link: 'https://github.com/Anjali-2034/Automating_SMS_Retargeting_Sheet',
    tags: ['Python', 'CleverTap', 'Playwright', 'WhatsApp · SMS · RCS'],
    views: {
      manager: {
        sub: 'Automated CleverTap → spreadsheet pipeline for WhatsApp, SMS, and RCS  -  manual retargeting work reduced to near zero.',
        body: 'The growth team manually assembled retargeting lists across three channels every week  -  error-prone and slow. Automated the entire flow: data pulled from CleverTap via Playwright, segmented, deduplicated, formatted per channel, and written to Sheets. Freed growth bandwidth for higher-leverage work.',
        highlight: 'Manual effort → 0 · 3 channels automated · reporting accuracy · operational efficiency',
      },
      engineer: {
        sub: 'Playwright-based automation pulling CleverTap campaign data into structured spreadsheets for 3 channels.',
        body: 'Automated data transfer from CleverTap to organised spreadsheets using Playwright. Built channel-specific visualisation workflows for WhatsApp, SMS, and RCS campaigns. Eliminated manual data handling steps, reducing errors and execution time across the retargeting cycle.',
        highlight: 'Python · Playwright · CleverTap · Google Sheets API · multi-channel automation',
      },
      designer: {
        sub: 'Output matches vendor upload formats exactly  -  zero reformatting required, channel-ready on export.',
        body: 'Key design decision: output directly into formats vendor portals already consume  -  no reformatting step. Each channel (WhatsApp, SMS, RCS) gets its own structured sheet in the format expected by the respective platform. Zero training required for the growth team to operate.',
        highlight: 'Zero-training handoff · vendor-ready format · channel-specific structure · no reformatting',
      },
    },
    details: {
      overview: 'Automated retargeting workflows by integrating campaign data directly from CleverTap into organised spreadsheets for easier visualisation and execution. The system reduced manual work and improved efficiency for WhatsApp, SMS, and RCS campaign management.',
      contributions: [
        'Automated data transfer from CleverTap to spreadsheets using Playwright',
        'Built organised visualisation workflows for WhatsApp campaigns, SMS campaigns, and RCS campaigns',
        'Reduced manual campaign management efforts across all three channels',
      ],
      impact: [
        'Improved operational efficiency and reporting accuracy',
        'Enabled faster retargeting execution with near-zero manual effort',
      ],
    },
  },
  {
    id: 7,
    status: 'shipped',
    title: 'Notifications & Email Campaigns',
    link: '#',
    tags: ['Email Marketing', 'Push Notifications', 'CTR Optimisation', 'CRM'],
    views: {
      manager: {
        sub: 'Creative email and push campaigns across segments  -  focused on CTR uplift, impressions, and re-engagement.',
        body: 'Worked on creative email campaigns and notifications focused on improving user engagement, impressions, and click performance. Contributed to communication strategies and campaign execution across multiple user segments  -  sign-up to first study session, and trial to paid conversion.',
        highlight: 'Re-engagement · CTR uplift · multi-segment · campaign impressions',
      },
      engineer: {
        sub: 'CRM-driven communication pipeline  -  segmentation, creative deployment, and performance tracking across channels.',
        body: 'Designed and sent email campaigns, push notifications, and user engagement communications via CRM tooling. Focused on improving CTRs and impressions through optimised messaging. Tracked performance per campaign and iterated on copy, timing, and creative.',
        highlight: 'CRM · email · push notifications · performance tracking · A/B copy testing',
      },
      designer: {
        sub: 'Copy and creative tested per segment  -  subject lines, timing, and CTAs tuned for NEET exam-cycle behaviour.',
        body: 'Running structured one-variable tests per campaign: subject line, send time, or CTA  -  never all at once. Building a swipe file of high-performing patterns specific to NEET aspirant psychology and exam-cycle timing. Copy calibrated to user stage in the funnel.',
        highlight: 'A/B copy testing · send-time optimisation · exam-cycle timing · swipe file',
      },
    },
    details: {
      overview: 'Worked on creative email campaigns and notifications focused on improving user engagement, impressions, and click performance. Contributed to communication strategies and campaign execution across multiple user segments.',
      contributions: [
        'Designed and sent creative email campaigns targeting multiple user segments',
        'Created and deployed push notifications for user engagement and re-engagement',
        'Produced user engagement communications across the funnel',
        'Focused on improving CTRs and impressions through optimised messaging and timing',
      ],
      impact: [
        'Achieved uplift in campaign impressions and click performance',
      ],
      images: [
        'Screenshot from 2026-05-15 17-08-55.png',
        'Screenshot from 2026-05-15 17-09-51.png',
      ],
    },
  },
  {
    id: 8,
    status: 'shipped',
    title: 'Brand & Advertisement',
    link: '#',
    tags: ['Branding', 'Advertising', 'NEETprep', 'Campaigns'],
    views: {
      manager: {
        sub: 'Featured in 2 NEETprep advertisement campaigns  -  contributed to brand visibility and promotional reach.',
        body: 'Featured in 2 advertisement campaigns for NEETprep as part of broader branding and promotional initiatives. Contributed to increasing brand visibility and awareness among the target audience of NEET aspirants.',
        highlight: '2 ad campaigns · brand visibility · NEETprep · promotional reach',
      },
      engineer: {
        sub: 'Coordinated across 2 advertisement campaigns for the NEETprep platform.',
        body: 'Participated in the production and delivery of 2 advertisement campaigns for NEETprep. Contributed to branding and promotional visibility initiatives as part of the platform\'s marketing strategy.',
        highlight: 'Campaign coordination · NEETprep · promotional content · brand initiatives',
      },
      designer: {
        sub: 'On-camera brand representation across 2 NEETprep promotional campaigns.',
        body: 'Featured in 2 promotional ad campaigns for the NEETprep platform. Contributed to brand representation and visual identity in advertisements aimed at the NEET aspirant audience.',
        highlight: 'On-camera · brand representation · promotional campaigns · visual identity',
      },
    },
    details: {
      overview: 'Featured in 2 advertisement campaigns for NEETprep and contributed to brand visibility and promotional initiatives aimed at NEET aspirants.',
      contributions: [
        'Featured in 2 advertisement campaigns for NEETprep',
        'Contributed to branding and promotional visibility initiatives',
      ],
      impact: [
        'Enhanced brand visibility for the NEETprep platform',
        'Contributed to promotional reach and user awareness among NEET aspirants',
      ],
    },
  },
  {
    id: 9,
    status: 'shipped',
    title: 'Technical Operations',
    link: '#',
    tags: ['AWS Lambda', 'CleverTap', 'Automation', 'NEETprep Rails'],
    views: {
      manager: {
        sub: 'Automated critical workflows  -  DPP generation, CleverTap profile management, and NEETprep Rails deployment.',
        body: 'Contributed to multiple technical and automation-focused initiatives. Automated daily DPP generation, managed deployment workflows on NEETprep Rails, and resolved CleverTap identity issues through a Lambda-based profile deletion system. Also improved DPP presentation for better usability.',
        highlight: 'DPP automation · Lambda · CleverTap identity resolution · NEETprep Rails · deployment',
      },
      engineer: {
        sub: 'Lambda-based DPP automation, Playwright profile deletion, NEETprep Rails deployments, and DPP design improvements.',
        body: 'Automated daily DPP generation on the NEETprep Platform. Handled deployment workflows on NEETprep Rails. Built a Lambda-based automated profile deletion system to resolve CleverTap identity issues. Improved DPP presentation structure and design for better visual consistency and usability.',
        highlight: 'AWS Lambda · Playwright · CleverTap · NEETprep Rails · DPP automation · deployment workflows',
      },
      designer: {
        sub: 'Improved DPP presentation structure and visual consistency for better usability across the platform.',
        body: 'Improved DPP presentation and design structure for better usability and visual consistency on the NEETprep platform. Ensured design quality across automated DPP outputs while maintaining consistency with platform standards.',
        highlight: 'DPP design · visual consistency · usability · design structure · platform standards',
      },
    },
    details: {
      overview: 'Contributed to multiple technical and automation-focused initiatives including automated daily DPP generation on the NEETprep Platform, deployment workflows on NEETprep Rails, resolving CleverTap identity issues through automated Lambda-based profile deletion systems, and improving DPP presentation and design structure for better usability and visual consistency.',
      contributions: [
        'Automated daily DPP generation on the NEETprep Platform',
        'Managed deployment workflows on NEETprep Rails',
        'Resolved CleverTap identity issues through automated Lambda-based profile deletion systems',
        'Improved DPP presentation and design structure for better usability and visual consistency',
      ],
      impact: [
        'Improved technical automation efficiency across daily operations',
        'Enhanced platform reliability and operational consistency',
      ],
    },
  },
];

export const about = {
  name:    'Anjali Verma',
  role:    "CEO's Office Intern",
  company: 'GoodEducator',
};

export const contact = {
  email:  'anjali@goodeducator.com',
  github: 'https://github.com/Anjali-2034',
  phone:  '+91 82736 13578',
};
