import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })


});

test('Should setup edit expense action object', () => {
    const id = 'abc123';
    const action = editExpense('abc123',{ note: 'new note value'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
            id: 'abc123',
            updates: {
                note: 'new note value'
            }
            
        
    });
});

    test('should set up add expense action object with provided values', () => {
        const expenseData = {
            description: 'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'This was last monts rent'
        }

        const action = addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)

            }
        })
    });

    test('should setup add expense action object with default value', () => {
        const action = addExpense();

        expect(action).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                description: '',
                amount: 0,
                createdAt: 0,
                note: ''
            }
        })
    });
