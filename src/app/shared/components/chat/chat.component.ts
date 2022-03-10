import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatService } from '@src/app/service/chat.service';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isOpenChat: Boolean = false
  isOpenScreenChat: Boolean = false
  isFormSendContact: Boolean = true
  user_id: any = localStorage.getItem("user_id")
  loading: Boolean = false
  guestUserName: any = localStorage.getItem('guestUserName')
  chatItem: any = ''
  messArray: Array<{ guestUserName: String, message: String }> = []
  // form contact
  formGroup: FormGroup
  constructor(
    private contact: ChatService,
    private toast: ToastrService,
    private socket: Socket
  ) { }

  ngOnInit(): void {
    this.checkAction()
    this.getMessage()
      .subscribe((kq: any) => {
        this.messArray.push(kq)
        const messJson = JSON.stringify(this.messArray)
        localStorage.setItem('chat-mess', messJson)
        // const messagess = document.querySelector('#chat_items')
        // const chatItem = document.createElement('li')
        // chatItem.textContent = kq.message
        // messagess?.appendChild(chatItem)
      })

    this.newMess()
  }

  // get mess from localStorage
  newMess() {
    this.messArray = JSON.parse(localStorage.getItem('chat-mess') || '')
  }

  OpenChat() {
    this.isOpenChat = true
  }
  closeChat() {
    this.isOpenChat = false
  }

  confirmChat() {
    this.isFormSendContact = false
    this.isOpenScreenChat = true
  }


  sendFormContact(name: any, email: any, phone: any) {
    var obj = { name: name.value, email: email.value, phone: phone.value }
    if (obj.name === '') {
      this.toast.warning('please enter name')
    }
    if (obj.email === '') {
      this.toast.warning('please enter email')

    } if (obj.phone === '') {
      this.toast.warning('please enter phone')
    }
    else {
      this.contact.submitContact(obj).subscribe((data: any) => {
        console.log(data)
        if (data['kq'] === 1) {
          localStorage.setItem('guestUserName', data['data'].name)
          this.loading = true
          this.isOpenScreenChat = true
          this.isFormSendContact = false
        } else {
          console.log(data)
        }
      })
    }
  }

  sendMessageChat(chatMessage: any) {
    // let name = localStorage.getItem('guestUserName')
    const chatMes = chatMessage.value
    // sent mess
    this.socket.emit('tech-mall-support', {
      message: chatMes
    })
    chatMessage.value = ''

  }


  checkAction() {
    if (this.guestUserName) {
      this.isOpenScreenChat = true
      this.isFormSendContact = false
    }
  }

  getMessage() {
    // nhận dữ liệu từ nodejs
    return this.socket.fromEvent('user-chat').pipe(map((data: any) => data));
  }
}
