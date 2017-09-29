import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the correct text', ()=> {
    expect(component).to.contain('React Testing');
  });

  it('shows the comment box', ()=> {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows the comment list', ()=> {
    expect(component.find('.comment-list')).to.exist;
  });
});
