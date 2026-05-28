import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceService } from './services/presence';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  users: any[] = [];

  constructor(private presenceService: PresenceService) {}

  ngOnInit(): void {

    this.presenceService.users$.subscribe((data: any[]) => {
      this.users = data;
    });

  }

}