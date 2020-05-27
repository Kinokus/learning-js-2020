console.log('module.js')

async function f() {
    return await Promise.resolve('a')
}

f().then(console.log)