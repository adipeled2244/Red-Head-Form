function checkCheckboxes() {
    for (var i = 0; i < document.getElementsByClassName("checkbox_jokes").length; i++) {
        if (document.getElementsByClassName("checkbox_jokes")[i].checked)
            return true;
    }
    return false;
}

function checkName() {

    var str = document.getElementById("name").value;

    if (str.endsWith("הג'ינג'י") && str.includes(" ") && str.length > 9)
        return true;
    else if (str.endsWith("הג'ינג'ית") && str.includes(" ") && str.length > 10)
        return true;
    else
        return false;
}

function checkPassword() {

    var str = document.getElementById("pass").value;
    if (str.startsWith("orange"))
        return true;
    else
        return false;
}

function checkPhone() {

    var str = document.getElementById("phone").value;
    console.log(str.startsWith("054"));
    if (str.startsWith("054"))
        return true;
    else
        return false;
}


function checkValid() {
    if (!checkCheckboxes()) {
        alert("בטוח משהו אחד לפחות מעליב אותך, תבחר אחד");
        return false;
    }
    if (!checkName()) {
        alert("מה אתה לא ג'ינג'י? תרשום שם מלא לפי הפורמט המבוקש : שם + הג'ינג'י/ת");
        return false;
    }
    if (!checkPassword()) {
        alert(" orange :סיסמא של כתומים מתחילה במילה ");
        return false;
    }
    if (!checkPhone()) {
        alert(" ג'ינג'ים מחוייבים להיות בחברת אורנג', תחליף חברה ");
        return false;
    }
    return true;
}