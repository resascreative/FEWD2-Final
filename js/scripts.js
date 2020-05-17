// OTHER ADDRESS TYPE 
    let AddType = document.getElementById("addressType");
    let otherAdd = document.getElementById("otherAddType");//hidden other address text field 

    AddType.addEventListener("change", function(){
        if (AddType.value = "other"){
            otherAdd.setAttribute("class", "show");
        }else {
            otherAdd.setAttribute("class", "hidden");
        }
    }, false);





let crustType = {
    HT : "Hand Tossed",
    TC : "Thin Crust",
    NYS : "New York Style",
    GF : "Gluten Free"
};

let sizeCost = {
    "HandTossed": [
        {
            size: "Small",
            cost: 9.99
        },
        {
            size: "Medium",
            cost: 12.99,
            // check: true
        },
        {
            size: "Large",
            cost: 14.99
        }
    ],
    "ThinCrust": [
        {
            size: "Medium",
            cost: 11.99,
            check: true
        },
        {
            size: "Large",
            cost: 13.99
        }
    ],
    "NewYorkStyle": [
        {
            size: "Large",
            cost: 14.99,
            check: true
        },
        {
            size: "Extra Large",
            cost: 19.99
        }
    ],
    "GlutenFree": [
        {
            size: "Small",
            cost: 10.99,
            check: true
        }
    ]
};
