





const from=document.getElementById('form');
const name=document.getElementById('name');
const number_=document.getElementById('number');
const email=document.getElementById('email');

from.addEventListener('submit',function(object)
    {
        object.preventDefault();

        cheakInputs();
        // window.alert("hte");
    });

function cheakInputs()
    {
        var nameval=name.value;
        var numberval=number.value;
        var emailval=email.value; 
        if (nameval==='') 
            {
                setError("Name","Name con't be blank");
            }
        else
            {
                setSuccess("Name");
            } 
        if (numberval==='')
            {
                setError("Number","Number con't be blank");
            } 
        else
            {
                setSuccess("Number");
            }
        if (emailval==='')
            {
                setError("Email","Email con't be blank");
            }
        else
            {
                setSuccess("Email");
            }    
        
    }
function setError(inputs,message)
        {
            var temp=inputs;
             
            switch(inputs)
                {
                    case "Name":
                        var form_control=name.parentElement;
                        break;
                    case "Number":
                        var form_control=number.parentElement;
                        break;
                    case "Email":
                        var form_control=email.parentElement;
                        break;
                }
            var small=form_control.querySelector('small');
            small.innerText=message;
            form_control.className="form_control error";
        }
function setSuccess(inputs)
    {
        var temp=inputs;
        switch(inputs)
            {
                case "Name":
                    var form_control=name.parentElement;
                    break;
                case "Number":
                    var form_control=number.parentElement;
                    break;
                case "Email":
                    var form_control=email.parentElement;
                    break;             
            }
        var small=form_control.querySelector('small');
        form_control.className="form_control success";
        document.form_control[1].focus;
    }



    $(document).ready(function()
    {
        $("button").submit(function()
            {       
                window.alert("lkjhgfdsdfg");
            });
    });