import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from './services/file-upload';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  uploadedFiles: string[] = [];

  constructor(private fileUploadService: FileUploadService) {

    this.fileUploadService.files$.subscribe(files => {
      this.uploadedFiles = files;
    });

  }

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (file) {
      this.fileUploadService.uploadFile(file);
    }

  }

}