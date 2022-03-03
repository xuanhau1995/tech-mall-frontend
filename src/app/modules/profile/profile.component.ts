import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: any
  me: any
  items: any
  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
    this.checkLogin()
    this.listAction()
  }
  listAction() {
    this.items = [
      {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      },
      {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Prime_clear-bg._CB423472251_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      }, {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg',
        title: 'Your Order',
        des: 'Track, return, or buy sometings'
      },

    ]
  }

  getProfile() {
    this.userId = localStorage.getItem('user_id')
    if (this.userId) {
      this.auth.me(this.userId).subscribe((data: any) => {
        this.me = data['data'][0]
        // console.log(this.me)
      })
    }

  }
  logOut() {
    localStorage.removeItem('token_tech_mall')
    localStorage.removeItem('user_id')
    window.location.reload()
    this.router.navigate(['/'])
    this.toastr.success('Logout Successfully');
  }

  checkLogin() {
    if (!this.userId) {
      this.router.navigate(['/'])
    }
  }
}
