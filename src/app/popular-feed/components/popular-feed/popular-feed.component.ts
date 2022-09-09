import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-popular-feed',
  templateUrl: './popular-feed.component.html',
  styleUrls: ['./popular-feed.component.scss'],
})
export class PopularFeedComponent implements OnInit {
  apiUrl: string;
  tagName: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = '/articles/?tag=' + this.tagName;
    });
  }
}
