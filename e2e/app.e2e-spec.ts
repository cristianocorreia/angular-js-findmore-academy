import { AngularjsFindmoreAcademyPage } from './app.po';

describe('angularjs-findmore-academy App', () => {
  let page: AngularjsFindmoreAcademyPage;

  beforeEach(() => {
    page = new AngularjsFindmoreAcademyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
