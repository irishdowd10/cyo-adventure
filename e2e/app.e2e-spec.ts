import { CyoAdventurePage } from './app.po';

describe('cyo-adventure App', () => {
  let page: CyoAdventurePage;

  beforeEach(() => {
    page = new CyoAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
