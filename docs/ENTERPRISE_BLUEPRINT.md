# Eman Bakeries — Enterprise Rebuild Blueprint

This document is a comprehensive, platform-agnostic blueprint for rebuilding emanbakeries.com as an enterprise-level website. It focuses on content, information architecture, page-by-page copy, navigation, CTAs, metadata, structured data, and an AI-agent-ready prompt to hand to another builder (or AI) to implement the site on a different platform or design system.

File location in repository:
- /docs/ENTERPRISE_BLUEPRINT.md

---

GOALS
- Present Eman Bakeries as an industrial-scale, premium bakery supplier for enterprise & retail buyers.
- Provide clear product information, certifications, verification, and wholesale/distribution contact flow.
- Create an SEO-friendly content structure, accessible copy, and machine-readable data for verification and B2B workflows.
- Make content portable to any platform (Next.js, Astro, Webflow, WordPress, Craft, etc.).

TARGET AUDIENCE
- Distributors and retail buyers
- Food service procurement managers and enterprise chefs
- Regulatory/verification teams (vendors needing CR/VAT/licence details)
- End consumers (brand awareness)

SCOPE
- Content-first: full page-by-page textual content, nav, footer, CTAs, and metadata.
- No UI/CSS design decisions included (platform-agnostic). Focus on structure & copy.

---

NAVIGATION (Top-level)
- Home
- About
  - Our Story
  - Certifications & Quality
- Products
  - Categories (Bread, Pastries, Industrial Mixes)
  - Product Detail (template)
- Distribution
  - Become a Distributor
  - Distributor Resources
- Verification
  - Official Documents
  - Corporate Info (CR & VAT display)
- News & Insights (Blog)
- Careers
- Contact

Footer links (always present)
- Headquarters (address & map link)
- Phone, Email
- CR & VAT (display numbers)
- Quick links: Privacy, Terms, Verification, Sitemap
- Social icons: LinkedIn, Instagram, Facebook

---

PAGE-BY-PAGE CONTENT

1) HOME (/) — Purpose: high-level brand + primary CTAs
- Meta Title: Eman Bakeries — Premium Industrial Bakery Products & Wholesale Supply
- Meta Description: Eman Bakeries provides industrial-scale baked goods and ingredients across Saudi Arabia. Contact us for wholesale, distribution and enterprise supply.
- Hero Headline: The Taste of Tradition — Built for Industry
- Hero Subhead: Wholesale bakery products, industrial mixes, and trusted supply for retail and foodservice. CR: 4030331653 • VAT: 312028501300003
- Primary CTA: Contact Sales (link to /contact or open inquiry modal)
- Secondary CTA: View Products (link to /products)
- Three feature panels under hero (short):
  - Industrial Capacity: "Large-scale production with consistent quality and HACCP controls."
  - Certified & Halal: "ISO 22000 and Halal certified facilities."
  - Nationwide Distribution: "Reliable logistics across Saudi Arabia and GCC."
- Latest news teasers: 3 posts with thumbnail, title, date, and short excerpt.
- Footer teaser CTA: Become a Distributor — link /distribution

2) ABOUT (/about)
- Meta Title: About Eman Bakeries — Our Story & Mission
- Opening Title: Our Story
- Paragraph content (company narrative):
  "Eman Bakeries was founded to bring high-quality, consistent baked goods to commercial and retail partners. With an emphasis on food safety and scalable production, we combine traditional recipes with industrial-grade processes to serve modern supply chains."
- Mission statement: short paragraph
- Timeline (milestones): Established -> Factory built -> ISO 22000 -> Distribution expansion

3) CERTIFICATIONS & QUALITY (/about/certifications)
- Title: Certifications & Food Safety
- List: ISO 22000, Halal Certification, local municipal permits (list as present)
- Verification microcopy: "Official documents are available on request or via verification portal." (Do not link to sensitive PDFs publicly.)

4) PRODUCTS (/products)
- Meta Title: Products — Eman Bakeries Product Catalog
- Intro text: "Explore our commercial product lines — bread, pastries, mixes and refrigerated goods. Contact our sales team for specifications, pricing and custom orders."
- Category tiles: Bread, Pastries, Industrial Mixes, Private Label Solutions
- Each category leads to a product list page (with filters: package size, frozen/fresh, shelf-life, allergens).

