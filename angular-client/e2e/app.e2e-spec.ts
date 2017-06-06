import { AngularClientPage } from './app.po';

describe('angular-client App', () => {
  let page: AngularClientPage;

  beforeEach(() => {
    page = new AngularClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
