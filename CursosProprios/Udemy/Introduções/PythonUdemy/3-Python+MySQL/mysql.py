# Aquele CRUD em python que vc rexpeita

# Importamos a biblioteca mysqldb
import MySQLdb

host = "localhost"
user = "root"
password = "mgf85008"
database = "curso"
port = 3306

con = MySQLdb.connect(host, user, password, database, port)


# c = con.cursor()
# Bom podemos melhorar isso, podemos transformar as consultas em um dicionario, assimm conseguimo manipular melhor
c = con.cursor(MySQLdb.cursors.DictCursor)


def select(fields, tables, where=None):

    # Quando eu defino que uma variavel é global ela simplesmente consegue entrarz em qualquer função
    global c

    query = "SELECT " + fields + " FROM " + tables
    if(where):
        query += " WHERE =" + where

    c.execute(query)
    return c.fetchall()

# Em consultas, valores que não são obrigatórios usamos a logica de atribuir o valor none


def insert(tables, values, fields=None):
    # Nota-se que para comandos DDL precisa usar o commit()
    global c, con
    query = "INSERT INTO " + tables

    if(fields):
        query += " (" + fields + ") "

    # Join serve para transformar todos os valores criados em uma estring, quando ele está acompanhado de um valor
    # anterior entende-se que os fragmentos das frases no join serão separados por esse valor anterior ao join
    query += " VALUES " + ",".join(["(" + v + ")" for v in values])

    c.execute(query)
    con.commit()


def update(tables, sets, where=None):
    global c, con

    query = "UPDATE " + tables
    # O for que enxergamos, esta separando a chave = fielda e o valoe=values
    query += " SET " + ",".join([field + "= '" + values + "'" for field, values in sets.items()])

    if(where):
        query += " WHERE " + where
    
    c.execute(query)
    con.commit()

def delete(tables, setsWhere):
    global c, con
    query = "DELETE FROM " + tables + " WHERE " + setsWhere

    c.execute(query)
    con.commit()


# values = [
#     "DEFAULT, 'João', '2000-11-06', 'Av das Pedras', '12345678911'",
#     "DEFAULT, 'Maria João', '2000-11-06', 'Av das Joanas',  '12345678910'"

# dicionario = {"nomeAlunos":"Junin", "endereco":"Rua dos doces"}

where = "idAlunos = 5"

delete("tb_alunos", where)

resultado = select("*", "tb_alunos")

print(resultado)
