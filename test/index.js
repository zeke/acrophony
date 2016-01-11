(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
"use strict";

},{}]},{},[1]);
