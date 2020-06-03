// OTHER ADDRESS TYPE 
    var AddType = document.getElementById("addressType.form-control");
    var otherAdd = document.getElementById("otherAddType.form-control");//hidden other address text field 

    AddType.addEventListener("show", function(){
        if (AddType.value = "other"){
            otherAdd.setAttribute("class", "show");
        }else {
            otherAdd.setAttribute("class", "hidden");
        }
    }, false);

    document.getElementById("addressType").addEventListener("show", "otherAddType");

//hide and show crust drop downs
$('.dropHandToss').hide();
$('.dropThinCrust').hide();
$('.dropNY').hide();
$('.dropGFree').hide();

$('#customRadio1').click(() => {
    $('.dropHandToss').show();
    $('.dropThinCrust').hide();
    $('.dropNY').hide();
    $('.dropGFree').hide();
})
$('#customRadio2').click(() => {
    $('.dropHandToss').hide();
    $('.dropThinCrust').show();
    $('.dropNY').hide();
    $('.dropGFree').hide();
})
$('#customRadio3').click(() => {
    $('.dropHandToss').hide();
    $('.dropThinCrust').hide();
    $('.dropNY').show();
    $('.dropGFree').hide();
})
$('#customRadio4').click(() => {
    $('.dropHandToss').hide();
    $('.dropThinCrust').hide();
    $('.dropNY').hide();
    $('.dropGFree').show();
})

// SAME AS DELIVERY
$('#sameinfo').click(()=> {
    "use strict";
    $('#inputName2').val($('#inputName').val());
    $('#inputAddress2').val($('#inputAddress').val());
    $('#inputAddress01').val($('#inputAddress0').val());
    $('#inputCity2').val($('#inputCity').val());
    $('#inputState2').val($('#inputState').val());
    $('#inputZip2').val($('#inputZip').val());
});
// function FillBilling(f) {
//     if(f.sameinfo.checked == true) {
//       f.inputName2.value = f.inputName.value;
//       f.inputAddress2.value = f.inputAddress.value;
//       f.inputAddress01.value = f.inputAddress0.value;
//       f.inputCity2.value = f.inputCity.value;
//       f.inputState2.value = f.inputState.value;
//       f.inputZip2.value = f.inputZip.value;
//     }
//   }

   //REGEX
   let validation = {
    name: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
    address: /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Drive|Road|Boulevard|Lane|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/,
    city:/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    state:/^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
    zip: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone:  /^\D?([2-9]{1})(\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
    cvv: /^[0-9]{3,4}$/,
    visa:  /^4[0-9]{12}(?:[0-9]{3})?$/,
    mc: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$ /,
    amex: /^3[47][0-9]{13}$/,
    ccn:  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,
};

    
