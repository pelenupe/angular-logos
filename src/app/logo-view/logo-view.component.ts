import { Component, OnInit } from '@angular/core';
import { Logo } from '../logo.model';
import { LogoService } from '../logo.service';

@Component({
  selector: 'app-logo-view',
  templateUrl: './logo-view.component.html',
  styleUrls: ['./logo-view.component.css']
})
export class LogoViewComponent implements OnInit {
  logos: Logo[] = [];
  displayedColumns: string[] = ['company', 'website'];

  constructor(private logoService: LogoService) { }

  ngOnInit(): void {
    this.logoService.getLogos().subscribe(logos => {
      this.logos = logos;
    }, error => {
      console.error('Error fetching logos:', error);
    });
  }

  logosExist(): boolean {
    return this.logos.length > 0;
  }
}
