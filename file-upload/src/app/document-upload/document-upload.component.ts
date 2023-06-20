import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DocumentUploadService } from '../shared/document-upload.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {

  constructor(private http: HttpClient){}

  selectedFile: File | null = null;
  documentName = ''

  

  ngOnInit(): void {
  }

  handleFileChange(event: any) {

    const file:File = event.target.files[0];
    if (file) {

        this.documentName = file.name;

        const formData = new FormData();

        formData.append("documentName", this.documentName);

        formData.append("document", file);

        const upload$ = this.http.post("http://localhost:8080/file-upload/apis/upload", formData);

        upload$.subscribe();
    }

  }
 

}
