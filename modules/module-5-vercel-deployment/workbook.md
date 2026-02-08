# Module 5: Practical Workbook - Vercel Deployment

## 🚀 Welcome to Deployment!

This workbook guides you through deploying real applications to Vercel. You'll learn multiple deployment methods and best practices.

---

## Project 1: Deploy Your First Static Site

### Simple HTML Site Deployment

**Step 1: Create a Simple HTML Site**

Create a folder with these files:

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Vercel Deployment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Hello from Vercel!</h1>
        <p>This is my first deployment on Vercel.</p>
        <p>Deployed on: <span id="date"></span></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**style.css:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 1rem;
}

p {
    color: #666;
    line-height: 1.6;
}
```

**script.js:**
```javascript
document.getElementById('date').textContent = new Date().toLocaleDateString();
```

**Step 2: Deploy via Drag & Drop**

```
1. Go to vercel.com
2. Sign up/login (use GitHub for easier integration)
3. Click "Add New" → "Project"
4. Choose "Browse" or drag your folder
5. Wait for deployment
6. Click on deployment URL to view
```

### Your First Deployment

**Project Name:**
```
[Your project name in Vercel]
```

**Deployment URL:**
```
[Your .vercel.app URL]
```

**Deployment Time:**
```
[How long did it take?]
```

**First Impressions:**
```
[How easy was it?]
```

---

## Project 2: Deploy from GitHub

### Set Up GitHub Integration

**Step 1: Create GitHub Repository**

```
1. Go to github.com
2. Create new repository
3. Name it (e.g., "my-vercel-site")
4. Initialize with README
```

**Step 2: Add Your Site Files**

```
1. Clone repository locally:
   git clone [your-repo-url]

2. Add your HTML/CSS/JS files
3. Commit and push:
   git add .
   git commit -m "Initial commit"
   git push origin main
