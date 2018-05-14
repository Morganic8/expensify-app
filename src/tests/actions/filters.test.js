import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should set sortBy to amount', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
});

test('should set sortBy to date', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
});

test('should set default text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('should set the text to any string inserted', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: "SET_TEXT",
        text: 'rent'
    })

});