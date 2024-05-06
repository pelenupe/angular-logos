import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogoService } from '../logo.service';

@Component({
  selector: 'app-logo-update',
  templateUrl: './logo-update.component.html',
  styleUrls: ['./logo-update.component.css']
})
export class LogoUpdateComponent implements OnInit {
  companyId: string = '';
  company: string = '';
  website: string = '';

  constructor(private route: ActivatedRoute, private logoService: LogoService) { }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.params['id'];
    this.logoService.getLogo(this.companyId).subscribe(logo => {
      this.company = logo.company;
      this.website = logo.website;
    }, error => {
      console.error('Error fetching logo:', error);
    });
  }

  onSubmit() {
    const logoData = { company: this.company, website: this.website };
    this.logoService.updateLogo(this.companyId, logoData).subscribe(() => {
      // Handle success
      console.log('Logo updated successfully');
    }, error => {
      // Handle error
      console.error('Error updating logo:', error);
    });
  }
}
