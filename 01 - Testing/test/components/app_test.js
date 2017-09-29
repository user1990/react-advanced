import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of a target
  it('shows the correct text', ()=> {
    // Create an instance of App
    const component = renderComponent(App);
    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React Testing');
  });

  it('shows the comment box', ()=> {
    const component = renderComponent(App);
    expect(component.find('.comment-box')).to.exist;
  });
});
