function btnClick(){
    let btn

    var name=document.getElementById("name").value.trim()
    var mail=document.getElementById("email").value.trim()
    var Phone=document.getElementById('phone').value.trim()
    var Message=document.getElementById("message").value.trim()

    if(name===""||mail===""||Phone===""||Message==="")
    {
        alert("Please fill all fields")
        btn=false
        
    }else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
        alert("Please re-check at email")
        btn=false

     }else if(!/^\d+$/.test(Phone)){
        alert("Please enter your phone number correctly")
        btn=false
     }

    return btn;

}