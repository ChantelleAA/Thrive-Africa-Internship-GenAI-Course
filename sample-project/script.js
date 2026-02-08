// Task Manager Application
// This demonstrates concepts from all modules

// State Management
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// AI Task Suggestions (simulated - in real app, this would call an AI API)
const aiSuggestions = [
    "Review and respond to important emails",
    "Plan next week's project milestones",
    "Update project documentation",
    "Schedule one-on-one meetings with team",
    "Research new tools for workflow optimization"
];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    updateTaskCount();
    checkIntegrations();
});

// Get AI Suggestions
function getAISuggestions() {
    const suggestionsDiv = document.getElementById('aiSuggestions');
    suggestionsDiv.innerHTML = '<h3>🤖 AI-Powered Task Suggestions:</h3>';
    
    aiSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = () => {
            document.getElementById('taskInput').value = suggestion;
            suggestionsDiv.classList.remove('show');
        };
        suggestionsDiv.appendChild(suggestionItem);
    });
    
    suggestionsDiv.classList.add('show');
    
    // In a real app, you might call an AI API here:
    // const response = await fetch('YOUR_AI_API_ENDPOINT', {
    //     method: 'POST',
    //     body: JSON.stringify({ prompt: 'Generate 5 productive tasks' })
    // });
}

// Add Task
function addTask(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    
    const task = {
        id: Date.now(),
        text: taskInput.value,
        priority: prioritySelect.value,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.unshift(task);
    saveTasks();
    renderTasks();
    updateTaskCount();
    
    // Send to Zapier webhook (optional integration)
    sendToZapier(task);
    
    // Reset form
    taskInput.value = '';
    prioritySelect.value = 'medium';
}

// Toggle Task Completion
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateTaskCount();
        
        // Send update to automation
        if (task.completed) {
            sendCompletionNotification(task);
        }
    }
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Filter Tasks
function filterTasks(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks();
}

// Render Tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    let filteredTasks = tasks;
    
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }
    
    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: #6b7280;">No tasks to show</p>';
        return;
    }
    
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${task.completed ? 'checked' : ''}
                onchange="toggleTask(${task.id})"
            >
            <span class="task-text">${task.text}</span>
            <span class="priority-badge priority-${task.priority}">
                ${task.priority}
            </span>
            <button class="task-delete" onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;
        
        taskList.appendChild(li);
    });
}

// Update Task Count
function updateTaskCount() {
    const activeTasks = tasks.filter(t => !t.completed).length;
    const countSpan = document.getElementById('taskCount');
    countSpan.textContent = `${activeTasks} active task${activeTasks !== 1 ? 's' : ''}`;
}

// Clear Completed Tasks
function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Save to LocalStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Send to Zapier (optional integration)
function sendToZapier(task) {
    // Replace with your actual Zapier webhook URL
    const zapierWebhook = 'YOUR_ZAPIER_WEBHOOK_URL';
    
    // Uncomment to enable Zapier integration:
    /*
    fetch(zapierWebhook, {
        method: 'POST',
        body: JSON.stringify({
            task: task.text,
            priority: task.priority,
            timestamp: task.createdAt
        })
    }).then(() => {
        console.log('Task sent to Zapier');
        updateIntegrationStatus('zapier', true);
    }).catch(error => {
        console.error('Zapier integration error:', error);
        updateIntegrationStatus('zapier', false);
    });
    */
    
    // For demo purposes, simulate connection
    console.log('Task would be sent to Zapier:', task);
}

// Send Completion Notification
function sendCompletionNotification(task) {
    console.log('Task completed:', task.text);
    // In a real app, this would trigger a Zapier webhook or email
}

// Check Integration Status
function checkIntegrations() {
    // Simulated integration status
    // In a real app, this would check actual API connections
    
    // Zapier status (check if webhook is configured)
    const hasZapierWebhook = false; // Set to true if configured
    updateIntegrationStatus('zapier', hasZapierWebhook);
    
    // Google Sheets status (check if API is configured)
    const hasSheetsAPI = false; // Set to true if configured
    updateIntegrationStatus('sheets', hasSheetsAPI);
}

// Update Integration Status Display
function updateIntegrationStatus(integration, connected) {
    const statusElement = document.getElementById(`${integration}Status`);
    if (statusElement) {
        statusElement.className = connected ? 'status connected' : 'status disconnected';
    }
}

// Export tasks (useful for backup)
function exportTasks() {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tasks-backup.json';
    link.click();
}

// Import tasks
function importTasks(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedTasks = JSON.parse(e.target.result);
                tasks = importedTasks;
                saveTasks();
                renderTasks();
                updateTaskCount();
                alert('Tasks imported successfully!');
            } catch (error) {
                alert('Error importing tasks. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to add task
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const taskInput = document.getElementById('taskInput');
        if (taskInput.value.trim()) {
            document.getElementById('taskForm').dispatchEvent(new Event('submit'));
        }
    }
});

// Daily summary (would be triggered by Zapier schedule in real app)
function generateDailySummary() {
    const activeTasks = tasks.filter(t => !t.completed);
    const completedTasks = tasks.filter(t => t.completed);
    
    const summary = {
        date: new Date().toLocaleDateString(),
        totalTasks: tasks.length,
        activeTasks: activeTasks.length,
        completedTasks: completedTasks.length,
        highPriorityTasks: activeTasks.filter(t => t.priority === 'high').length
    };
    
    console.log('Daily Summary:', summary);
    return summary;
}
