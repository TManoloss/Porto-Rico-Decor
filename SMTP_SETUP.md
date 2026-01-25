# Configuração de Envio de Email

Para que o formulário de contato funcione, você precisa configurar as credenciais do servidor de email (SMTP).

1. Crie um arquivo chamado `.env.local` na raiz do projeto.
2. Adicione as seguintes variáveis, substituindo pelos seus dados:

```env
SMTP_HOST=smtp.seuprovedor.com
SMTP_PORT=587
SMTP_USER=seu-email@exemplo.com
SMTP_PASS=sua-senha-secreta
SMTP_SECURE=false
SMTP_TO=contato@portoricodecor.com
```

**Nota:**
- `SMTP_SECURE`: Use `true` se a porta for 465, caso contrário use `false`.
- `SMTP_TO`: O endereço de email que receberá as mensagens do formulário. Para múltiplos destinatários, separe por vírgula (ex: `email1@teste.com, email2@teste.com`).

## Configuração na Vercel

Se você estiver hospedando seu site na Vercel, siga estes passos para configurar as variáveis de ambiente:

1. Acesse o painel do seu projeto na Vercel.
2. Vá em **Settings** (Configurações) > **Environment Variables** (Variáveis de Ambiente).
3. Adicione cada variável individualmente:
   - **Key**: O nome da variável (ex: `SMTP_HOST`)
   - **Value**: O valor correspondente (ex: `smtp.gmail.com`)
4. Repita o processo para todas as variáveis listadas acima (`SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, etc.).
5. Clique em **Save**.
6. Se o seu site já estiver no ar, será necessário fazer um **Redeploy** para que as alterações surtam efeito.
