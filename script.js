$(document).ready(function(){
    $("#submit-form").validate({
        errorClass:'errors',
        rules:{
            name:{
                required:true,
                minlength:4
            },
            place:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                minlength:4,
                email:true,
            },
            mobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            textarea:{
                required:true,
                minlength:4,
                maxlength:50,
            }
        },

        
    })
})




