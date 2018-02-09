import { SuperHeroesPage } from './app.po';

describe('super-heroes App', function() {
  let page: SuperHeroesPage;

  beforeEach(() => {
    page = new SuperHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
