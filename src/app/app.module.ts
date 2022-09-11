import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { PopularFeedModule } from './popular-feed/popular-feed.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import { PersistenceService } from './shared/services/persistence.service';
import { YourFeedModule } from './your-feed/your-feed.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { SettingsModule } from './settings/settings.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    PopularFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
    UserProfileModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
