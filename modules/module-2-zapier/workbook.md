# Module 2: Practical Workbook - Zapier Automation

## 🚀 Welcome to Hands-On Automation!

This workbook contains 10 practical automation projects. Work through each one step-by-step, documenting your process and results.

---

## Project 1: Email to Spreadsheet Automation

### Business Scenario
You receive contact form submissions via email and need to track them in a spreadsheet.

### Task
Create a Zap that:
1. **Trigger**: Receives an email in Gmail with specific subject line
2. **Action**: Adds a new row to Google Sheets with email details

### Step-by-Step Guide

**Step 1: Set Up Your Trigger**
```
1. Log into Zapier
2. Click "Create Zap"
3. Search for "Gmail" as trigger
4. Choose "New Email" trigger
5. Connect your Gmail account
6. Set up filters (e.g., subject contains "Contact Form")
```

**Step 2: Set Up Your Action**
```
1. Click "+" to add action
2. Search for "Google Sheets"
3. Choose "Create Spreadsheet Row"
4. Connect your Google account
5. Select your spreadsheet and worksheet
6. Map email fields to spreadsheet columns:
   - Email From → Column A
   - Subject → Column B
   - Body → Column C
   - Date → Column D
```

**Step 3: Test and Turn On**
```
1. Click "Test" to verify it works
2. Review the test result
3. Turn on your Zap
4. Send yourself a test email
```

### Your Documentation

**Zap Name:**
```
[Write your Zap name here]
```

**Challenges Faced:**
```
[What difficulties did you encounter?]
```

**Solution:**
```
[How did you solve them?]
```

---

## Project 2: Social Media Scheduler

### Business Scenario
You want to automatically share your blog posts on Twitter when published.

### Task
Create a Zap that:
1. **Trigger**: New item in RSS feed (or new blog post)
2. **Action**: Post to Twitter with custom message

### Your Implementation

**RSS Feed URL:**
```
[Your feed URL or use: https://feeds.feedburner.com/TechCrunch/ for testing]
```

**Twitter Message Template:**
```
[Design a message format, e.g., "New post: {{Title}} - {{Link}} #blog #automation"]
```

**Steps Completed:**
- [ ] Connected RSS feed
- [ ] Connected Twitter account
- [ ] Customized tweet message
- [ ] Added hashtags
- [ ] Tested the Zap
- [ ] Turned on automation

**Your Notes:**
```
[Document your experience]
```

---

## Project 3: Lead Notification System

### Business Scenario
When someone fills out your Google Form, you want immediate Slack notification.

### Task
Create a Zap that:
1. **Trigger**: New Google Form response
2. **Action**: Send message to Slack channel

### Implementation Steps

**Step 1: Create a Test Form**
```
1. Go to Google Forms
2. Create a simple form with:
   - Name field
   - Email field
   - Message field
```

**Step 2: Set Up Zap**
```
1. Trigger: Google Forms → New Response
2. Action: Slack → Send Channel Message
3. Customize message format:
   "New Lead! 
   Name: {{Name}}
   Email: {{Email}}
   Message: {{Message}}"
```

**Your Slack Message Format:**
```
[Design your notification message]
```

**Testing Results:**
```
[How well did it work?]
```

---

## Project 4: Automated Email Follow-up

### Business Scenario
Send automatic thank-you email when someone fills out your form.

### Task
Create a Zap that:
1. **Trigger**: New form submission (Google Forms or Typeform)
2. **Action**: Send email via Gmail

### Your Implementation

**Email Template:**
```
Subject: [Write subject line]

Body:
[Write your email body with personalization]
```

**Personalization Fields Used:**
- [ ] Name
- [ ] Email
- [ ] Other: ___________

**Completion Checklist:**
- [ ] Form created
- [ ] Zap configured
- [ ] Email template written
- [ ] Test submission made
- [ ] Email received successfully

---

## Project 5: Multi-Step Data Processing

### Business Scenario
Collect form data, save it to Google Sheets, AND send a Slack notification.

### Task
Create a Zap with multiple actions:
1. **Trigger**: New form response
2. **Action 1**: Add row to Google Sheets
3. **Action 2**: Send Slack notification
4. **Action 3**: Send confirmation email

### Your Multi-Step Workflow

**Step 1 (Trigger):**
```
[Document your trigger setup]
```

**Step 2 (Google Sheets):**
```
[Document your spreadsheet action]
```

**Step 3 (Slack):**
```
[Document your Slack notification]
```

**Step 4 (Email):**
```
[Document your email action]
```

