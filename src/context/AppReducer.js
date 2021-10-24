export default (state, action) => {
  action.payload.amount = parseInt(action.payload.amount)
  switch (action.type) {
    case ('income'):
      return {

        transactions: [...state.transactions,
        {
          ...action.payload,
          type: action.type,
          id: Date.now(),
        }],
        income: action.payload.amount + state.income,
        expense: state.expense
      }
    case ('expense'):
      return {

        transactions: [...state.transactions, { ...action.payload, type: action.type, id: Date.now() }],
        income: state.income,
        expense: action.payload.amount + state.expense,
      }
    case ('delete'):
      if(action.payload.type == 'income'){

        return {
          transactions: state.transactions.filter((e)=> e != action.payload),
          income: state.income - action.payload.amount,
          expense: state.expense,
        }
      }else{

        return {
          transactions: state.transactions.filter((e)=> e != action.payload),
          income: state.income,
          expense: state.expense - action.payload.amount,
        }
      }

  }

}