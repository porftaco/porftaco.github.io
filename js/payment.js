var stripe = Stripe('pk_live_hzeDUSfPT7lfps3uGU5di9fb00z3pl9rRr');
var elements = stripe.elements();

let name = $('input[name ="name"')
let email = $('input[name ="email"')
let street = $('input[placeholder ="Stree𝐭"')
let zip = $('input[placeholder ="Postᴄode"')
let city = $('input[placeholder ="Citʏ"')
let country = $('select[placeholder ="Countrʏ"')
let answer = $('input[name ="d632bsfx8"')

let customer_type = "";
let isVatRequired = false;

const countryList = [{ "Code": "US", "Name": "United States" }, { "Code": "GB", "Name": "United Kingdom" }, { "Code": "DE", "Name": "Germany" }, { "Code": "AF", "Name": "Afghanistan" }, { "Code": "AX", "Name": "\u00c5land Islands" }, { "Code": "AL", "Name": "Albania" }, { "Code": "DZ", "Name": "Algeria" }, { "Code": "AS", "Name": "American Samoa" }, { "Code": "AD", "Name": "Andorra" }, { "Code": "AO", "Name": "Angola" }, { "Code": "AI", "Name": "Anguilla" }, { "Code": "AQ", "Name": "Antarctica" }, { "Code": "AG", "Name": "Antigua and Barbuda" }, { "Code": "AR", "Name": "Argentina" }, { "Code": "AM", "Name": "Armenia" }, { "Code": "AW", "Name": "Aruba" }, { "Code": "AU", "Name": "Australia" }, { "Code": "AT", "Name": "Austria" }, { "Code": "AZ", "Name": "Azerbaijan" }, { "Code": "BS", "Name": "Bahamas" }, { "Code": "BH", "Name": "Bahrain" }, { "Code": "BD", "Name": "Bangladesh" }, { "Code": "BB", "Name": "Barbados" }, { "Code": "BY", "Name": "Belarus" }, { "Code": "BE", "Name": "Belgium" }, { "Code": "BZ", "Name": "Belize" }, { "Code": "BJ", "Name": "Benin" }, { "Code": "BM", "Name": "Bermuda" }, { "Code": "BT", "Name": "Bhutan" }, { "Code": "BO", "Name": "Bolivia, Plurinational State of" }, { "Code": "BQ", "Name": "Bonaire, Sint Eustatius and Saba" }, { "Code": "BA", "Name": "Bosnia and Herzegovina" }, { "Code": "BW", "Name": "Botswana" }, { "Code": "BV", "Name": "Bouvet Island" }, { "Code": "BR", "Name": "Brazil" }, { "Code": "IO", "Name": "British Indian Ocean Territory" }, { "Code": "BN", "Name": "Brunei Darussalam" }, { "Code": "BG", "Name": "Bulgaria" }, { "Code": "BF", "Name": "Burkina Faso" }, { "Code": "BI", "Name": "Burundi" }, { "Code": "KH", "Name": "Cambodia" }, { "Code": "CM", "Name": "Cameroon" }, { "Code": "CA", "Name": "Canada" }, { "Code": "CV", "Name": "Cape Verde" }, { "Code": "KY", "Name": "Cayman Islands" }, { "Code": "CF", "Name": "Central African Republic" }, { "Code": "TD", "Name": "Chad" }, { "Code": "CL", "Name": "Chile" }, { "Code": "CN", "Name": "China" }, { "Code": "CX", "Name": "Christmas Island" }, { "Code": "CC", "Name": "Cocos (Keeling) Islands" }, { "Code": "CO", "Name": "Colombia" }, { "Code": "KM", "Name": "Comoros" }, { "Code": "CG", "Name": "Congo" }, { "Code": "CD", "Name": "Congo, the Democratic Republic of the" }, { "Code": "CK", "Name": "Cook Islands" }, { "Code": "CR", "Name": "Costa Rica" }, { "Code": "CI", "Name": "C\u00f4te d'Ivoire" }, { "Code": "HR", "Name": "Croatia" }, { "Code": "CU", "Name": "Cuba" }, { "Code": "CW", "Name": "Cura\u00e7ao" }, { "Code": "CY", "Name": "Cyprus" }, { "Code": "CZ", "Name": "Czech Republic" }, { "Code": "DK", "Name": "Denmark" }, { "Code": "DJ", "Name": "Djibouti" }, { "Code": "DM", "Name": "Dominica" }, { "Code": "DO", "Name": "Dominican Republic" }, { "Code": "EC", "Name": "Ecuador" }, { "Code": "EG", "Name": "Egypt" }, { "Code": "SV", "Name": "El Salvador" }, { "Code": "GQ", "Name": "Equatorial Guinea" }, { "Code": "ER", "Name": "Eritrea" }, { "Code": "EE", "Name": "Estonia" }, { "Code": "ET", "Name": "Ethiopia" }, { "Code": "FK", "Name": "Falkland Islands (Malvinas)" }, { "Code": "FO", "Name": "Faroe Islands" }, { "Code": "FJ", "Name": "Fiji" }, { "Code": "FI", "Name": "Finland" }, { "Code": "FR", "Name": "France" }, { "Code": "GF", "Name": "French Guiana" }, { "Code": "PF", "Name": "French Polynesia" }, { "Code": "TF", "Name": "French Southern Territories" }, { "Code": "GA", "Name": "Gabon" }, { "Code": "GM", "Name": "Gambia" }, { "Code": "GE", "Name": "Georgia" }, { "Code": "GH", "Name": "Ghana" }, { "Code": "GI", "Name": "Gibraltar" }, { "Code": "GR", "Name": "Greece" }, { "Code": "GL", "Name": "Greenland" }, { "Code": "GD", "Name": "Grenada" }, { "Code": "GP", "Name": "Guadeloupe" }, { "Code": "GU", "Name": "Guam" }, { "Code": "GT", "Name": "Guatemala" }, { "Code": "GG", "Name": "Guernsey" }, { "Code": "GN", "Name": "Guinea" }, { "Code": "GW", "Name": "Guinea-Bissau" }, { "Code": "GY", "Name": "Guyana" }, { "Code": "HT", "Name": "Haiti" }, { "Code": "HM", "Name": "Heard Island and McDonald Islands" }, { "Code": "VA", "Name": "Holy See (Vatican City State)" }, { "Code": "HN", "Name": "Honduras" }, { "Code": "HK", "Name": "Hong Kong" }, { "Code": "HU", "Name": "Hungary" }, { "Code": "IS", "Name": "Iceland" }, { "Code": "IN", "Name": "India" }, { "Code": "ID", "Name": "Indonesia" }, { "Code": "IR", "Name": "Iran, Islamic Republic of" }, { "Code": "IQ", "Name": "Iraq" }, { "Code": "IE", "Name": "Ireland" }, { "Code": "IM", "Name": "Isle of Man" }, { "Code": "IL", "Name": "Israel" }, { "Code": "IT", "Name": "Italy" }, { "Code": "JM", "Name": "Jamaica" }, { "Code": "JP", "Name": "Japan" }, { "Code": "JE", "Name": "Jersey" }, { "Code": "JO", "Name": "Jordan" }, { "Code": "KZ", "Name": "Kazakhstan" }, { "Code": "KE", "Name": "Kenya" }, { "Code": "KI", "Name": "Kiribati" }, { "Code": "KP", "Name": "Korea, Democratic People's Republic of" }, { "Code": "KR", "Name": "Korea, Republic of" }, { "Code": "KW", "Name": "Kuwait" }, { "Code": "KG", "Name": "Kyrgyzstan" }, { "Code": "LA", "Name": "Lao People's Democratic Republic" }, { "Code": "LV", "Name": "Latvia" }, { "Code": "LB", "Name": "Lebanon" }, { "Code": "LS", "Name": "Lesotho" }, { "Code": "LR", "Name": "Liberia" }, { "Code": "LY", "Name": "Libya" }, { "Code": "LI", "Name": "Liechtenstein" }, { "Code": "LT", "Name": "Lithuania" }, { "Code": "LU", "Name": "Luxembourg" }, { "Code": "MO", "Name": "Macao" }, { "Code": "MK", "Name": "Macedonia, the Former Yugoslav Republic of" }, { "Code": "MG", "Name": "Madagascar" }, { "Code": "MW", "Name": "Malawi" }, { "Code": "MY", "Name": "Malaysia" }, { "Code": "MV", "Name": "Maldives" }, { "Code": "ML", "Name": "Mali" }, { "Code": "MT", "Name": "Malta" }, { "Code": "MH", "Name": "Marshall Islands" }, { "Code": "MQ", "Name": "Martinique" }, { "Code": "MR", "Name": "Mauritania" }, { "Code": "MU", "Name": "Mauritius" }, { "Code": "YT", "Name": "Mayotte" }, { "Code": "MX", "Name": "Mexico" }, { "Code": "FM", "Name": "Micronesia, Federated States of" }, { "Code": "MD", "Name": "Moldova, Republic of" }, { "Code": "MC", "Name": "Monaco" }, { "Code": "MN", "Name": "Mongolia" }, { "Code": "ME", "Name": "Montenegro" }, { "Code": "MS", "Name": "Montserrat" }, { "Code": "MA", "Name": "Morocco" }, { "Code": "MZ", "Name": "Mozambique" }, { "Code": "MM", "Name": "Myanmar" }, { "Code": "NA", "Name": "Namibia" }, { "Code": "NR", "Name": "Nauru" }, { "Code": "NP", "Name": "Nepal" }, { "Code": "NL", "Name": "Netherlands" }, { "Code": "NC", "Name": "New Caledonia" }, { "Code": "NZ", "Name": "New Zealand" }, { "Code": "NI", "Name": "Nicaragua" }, { "Code": "NE", "Name": "Niger" }, { "Code": "NG", "Name": "Nigeria" }, { "Code": "NU", "Name": "Niue" }, { "Code": "NF", "Name": "Norfolk Island" }, { "Code": "MP", "Name": "Northern Mariana Islands" }, { "Code": "NO", "Name": "Norway" }, { "Code": "OM", "Name": "Oman" }, { "Code": "PK", "Name": "Pakistan" }, { "Code": "PW", "Name": "Palau" }, { "Code": "PS", "Name": "Palestine, State of" }, { "Code": "PA", "Name": "Panama" }, { "Code": "PG", "Name": "Papua New Guinea" }, { "Code": "PY", "Name": "Paraguay" }, { "Code": "PE", "Name": "Peru" }, { "Code": "PH", "Name": "Philippines" }, { "Code": "PN", "Name": "Pitcairn" }, { "Code": "PL", "Name": "Poland" }, { "Code": "PT", "Name": "Portugal" }, { "Code": "PR", "Name": "Puerto Rico" }, { "Code": "QA", "Name": "Qatar" }, { "Code": "RE", "Name": "R\u00e9union" }, { "Code": "RO", "Name": "Romania" }, { "Code": "RU", "Name": "Russian Federation" }, { "Code": "RW", "Name": "Rwanda" }, { "Code": "BL", "Name": "Saint Barth\u00e9lemy" }, { "Code": "SH", "Name": "Saint Helena, Ascension and Tristan da Cunha" }, { "Code": "KN", "Name": "Saint Kitts and Nevis" }, { "Code": "LC", "Name": "Saint Lucia" }, { "Code": "MF", "Name": "Saint Martin (French part)" }, { "Code": "PM", "Name": "Saint Pierre and Miquelon" }, { "Code": "VC", "Name": "Saint Vincent and the Grenadines" }, { "Code": "WS", "Name": "Samoa" }, { "Code": "SM", "Name": "San Marino" }, { "Code": "ST", "Name": "Sao Tome and Principe" }, { "Code": "SA", "Name": "Saudi Arabia" }, { "Code": "SN", "Name": "Senegal" }, { "Code": "RS", "Name": "Serbia" }, { "Code": "SC", "Name": "Seychelles" }, { "Code": "SL", "Name": "Sierra Leone" }, { "Code": "SG", "Name": "Singapore" }, { "Code": "SX", "Name": "Sint Maarten (Dutch part)" }, { "Code": "SK", "Name": "Slovakia" }, { "Code": "SI", "Name": "Slovenia" }, { "Code": "SB", "Name": "Solomon Islands" }, { "Code": "SO", "Name": "Somalia" }, { "Code": "ZA", "Name": "South Africa" }, { "Code": "GS", "Name": "South Georgia and the South Sandwich Islands" }, { "Code": "SS", "Name": "South Sudan" }, { "Code": "ES", "Name": "Spain" }, { "Code": "LK", "Name": "Sri Lanka" }, { "Code": "SD", "Name": "Sudan" }, { "Code": "SR", "Name": "Suriname" }, { "Code": "SJ", "Name": "Svalbard and Jan Mayen" }, { "Code": "SZ", "Name": "Swaziland" }, { "Code": "SE", "Name": "Sweden" }, { "Code": "CH", "Name": "Switzerland" }, { "Code": "SY", "Name": "Syrian Arab Republic" }, { "Code": "TW", "Name": "Taiwan, Province of China" }, { "Code": "TJ", "Name": "Tajikistan" }, { "Code": "TZ", "Name": "Tanzania, United Republic of" }, { "Code": "TH", "Name": "Thailand" }, { "Code": "TL", "Name": "Timor-Leste" }, { "Code": "TG", "Name": "Togo" }, { "Code": "TK", "Name": "Tokelau" }, { "Code": "TO", "Name": "Tonga" }, { "Code": "TT", "Name": "Trinidad and Tobago" }, { "Code": "TN", "Name": "Tunisia" }, { "Code": "TR", "Name": "Turkey" }, { "Code": "TM", "Name": "Turkmenistan" }, { "Code": "TC", "Name": "Turks and Caicos Islands" }, { "Code": "TV", "Name": "Tuvalu" }, { "Code": "UG", "Name": "Uganda" }, { "Code": "UA", "Name": "Ukraine" }, { "Code": "AE", "Name": "United Arab Emirates" }, { "Code": "UM", "Name": "United States Minor Outlying Islands" }, { "Code": "UY", "Name": "Uruguay" }, { "Code": "UZ", "Name": "Uzbekistan" }, { "Code": "VU", "Name": "Vanuatu" }, { "Code": "VE", "Name": "Venezuela, Bolivarian Republic of" }, { "Code": "VN", "Name": "Viet Nam" }, { "Code": "VG", "Name": "Virgin Islands, British" }, { "Code": "VI", "Name": "Virgin Islands, U.S." }, { "Code": "WF", "Name": "Wallis and Futuna" }, { "Code": "EH", "Name": "Western Sahara" }, { "Code": "YE", "Name": "Yemen" }, { "Code": "ZM", "Name": "Zambia" }, { "Code": "ZW", "Name": "Zimbabwe" }]


