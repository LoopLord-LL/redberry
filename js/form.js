const fbuttn = document.getElementById("add-employee-btn")

console.log(fbuttn)


fbuttn.addEventListener("click", function() {
    let form = document.getElementById("user-form");
    form.style.display = form.style.display === "flex" ? "none" : "flex";

    console.log("chgvjb")
});

const departmentsSelect = document.getElementById("department")

const res = fetch("https://momentum.redberryinternship.ge/api/departments").then((res) => res.json()).catch((err) => console.log('error ', err))

res.then(data => {
    data.forEach((item) => {
        const optionElem = document.createElement("option")
        optionElem.value = item.id,
        optionElem.textContent = item.name

        departmentsSelect.appendChild(optionElem)
    })
})

console.log('bottom')