import moment from 'moment'
//pada app.js func ini dipanggil GetVisibleExpenses
//meskipun sebenarnya nama bisa diganti apa saja karena struktur export
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        //logic untuk cek kondisi filter
        //membandingkan  startdate milik Filters dengan createdAt milik expenses
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true
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