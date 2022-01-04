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
}