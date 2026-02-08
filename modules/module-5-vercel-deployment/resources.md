# Module 5: Vercel Resources

## 🔗 Official Vercel Resources

### Documentation
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Guide**: https://vercel.com/docs/concepts/deployments/overview
- **CLI Reference**: https://vercel.com/docs/cli
- **API Reference**: https://vercel.com/docs/rest-api

### Learning
- **Vercel Examples**: https://vercel.com/templates
- **Video Tutorials**: https://vercel.com/guides
- **Blog**: https://vercel.com/blog
- **GitHub**: https://github.com/vercel

## 📚 Deployment Methods Comparison

### Method 1: GitHub Integration (Recommended)
**Pros:**
- Automatic deployments
- Preview deployments for PRs
- Easy rollbacks
- Team collaboration
- Version history

**Cons:**
- Requires GitHub account
- Need Git knowledge
- Setup time

**Best for:** Most projects, teams, production apps

### Method 2: Vercel CLI
**Pros:**
- Full control
- Scriptable
- Local testing
- Advanced configuration
- No GitHub needed

**Cons:**
- Command line knowledge required
- Manual deploys
- Less automated

**Best for:** Developers, automated workflows, testing

### Method 3: Drag & Drop
**Pros:**
- Easiest method
- No setup required
- Instant deployment
- Great for testing

**Cons:**
- Manual process
- No version control
- No automation
- Hard to update

**Best for:** Quick demos, prototypes, simple sites

## 🛠️ Supported Frameworks

### Fully Optimized
- **Next.js** ⭐⭐⭐⭐⭐ (Best support)
- **React** ⭐⭐⭐⭐⭐
- **Vue.js** ⭐⭐⭐⭐⭐
- **Svelte** ⭐⭐⭐⭐⭐
- **Angular** ⭐⭐⭐⭐

### Static Site Generators
- **Gatsby** ⭐⭐⭐⭐⭐
- **Hugo** ⭐⭐⭐⭐
- **Jekyll** ⭐⭐⭐⭐
- **11ty** ⭐⭐⭐⭐⭐
- **Astro** ⭐⭐⭐⭐⭐

### Other Frameworks
- **Nuxt.js** (Vue)
- **SvelteKit**
- **Remix**
- **Solid**
- **Qwik**

## 💰 Vercel Pricing

### Hobby Plan (Free)
- Unlimited deployments
- 100 GB bandwidth
- Automatic HTTPS
- Custom domains
- Preview deployments
- Analytics (limited)

**Perfect for:**
- Personal projects
- Portfolios
- Learning
- Side projects

### Pro Plan ($20/month)
- Everything in Hobby
- Unlimited bandwidth
- Enhanced analytics
- Password protection
- 100 GB-hours compute
- Commercial use

**Perfect for:**
- Freelancers
- Small businesses
- Professional projects

### Team Plans (Starting $20/member)
- Team collaboration
- Shared resources
- Advanced permissions
- Priority support

**Perfect for:**
- Teams
- Agencies
- Companies

## 🎯 Best Practices

### Repository Structure
```
your-project/
├── public/          # Static assets
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/             # Source files
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── vercel.json      # Vercel config (optional)
├── .gitignore
├── README.md
└── package.json     # For Node projects
```

### Environment Variables
**Security:**
- Never commit secrets to Git
- Use Vercel dashboard to add
- Different values per environment
- Rotate keys regularly

**Naming Convention:**
```
NEXT_PUBLIC_*  - Available in browser (Next.js)
API_*          - Server-side only
DATABASE_URL   - Connection strings
SECRET_KEY     - Sensitive data
```

### Deployment Checklist
- [ ] Test locally first
- [ ] Optimize images
- [ ] Minify code
- [ ] Check dependencies
- [ ] Set environment variables
- [ ] Test on preview URL
- [ ] Check mobile responsive
- [ ] Verify analytics working
- [ ] Test all functionality
- [ ] Deploy to production

## 🔧 Configuration Files

### vercel.json

**Basic Configuration:**
```json
{
  "version": 2,
  "name": "my-project",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ]
}
```

**With Redirects:**
```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

**With Headers:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**With Rewrites:**
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.example.com/:path*"
    }
  ]
}
```

### .vercelignore

Exclude files from deployment:
```
# .vercelignore
.env.local
.git
node_modules
*.log
.DS_Store
README.md
tests/
```

## 🐛 Troubleshooting Guide

### Build Failures

**Issue: "Command failed with exit code 1"**
```
Solutions:
1. Check build logs in Vercel dashboard
2. Verify package.json scripts
3. Check Node version compatibility
4. Run build locally first
5. Check for missing dependencies
```

**Issue: "Module not found"**
```
Solutions:
1. npm install or yarn install locally
2. Check package.json dependencies
3. Verify import paths
4. Check case sensitivity (Linux is case-sensitive)
```

### Deployment Issues

**Issue: "404 Not Found"**
```
Solutions:
1. Check file paths (case-sensitive)
2. Verify index.html exists
3. Check public folder configuration
4. Review vercel.json routes
```

**Issue: "Environment variable not working"**
```
Solutions:
1. Verify variable name
2. Check environment selection (Production/Preview/Development)
3. Redeploy after adding variables
4. For browser: Use NEXT_PUBLIC_ prefix (Next.js)
```

