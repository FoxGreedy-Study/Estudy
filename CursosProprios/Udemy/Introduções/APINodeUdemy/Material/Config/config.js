const env = process.env.NODE_ENV || 'dev'

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:j3qYN8iYeZIA35mZ@clusterapi-r8gp3.mongodb.net/test?retryWrites=true'
                
            }

        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:j3qYN8iYeZIA35mZ@clusterapi-r8gp3.mongodb.net/test?retryWrites=true'
            }

        case 'prod':
            return {
                bd_string: 'mongodb+srv://usuario_admin:j3qYN8iYeZIA35mZ@clusterapi-r8gp3.mongodb.net/test?retryWrites=true'
            }
    }
}

console.log(`Iniciando escuta com a API ${env.toUpperCase()}`)

module.exports = config()