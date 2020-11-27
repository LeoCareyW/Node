const transactions = [
  {
    merchantName: 'Netflix',
    amount: 6,
    currency: 'GBP',
    bookingDateTime: '2020-01-01T19:33:23.473Z',
  },
  {
    merchantName: 'Petfood Co',
    amount: 15,
    currency: 'GBP',
    bookingDateTime: '2020-01-02T19:33:23.473Z',
  },
  {
    merchantName: 'Google',
    amount: 4,
    currency: 'GBP',
    bookingDateTime: '2020-01-03T19:33:23.473Z',
  },
]

// SOLUTION:

function addAccumulator() {

  const newTransactions = []
  let accumulation = 0

  transactions.forEach((transaction) => {

    accumulation += transaction.amount

    newTransactions.push(transaction = {...transaction, accumulated: accumulation})

  })


  return newTransactions;
}

module.exports = addAccumulator;
