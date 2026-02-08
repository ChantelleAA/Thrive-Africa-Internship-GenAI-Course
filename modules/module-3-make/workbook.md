# Module 3: Practical Workbook - Make (Integromat)

## 🎨 Welcome to Visual Automation!

This workbook focuses on building powerful visual workflows with Make. Each project builds on the previous one, introducing new concepts.

---

## Project 1: Your First Scenario

### Business Scenario
Create a simple scenario to understand Make's interface.

### Task
Build a scenario that:
1. **Trigger**: Watches for new Google Sheets row
2. **Action**: Sends an email via Gmail

### Step-by-Step Guide

**Step 1: Create Scenario**
```
1. Log into Make (make.com)
2. Click "Create a new scenario"
3. Understand the canvas interface
```

**Step 2: Add Trigger Module**
```
1. Click the "+" button
2. Search for "Google Sheets"
3. Select "Watch Rows"
4. Connect your Google account
5. Configure:
   - Select spreadsheet
   - Select worksheet
   - Set how often to check (every 15 minutes)
```

**Step 3: Add Action Module**
```
1. Click "+" after the Google Sheets module
2. Search for "Gmail"
3. Select "Send an Email"
4. Connect your Gmail account
5. Map fields:
   - To: Use email from spreadsheet
   - Subject: Use name or other field
   - Content: Customize your message
```

**Step 4: Test and Schedule**
```
1. Click "Run once" to test
2. Check if email was sent
3. Set schedule (bottom-left)
4. Turn on scenario
```

### Your Documentation

**Scenario Name:**
```
[Your scenario name]
```

**What You Learned:**
```
[Key insights about Make interface]
```

**Differences from Zapier:**
```
[What's different?]
```

---

## Project 2: Using Routers

### Business Scenario
Process form submissions differently based on the response type.

### Task
Create a scenario with routers:
1. **Trigger**: New form response (Google Forms or webhook)
2. **Router**: Split into 3 paths
   - Path 1: Urgent → Send immediate email
   - Path 2: Normal → Add to spreadsheet
   - Path 3: Low priority → Add to backlog

### Router Configuration

**Router Setup:**
```
Trigger: [Your trigger]
    ↓
  Router
    ├── Path 1: [Condition for urgent]
    │   └── [Action]
    ├── Path 2: [Condition for normal]
    │   └── [Action]
    └── Path 3: [Condition for low]
        └── [Action]
```

**Filter Conditions:**
```
Path 1 Filter: [e.g., Priority equals "Urgent"]
Path 2 Filter: [e.g., Priority equals "Normal"]
Path 3 Filter: [Default - all others]
```

### Your Implementation

**Number of Routes Created:**
```
[How many paths did you create?]
```

**Most Complex Route:**
```
[Describe your most complex path]
```

**Testing Results:**
```
- Tested with urgent data: ✓/✗
- Tested with normal data: ✓/✗
- Tested with low priority: ✓/✗
```

---

## Project 3: Working with Iterators

### Business Scenario
Process multiple items from an array (e.g., multiple products in an order).

### Task
Create a scenario that:
1. **Trigger**: Receives data with multiple items
2. **Iterator**: Processes each item separately
3. **Action**: Performs action for each item

### Example Structure
```
Trigger: New Order with Multiple Products
    ↓
Iterator: Process each product
    ↓
For each product:
    → Update inventory spreadsheet
    → Check if restock needed
    → Send notification if low stock
```

### Your Iterator Scenario

**Data Source:**
```
[Where is your array data coming from?]
```

**Iterator Configuration:**
```
Array field: [Which field contains the array?]
```

**Actions for Each Item:**
```
1. [First action]
2. [Second action]
3. [Third action]
```

**Learning:**
```
[How is this different from processing all items at once?]
```

---

## Project 4: Using Aggregators

### Business Scenario
Collect multiple individual items and combine them into a summary.

### Task
Create a scenario that:
1. **Trigger**: Multiple triggers or iterator output
2. **Aggregator**: Combine all items
3. **Action**: Create summary report or single action with all data

### Example Structure
```
Iterator: Process each daily sale
    ↓
Aggregator: Sum all sales
    ↓
Action: Send daily summary email with total
```

### Your Aggregator Scenario

**Aggregator Type:**
```
[Text aggregator, Array aggregator, or Numeric aggregator?]
```

**What Are You Combining:**
```
[What data are you aggregating?]
```

**Final Output:**
```
[What does the aggregated data look like?]
```

**Use Case:**
```
[When would this be useful in real business?]
```

---

## Project 5: HTTP Modules and APIs

### Business Scenario
Connect to an API that doesn't have a native Make module.

### Task
Create a scenario using HTTP modules:
1. **Trigger**: Schedule or webhook
2. **HTTP Request**: Make GET/POST request to API
3. **Action**: Process the response

### Example APIs to Try
```
1. JSONPlaceholder (fake API for testing): https://jsonplaceholder.typicode.com/posts
2. OpenWeather API (weather data): https://openweathermap.org/api
3. Any public API
```

### Your HTTP Request

**API Endpoint:**
```
[URL of the API]
```

**Request Method:**
```
[GET, POST, PUT, DELETE]
```

**Headers:**
```
[Any required headers, e.g., API key]
```

**Request Body (if POST):**
```
[Your request data]
```

**Response Handling:**
```
[How did you process the API response?]
```

**Challenges:**
```
[What was difficult about API integration?]
```

---

## Project 6: Error Handling

### Business Scenario
Build a robust scenario that handles errors gracefully.

### Task
Create a scenario with error handling:
1. Add an error handler route
2. Configure what happens when an error occurs
3. Log errors or send notifications
4. Implement retry logic

### Error Handling Setup

