import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpenseSpy, startRemoveExpenseSpy, historySpy;

beforeEach( () => {
   editExpenseSpy = jest.fn();
   startRemoveExpenseSpy = jest.fn();
   historySpy = { push: jest.fn() };     
   wrapper = shallow(
       <EditExpensePage 
        expense = {expenses[0]} 
        startEditExpense = {editExpenseSpy} 
        startRemoveExpense = { startRemoveExpenseSpy } 
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
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id);
});