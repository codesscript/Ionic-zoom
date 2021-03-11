import { Component } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent
{
  constructor(private zoomService: Zoom) {}
   API_KEY:string='34n5fY-dQAqLjcXZjosfyw';
   API_SECRET:string='eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0QXFRVzdjRFJHcWtUN1VTRDFnU3VRIn0.NZN1u0ncbNYHCd2E1M4AX4ewaqw8-cpyfECA-40Th5g';
   initializeApp();

   initializeApp()
   {
       this.zoomService.initialize(this.API_KEY, this.API_SECRET)
       .then((success: any) => console.log(success))
       .catch((error: any) => console.log(error));
   };

}
