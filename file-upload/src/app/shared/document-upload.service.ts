import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DocumentUpload } from "./document.model";

@Injectable({
    providedIn: 'root'
}) // 
export class DocumentUploadService {

    constructor(private http: HttpClient){}

    storeDocument(documentUpload: DocumentUpload) {
        console.log("before calling upload service ");
        return this.http.post("http://localhost:8080/api/documentupload", documentUpload);
    }
}