# CreditCart - Financial Services Marketing Platform

> **The Smart Way to Shop & Apply for Financial Products**

CreditCart is a transactional financial marketplace where users shop for credit cards, loans, mortgages, insurance, and wealth management products like items in an online cart. Built with Medusa.js V2 + Next.js 15 + Algolia.

![Bank-Grade Design](https://img.shields.io/badge/Design-Bank%20Grade-1E227B)
![TCPA 2025](https://img.shields.io/badge/Compliance-TCPA%202025-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## 🎯 Core Value Proposition

**Amazon-style financial shopping with instant eligibility matching**

- Browse multiple financial products from major banks
- Select your profile (credit score × income range) 
- Get instant "soft match" eligibility feedback
- Add multiple products to application cart
- Complete single pre-qualification checkout
- Track applications from dashboard

## 💰 Revenue Model

- **CPC**: $5-$18 per click (avg $11.83)
- **CPL**: $50-$175 per qualified lead (avg $108.27)
- **Target**: 1,000 leads/month = $108,270/month

## 🏗️ Technology Stack

### Backend (Port 5000)
- **Medusa.js V2** - Headless commerce framework
- **PostgreSQL** - Primary database
- **Algolia** - Neural search
- **5 Custom Modules**:
  - Application (pre-qualification tracking)
  - Consent (TCPA 2025 compliant)
  - Lender (master directory)
  - Revenue (CPC/CPL tracking)
  - Review (lender service ratings)

### Frontend (Port 3000)
- **Next.js 15** - App Router + React 19
- **Medusa JS SDK** - Backend integration
- **Algolia InstantSearch** - Search UI
- **TailwindCSS** - Bank-grade design system

## 🎨 Design System

**Bank-Grade Trust Aesthetic**

- **Primary Navy**: #1E227B (institutional credibility)
- **Secondary Charcoal**: #312C2C (refined sophistication)
- **Accent Trust Blue**: Professional, not fintech neon
- **Typography**: Inter (Google Fonts)

Inspired by Chase, Capital One, and Amazon.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/creditcart.git
   cd creditcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd storefront && npm install && cd ..
   ```

3. **Set up environment variables**
   
   Create `.env` in root:
   ```env
   DATABASE_URL=postgresql://user:pass@localhost:5432/creditcart
   ALGOLIA_APP_ID=your_app_id
   ALGOLIA_ADMIN_API_KEY=your_admin_key
   STORE_CORS=http://localhost:3000
   SESSION_SECRET=your_secret_here
   ```

4. **Run database migrations**
   ```bash
   npx medusa db:migrate
   ```

5. **Seed sample data** (40 products)
   ```bash
   npm run seed
   ```

6. **Start backend**
   ```bash
   npm run dev
   ```
   Backend runs on http://localhost:5000

7. **Start frontend** (new terminal)
   ```bash
   cd storefront
   npm run dev
   ```
   Frontend runs on http://localhost:3000

## ✨ Key Features

### 1. Profile-Based Instant Eligibility
**Location**: `storefront/app/product/[handle]/page.tsx`

Users select their profile (credit score × income range) and see instant eligibility feedback:
- ✅ **Soft Match Confirmed** - Good fit based on lender criteria
- ❌ **Not Eligible** - See alternative products

### 2. Application Staging Queue
**Location**: `storefront/app/cart/page.tsx`

Cart renamed to "My Applications Queue" with:
- Multi-product staging
- Status indicators per product
- "Apply Now, Finish Later" workflow
- Batch checkout capability

### 3. How It Works
**Location**: `storefront/components/HowItWorks.tsx`

Transaction-focused 3-step flow:
1. **Profile & Match** - Instant eligibility
2. **Add to Cart/Bundle** - Multi-product selection
3. **Apply & Track** - Single checkout, dashboard tracking

### 4. Financial Kits (Product Bundling)
**Location**: `storefront/components/FinancialKits.tsx`

Pre-curated product bundles:
- **First Homeowner Kit** (mortgage + insurance + credit card)
- **Credit Builder Kit** (secured card + credit monitoring)
- **Business Starter Kit** (business loan + business card)

Increases CPL multipliers through bundle conversions.

### 5. Lender Service Reviews
**Location**: Custom Review Module

User-generated content (UGC) for service quality:
- Ease of application
- Time to decision
- Rate accuracy
- Customer service

Builds trust and improves SEO.

## 📊 Data Model

### Product Variants (Profile-Based Pricing)
Each financial product has variants for different user profiles:

**Dimensions**:
- Credit Score: Excellent (740+), Good (670-739), Fair (580-669), Poor (<580)
- Income Range: <$50k, $50k-$100k, $100k-$150k, $150k+

**16 variants per product** = 640 total variants for 40 products

**Metadata** (JSONB):
```json
{
  "apr": "18.99%",
  "lender_id": "chase",
  "eligibility_match": true,
  "cpl_rate": 125.00,
  "cpc_rate": 12.50
}
```

### Custom Modules

**Application Module**
```typescript
{
  id: string
  profile_data: json
  matched_lenders: string[]
  status: "staged" | "submitted" | "matched"
  created_at: timestamp
}
```

**Consent Module** (TCPA 2025)
```typescript
{
  id: string
  user_email: string
  lender_id: string
  consent_text: string
  consent_timestamp: timestamp
  retention_until: timestamp // 7 years
}
```

**Revenue Module**
```typescript
{
  id: string
  event_type: "CPC" | "CPL"
  lender_id: string
  amount: decimal
  application_id: string
  created_at: timestamp
}
```

## 🔐 Compliance & Security

### Regulatory Compliance
- ✅ **TCPA 2025** - One-to-one lender consent
- ✅ **CFPB** - Transparent lender rankings
- ✅ **GLBA** - Data security safeguards
- ✅ **FCRA** - Secure data handling
- ✅ **CAN-SPAM** - Email compliance
- ✅ **CCPA/CPRA** - California privacy
- ✅ **NYDFS** - New York cybersecurity

### Security Measures
- SSL/TLS encryption in transit
- PostgreSQL encryption at rest
- Bcrypt password hashing
- CORS configuration
- Session management
- API rate limiting

## 📁 Project Structure

```
creditcart/
├── src/                          # Medusa backend
│   ├── modules/
│   │   ├── application/          # Pre-qual tracking
│   │   ├── consent/              # TCPA compliance
│   │   ├── lender/               # Master directory
│   │   ├── revenue/              # CPC/CPL events
│   │   └── review/               # Service reviews
│   └── api/                      # API routes
├── storefront/                   # Next.js frontend
│   ├── app/
│   │   ├── page.tsx             # Homepage
│   │   ├── product/[handle]/    # PDP with eligibility
│   │   └── cart/                # Application queue
│   └── components/
│       ├── ProfileSelector.tsx  # Credit/income picker
│       ├── HowItWorks.tsx       # 3-step flow
│       └── FinancialKits.tsx    # Product bundles
├── medusa-config.ts             # Backend config
└── package.json                 # Dependencies
```

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd storefront && npm test

# E2E tests
npm run test:e2e
```

## 🚢 Deployment

### Option 1: Vercel (Frontend) + Railway (Backend)

**Frontend**:
```bash
cd storefront
vercel deploy
```

**Backend**:
```bash
# Connect Railway to your GitHub repo
# Add environment variables in Railway dashboard
```

### Option 2: Docker Compose

```bash
docker-compose up -d
```

### Option 3: Managed Platforms
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## 📈 Roadmap

### Phase 1: MVP ✅ (Complete)
- [x] Backend with 5 custom modules
- [x] 40 products seeded
- [x] Algolia search integration
- [x] Profile-based eligibility
- [x] Application staging
- [x] Financial kits
- [x] How It Works section

### Phase 2: Auth & Integrations
- [ ] Replit Auth (OpenID Connect)
- [ ] Plaid integration (income verification)
- [ ] OpenAI chatbot
- [ ] SendGrid email notifications
- [ ] TrustedForm consent verification

### Phase 3: Scale & Compliance
- [ ] A/B testing framework
- [ ] Analytics dashboard
- [ ] SOC 2 compliance (Vanta)
- [ ] Multi-lender API integrations
- [ ] Advanced matching algorithm

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 🆘 Support

- **Documentation**: See `QUICKSTART.md` and `PROJECT_SUMMARY.md`
- **Issues**: GitHub Issues
- **Questions**: GitHub Discussions

## 🙏 Acknowledgments

Built with:
- [Medusa.js](https://medusajs.com) - Headless commerce
- [Next.js](https://nextjs.org) - React framework
- [Algolia](https://algolia.com) - Search infrastructure
- [TailwindCSS](https://tailwindcss.com) - Styling

---

**Made for financial services marketers**
