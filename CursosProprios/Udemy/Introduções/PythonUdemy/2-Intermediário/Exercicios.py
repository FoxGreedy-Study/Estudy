################################Exercicio 1############################################

# seq1 = input("Digite a sequencia 1: ")
# seq2 = input("Digite a sequencia 2: ")

# if seq1 == seq2:
#     print("sequencias iguais")
# else:
#     print("Sequencias diferentes")

################Comparando dois Padrões com o módulo nativo re##########################
# import re

# # Usamos o "." para identificar um valor variavel no padrão, "*" define uma repetição contínua no valor
# seq1 = "AT.G.*"
# seq2 = "ATCGAAAAAA"

# O re.match() serve para conseguirmos saber se uma combinação se encontra dentro da outra, ele devolve true ou false
# compare = re.match(seq1, seq2)
# if compare:
#     print("Ta show de bola, padrões identificados")
# else:
#     print("Não ta nda bom")

# #################################Exercicio 2#############################################

# # -*- coding utf-8 -*-
# arquivo = open("arquivo2.txt", "r")
# print(arquivo.read())

####################################Correção################################################

# nome = input("Digite o nome do arquivo que vc que você deseja abrir: ")

# arquivo = open(nome)

# linhas = arquivo.readlines()
# for linha in linhas:
#     print(linha)


###################################Exercicio 3##############################################

# sequencia = input("Digite uma sequencia: ")
# arquivo = open("Sequencias2.fasta", "w")

# arquivo.write(">Sequencia_digitada\n")
# arquivo.write(sequencia)
# arquivo.close()


##################################Exercicio 4################################################

# def abrirArquivo():
#     nomeArquivo = input("Digite o nome do arquivo que deseja abrir: ")

#     arquivo = open(nomeArquivo)

#     return arquivo

# def lerArquivo(arquivo):
    
#     linhas = arquivo.readlines()
#     for linha in linhas:
#         print(linha)

# menu = 0

# while menu != 3:
#     print("(1) Abrir arquivo\n(2) Ler arquivo aberto\n(3) Sair")
#     menu = int(input("Digite a opção que você deseja: "))

#     if(menu == 1):
#         arquivo = abrirArquivo()

#     elif(menu == 2):
#         lerArquivo(arquivo)

# print("Muito obrigado por usar a blinder interlines")




##################################Exercicio 5####################################################

# arquivo = open("Sequencias.fasta", "r") 
# lista = arquivo.readlines()
# dicionario = {lista[0]: lista[1:]}
# print(dicionario)

####################################Correção######################################################

# nome_arquivo = input("Digite o nome do arquivo: ")
# arquivo = open(nome_arquivo)

# linhas = arquivo.readlines()
# dicionario = {}

# for linha in linhas:
    
#     if linha[0] == ">":
#         seq_atual = linha[1:].strip()
#         dicionario[seq_atual] = ""
#     else:
#         dicionario[seq_atual] += linha.strip()

# print(dicionario)

######################################Observações######################################################
# dicionario = {}

#Colocar informações num dicionário pode ser dessa forma, onde seto o nome da chave e se ela não existir, o programa cria para mim
#Dentro do dicionario

#Chave            ------- Info
# dicionario["batata"] = "batata"
# print(dicionario)