**Issue: "Custom domain not working"**
```
Solutions:
1. Wait for DNS propagation (up to 48 hours)
2. Check DNS records in domain registrar
3. Verify A record: 76.76.21.21
4. Verify CNAME: cname.vercel-dns.com
5. Check domain verification in Vercel
```

### Performance Issues

**Issue: "Slow load times"**
```
Solutions:
1. Compress images
2. Enable caching headers
3. Minimize JavaScript
4. Use lazy loading
5. Check PageSpeed Insights
6. Review Vercel Analytics
```

**Issue: "Large bundle size"**
```
Solutions:
1. Analyze bundle (webpack-bundle-analyzer)
2. Remove unused dependencies
3. Use code splitting
4. Lazy load components
5. Tree-shake unused code
```

## 📊 Analytics & Monitoring

### Vercel Analytics
**Features:**
- Real User Monitoring (RUM)
- Web Vitals tracking
- Performance metrics
- Geographic data
- Device information

**Metrics Tracked:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to First Byte (TTFB)

### Integration with Other Tools

**Google Analytics:**
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Plausible Analytics:**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔐 Security Best Practices

### HTTPS & Certificates
- Automatic SSL/TLS certificates
- Forced HTTPS (automatic)
- Certificate auto-renewal
- Modern TLS protocols

### Security Headers
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Password Protection
```
Available on Pro plan:
1. Go to Project Settings
2. Enable password protection
3. Set password
4. Share with team/clients
```

## 🚀 Advanced Features

### Edge Functions
Serverless functions at the edge (fast globally).

**Example:**
```javascript
// api/hello.js
export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  return new Response(
    JSON.stringify({ message: 'Hello from the Edge!' }),
    {
      headers: { 'content-type': 'application/json' },
    }
  )
}
```

### Preview Deployments
- Automatic for every PR
- Unique URL per deployment
- Perfect for testing
- Shareable with team/clients
- Can leave comments

### Rollbacks
```
If something goes wrong:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"
4. Instant rollback
```

## 📱 Vercel CLI Commands

### Installation
```bash
npm install -g vercel
# or
yarn global add vercel
```

### Common Commands
```bash
# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-url]

# Link to project
vercel link

# Pull environment variables
vercel env pull

# View project info
vercel inspect [deployment-url]
```

### Advanced Commands
```bash
# Deploy with specific name
vercel --name my-project

# Deploy with environment
vercel --prod -e API_KEY=value

# Deploy specific folder
vercel ./dist

# Deploy with build command
vercel --build-env NODE_ENV=production
```

## 🌐 Domain Management

### Adding Domains
```
1. Buy domain from registrar
2. Add in Vercel dashboard
3. Configure DNS records
4. Wait for verification
5. SSL certificate auto-issued
```

### DNS Records

**For Apex Domain (example.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For Subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Common Domain Issues

**"Domain not verified"**
- Check DNS configuration
- Wait for DNS propagation
- Ensure no conflicting records

**"SSL certificate pending"**
- Wait a few minutes
- Check domain verification
- Ensure HTTPS-only in settings

## 📈 Performance Optimization

### Image Optimization
```javascript
// Next.js Image component
import Image from 'next/image'

<Image
  src="/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  quality={75}
  loading="lazy"
/>
```

### Caching Strategy
```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

### Build Optimization
```json
{
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  }
}
```

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

## 📚 Learning Resources

### Official Tutorials
- Next.js Tutorial
- Deployment Best Practices
- Serverless Functions Guide
- Edge Functions Guide

### Community Resources
- **Vercel Community**: https://github.com/vercel/community
- **Discord**: Join Vercel Discord
- **Twitter**: @vercel
- **YouTube**: Vercel Channel

### Example Projects
- Static site examples
- Next.js templates
- Serverless function examples
- Full-stack applications

## 🎓 Certification & Portfolio

### Showcase Your Work
- Add deployments to portfolio
- Share on LinkedIn
- Tweet your projects
- Add to GitHub README

### Professional Tips
```markdown
# My Projects

## Project Name
- **Description**: What it does
- **Tech Stack**: Technologies used
- **Live Demo**: [URL]
- **Repository**: [GitHub URL]
- **Features**: Key features
```

## 🆘 Getting Help

### Support Channels
1. **Documentation**: https://vercel.com/docs
2. **Community Forum**: https://github.com/vercel/community
3. **Discord**: Vercel Discord server
4. **Twitter**: @vercel or @vercel_support
5. **Email**: support@vercel.com (Pro+ plans)

### Before Asking for Help
- [ ] Check documentation
- [ ] Review deployment logs
- [ ] Search existing issues
- [ ] Try locally first
- [ ] Gather error messages

## 🎯 Quick Reference

### Deployment Workflow
```
Code → Git Push → Vercel Build → Preview → Merge → Production
```

### Common Issues Quick Fix
```
Build fails? → Check logs
404 error? → Check file paths
Slow site? → Optimize images
Domain issues? → Check DNS
Env vars not working? → Redeploy
```

### Essential Links
- Dashboard: https://vercel.com/dashboard
- CLI Docs: https://vercel.com/docs/cli
- Status: https://vercel-status.com
- Pricing: https://vercel.com/pricing

---

**Remember**: Vercel makes deployment simple, but understanding the concepts helps you troubleshoot and optimize effectively!
