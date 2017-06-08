import { MyFirtAngularAppPage } from './app.po';

describe('my-firt-angular-app App', () => {
  let page: MyFirtAngularAppPage;

  beforeEach(() => {
    page = new MyFirtAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
