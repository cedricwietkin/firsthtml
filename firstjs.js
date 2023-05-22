const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      this.parentNode.classList.add('checked');
    } else {
      this.parentNode.classList.remove('checked');
    }
  });
});