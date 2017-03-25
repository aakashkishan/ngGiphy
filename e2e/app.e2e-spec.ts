import { NgGiphyPage } from './app.po';

describe('ng-giphy App', function() {
  let page: NgGiphyPage;

  beforeEach(() => {
    page = new NgGiphyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
