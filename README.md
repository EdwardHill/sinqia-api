<img src="https://media.moneytimes.com.br/uploads/2018/12/sinqia.jpg" width=25%  >


#sinqi-api



-------------------------------------------------

**ADMIN Padrão:**

			 "username":sinqia@gmail.com
			 "password" : 123456


	O front-end encontrasse embutido no back, para facilitar o acesso as rotas:
para acessar pelo browser basta ir no endereço: `http://localhost:8080` e utilizar as crendêciais de acesso acima do admin padrão.
- Para startar o projeto basta  importa-lo em alguma IDE com suporte ao java 8
 E tbm o MySQL instalado, com as seguintes crendenciais:

		user: root
		password:

* rota do adiministrador:

` /admin`

-------------------------------------------------
   **Login:**
   
   
* rotas para login e logout :

`/login`

`/logout`
* dados pra login:

		{
		"username":"AlgumaCoisa@gmail.com",
		"password": "123456"	
		}
		
	
### Post forgot password : 
- Endpoint:
` /auth/forgot`
	
	{
	"email":"algumemail@gmail.com"
	}
	
	
-------------------------------------------------   			
### Observações sobre Autorização
**Todas as requisições necessitam  que o usuário esteja autenticado*
* É utilizado JWT pra autentificação e validação.
* Somente o Administrador pode listar,editar e deletar todos os usuarios;
* O cliente  tera acesso a seus dados e poderá altera-los exceto  seu CPF, neste caso somento o admin pode alterar essa informação;

* O Usuario do sistema(Admin ou Cliente), poderam acessar seus dados pela rota: `/self`
* ou seja:  
* É recomanedável utilizar e-mails válidos no cadastro de clientes, para o cliente receber um e-mail com a confirmação do seu cadastro.

##Observação:
*Apenas duas coisas ficaram de fora do desafio que são:
 - a integração com a api do viaCEP   
 - a alteção dos dados pelo Cliente 
utilizando  no seu perfil no front-end.
por conta por fatores externos me faltou mais tempo para concluir o desaio  por completo.			


	/{tipo de usuario}/self


**Rotas já funcionais:**

`/admin`

`/cliente`



### POST para entidade CLIENTE:



- Endpoint:
` /cliente`


	{	
    "nome": "Jose de almieda sales",
    "cpf": "09384.3094.9834-94",
    "email": "jose@gmail.com",
    "senha": "12345",
    "nascimento": "2020-02-04T22:45:33.384+0000",
    "telefone": 
            {
            "ddd": "(081)",
            "numero": "(99832-4859)",
            "tipoTelefone": "CELULAR"
        },
    "endereco": {
        "cep": "5934000",
        "cidade": "Belo Jardim",
        "uf": "PE",
        "bairro": "Centro",
        "rua": "vereador julio",
        "numero": "778",
        "complemento": "casa"
    }
}

### PUT changepassword para entidade CLIENTE:  OK

- Endpoint:

`/cliente/{id}/changepassword`

	{
    "password":"d25mS",
	"newPassword":"12345"	
	}
	