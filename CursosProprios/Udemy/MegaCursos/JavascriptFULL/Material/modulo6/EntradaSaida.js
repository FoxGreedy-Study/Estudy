const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo) {
    console.log('Fala Anonimo!\n')
    process.exit
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`O seu nome é ${nome}\n`)
        process.exit()
    })
}