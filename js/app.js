let templatePreview = document.getElementById("template-preview");
let editorControls = document.getElementById("editor-controls");
let templateSelect = document.getElementById("template-select");
let mobileView = document.getElementById("mobile-view");
let desktopView = document.getElementById("desktop-view");


function createTextEditor(element, labelText) {

    let label = document.createElement("label");
    label.textContent = labelText;

    let input = document.createElement("input");
    input.type = "text";

    input.value = element.textContent.trim();

    input.addEventListener("input", () => {
        element.textContent = input.value;
    });

    editorControls.appendChild(label);
    editorControls.appendChild(input);
}


function createTextareaEditor(element, labelText) {

    let label = document.createElement("label");
    label.textContent = labelText;

    let textarea = document.createElement("textarea");

    textarea.value = element.textContent.trim();

    textarea.addEventListener("input", () => {
        element.textContent = textarea.value;
    });

    editorControls.appendChild(label);
    editorControls.appendChild(textarea);
}


function loadTemplate(templatePath) {

    fetch(templatePath)
        .then((response) => response.text())
        .then((html) => {

            // Display selected template
            templatePreview.innerHTML = html;

            editorControls.innerHTML = "";

            let editableElements =
                templatePreview.querySelectorAll("[data-edit]");


            editableElements.forEach((element) => {

                let type = element.dataset.edit;


                // HEADING
                if (type === "heading") {

                    createTextEditor(element, "Email Heading");


                    let label = document.createElement("label");
                    label.textContent = "Heading Color";

                    let input = document.createElement("input");
                    input.type = "color";

                    editorControls.appendChild(label);
                    editorControls.appendChild(input);

                    input.addEventListener("input", () => {
                        element.style.color = input.value;
                    });


                    let sizeLabel = document.createElement("label");
                    sizeLabel.textContent = "Heading Size";

                    let sizeInput = document.createElement("input");
                    sizeInput.type = "range";
                    sizeInput.min = "16";
                    sizeInput.max = "60";
                    sizeInput.value = "32";

                    editorControls.appendChild(sizeLabel);
                    editorControls.appendChild(sizeInput);

                    sizeInput.addEventListener("input", () => {
                        element.style.fontSize =
                            sizeInput.value + "px";
                    });
                }


                // PARAGRAPH
                if (type === "paragraph") {

                    createTextareaEditor(element, "Paragraph");
                }


                // BUTTON
                if (type === "button") {

                    createTextEditor(element, "Button");


                    let label = document.createElement("label");
                    label.textContent = "Button Link";

                    let input = document.createElement("input");
                    input.type = "text";

                    input.value =
                        element.getAttribute("href");

                    editorControls.appendChild(label);
                    editorControls.appendChild(input);

                    input.addEventListener("input", () => {
                        element.setAttribute(
                            "href",
                            input.value
                        );
                    });


                    // Button background color
                    let bgLabel = document.createElement("label");
                    bgLabel.textContent =
                        "Button Background Color";

                    let bgInput = document.createElement("input");
                    bgInput.type = "color";

                    editorControls.appendChild(bgLabel);
                    editorControls.appendChild(bgInput);

                    bgInput.addEventListener("input", () => {
                        element.style.backgroundColor =
                            bgInput.value;
                    });


                    // Button text color
                    let textColorLabel =
                        document.createElement("label");

                    textColorLabel.textContent =
                        "Button Text Color";

                    let textColorInput =
                        document.createElement("input");

                    textColorInput.type = "color";

                    editorControls.appendChild(textColorLabel);
                    editorControls.appendChild(textColorInput);

                    textColorInput.addEventListener("input", () => {
                        element.style.color =
                            textColorInput.value;
                    });
                }


                // LOGO
                if (type === "logo") {

                    let label = document.createElement("label");
                    label.textContent = "Logo";

                    editorControls.appendChild(label);


                    let input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";

                    editorControls.appendChild(input);


                    input.addEventListener("change", () => {

                        let img = input.files[0];

                        if (img) {

                            let reader = new FileReader();

                            reader.addEventListener("load", () => {

                                let image = reader.result;

                                element.setAttribute(
                                    "src",
                                    image
                                );
                            });

                            reader.readAsDataURL(img);
                        }
                    });
                }


                // BANNER
                if (type === "banner") {

                    let label = document.createElement("label");
                    label.textContent = "Banner";

                    editorControls.appendChild(label);


                    let input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";

                    editorControls.appendChild(input);


                    input.addEventListener("change", () => {

                        let img = input.files[0];

                        if (img) {

                            let reader = new FileReader();

                            reader.addEventListener("load", () => {

                                let image = reader.result;

                                element.setAttribute(
                                    "src",
                                    image
                                );
                            });

                            reader.readAsDataURL(img);
                        }
                    });
                }


                // EMAIL BACKGROUND
                // EMAIL BACKGROUND

                if (type === "email-background") {

                    let bgLabel = document.createElement("label");
                    bgLabel.textContent = "Email Background Color";

                    let bgInput = document.createElement("input");
                    bgInput.type = "color";

                    editorControls.appendChild(bgLabel);
                    editorControls.appendChild(bgInput);

                    bgInput.addEventListener("input", () => {

                        element.style.backgroundColor = bgInput.value;

                        let emailCells = element.querySelectorAll("td");

                        emailCells.forEach(cell => {
                            cell.style.backgroundColor = bgInput.value;
                        });

                    });
                }

            });
        });
}


// Change template
templateSelect.addEventListener("change", () => {

    let selectedTemplate = templateSelect.value;

    loadTemplate(selectedTemplate);
});


// Load default template
loadTemplate("templates/sale.html");


// View
mobileView.addEventListener("click", () => {
    templatePreview.style.width = "375px";

    let emailTable = templatePreview.querySelector("table");

    if (emailTable) {
        emailTable.style.width = "100%";
        emailTable.style.maxWidth = "375px";
    }
});

desktopView.addEventListener("click", () => {
    templatePreview.style.width = "600px";

    let emailTable = templatePreview.querySelector("table");

    if (emailTable) {
        emailTable.style.width = "600px";
        emailTable.style.maxWidth = "600px";
    }
});