import { Component, inject, OnInit, signal } from '@angular/core';
import { RawgService } from '../../services/rawg';
import { RawgGamesResponse, Game } from '../../models/rawg';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-game-list',
  imports: [CardModule, DataViewModule, CommonModule, TagModule, ButtonModule, RatingModule, FormsModule, RouterLink],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList implements OnInit {
  rawgService = inject(RawgService);
  rawgGamesResponse = signal<RawgGamesResponse | undefined>(undefined);
  showDataview = false;

  ngOnInit(): void {
    this.rawgService.games()
      .subscribe(r => this.rawgGamesResponse.set(r));
  }
}
