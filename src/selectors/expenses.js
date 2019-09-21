//pada app.js func ini dipanggil GetVisibleExpenses
//meskipun sebenarnya nama bisa diganti apa saja karena struktur export
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        //logic untuk cek kondisi filter
        //membandingkan  startdate milik Filters dengan createdAt milik expenses
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate
        //menterjemahkan input pencarian yang UPPERCASE menjadi LOWERCASE
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
        //mengurutkan hasil filter 'apa saja'  berdasarkan Nilai tertinggi
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1
        }
    })
}