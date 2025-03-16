const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const titleSymbolLimit = document.getElementById("title-symbol-limit");
const titleSymbolLimitMax = document.getElementById("title-symbol-limit-max");
const descriptionSymbolLimit = document.getElementById(
  "description-symbol-limit"
);
const descriptionSymbolLimitMax = document.getElementById(
  "description-symbol-limit-max"
);

function updateSymbolLimitColors(textLength, limit, limitMax) {
  if (textLength < 3) {
    limit.style.color = "red";
    limitMax.style.color = "green";
  } else if (textLength > 255) {
    limit.style.color = "green";
    limitMax.style.color = "red";
  } else {
    limit.style.color = "green";
    limitMax.style.color = "green";
  }
}

titleInput.addEventListener("input", function () {
  updateSymbolLimitColors(
    titleInput.value.length,
    titleSymbolLimit,
    titleSymbolLimitMax
  );
});

descriptionInput.addEventListener("input", function () {
  updateSymbolLimitColors(
    descriptionInput.value.length,
    descriptionSymbolLimit,
    descriptionSymbolLimitMax
  );
});

const prioritySelect = document.getElementById("priority");

fetch("https://momentum.redberryinternship.ge/api/priorities")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const optionElem = document.createElement("option");
      optionElem.value = item.id;
      optionElem.textContent = item.name;
      prioritySelect.appendChild(optionElem);
    });
  })
  .catch((err) => console.log("error ", err));

const departmentSelect = document.getElementById("department");

fetch("https://momentum.redberryinternship.ge/api/departments")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const optionElem = document.createElement("option");
      optionElem.value = item.id;
      optionElem.textContent = item.name;
      departmentSelect.appendChild(optionElem);
    });
  })
  .catch((err) => console.log("error ", err));

const employeeSelect = document.getElementById("employee");

fetch("https://momentum.redberryinternship.ge/api/employees", {
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Replace YOUR_ACCESS_TOKEN with the actual token
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const optionElem = document.createElement("option");
      optionElem.value = item.id;
      optionElem.textContent = item.name;
      employeeSelect.appendChild(optionElem);
    });
  })
  .catch((err) => console.log("error ", err));

const statusSelect = document.getElementById("status");

fetch("https://momentum.redberryinternship.ge/api/statuses")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const optionElem = document.createElement("option");
      optionElem.value = item.id;
      optionElem.textContent = item.name;
      statusSelect.appendChild(optionElem);
    });
  })
  .catch((err) => console.log("error ", err));

const titleArea = document.querySelector(".title-area");
titleArea.addEventListener("click", function () {
  window.location.href = "index.html";
});

console.log("bottom");
