import { AngularBug15290Page } from './app.po';

describe('angular-bug15290 App', () => {
  let page: AngularBug15290Page;

  beforeEach(() => {
    page = new AngularBug15290Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
