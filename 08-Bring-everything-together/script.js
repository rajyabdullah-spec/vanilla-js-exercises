const assignmentForm = document.getElementById('assignmentForm');
const tableBody = document.getElementById('assignmentTable');

assignmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskValue = document.getElementById('taskInput').value;
    const deadlineValue = document.getElementById('deadlineInput').value;


    addNewAssignment(taskValue, deadlineValue);

   
    assignmentForm.reset();
});


function addNewAssignment(task, deadline) {
   
    const newRow = document.createElement('tr');
    
   
    const currentCount = tableBody.children.length + 1;

    
    newRow.innerHTML = `
        <td>${currentCount}</td>
        <td>${task}</td>
        <td><span class="badge bg-info text-dark">${deadline}</span></td>
    `;

    
    tableBody.appendChild(newRow);

    
    
    const allRows = tableBody.querySelectorAll('tr');
    for (let i = 0; i < allRows.length; i++) {
        
        if (i % 2 === 0) {
            allRows[i].style.backgroundColor = "#ffffff";
        } else {
            allRows[i].style.backgroundColor = "#f8f9fa";
        }
    }
}