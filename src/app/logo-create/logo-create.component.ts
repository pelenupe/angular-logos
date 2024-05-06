import { Component } from '@angular/core';
import { LogoService } from '../logo.service';

@Component({
  selector: 'app-logo-create',
  templateUrl: './logo-create.component.html',
  styleUrls: ['./logo-create.component.css']
})
export class LogoCreateComponent {
  company: string = '';
  website: string = '';
  selectedFile: File | null = null;

  constructor(private logoService: LogoService) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('company', this.company);
    formData.append('website', this.website);
    if (this.selectedFile) {
      formData.append('logo', this.selectedFile, this.selectedFile.name);
    }
    this.logoService.createLogo(formData).subscribe(() => {
      // Handle success
      console.log('Logo created successfully');
    }, error => {
      // Handle error
      console.error('Error creating logo:', error);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
