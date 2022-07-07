import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// https://blog.angular-university.io/angular-file-upload/
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent implements OnInit {
  @Input() defaultFilename: string = '';
  @Input() selectedFile: File = new File([], '');
  @Output() selectedFileChange = new EventEmitter<File>();
  fileName = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fileName = this.defaultFilename;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
      this.selectedFileChange.emit(this.selectedFile);

      // const formData = new FormData();
      // formData.append("file", file);

      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      // upload$.subscribe();
    }
  }
}
