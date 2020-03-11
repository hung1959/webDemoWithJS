var students = [
     { id: 1, studentName: 'Abc', age: 20, email: 'abc@gmail.com', phone: '0987654321'},
     { id: 2, studentName: 'Abcd', age: 20, email: 'abcd@gmail.com', phone: '0987654322'},
     { id: 3, studentName: 'Abcde', age: 20, email: 'abcde@gmail.com', phone: '0987654323'},
];

for (i = 0; i <= students.length; i++)
{
    console.log("FFFFFFFFFFf",i)
    $("#student_table").append(`
            <tr>
				<td><input type="checkbox" name="record"></td>
				<td>${students[i].id}</td>
				<td>${students[i].studentName}</td>
				<td>${students[i].age}</td>
				<td>${students[i].email}</td>
				<td>${students[i].phone}</td>
            </tr>
            `
            //     $('#student_table').append("<tr><td><input type='checkbox' name='record'></td><td>" + students[i].id + "</td><td>" + students[i].studentName + "</td><td>" + students[i].age
            // + "</td><td>" + students[i].email + "</td><td>" + students[i].phone + "</td></tr>");
        )
}