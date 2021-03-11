import { Component } from '@angular/core';
import{Name , meetingInfo} from '../names'
import { Zoom } from '@ionic-native/zoom/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private zoomService: Zoom) {}
     title = 'New-App';
     names: Name =
     {
       id: 1,
       name: 'sia',
     };
     meetingInfo=
     {
       meetingNumber:'124567890',
       meetingPassword:'dfgd002',
       displayName:'shweta'
     };
     options =
     {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
     };
     meetingJoin()
     {
       this.zoomService.joinMeeting(this.meetingInfo.meetingNumber, this.meetingInfo.meetingPassword, this.meetingInfo.displayName, this.options)
       .then((success: any) => console.log(success))
       .catch((error: any) => console.log(error));
     };
}
