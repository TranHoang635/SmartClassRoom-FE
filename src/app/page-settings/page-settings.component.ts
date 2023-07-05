import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggleButtons = document.querySelectorAll('.toggle') as NodeListOf<HTMLDivElement>;
    const toggleOffs = document.querySelectorAll('.toggle-off') as NodeListOf<HTMLElement>;
    const toggleOns = document.querySelectorAll('.toggle-on') as NodeListOf<HTMLElement>;

    toggleButtons.forEach((toggleButton, index) => {
      toggleButton.addEventListener('click', () => {
        if (toggleButton.classList.contains('active')) {
          toggleButton.classList.remove('active');
          toggleOffs[index].classList.add('active');
          toggleOns[index].classList.remove('active');
        } else {
          toggleButton.classList.add('active');
          toggleOffs[index].classList.remove('active');
          toggleOns[index].classList.add('active');
        }
      });
    });

    // Reload the page only once when the component is initialized
    // const isPageLoaded = localStorage.getItem('isPageLoaded');
    // if (!isPageLoaded) {
    //   localStorage.setItem('isPageLoaded', 'true');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('isPageLoaded');
    // }
  }

}
