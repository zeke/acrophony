// import { shallow } from 'enzyme';
// import sinon from 'sinon';
//
// describe('<MyComponent />', () => {
//
//   it('renders three <Foo /> components', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find(Foo)).to.have.length(3);
//   });
//
//   it('renders an `.icon-star`', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find('.icon-star')).to.have.length(1);
//   });
//
//   it('renders children when passed in', () => {
//     const wrapper = shallow(
//       <MyComponent>
//         <div className="unique" />
//       </MyComponent>
//     );
//     expect(wrapper.contains(<div className="unique" />)).to.be.true;
//   });
//
//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(
//       <Foo onButtonClick={onButtonClick} />
//     );
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick.calledOnce).to.be.true;
//   });
//
// });
