// OTHER ADDRESS TYPE
    dropSelect.addEventListener("change", function() {
        if (dropSelect.options.value = "other"){
            extra.setAttribute("class", "show");
        } else {
            extra.setAttribute("class", "hidden");
        }
    }, false);

let crustType = {
    HT : "Hand Tossed",
    TC : "Thin Crust",
    NYS : "New York Style",
    GF : "Gluten Free"
};

let sizeCost = {
    "Hand Tossed": [
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
    "Thin Crust": [
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
    "New York Style": [
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
    "Gluten Free": [
        {
            size: "Small",
            cost: 10.99,
            check: true
        }
    ]
};
