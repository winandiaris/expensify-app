const add =( a,b) => a + b
const greeting = (name='anynomous') => `hello ${name}`

test('should add two numbers' , () => {
    const result =add(3,4)
    expect(result).toBe(7)
    // if(result !== 7){
    //     throw new Error(`you added 4 and 3. The result was ${result}. expect 7`)
    // }
})

test('should generate from name',()=>{
    const result = greeting('mike')
    expect(result).toBe(`hello mike`)
})

test('should greeting for no name',()=>{
    const result = greeting()
    expect(result).toBe('hello anynomous')
})