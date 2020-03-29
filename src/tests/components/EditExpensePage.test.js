import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpenseSpy, removeExpenseSpy, historySpy;

beforeEach( () => {
   editExpenseSpy = jest.fn();
   removeExpenseSpy = jest.fn();
   historySpy = { push: jest.fn() };     
   wrapper = shallow(
       <EditExpensePage 
        expense = {expenses[0]} 
        editExpense = {editExpenseSpy} 
        removeExpense = { removeExpenseSpy } 
        history = { historySpy } />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handler EditExpensePage', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handler removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id);
});