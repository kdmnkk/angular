import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MenuItemInterface, menuItems } from 'src/app/constans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-control-value-accessor';
  isDarkMode = localStorage.getItem('activeTheme') === 'theme-dark' || false;
  navLinks: MenuItemInterface[] = menuItems;

  get currentTheme() {
    return this.isDarkMode ? 'theme-dark' : 'theme-light';
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.navLinks = menuItems;
  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  onDarkModeSwitched({ checked } : MatSlideToggleChange) {
    this.isDarkMode = checked;
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }
}

