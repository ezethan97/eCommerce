import { Component } from '@angular/core';
import { S3ServiceService } from '../s3-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  fileName = '';
  file!: File;

  constructor(private s3Service: S3ServiceService) { }

  // selects file and sets fileName to its name
  public onFileSelected(e: any) {
    this.file = e.target.files[0];
    this.fileName = e.target.files[0].name;
    console.log(this.fileName);
  }

  // uploads image to S3 only after whole form has been submitted.
  public formSubmit() {
    if (this.file) {
      this.s3Service.uploadFile(this.file);
    }
  }

}
