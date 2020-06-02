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

// SAME AS DELIVERY
function FillBilling(f) {
    if(f.sameinfo.checked == true) {
      f.inputName2.value = f.inputName.value;
      f.inputAddress2.value = f.inputAddress.value;
      f.inputAddress01.value = f.inputAddress0.value;
      f.inputCity2.value = f.inputCity.value;
      f.inputState2.value = f.inputState.value;
      f.inputZip2.value = f.inputZip.value;
    }
  }


// let crustType = {
//     HT : "Hand Tossed",
//     TC : "Thin Crust",
//     NY : "New York Style",
//     GF : "Gluten Free"
// };

// let sizeCost = {
//     "Hand Tossed": [
//         {
//             size: "Small",
//             cost: 9.99
//         },
//         {
//             size: "Medium",
//             cost: 12.99,
//             // check: true
//         },
//         {
//             size: "Large",
//             cost: 14.99
//         }
//     ],
//     "Thin Crust": [
//         {
//             size: "Medium",
//             cost: 11.99,
//             check: true
//         },
//         {
//             size: "Large",
//             cost: 13.99
//         }
//     ],
//     "New York Style": [
//         {
//             size: "Large",
//             cost: 14.99,
//             check: true
//         },
//         {
//             size: "Extra Large",
//             cost: 19.99
//         }
//     ],
//     "Gluten Free": [
//         {
//             size: "Small",
//             cost: 10.99,
//             check: true
//         }
//     ]
// };


    
