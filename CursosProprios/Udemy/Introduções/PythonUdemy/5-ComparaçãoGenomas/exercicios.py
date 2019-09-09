entrada = open("16s_bacteria.fasta").read()
saida = open("bacteria.html", "w")

contagem = {}

for i in ['A', 'T', 'C', 'G']:
    for j in ['A', 'T', 'C', 'G']:
        contagem[i+j] = 0

entrada = entrada.replace('\n', "")

for k in range(len(entrada)-1):
    contagem[entrada[k]+entrada[k+1]] += 1

i = 1
for k in contagem:
        transparencia = contagem[k]/max(contagem.values())
        saida.write("<div Style='width 100px; border: 1px solid #111; height: 100px; float: left; background-color: rgba(0,0, 255, " + str(transparencia) +"') > </div >")