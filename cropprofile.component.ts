import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'my-app',
  templateUrl: './cropprofile.component.html',
  styleUrls: [ './cropprofile.component.css' ]
})
export class AppComponent  {
  name = 'Image crop';

  imageChangedEvent: any = '';
  croppedImage: any = '';
    
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
