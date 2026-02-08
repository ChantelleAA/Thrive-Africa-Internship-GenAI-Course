# Sample Project: AI-Powered Task Manager

This is a complete example project that demonstrates all the concepts from the course.

## 🎯 Project Overview

A simple task management web application that uses:
- AI for task suggestions and prioritization
- Zapier for email notifications
- Google Sheets as a database
- Deployed on Vercel

## 🏗️ Project Structure

```
task-manager/
├── index.html          # Main application
├── styles.css          # Styling
├── script.js           # Application logic
├── vercel.json         # Deployment configuration
└── README.md           # This file
```

## 📋 Features

1. **Task Management**
   - Add tasks
   - Mark as complete
   - Delete tasks
   - Priority levels

2. **AI Integration**
   - Task suggestions using AI prompts
   - Priority recommendations
   - Task categorization

3. **Automation**
   - Email notifications via Zapier
   - Data backup to Google Sheets
   - Daily summary emails

4. **Deployment**
   - Hosted on Vercel
   - Custom domain support
   - Automatic HTTPS

## 🚀 Getting Started

### Prerequisites
- Vercel account
- Zapier account (for automation)
- Google account (for Sheets integration)

### Local Setup

1. Clone or download this project
2. Open `index.html` in a browser
3. Start managing tasks!

### Zapier Integration

**Create these Zaps:**

**Zap 1: Task Backup**
```
Trigger: Webhook (when task added)
Action 1: Add row to Google Sheets
Action 2: Send confirmation email
```

**Zap 2: Daily Summary**
```
Trigger: Schedule (daily at 6 PM)
Action 1: Get all tasks from Sheets
Action 2: Format as summary
Action 3: Email to user
```

### Deployment to Vercel

**Method 1: GitHub**
```bash
# Create repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main

# Deploy on Vercel
# 1. Connect GitHub repository
# 2. Import project
# 3. Deploy!
```

**Method 2: CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🎨 Customization

### Colors
Edit in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #10b981;
    --danger-color: #ef4444;
}
```

### AI Prompts
Edit in `script.js` to customize AI suggestions:
```javascript
const taskPrompt = "Suggest 5 productive tasks for a [your role]";
```

## 📝 AI Prompts Used

### Task Suggestions
```
"Generate 5 productive tasks for a [profession] focusing on [goal].
Make them specific, actionable, and time-bound."
```

### Priority Recommendation
```
"Analyze this task: [task description]
Suggest priority level (High/Medium/Low) and explain why."
```

### Task Categorization
```
"Categorize this task: [task description]
Choose from: Work, Personal, Health, Learning, Other
Explain your reasoning."
```

## 🔧 Configuration

### Environment Variables
If using API keys:
```
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
GOOGLE_SHEETS_API_KEY=your_api_key
```

### Vercel Configuration
See `vercel.json` for:
- Build settings
- Environment variables
- Headers and redirects

## 📊 Automation Workflows

### Workflow 1: Task Creation
```
User adds task
    ↓
Save locally (localStorage)
    ↓
Webhook to Zapier
    ↓
Add to Google Sheets
    ↓
Send confirmation email
```

### Workflow 2: Task Completion
```
User marks complete
    ↓
Update local storage
    ↓
Webhook to Zapier
    ↓
Update Sheets
    ↓
Add to completed log
```

### Workflow 3: Daily Summary
```
Schedule trigger (6 PM)
    ↓
Fetch tasks from Sheets
    ↓
Format summary
    ↓
Email to user
```

## 🎓 Learning Objectives Met

- ✅ **Module 1**: AI prompts for task suggestions
- ✅ **Module 2**: Zapier for email automation
- ✅ **Module 3**: Advanced workflows with Make (optional)
- ✅ **Module 4**: Web app built with HTML/CSS/JS
- ✅ **Module 5**: Deployed on Vercel

## 🔄 Future Enhancements

Ideas to extend this project:
- User authentication
- Team collaboration
- Mobile app version
- Advanced AI features
- Calendar integration
- Analytics dashboard

## 📚 Resources

- [Full Code](https://github.com/your-repo/task-manager)
- [Live Demo](https://task-manager.vercel.app)
- [Video Tutorial](https://youtu.be/...)

## 🤝 Contributing

This is a learning project. Feel free to:
- Fork and customize
- Add new features
- Improve the code
- Share your version

## 📄 License

Free to use for educational purposes.

---

**Built as part of Thrive Africa - Generative AI & Prompt Engineering Course**
