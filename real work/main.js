// Array of employee objects
document.addEventListener('DOMContentLoaded', function() {
    // Array of employee objects
    const employees = [
      { name: 'Nurra', position: 'Software Engineer', department: 'Development', salary: '$100,000' },
      { name: 'Janyy', position: 'Web Developer', department: 'Product', salary: '$120,000' },
      { name: 'Yara', position: 'UI Designer', department: 'Design', salary: '$95,000' },
      { name: 'Emy', position: 'Tester', department: 'Quality Assurance', salary: '$85,000' },
      { name: 'Michael Lee', position: 'HR Manager', department: 'Human Resources', salary: '$110,000' }
    ];
  
  // Function to generate the employee table dynamically
  function generateEmployeeTable() {
    const tableBody = document.querySelector('#employeeTable tbody');
    employees.forEach(employee => {
      const row = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      nameCell.textContent = employee.name;
      row.appendChild(nameCell);
      
      const positionCell = document.createElement('td');
      positionCell.textContent = employee.position;
      row.appendChild(positionCell);
      
      const departmentCell = document.createElement('td');
      departmentCell.textContent = employee.department;
      row.appendChild(departmentCell);
      
      const salaryCell = document.createElement('td');
      salaryCell.textContent = employee.salary;
      row.appendChild(salaryCell);
      
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to generate the table
  generateEmployeeTable();
});