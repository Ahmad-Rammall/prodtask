import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { AuthService } from '../../services/AuthService/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    const token = this.authService.getToken();

    // if (!token) {
    //   this.router.navigate(['/login']);
    // }
  }
}
