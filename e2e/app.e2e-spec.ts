import { NgI18nDemoPage } from './app.po';

describe('ng-i18n-demo App', () => {
  let page: NgI18nDemoPage;

  beforeEach(() => {
    page = new NgI18nDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