```

**Step 3: Connect Vercel to GitHub**

```
1. In Vercel dashboard, click "Add New" → "Project"
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Import"
5. Configure project settings (usually defaults are fine)
6. Click "Deploy"
```

**Step 4: Test Auto-Deployment**

```
1. Make a change to your site locally
2. Commit and push to GitHub
3. Watch Vercel auto-deploy
4. Check deployment in Vercel dashboard
```

### Your GitHub Deployment

**Repository URL:**
```
[GitHub repo URL]
```

**Vercel Project URL:**
```
[Vercel project dashboard URL]
```

**Production URL:**
```
[Your live site URL]
```

**Auto-Deployment Test:**
- [ ] Made change locally
- [ ] Pushed to GitHub
- [ ] Vercel detected change
- [ ] Auto-deployed successfully
- [ ] Change visible on live site

**Key Learning:**
```
[What's the benefit of GitHub integration?]
```

---

## Project 3: Deploy with Vercel CLI

### Using Command Line Interface

**Step 1: Install Vercel CLI**

```bash
# Install globally
npm install -g vercel

# Or use npx (no installation needed)
npx vercel --version
```

**Step 2: Login to Vercel**

```bash
vercel login
```

**Step 3: Deploy Your Project**

```bash
# Navigate to your project folder
cd your-project-folder

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? (enter name)
# - Directory? ./
```

**Step 4: Deploy to Production**

```bash
# Deploy to production
vercel --prod
```

### Your CLI Deployment

**Commands Used:**
```
[List the commands you ran]
```

**Preview URL:**
```
[Development deployment URL]
```

**Production URL:**
```
[Production URL after --prod]
```

**CLI vs Dashboard:**
```
[Which do you prefer? Why?]
```

---

## Project 4: Deploy a Portfolio from Module 4

### Deploy Your Module 4 Project

Choose one project you built in Module 4 and deploy it.

**Step 1: Prepare for Deployment**

**If using Webflow:**
```
1. Export your site code (requires paid plan)
2. Download the ZIP file
3. Extract files
4. Proceed to deploy
```

**If using a no-code platform:**
```
Most no-code platforms have built-in hosting.
For this exercise, export if possible or create
a static version of your project.
```

**Step 2: Create Deployment-Ready Version**

**Checklist:**
- [ ] All links work
- [ ] Images optimized
- [ ] No absolute paths
- [ ] Responsive design tested
- [ ] Cross-browser tested

**Step 3: Deploy to Vercel**

Choose your preferred method:
- GitHub integration
- CLI
- Drag & drop

**Step 4: Configure Settings**

```
In Vercel dashboard:
1. Go to Project Settings
2. Set project name
3. Add environment variables (if needed)
4. Configure build settings (if needed)
```

### Your Portfolio Deployment

**Project Name:**
```
[Name of your Module 4 project]
```

**Deployment Method:**
```
[GitHub/CLI/Drag & Drop]
```

**Production URL:**
```
[Your live URL]
```

**Post-Deployment Checks:**
- [ ] Homepage loads
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Forms work (if applicable)
- [ ] Mobile responsive
- [ ] HTTPS working

**Issues Encountered:**
```
[Any problems during deployment?]
```

**Solutions:**
```
[How did you fix them?]
```

---

## Project 5: Environment Variables

### Working with Secrets and Configuration

**Step 1: Understand Environment Variables**

Environment variables store sensitive data like:
- API keys
- Database credentials
- Secret tokens
- Configuration values

**Step 2: Create a Project with API**

**Example: Weather App**

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        #weather {
            background: #f0f0f0;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="city" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>
    <div id="weather"></div>
    
    <script>
        // This would use environment variable in production
        async function getWeather() {
            const city = document.getElementById('city').value;
            // In real app, API key comes from environment variable
            document.getElementById('weather').innerHTML = 
                `Weather data for ${city} would appear here`;
        }
    </script>
</body>
</html>
```

**Step 3: Add Environment Variables in Vercel**

```
1. Go to Project Settings
2. Click "Environment Variables"
3. Add new variable:
   Name: API_KEY
   Value: your-api-key-here
4. Select environments (Production, Preview, Development)
5. Save
```

**Step 4: Use in Code (for serverless functions)**

If you were using Vercel serverless functions:
```javascript
// api/weather.js
export default function handler(req, res) {
  const apiKey = process.env.API_KEY;
  // Use apiKey safely
}
```

### Your Environment Variables Setup

**Variables Added:**
```
[List variable names - not values!]
```

**Purpose:**
```
[What do these variables do?]
```

**Security Check:**
- [ ] No secrets in code
- [ ] No secrets in GitHub
- [ ] Variables set in Vercel
- [ ] Different values for different environments

---

## Project 6: Custom Domain Setup

### Use Your Own Domain

**Step 1: Get a Domain (Optional)**

If you want to practice with real domain:
- Namecheap
- Google Domains
- GoDaddy
- Or use free options like .tk domains

**Step 2: Add Domain in Vercel**

```
1. Go to Project Settings
2. Click "Domains"
3. Enter your domain
4. Vercel provides DNS configuration
```

**Step 3: Configure DNS**

```
Add these records in your domain registrar:

Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Step 4: Wait for Verification**

```
DNS propagation can take:
- A few minutes
- Up to 48 hours (rarely)
- Vercel will show status
```

### Your Domain Setup

**Domain Name:**
```
[Your domain or "Skipped - using Vercel subdomain"]
```

**Configuration Steps:**
```
[What did you do?]
```

**Status:**
```
[Active/Pending/Skipped]
```

**Custom Domain URL:**
```
[Your custom domain URL]
```

---

## Project 7: Preview Deployments

### Testing Before Production

**Step 1: Understand Preview Deployments**

Vercel creates preview deployments for:
- Every push to non-main branches
- Every pull request
- Testing before merging

**Step 2: Create a Feature Branch**

```bash
# Create new branch
git checkout -b feature/new-design

# Make changes to your site
# (change heading, color, add section, etc.)

# Commit changes
git add .
git commit -m "Test new design"

# Push to GitHub
git push origin feature/new-design
```

**Step 3: Check Preview Deployment**

```
1. Go to Vercel dashboard
2. You'll see preview deployment
3. Click to view preview URL
4. Test the changes
5. Share preview with others
```

**Step 4: Merge to Production**

```
1. If happy with preview, merge branch
2. Go to GitHub
3. Create Pull Request
4. Review and merge
5. Vercel auto-deploys to production
```

### Your Preview Deployment

**Branch Name:**
```
[Your feature branch]
```

**Changes Made:**
```
[What did you change?]
```

**Preview URL:**
```
[Preview deployment URL]
```

**Feedback Process:**
```
[Did you share with anyone? What feedback?]
```

**Merged to Production:**
- [ ] Yes
- [ ] No, made more changes first

---

## Project 8: Performance Optimization

### Make Your Site Faster

**Step 1: Check Current Performance**

```
1. Go to PageSpeed Insights: https://pagespeed.web.dev/
2. Enter your Vercel URL
3. Run analysis
4. Note scores and suggestions
```

**Initial Scores:**
```
Mobile: [score/100]
Desktop: [score/100]
Key issues: [list main problems]
```

**Step 2: Optimize Images**

```
Tools to use:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac)

Actions:
1. Compress all images
2. Use appropriate formats (WebP when possible)
3. Use appropriate sizes
4. Add lazy loading
```

**Step 3: Minimize Code**

```
1. Remove unused CSS
2. Minify JavaScript
3. Remove comments
4. Combine files if many separate ones
```

**Step 4: Leverage Vercel Features**

```
Vercel automatically:
- Compresses assets
- Serves via CDN
- Provides HTTP/2
- Adds cache headers