**What You Learned:**
```
[Insights about multi-step Zaps]
```

---

## Project 6: Using Filters

### Business Scenario
Only process form submissions where the respondent selects "Urgent" priority.

### Task
Create a Zap with filters:
1. **Trigger**: New form response
2. **Filter**: Only continue if Priority = "Urgent"
3. **Action**: Send urgent notification

### Filter Setup

**Filter Rules:**
```
[Document your filter conditions]
```

**Test Cases:**
- [ ] Urgent submission → Action triggered
- [ ] Normal submission → Action NOT triggered

**Your Reflection:**
```
[When would you use filters in real scenarios?]
```

---

## Project 7: Path Branching

### Business Scenario
Different actions based on form response type.

### Task
Create a Zap with paths:
1. **Trigger**: New form response with "Request Type" field
2. **Path A**: If Support Request → Create Zendesk ticket
3. **Path B**: If Sales Inquiry → Add to CRM
4. **Path C**: If General → Send to email

### Your Path Configuration

**Path A Setup:**
```
[Document Path A]
```

**Path B Setup:**
```
[Document Path B]
```

**Path C Setup:**
```
[Document Path C]
```

**Complexity Rating (1-10):**
```
[How challenging was this?]
```

---

## Project 8: E-commerce Automation

### Business Scenario
Automate order processing and customer notification.

### Task
Create a Zap for order management:
1. **Trigger**: New order (can simulate with form)
2. **Action 1**: Add to Google Sheets for tracking
3. **Action 2**: Send order confirmation email
4. **Action 3**: Notify team on Slack

### Your E-commerce Workflow

**Order Data Captured:**
- [ ] Customer name
- [ ] Email
- [ ] Product
- [ ] Amount
- [ ] Date

**Automation Results:**
```
[How effective is this workflow?]
```

---

## Project 9: Content Aggregation

### Business Scenario
Aggregate content from multiple sources into one place.

### Task
Create a Zap that collects content:
1. **Trigger**: New items from RSS feed, Twitter hashtag, or YouTube channel
2. **Action**: Add to Google Sheets or Airtable

### Your Content Sources

**Source 1:**
```
[Type and URL]
```

**Source 2:**
```
[Type and URL]
```

**Aggregation Method:**
```
[How are you collecting and organizing?]
```

---

## Project 10: Custom Real-World Project

### Your Business Challenge

**Describe a real automation need you have:**
```
[What manual task takes up your time?]
```

### Your Solution

**Zap Design:**
```
Trigger: [Your trigger]
Action 1: [Your first action]
Action 2: [Your second action]
Action 3: [Your third action - if needed]
```

**Implementation:**
- [ ] Planned the workflow
- [ ] Created the Zap
- [ ] Tested thoroughly
- [ ] Documented edge cases
- [ ] Turned on automation
- [ ] Monitored for one week

**Results & Impact:**
```
Time Saved: [X hours per week/month]
Efficiency Gain: [How did this help?]
Lessons Learned: [Key insights]
```

---

## 🎯 Advanced Challenge Projects

### Challenge 1: Webhook Integration
Create a Zap using Zapier's webhook feature to connect to a custom service.

### Challenge 2: Formatter Actions
Use Zapier's Formatter to transform data (e.g., convert text to title case, format dates).

### Challenge 3: Delay and Schedule
Create a Zap with delays (e.g., wait 1 day before sending follow-up email).

---

## 📊 Self-Assessment

Before moving to the next module:

- [ ] I can create basic 2-step Zaps
- [ ] I understand triggers and actions
- [ ] I can use filters effectively
- [ ] I can create multi-step workflows
- [ ] I can use paths for conditional logic
- [ ] I can troubleshoot Zap errors
- [ ] I've created at least one real-world automation
- [ ] I understand when to use Zapier vs. other tools

---

## 💡 Best Practices Learned

Document your key learnings:

1. **Naming Convention:**
```
[How do you name your Zaps?]
```

2. **Testing Strategy:**
```
[How do you test before going live?]
```

3. **Error Handling:**
```
[What do you do when a Zap fails?]
```

---

## 📝 Reflection

**Most Useful Automation:**
```
[Which project was most valuable?]
```

**Biggest Challenge:**
```
[What was hardest to implement?]
```

**Ideas for Future Automations:**
```
1. [Idea 1]
2. [Idea 2]
3. [Idea 3]
```

**Congratulations!** You've completed Module 2. Ready for [Module 3: Automation with Make](../module-3-make/)?
