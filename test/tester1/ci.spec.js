import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import { Ci } from '../../client/components/ci/';

describe('Trivial Application', function() {
	describe('Button', function() {
		it('tester1-1', function() {
			const tester = mount(<Ci />);
			expect(tester.state('showText')).to.equal(false);
			tester.find('#btn-1').simulate('click');
			expect(tester.state('showText')).to.equal(true);
			tester.find('#btn-1').simulate('click');
			expect(tester.state('showText')).to.equal(false);
		});
		it('tester1-2', function() {
			const tester = mount(<Ci />);
			expect(tester.find('#sentence').text()).to.equal('');
			tester.find('#btn-1').simulate('click');
			expect(tester.find('#sentence').text()).to.equal('CircleCI is Continuous Integration');
		});
		it('tester1-3', function() {
			const tester = mount(<Ci />);
			expect(tester.find('#sentence').text()).to.equal('');
			tester.find('#btn-1').simulate('click');
			setTimeout(function() { return 1; }, 3000);
			expect(tester.find('#sentence').text()).to.equal('CircleCI is Continuous Integration');
		});
	});	
});
