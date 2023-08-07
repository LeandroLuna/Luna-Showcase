import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isDarkTheme = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    console.log('Theme changed to: ', theme);
  }

  onNavigate(route: string) {
    this.router.navigate([route]);
  }
}