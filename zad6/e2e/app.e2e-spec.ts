import { SongRankingPage } from './app.po';

describe('song-ranking App', function() {
  let page: SongRankingPage;

  beforeEach(() => {
    page = new SongRankingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