You can also:
- Add custom headers
- Configure caching
- Use Edge Functions
```

**Step 5: Redeploy and Retest**

```
1. Make optimizations
2. Deploy to Vercel
3. Run PageSpeed Insights again
4. Compare scores
```

### Your Performance Optimization

**Before Optimization:**
```
Mobile Score: [X/100]
Desktop Score: [X/100]
Load Time: [X seconds]
```

**Optimizations Made:**
- [ ] Compressed images
- [ ] Minified code
- [ ] Removed unused code
- [ ] Added lazy loading
- [ ] Other: ___________

**After Optimization:**
```
Mobile Score: [X/100]
Desktop Score: [X/100]
Load Time: [X seconds]
```

**Improvement:**
```
[Calculate improvement percentage]
```

---

## Project 9: Monitoring and Analytics

### Track Your Site's Performance

**Step 1: Enable Vercel Analytics**

```
1. Go to Project Settings
2. Click "Analytics"
3. Enable Web Analytics
4. Add tracking script to your site (if needed)
```

**Step 2: Add Google Analytics (Optional)**

```html
<!-- Add to your HTML <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Step 3: Monitor Deployments**

```
In Vercel dashboard, monitor:
- Deployment frequency
- Build times
- Error rates
- Performance metrics
```

**Step 4: Set Up Alerts (Optional)**

```
Configure alerts for:
- Failed deployments
- Performance issues
- Budget limits
```

### Your Monitoring Setup

**Analytics Enabled:**
- [ ] Vercel Analytics
- [ ] Google Analytics
- [ ] Other: ___________

**Key Metrics to Track:**
```
[What will you monitor?]
```

**Alert Configuration:**
```
[What alerts did you set up?]
```

---

## Project 10: Complete Deployment Pipeline

### Build a Full CI/CD Workflow

### Your Final Project

Deploy your Module 4 final project with complete setup:

**Requirements:**
- [x] Deployed from GitHub
- [x] Auto-deployment configured
- [x] Preview deployments working
- [x] Environment variables set
- [x] Performance optimized
- [x] Analytics enabled
- [x] Documentation created

**Step 1: Repository Setup**

```
1. Create GitHub repo
2. Add all project files
3. Include README with:
   - Project description
   - Setup instructions
   - Deployment info
   - Technologies used
```

**Step 2: Vercel Configuration**

Create `vercel.json` for advanced config:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

**Step 3: Complete Deployment**

```
1. Connect GitHub to Vercel
2. Configure build settings
3. Set environment variables
4. Deploy to production
5. Test thoroughly
```

**Step 4: Documentation**

Create `DEPLOYMENT.md`:
```markdown
# Deployment Guide

## Prerequisites
[List requirements]

## Environment Variables
[List required variables]

## Deployment Steps
[Step-by-step instructions]

## Post-Deployment
[Testing checklist]

## Troubleshooting
[Common issues and solutions]
```

### Your Complete Project

**Project Name:**
```
[Name]
```

**Repository:**
```
[GitHub URL]
```

**Production URL:**
```
[Live site URL]
```

**Tech Stack:**
```
[Technologies used]
```

**Deployment Configuration:**
- [ ] GitHub integration
- [ ] Auto-deployment
- [ ] Preview deployments
- [ ] Custom domain
- [ ] Environment variables
- [ ] Performance optimized
- [ ] Analytics tracking
- [ ] Documentation complete

**Deployment Pipeline:**
```
[Describe your workflow from code to production]
```

**Challenges Overcome:**
```
[Major challenges and solutions]
```

---

## 🎯 Self-Assessment

- [ ] I can deploy sites to Vercel
- [ ] I understand different deployment methods
- [ ] I can configure environment variables
- [ ] I can set up custom domains
- [ ] I understand preview deployments
- [ ] I can optimize site performance
- [ ] I can monitor deployed applications
- [ ] I've created complete deployment documentation

---

## 💡 Deployment Best Practices Learned

**Pre-Deployment:**
```
[What should you check before deploying?]
```

**During Deployment:**
```
[What's important during the deployment process?]
```

**Post-Deployment:**
```
[What should you do after deploying?]
```

**Monitoring:**
```
[How do you ensure your site stays healthy?]
```

---

## 🎓 Course Completion Reflection

### Overall Course Experience

**Skills Acquired:**
```
1. [Skill 1]
2. [Skill 2]
3. [Skill 3]
4. [Skill 4]
5. [Skill 5]
```

**Favorite Module:**
```
[Which module did you enjoy most? Why?]
```

**Most Valuable Learning:**
```
[What will you use most in real work?]
```

**Projects Built:**
```
1. [Project 1]: [URL]
2. [Project 2]: [URL]
3. [Project 3]: [URL]
4. [Project 4]: [URL]
5. [Project 5]: [URL]
```

**Next Steps:**
```
[What will you build next?]
[How will you apply these skills?]
```

---

## 🏆 Congratulations!

You've completed the **Generative AI & Prompt Engineering for Everyone** course!

You now have practical skills in:
- ✅ Prompt engineering and AI tools
- ✅ Automation with Zapier
- ✅ Advanced automation with Make
- ✅ Building web applications
- ✅ Deploying to production with Vercel

**Share your achievements!**
- Portfolio URL: ___________
- LinkedIn: Share your projects
- Twitter: Tweet your success
- Community: Help others learn

**Keep Learning:**
- Build more projects
- Explore advanced features
- Join no-code communities
- Share your knowledge

---

**Thank you for completing the course! Now go build amazing things! 🚀**
