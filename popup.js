document.addEventListener("DOMContentLoaded", () => {
    const idNumberInput = document.getElementById("idNumberInput");
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", () => {
        const idNumber = idNumberInput.value;
        chrome.storage.sync.set({ "idNumber": idNumber }, () => {
            // Update the popup content
            const body = document.body;
            body.innerHTML = "<h1>Saved successfully!</h1><p>Now log in to Moodle or Personal Info websites.</p>";
            body.style.padding = "20px";
            body.style.textAlign = "center";
            body.style.fontFamily = "'Segoe UI Semilight', Arial, sans-serif";
        });
    });
});
