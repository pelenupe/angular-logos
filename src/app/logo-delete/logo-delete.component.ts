import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoService } from '../logo.service';

@Component({
  selector: 'app-logo-delete',
  templateUrl: './logo-delete.component.html',
  styleUrls: ['./logo-delete.component.css']
})
export class LogoDeleteComponent implements OnInit {
  companyId: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private logoService: LogoService) { }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.params['id'];
  }

  onDelete() {
    this.logoService.deleteLogo(this.companyId).subscribe(() => {
      // Handle success
      console.log('Logo deleted successfully');
      this.router.navigate(['/view']); // Redirect to the view page
    }, error => {
      // Handle error
      console.error('Error deleting logo:', error);
    });
  }
}
