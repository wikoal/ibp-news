import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './dashboard/article/article.component';
import { NewsApiService } from './dashboard/services/connect-news.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/app-shared.module';
import { CoreModule } from './core/app-core.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArticleComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
