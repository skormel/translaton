import { TranslatronPage } from './app.po';

describe('translatron App', () => {
  let page: TranslatronPage;

  beforeEach(() => {
    page = new TranslatronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
