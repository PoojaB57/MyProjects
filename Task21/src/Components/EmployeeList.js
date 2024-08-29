import React, { useState } from 'react';

function EmployeeList() {
    const [employees] = useState([
        { name: 'John Doe', age: 28, salary: 50000, designation: 'Developer' },
        { name: 'Jane Smith', age: 32, salary: 60000, designation: 'Designer' },
        { name: 'Mike Johnson', age: 45, salary: 75000, designation: 'Manager' },
        { name: 'Emily Davis', age: 25, salary: 48000, designation: 'Intern' }
    ]);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name}, {employee.age} years old, {employee.designation}, Salary: ${employee.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;