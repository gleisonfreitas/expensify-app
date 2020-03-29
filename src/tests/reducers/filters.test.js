import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
};

test('should set text filter', () => {
    const text = 'text_filter';
    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe(text);

});

test('should set startDate filter', () => {
    const startDate = moment().startOf('month');
    const action = { 
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(startDate);

});

test('should set endDate filter', () => {
    const endDate = moment().startOf('month');
    const action = { 
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(endDate);

});