5) PRODUCT DETAIL (/products/:slug)
- Each product page content template:
  - Product name
  - Short tagline
  - SKU / internal code
  - Pack sizes
  - Key attributes: Ingredients, Allergens, Shelf life, Storage
  - Certifications icons (if applicable)
  - Specification table (weight, dims, palletization)
  - CTA: Request Pricing (opens form / contact sales)
  - Download: Technical Data Sheet (TDS) — link to secure PDF (do not expose sensitive docs publicly)

6) DISTRIBUTION (/distribution)
- Title: Distribution & Wholesale
- Copy: "Partner with Eman Bakeries for reliable supply across KSA and GCC." + details on minimum order, lead times, logistics
- CTA: Become a Distributor (form) — fields: Company name, CR number, contact person, phone, email, required markets, sample request

7) VERIFICATION (/verification)
- Title: Official Verification
- Public copy: show the CR and VAT numbers and clear instruction: "For official verification, contact info@emanbakeries.com for secure delivery of document scans."
- DO NOT list sensitive PDF files publicly. Instead provide a verification request form where identity/verifier email is required.

8) NEWS & INSIGHTS (/news)
- Blog listing with categories: Industry, Recipes, Company News
- Each post: title, date, author, tags, hero image, body content, related posts

9) CAREERS (/careers)
- Company intro
- Open roles list with job titles, brief description and apply CTA (form or link to email)

10) CONTACT (/contact)
- Title: Contact Sales / General Inquiries
- Contact block: Address (2790 Hira...), Phone: +966 506079191, Email: info@emanbakeries.com
- Contact form fields: Name, Company, Email, Phone, Inquiry type (General / Distribution / Quality / Press), Message, Attachments (optional)
- Hours & response SLA: "We typically respond within 2 business days."

11) LEGAL pages
- Privacy Policy, Terms of Service, Cookie Policy (short legal text placeholders or link to full docs).

---

TEXT LIBRARY (copy-ready)
Use these exact strings as needed across pages.
- Brand name: Eman Bakeries
- Short brand claim: The Taste of Tradition
- Full address: 2790 Hira, An Nahdah Dist., Jeddah 23523, Kingdom of Saudi Arabia
- Phone: +966 506079191
- Email: info@emanbakeries.com
- CR: 4030331653
- VAT: 312028501300003
- Standard CTA labels: Contact Sales, Request Pricing, Download TDS, Become a Distributor, Read More, Apply Now

Page microcopy examples
- Request Pricing form success text: "Thank you — our sales team will contact you within 48 hours." 
- Verification form header: "Official Document Request — Verification Team"
- Footer small print: "© {YEAR} Eman Bakeries. All rights reserved."

---

SEO / META / OPEN GRAPH
- Provide for each page: meta title, meta description, canonical URL.
- Open Graph: og:title, og:description, og:image (brand hero), og:type=website, og:url
- Twitter cards: summary_large_image
- JSON-LD (Organization):
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eman Bakeries",
    "url": "https://emanbakeries.com",
    "logo": "https://emanbakeries.com/assets/logo.png",
    "legalName": "Eman Bakeries",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2790 Hira, An Nahdah Dist.",
      "addressLocality": "Jeddah",
      "postalCode": "23523",
      "addressCountry": "SA"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+966506079191",
      "contactType": "sales",
      "areaServed": "SA"
    }]
  }

---

SITEMAP (logical)
- / (Home)
- /about
- /about/certifications
- /products
- /products/:category
- /products/:slug
- /distribution
- /verification
- /news
- /careers
- /contact

---

FORMS
- Contact/Request Pricing: name, company, email, phone, message, product of interest (optional), file upload (max 10MB), GDPR checkbox (if needed)
- Become a Distributor: business name, CR number, contact, territory, logistical capabilities
- Verification Request: requester company, requester email, reason, verifier contact, secure document transfer checkbox

---

