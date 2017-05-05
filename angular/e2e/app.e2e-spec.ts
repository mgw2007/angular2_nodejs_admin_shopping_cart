import { AnuglarPage } from './app.po';

describe('anuglar App', () => {
  let page: AnuglarPage;

  beforeEach(() => {
    page = new AnuglarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
