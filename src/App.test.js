import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('App renders correctly', () => {
  const tree = renderer.creater(
    <App />
  ).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

it('has an input field' ,() => {
  const wrapper = shallow(<App/>);
  wrapper.find('input').simulate('change', {targer: {value: 'Yay testing'}});
  expect(wrapper.state('name')).toEqual('Yay testing');
})

it)'counts number of clicks', () => {
  const wrapper = shallow(<App/>);
  wrapper.instance().handleClick();
  expect(wrapper.state('click')).toEqual(1);

}
