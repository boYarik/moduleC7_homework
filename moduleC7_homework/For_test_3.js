function saveUser(name, seName) {
    User = {
        name:`${name}`,
        secondname:`${seName}`
    }
    return(`Твоё имя: ${User.name} Твоя фамилия: ${User.secondname}`)
}
module.exports = saveUser
saveUser('Иван', 'Иванов')