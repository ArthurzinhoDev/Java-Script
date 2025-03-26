idade= 17
acom = true
mens="PODE ENTRAR"
mens1="NÃO PODE ENTRAR"
mens2="NAO PODE ENTRAR. MENOR DE IDADE!!"
mens3="Voce nao pode entrar. SÓ COM ACOMPANHANTE"

console.log(idade<16 && mens1 || idade == 18 && mens || idade>16 && idade<18 && acom  && mens || mens3 )