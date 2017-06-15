import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import { Ci } from '../../client/components/ci/';

describe('Trivial Application', function() {
  describe('Button', function() {
    it('toggles text state on click', function() {
      const tester = mount(<Ci />);
      expect(tester.state('showText')).to.equal(false);
      tester.find('#btn-1').simulate('click');
      expect(tester.state('showText')).to.equal(true);
      tester.find('#btn-1').simulate('click');
      expect(tester.state('showText')).to.equal(false);
    });
    it('should display text when clicked', function() {
      const tester = mount(<Ci />);
      expect(tester.find('#sentence').text()).to.equal('');
      tester.find('#btn-1').simulate('click');
      expect(tester.find('#sentence').text()).to.equal('CircleCI is Continuous Integration');
    });
  });
});

describe('Additional testing suite 1', function() {
  it('should equal 4', function() {
    const four = 4;
    expect(four).to.equal(4);
  });
  it('should equal 5', function() {
    const five = 5;
    expect(five).to.equal(5);
  });
  it('should equal 6', function() {
    const six = 6;
    expect(six).to.equal(6);
  });
});

describe('Additional testing suite 2', function() {
  it('should fail', function() {
    const four = 4;
    expect(four).to.equal(5);
  });
});
