// // function OpenAlert()
// // {
// //     alert('its working');
// // }




// function NameValueAlert(){
//     // let NameValue=document.getElementById('IName').value;
//     // alert(NameValue);

// alert($('#IName').val())

// }


let Name;
let Number;
let Email;
let Date;
/* let area; */

function OpenAlert() {



    Name = $('#IName').val();
    Number = $('#INumber').val();
    Email = $('#IEmail').val();
    Date = $('#IDate').val();
    Gender = $('input[name="gender"]:checked').val();

    var RegisterFormPayload = {
        name: $('#IName').val(),
        number: $('#INumber').val(),
        email: $('#IEmail').val(),
        date: $('#IDate').val(),
        gender: $('input[name="gender"]:checked').val()
    }
    localStorage.setItem('registerPayload', JSON.stringify(RegisterFormPayload));
    let data = JSON.parse(localStorage.getItem('registerPayload'));
    console.table(data);

    if (Name != '' && Number != '' && Email != '') {
        $('#spnIName').text('');
        $('#spnINumber').text('');
        $('#spnIEmail').text('');
        $('#spnIDate').text('');
        $('#spnIGender').text('');

        alert("Registered SuccessFully");
        // $('#name').text(Name);
        // $('#number').text(Number);
        // $('#Email').text(Email);
        let dateParts = Date.split('-');
        let formattedDate = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
        // $('#date').text(formattedDate);
        // $('#gender').text(Gender);

        let Tabledata = '';
        Tabledata += '<tr><td>' + Name + '</td>';
        Tabledata += '<td>' + Number + '</td>';
        Tabledata += '<td>' + Email + '</td>';
        Tabledata += '<td>' + formattedDate + '</td>';
        Tabledata += '<td>' + Gender + '</td>';
        Tabledata += '<td><button title="Edit" onclick="GetData()"><i class="fa fa-edit text-info"></i></button>';
        Tabledata += '<button title="delete" onclick="deletedata()">';
        Tabledata += '<i class="fa fa-trash text-danger"></i></button></td></tr>';
        let newRow = document.createElement('tr');
        newRow.innerHTML = Tabledata;
        document.getElementById('MyFirstWebsiteTbl').getElementsByTagName('tbody')[0].appendChild(newRow);
        




        $('#IName').val('');
        $('#INumber').val('');
        $('#IEmail').val('');
        $('#IDate').val('');
        $('input[name="gender"]').prop('checked', false);
    }
    else if (Name == '' && Number == '' && Email == '') {
        $('#spnIName').text('Please enter name');
        $('#spnINumber').text('Please enter number');
        $('#spnIEmail').text('Please enter email');
        $('#spnIDate').text('Please enter date');
        $('#spnIGender').text('Please select gender');
    }
    else {
        if (Name == '') {
            $('#spnIName').text('Please enter name');
        }
        else if (Number == '') {
            $('#spnINumber').text('Please enter number');
        }


        else if (Email == '') {
            $('#spnIEmail').text('Please enter email');
        }
        else if (Date == '') {
            $('#spnIDate').text('Please enter date');
        }
        else if (Gender == '') {
            $('#spnIGender').text('Please enter date');
        }
    }
}

function Validateformonblue(FieldName) {
    Name = $('#IName').val();
    Number = $('#INumber').val();
    Email = $('#IEmail').val();
    Date = $('#IDate').val();
    Gender = $('input[name="gender"]:checked').val();

    if (FieldName == 'name' && Name == '') {
        $('#spnIName').text('Please enter name');
    }
    else if (FieldName == 'number' && Number == '') {
        $('#spnINumber').text('Please enter number');
    }
    else if (FieldName == 'email' && Email == '') {
        $('#spnIEmail').text('Please enter email');
    }

    else if (FieldName == 'Date' && Date == '') {
        $('#spnIDate').text('Please enter date');
    }
    else if (FieldName == 'Gender' && Gender == '') {
        $('#spnIGender').text('Please select gender');
    }
}

function GetData() {
    $('#IName').val(Name);
    $('#INumber').val(Number);
    $('#IEmail').val(Email);
    $('#IDate').val(Date);
    $('input[name="gender"][value="' + Gender + '"]').prop('checked', true);
}

function deletedata() {
    // $('#name').text('');
    // $('#number').text('');
    // $('#Email').text('');
    // $('#date').text('');
    // $('#gender').text('');
    let newRow = '';
    document.getElementById('MyFirstWebsiteTbl').getElementsByTagName('tbody')[0].appendChild(newRow);

}

function ValidateForm(FieldName) {
    Name = $('#IName').val();
    Number = $('#INumber').val();
    Email = $('#IEmail').val();
    Date = $('#IDate').val();
    Gender = $('input[name="gender"]:checked').val();
    /* area = $('#IArea').val(); */

    if (FieldName == 'name' && Name != '') {
        $('#spnIName').text('');
    }
    else if (FieldName == 'number' && Number != '') {
        $('#spnINumber').text('');
    }
    else if (FieldName == 'email' && Email != '') {
        $('#spnIEmail').text('');
    }

    else if (FieldName == 'Date' && Date != '') {
        $('#spnIDate').text('');
    }
    else if (FieldName == 'Gender' && Gender != '') {
        $('#spnIGender').text('');
    }

    /* else{
        $('#spnIArea').text('');
    } */
}





// setTimeout(() => {
//     $("#SubitForm").validate(
//         {
//             rules: {
//                 IName: {
//                     required: true,
//                 },
//                 INumber: { required: true },
//                 IEmail: {
//                     required: true,

//                 },
//                 IArea: { required: true },



//             },

//             messages: {
//                 IName: { required: "Please enter name" },
//                 INumber: { required: "Please enter number" },
//                 IEmail: { required: "Please enter Key email" },
//                 IArea: { required: "Please enter your address" },


//             },

//             errorPlacement: function ($error, $element) {
//                 let name = $element.attr("name");
//                 $("#spn" + name).append($error);
//             },

//             submitHandler: function (form) {

//                 Name = $('#IName').val();
//                 Number = $('#INumber').val();
//                 Email = $('#IEmail').val();
//                 area = $('#IArea').val();


//                 $('#name').text(Name);
//                 $('#number').text(Number);
//                 $('#Email').text(Email);
//                 $('#area').text(area);


//                 $('#IName').val('');
//                 $('#INumber').val('');
//                 $('#IEmail').val('');
//                 $('#IArea').val('');
//             }

//         }
//     );
// }, 500);
$(document).ready(function () {
    // Counter for dynamic element IDs
    var counter = 2;

    // Add new record input fields
    $("#addRecord").on("click", function () {
        var newRecord = $("#recordsContainer .record:first").clone();
        newRecord.find("input").each(function () {
            // Update input IDs and clear values
            var oldID = $(this).attr("id");
            var newID = oldID.slice(0, -1) + counter;
            $(this).attr("id", newID).val("");
        });

        // Append the new record to the container
        $("#recordsContainer").append(newRecord);

        // Increment the counter for the next record
        counter++;
    });

    // Handle form submission
    $("#recordsForm").on("submit", function (event) {
        event.preventDefault();

        // Serialize form data as an array
        var formData = $(this).serializeArray();

        // Log the serialized data to the console (you can send it to the server here)
        console.log(formData);
    });
});


