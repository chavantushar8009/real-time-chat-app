import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private files: string[] = [];

  private filesSubject = new BehaviorSubject<string[]>([]);

  files$ = this.filesSubject.asObservable();

  uploadFile(file: File) {

    this.files.push(file.name);

    this.filesSubject.next(this.files);

  }

}