export class SearchUtil {
  toggleSearch() {
    let searchIcon = document.querySelector('.search-box');
    if(searchIcon.classList.contains('hidden')) {
      searchIcon.classList.toggle('hidden');
    } else {
      searchIcon.classList.add('hidden');
    }
  }

  toggleSpinner() {
    let loadIcon = document.querySelector('.spinner');
    loadIcon.classList.toggle('hidden');
  }

  toggleError() {
    let errorDiv = document.querySelector('.error');
    errorDiv.classList.toggle('invisible');
  }

  toggleDropdown() {
    let dropdownContent = document.querySelector('.dropContent');
    dropdownContent.classList.toggle('dropHidden');
    let dropdownButton = document.querySelector('.fa-bars');
    if(dropdownButton.classList.contains('buttonOpen')) {
      dropdownButton.classList.remove('buttonOpen');
    } else {
      dropdownButton.classList.add('buttonOpen');
    }
  }

  modalSetup() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
    }

    span.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}