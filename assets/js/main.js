// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************

// Chose nav active
const navActive = () => {
    const links = document.querySelectorAll("[nav-active]");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("nav-active"); });
            // Add Class
            link.classList.add("nav-active");
        })
    })
};
navActive();
// ***************************************************

function sendMail() {
    var params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        whatsapp: document.getElementById("whatsapp").value,
        message: document.getElementById("message").value,
        file: document.getElementById("file").files[0].name,
    }
    // -----------
    const serviceID = "service_3x8kvi7";
    const templateID = "template_w79ckqf"
    if (params.fullName != "" && params.email != "" && params.whatsapp != "" && params.message != "") {
        emailjs.send(serviceID, templateID, params).then((res) => {
            alert("تم ارسال رسالتك بنجاح سيتم التواصل معك في اقرب وقت");
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("whatsapp").value = "";
            document.getElementById("message").value = "";
        }).catch((err) => console.log(err));
    } else {
        alert("يجب ادخال جميع البياناتا")
    }
};