var card = elements.create('card', {
    style: {
        base: {
            color: 'white',
            iconColor: 'white',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: 'white'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
});
card.mount('#card-element');

var select = $('select[placeholder="Countrʏ"')

countryList.forEach(function (e) {
    var o = new Option("option text", e.Code);
    $(o).text(e.Name);
    select.append(o);
});

function refreshStock() {
    let pw = getUrlVars().pw;
    let url = "https://payment.gammapreme.com/inStock?id=" + (pw != undefined && pw != null ? pw : 1)
    fetch(url).then(async (res) => {
        let data = await res.json();
        if (data.inStock) {
            $('#purchase-btn').prop('disabled', false);
            $('#purchase-btn').html("Buy " + data.priceText);
            if (data.question) {
                setQuestion(data.question);
            } else {
                disableQuestion();
            }
        } else {
            disable()
        }
    }).catch((error) => {
        console.log(error);
        disable();
    })
}

function setQuestion(question) {
    $('input[name ="d632bsfx8"]').attr("placeholder", question)
}

function disableQuestion() {
    $('input[name ="d632bsfx8"]').hide()
}

function disable() {
    $('#purchase-btn').prop('disabled', true);
}

//Field validation
$('input[class ="popup-text-field"').on('input', function () {
    validateForm()
});

function validateForm() {
    updateCustomerType()
    if (validateName() && validateEmail() && validateStreet() && validateCity() && validatePostcode() && customer_type != null) {
        document.getElementById("outcome").style.display = "none";
        $("#checkout").attr("disabled", false);
        $("#checkout").css('background', '#f8b133');
        $("#checkout").css('color', 'white');
        return true;
    } else {
        $("#checkout").css('background', '#ffffff');
        $("#checkout").css('color', 'black');
        $("#checkout").attr("disabled", true);
        return false;
    }
}

function validateName() {
    if (name.val().length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateEmail() {
    let emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailReg.test(email.val())) {
        return true;
    } else {
        return false;
    }
}

function validateStreet() {
    if (street.val().length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateCity() {
    let cityReg = /^[A-Za-z0-9 _#äÄöÖüÜß]*[A-Za-z0-9][A-Za-z0-9 _#äÄöÖüÜß]*$/g
    if (cityReg.test(city.val())) {
        return true;
    } else {
        return false;
    }
}

function validatePostcode() {
    let zipReg = /^[A-Za-z0-9 _#]*[A-Za-z0-9][A-Za-z0-9 _#]*$/g
    if (zipReg.test(zip.val())) {
        return true;
    } else {
        return false;
    }
}

function validateCountry() {
    if (country.val()) {
        return true;
    } else {
        return false;
    }
}

//Buy process

function updateCustomerType() {
    let selected = $('span.selected').text()

    switch (selected) {
        case "Individual":
            isVatRequired = false;
            customer_type = "private"
            break;
        case "Business":
            customer_type = ""
            break;
        case "BusinessPrivate Usage":
            isVatRequired = false;
            customer_type = "businessPrivate"
            break;
        case "BusinessBusiness Usage":
            isVatRequired = true;
            customer_type = "businessBusiness"
            break;
    }
}

function buy() {
    let pw = getUrlVars().pw;
    let id = (pw != undefined && pw != null ? pw : 1);
    updateCustomerType()
    let paymentData = { "product_id": id, "email": email.val(), "answer": answer.val(), customer_type: customer_type, vat: isVatRequired ? ($(".business-vat").val()) : null, companyName: $(".business-name").val() != "" ? $(".business-name").val() : null }
    //paymentData.payload = preparePayload(paymentData);
    document.getElementById("outcome").style.display = "none";
    fetch("https://payment.gammapreme.com/buy", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(paymentData)
    }).then(async (res) => {
        let json = await res.json();
        if (json.success && json.client_secret != null) {
            stripe.confirmCardPayment(json.client_secret, {
                payment_method: {
                    card: card, billing_details: {
                        name: name.val(),
                        email: email.val(), address: {
                            line1: street.val(),
                            postal_code: zip.val(),
                            city: city.val(),
                            country: country.val(),
                        }
                    }
                }
            }).then(function (result) {
                if (result.error) {
                    // Show error to your customer (e.g., insufficient funds)
                    console.log(result.error.message);
                    card.update({ disabled: false });
                    $("#checkout").prop('value', 'Submit')
                    $("#checkout").attr("disabled", false);
                    $("#checkout").css('color', 'white');
                    document.getElementById("outcome").style.display = "inline";
                    document.getElementById("error").innerText = result.error.message;
                    document.getElementById("error").style.display = "inline";
                    document.getElementById("success").style.display = "none";
                } else {
                    // The payment has been processed!
                    if (result.paymentIntent.status === 'succeeded') {
                        console.log("success");
                        $("#checkout").prop('value', 'Welcome to gammaPreme')
                        $("#checkout").css('color', 'white');
                        $("#checkout").css('background-color', '#02b002');
                        document.getElementById("outcome").style.display = "inline";
                        document.getElementById("success").style.display = "inline";
                        document.getElementById("error").style.display = "none";
                    }
                }
            });
        } else {
            card.update({ disabled: false });
            $("#checkout").prop('value', 'Submit')
            $("#checkout").css('color', 'white');
            document.getElementById("outcome").style.display = "inline";
            document.getElementById("error").innerText = json.error != "wrong answer" ? "Sold out, your card was not charged." : "Wrong answer.";
            document.getElementById("error").style.display = "inline";
            document.getElementById("success").style.display = "none";
        }
    })
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

$("#checkout").on('click', function () {
    card.update({ disabled: true })
    if (!document.getElementById("checkout").disabled) { buy() }
    $("#checkout").prop('value', 'Processing...')
    $("#checkout").attr("disabled", true);
    $("#checkout").css('color', 'white');
})

document
    .getElementById("purchase-btn")
    .addEventListener("click", function () {
        if (!document.getElementById("purchase-btn").disabled) popup.classList.toggle("hidden");
    });

refreshStock();

setInterval(refreshStock, 2500);