chrome.storage.sync.get("idNumber", (data) => {
    const idNumber = data.idNumber;

    // First website
    const idNumberFieldFirst = document.getElementById('Ecom_User_Pid');
    const loginButtonFirst = document.getElementById('loginButton');

    if (idNumber && idNumberFieldFirst && loginButtonFirst) {
        // Fill in the ID number field
        idNumberFieldFirst.value = idNumber;

        // Trigger events for the ID number field
        ['input', 'change', 'blur'].forEach((event) => {
            idNumberFieldFirst.dispatchEvent(new Event(event, { bubbles: true, cancelable: true }));
        });
    }

    // Second website
    const idNumberFieldSecond = document.getElementsByName('txtId')[0];
    const loginButtonSecond = document.querySelector('input[name="enter"]');

    if (idNumber && idNumberFieldSecond && loginButtonSecond) {
        // Fill in the ID number field
        idNumberFieldSecond.value = idNumber;

        // Trigger events for the ID number field
        ['input', 'change', 'blur'].forEach((event) => {
            idNumberFieldSecond.dispatchEvent(new Event(event, { bubbles: true, cancelable: true }));
        });
    }
});
