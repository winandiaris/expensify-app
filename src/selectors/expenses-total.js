export default (expenses) => {

        return expenses.map((expense) => expense.amount).reduce(//mengambil dari actions expenses, extract property expense.amount
            (sum, value) => sum + value, 0
        )

    }

    