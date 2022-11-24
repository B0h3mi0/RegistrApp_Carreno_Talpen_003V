import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth } from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }
  logout() {
    return signOut(this.auth);
  }

}
