import { Component } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';
import { LiveScoreComponent } from '../../components/live-score/live-score.component';
import { FavplayerComponent } from '../../components/favplayer/favplayer.component';
import { FavteamComponent } from '../../components/favteam/favteam.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { SearchComponent } from '../../components/search/search.component';
@Component({
  selector: 'app-home',
  imports: [
    FeedComponent,
    LiveScoreComponent,
    FavplayerComponent,
    FavteamComponent,
    ProfileComponent,
    TrendingComponent,
    SearchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
