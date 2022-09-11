import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ProfileInterface } from '../../../shared/types/profile.interface';
import { select, Store } from '@ngrx/store';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isLoadingSelector, userProfileSelector } from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';
import { filter, map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  isLoading$: Observable<boolean>;
  userProfile$: Observable<ProfileInterface | null>;
  isCurrentUserProfile$: Observable<boolean>;
  slug: string;
  apiUrl: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  fetchUserProfile() {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.userProfile$ = this.store.pipe(select(userProfileSelector));
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface
        ]) => currentUser.username === userProfile.username
      )
    );
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
}
