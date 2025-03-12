const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.dropdown-menu');
  const selectButton = menu.querySelector('.select-button');

  trigger.addEventListener('click', () => {
    dropdowns.forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('open');
      }
    });
    dropdown.classList.toggle('open');
  });

  selectButton.addEventListener('click', () => {
    const checkedCheckboxes = menu.querySelectorAll('input[type="checkbox"]:checked');
    checkedCheckboxes.forEach(checkbox => {
      console.log(checkbox.value); 
    });

    dropdown.classList.remove('open'); 
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      dropdown.classList.remove('open');
    }
  });
});