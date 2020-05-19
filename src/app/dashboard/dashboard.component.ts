import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './services/connect-news.service';
import { Article, CATEGORY, COUNTRY } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sources: Article[];
  article: Article;
  newsList = [];
  currentCategory = 'general';
  currentCountry = 'fr';
  categoryList = CATEGORY;
  countryList = COUNTRY;
  currentLanguage = 'fr';
  currentSource = '';
  sourceList = [];
  constructor(private news: NewsApiService) { }

  ngOnInit(): void {
    this.news
    .getNewsByCountryAndCategory(this.currentCountry, this.currentCategory)
    .subscribe(news => {
      const articles = 'articles';
      this.newsList = news[articles];
    });

  // Get all source
    this.news
      .getSourceByCountry(this.currentCountry, this.currentCategory)
      .subscribe(sources => {
        const selectedSources = 'sources';
        if (sources[selectedSources].length) {
          this.sourceList = sources[selectedSources];
          this.currentSource = this.sourceList[0];
          console.log('source : ', this.currentSource);
        }
      });
    console.log('news', this.news);
  }
  onChange() {
    // Get news
    this.news
      .getNewsByCountryAndCategory(this.currentCountry, this.currentCategory)
      .subscribe(news => {
        const articles = 'articles';
        this.newsList = news[articles];
        console.log('newsList : ', this.newsList);
      });

    // Get all source
    this.news
      .getSourceByCountry(this.currentCountry, this.currentCategory)
      .subscribe(sources => {
        const selectedSources = 'sources';
        if (sources[selectedSources].length) {
          this.sourceList = sources[selectedSources];
          this.currentSource = this.sourceList[0];
          console.log('source : ', this.currentSource);
        }
      });
  }

  onChangeSource() {
    this.news.getNewsBySource(this.currentSource).subscribe(news => {
      const articles = 'articles';
      this.newsList = news[articles];
      console.log('newsList : ', this.newsList);
    });
  }

  updateSource(sourceId){
    this.currentSource = sourceId;
    this.onChangeSource();
  }
}
