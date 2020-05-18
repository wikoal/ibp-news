import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../dashboard.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {
  @Input() item: Article;
  constructor() { }

  ngOnInit(): void {
    console.log('///item', this.item);
  }

}
