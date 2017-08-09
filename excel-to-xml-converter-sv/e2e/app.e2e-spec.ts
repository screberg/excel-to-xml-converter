import { GrantsgovwebformsPage } from './app.po';

describe('grantsgovwebforms App', () => {
  let page: GrantsgovwebformsPage;

  beforeEach(() => {
    page = new GrantsgovwebformsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
