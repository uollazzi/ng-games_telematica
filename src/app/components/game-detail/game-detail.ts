import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgService } from '../../services/rawg';
import { RawgGameDetailResponse } from '../../models/rawg';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-game-detail',
  imports: [CommonModule, CarouselModule],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.css',
})
export class GameDetail implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private rawgService = inject(RawgService);

  gameDetail = signal<RawgGameDetailResponse | undefined>(undefined);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.rawgService.gameById(id)
        .subscribe(detail => this.gameDetail.set(detail));
    }
  }
}
