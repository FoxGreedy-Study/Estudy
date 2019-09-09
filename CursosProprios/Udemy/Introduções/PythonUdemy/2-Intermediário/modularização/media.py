# calcular a media, a mediana e a moda
# Existe um modulo do python chamado statistics
# from statistics import *


def media(lista):
# mean(lista) - media
    media = sum(lista)/float(len(lista))
    return media

def mediana(lista):
# median(lista) - mediana
    listaOrdenada = sorted(lista)
    t = len(listaOrdenada)

    if t%2 == 0:
        mediana = (listaOrdenada[int(t/2)] + listaOrdenada[int((t/2) - 1)])/2
    
    elif t%2== 1:
        mediana = listaOrdenada[int(t/2)]
    
    return mediana

def moda(lista):
# mode(lista) - moda
    lista_dic = {}

    for l in lista:
        if l not in lista_dic:
            lista_dic[l] = 1
        else:
            lista_dic[l] += 1
        
    maior_repeticao = max(lista_dic.values())

    for i in lista_dic:
        if lista_dic[i] == maior_repeticao:
            moda = i
    return moda
