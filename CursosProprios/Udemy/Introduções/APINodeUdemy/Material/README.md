Coloque o comando ws com o seguinte acces Token:
wscat -c "wss://ns.atc.everynet.io/api/v1.0/data?access_token=9eaf2efaeda1451d8956e4ea473719c2"

Conseguimos perceber um fluxo de mensagens PONG recorrentes do servidor

Conectar com o device do servidor, substitui dev_eui pelo dev_eui do seu dispositivo
wscat -c "wss://ns.atc.everynet.io/api/v1.0/data?access_token=a813b4dfa8de497fb93103b134941261&devices=<DEV-EUI>"

