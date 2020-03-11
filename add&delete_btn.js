$(document).ready(function(){
    $(".add_btn").click(function(){
        var id = $("#id").val();
        var name = $("#name").val();
        var age = $("#age").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var addRow = "<tr><td><input type='checkbox' name='record'></td><td>" 
        + id + "</td><td>" + name + "</td><td>" + age + "</td><td>"
        + email + "</td><td>" + phone + "</td></tr>";
        $("table tbody").append(addRow);
    });
     
    // Find and remove selected table rows
    $(".delete_btn").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});