**Main Route:**
```
[Describe your main workflow]
```

**Error Handler:**
```
[What happens when an error occurs?]
```

**Error Actions:**
- [ ] Log error to Google Sheets
- [ ] Send email notification
- [ ] Send Slack alert
- [ ] Other: ___________

**Testing:**
```
[How did you test error scenarios?]
```

---

## Project 7: Complex Data Transformation

### Business Scenario
Transform and enrich data before sending it to destination.

### Task
Create a scenario that transforms data:
1. **Trigger**: Get raw data
2. **Tools**: Use built-in tools to transform:
   - Set variables
   - Text parser
   - Math operations
   - Date formatting
3. **Action**: Send transformed data

### Transformations Applied

**Original Data Format:**
```
[Example of input data]
```

**Transformations:**
1. ```[First transformation]```
2. ```[Second transformation]```
3. ```[Third transformation]```

**Final Data Format:**
```
[Example of output data]
```

**Tools Used:**
- [ ] Set Variable
- [ ] Text Parser
- [ ] Math operations
- [ ] Date/Time formatting
- [ ] Other: ___________

---

## Project 8: Multi-Service Integration

### Business Scenario
Build a comprehensive workflow connecting 4+ services.

### Task
Create a complex scenario:
1. **Trigger**: Form submission or new data
2. **Service 1**: Store in database
3. **Router**: Different paths based on data
4. **Service 2**: Update CRM
5. **Service 3**: Send notifications
6. **Service 4**: Create calendar event or task

### Your Integration Map

**Visual Flow:**
```
Draw or describe your scenario flow:

[Trigger] → [Service 1] → [Router]
                             ├── Path A → [Service 2] → [Service 3]
                             └── Path B → [Service 4]
```

**Services Used:**
1. ```[Service name and purpose]```
2. ```[Service name and purpose]```
3. ```[Service name and purpose]```
4. ```[Service name and purpose]```

**Complexity Rating:**
```
[1-10, how complex was this?]
```

---

## Project 9: Scheduled Reports

### Business Scenario
Generate and send automated daily/weekly reports.

### Task
Create a scenario that:
1. **Trigger**: Schedule (daily, weekly)
2. **Data Collection**: Gather data from multiple sources
3. **Processing**: Aggregate and format data
4. **Delivery**: Send formatted report via email or Slack

### Your Report Automation

**Report Schedule:**
```
[How often does it run?]
```

**Data Sources:**
```
1. [Source 1]
2. [Source 2]
3. [Source 3]
```

**Report Format:**
```
[How is data formatted? Table? Chart? Text?]
```

**Delivery Method:**
```
[Email, Slack, Google Docs, etc.]
```

**Sample Report:**
```
[Show an example of your report output]
```

---

## Project 10: Custom Real-World Scenario

### Your Challenge

**Describe a complex automation need:**
```
[What business process could benefit from Make's power?]
```

### Your Solution Design

**Scenario Blueprint:**
```
[Trigger]
    ↓
[Module 1]
    ↓
[Router/Iterator if needed]
    ├── [Path A]
    └── [Path B]
    ↓
[Aggregator if needed]
    ↓
[Final Actions]
```

**Technical Requirements:**
```
- Number of modules: [X]
- Uses router: Yes/No
- Uses iterator: Yes/No
- Uses aggregator: Yes/No
- Uses HTTP module: Yes/No
- Error handling: Yes/No
```

**Implementation Checklist:**
- [ ] Scenario designed
- [ ] All modules configured
- [ ] Error handling added
- [ ] Tested with sample data
- [ ] Tested error scenarios
- [ ] Scheduled appropriately
- [ ] Documented for team
- [ ] Turned on and monitoring

**Results:**
```
Impact: [How does this help?]
Time Saved: [X hours/week]
Complexity Handled: [What manual work was eliminated?]
```

---

## 🎯 Advanced Challenges

### Challenge 1: Webhook Trigger
Create a scenario that starts with a webhook trigger and processes incoming data.

### Challenge 2: Data Store
Use Make's data store to save and retrieve information across scenario runs.

### Challenge 3: JSON Parsing
Handle complex JSON data structures from an API response.

### Challenge 4: Conditional Aggregation
Use aggregator with filters to only aggregate certain items.

---

## 📊 Make vs Zapier Comparison

Based on your experience with both:

| Feature | Zapier | Make | Your Preference |
|---------|--------|------|-----------------|
| Ease of Use | | | |
| Visual Interface | | | |
| Complex Logic | | | |
| Pricing | | | |
| Learning Curve | | | |
| API Integration | | | |
| Data Processing | | | |

**Your Verdict:**
```
[When would you choose Make? When would you choose Zapier?]
```

---

## 📝 Best Practices Learned

**Scenario Organization:**
```
[How do you name and organize scenarios?]
```

**Testing Strategy:**
```
[How do you test complex scenarios?]
```

**Performance Optimization:**
```
[What slows scenarios down? How to optimize?]
```

**Documentation:**
```
[How do you document complex scenarios?]
```

---

## 🎓 Self-Assessment

- [ ] I understand Make's interface
- [ ] I can create basic scenarios
- [ ] I can use routers effectively
- [ ] I understand iterators and aggregators
- [ ] I can work with HTTP modules
- [ ] I can handle errors properly
- [ ] I can build complex multi-service workflows
- [ ] I know when to use Make vs Zapier

---

## 💡 Reflection

**Most Powerful Feature:**
```
[What Make feature impressed you most?]
```

**Most Challenging Concept:**
```
[What was hardest to understand?]
```

**Real-World Applications:**
```
[How will you use Make in your work?]
```

**Congratulations!** You've mastered Make. Ready for [Module 4: Building Web Apps](../module-4-web-apps/)?
