import { TestBed } from '@angular/core/testing';

import { NewsApiService } from './connect-news.service';

describe('ConnectNewsService', () => {
  let service: NewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
