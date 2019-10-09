import moment from 'moment'

export default [{
    id:'1',
    description: 'gum',
    note:'',
    amount: 195,
    createdAt:0 //hari ini
},
{
    id:'2',
    description: 'rent',
    note:'',
    amount: 109500,
    createdAt:moment(0).subtract(4, 'days').valueOf() //4 hari kebelakang
},
{
    id:'3',
    description: 'Credit Card',
    note:'',
    amount: 4500,
    createdAt:moment(0).add(4, 'days').valueOf()//4 hari ke depan
}
]