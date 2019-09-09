
# Abrindo arquivos
# Para abrir arquivos em python utiliza-se a função open()

# arquivo = open("arquivo.txt")

# texto_completo = arquivo.read()
# print(texto_completo)


# Relembrando como muda a codificação para utf-8
# -*- coding: utf-8 -*-

# a - Sobrescrever arquivo / w - reescrever arquivo / r - ler arquivo
# w = open("arquivo2.txt", "w")
# w.write("Esse é o meu arquivo")
# w.close()

# Fazendo funções em python usa-se o comando: def NOME(PARAMETRO)
# Chamamos ela: NOME(ARGUMENTOS)
# def somar(a, b):
#     # Usa-se o método return para transformar def em uma função que retorna um valor
#     return print(a + b)


# def multiplicar(a, b):
#     return print(a * b)


# somar(2, 5)
# multiplicar(5, 5)

# # Números aleatorios com python, importando random
# import random

# # O método randomint serve para conseguirmos pegar um numero inteiro aleatorio
# numero = random.randint(0,10)
# print(numero)

# # método choice conseguimos pegar valores aleatorios de uma lista
# lista = [6, 2, 4]
# numero = random.choice(lista)
# print(numero)

# # Tratamento de exceções com o python - try e except
# a = 2
# b = 2

# try:
#     print(a/b)

# except:
#     print("Não é permitido uma divisão com 0")

