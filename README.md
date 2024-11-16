#création
npx create-next-app@latest
#installation prisma
npm i prisma --save-dev
#initialisation de prisma
npx prisma init --datasource-provider sqlite
#changement dans le model
npx prisma db push
#voir la base
npx prisma studio