IMAGE GUIDELINES
- Provide hero images at 1200x630 (for OG), product images at 1600x1200, thumbnails 400x400.
- Include descriptive alt text for all images (example alt text included in product template). 

---

ACCESSIBILITY & INTERNATIONALIZATION
- All pages must use semantic HTML, labels on forms, and aria attributes for dynamic components.
- Content should be ready for bilingual support (English primary). Use locale-based routing for Arabic if you later enable it.

---

REPO LAYOUT SUGGESTION (content-first)
- /content
  - /products (md/json files for each product)
  - /news
- /public (images, downloads)
- /docs (this blueprint and specs)
- /src (implementation)
- /workflows (CI/CD YAML)

---

DEPLOYMENT & CI (recommended)
- Use GitHub Actions to build and publish static site (we added a workflow to publish to gh-pages). For enterprise: use Vercel or Netlify for preview + production deployments.
- Add preview builds for pull requests; require code review before merging to main.

---

ANALYTICS & MONITORING
- Add server-side or client analytics (e.g., Matomo, Google Analytics 4) with consent banner.
- Add monitoring for uptime and performance (Pingdom, UptimeRobot).

---

AI AGENT PROMPT (copy-and-paste)
Use the prompt below when instructing another AI or automated builder to implement the site on any modern platform. It is self-contained: it includes repo location, content, and requirements.

"Build an enterprise-level marketing and B2B website for 'Eman Bakeries' (emanbakeries.com). Use the repository at https://github.com/shafeeq-apple/eman-bakeries as the content source. Ignore existing UI styling; produce a fresh modern implementation with the following requirements:

- Pages to implement (content and routes): Home (/), About (/about), Certifications (/about/certifications), Products (/products, /products/:category, /products/:slug), Distribution (/distribution), Verification (/verification), News (/news, /news/:slug), Careers (/careers), Contact (/contact), Legal pages.
- Insert the exact copy provided in the repository docs/ENTERPRISE_BLUEPRINT.md (include full page copy, meta tags, JSON-LD). Use English-only content as primary. Do not publicly expose sensitive PDFs — use secure download gating.
- Product data should be read from /content/products as structured files (JSON or MD frontmatter). Build a product detail template using fields: name, sku, description, packSizes, attributes, tdsLink.
- Implement forms with serverless endpoints (or actions) to submit contact/distributor/verification requests; store submissions in a durable place (email/webhook + DB) and return a standard success message.
- Accessibility: semantic HTML, ARIA for dynamic components, keyboard focus states.
- Internationalization: set up locale-ready structure, English primary; Arabic-ready but do not enable Arabic content unless supplied.
- SEO: add meta tags and OG; add JSON-LD Organization and Product schema for product pages.
- CI/CD: configure GitHub Actions to build preview for PRs and publish production to gh-pages OR Vercel/Netlify. Use environment secrets for email/webhook.
- Provide a Lighthouse score target of 90+ for performance, accessibility, best practices, SEO.

Deliverables:
- A working site deployed via the repo’s CI (provide the GH Action run and deployed URL).
- Implementation guide: how to run locally, build, test, and deploy.
- A data folder (/content/products) with two example product files and sample images.
- Unit/integration tests for critical components (forms, product page rendering).

Priority: follow the content structure in docs/ENTERPRISE_BLUEPRINT.md, keep copy exact, ensure forms are secure, and do not expose sensitive documents publicly."

---

NEXT STEPS I CAN DO FOR YOU (pick any)
1) Commit this blueprint into the repo (done — at /docs/ENTERPRISE_BLUEPRINT.md).  
2) Create example content files (2 product JSONs + 1 blog post) and a minimal content loader — I can add these to /content.  
3) Create a starter Next.js / Astro / SSG scaffold with pages and placeholder components and push to a new branch (e.g., `enterprise-rebuild/starter`).
4) Prepare a single-file copyable prompt (done above) and place in repo root as /AI_PROMPT_FOR_REBUILD.txt.

Tell me which of the Next Steps to run. If you want immediate access to the blueprint content here, say "Show blueprint" and I will paste the file content in chat for quick copy. 

---

End of blueprint.
