npm init
npm i cypress
npx cypress open
npm install --save-dev mochawesome
npm install mochawesome-merge --save-dev
npm install mochawesome-report-generator --save-dev
npm install cypress-multi-reporters --save-dev


documentação para gerar relatório com os cenários juntos:
http://antontelesh.github.io/testing/2019/02/04/mochawesome-merge.html

executar:
npm test
npm run cypress:run -- --browser chrome --reporter mochawesome

-- azure devops integration

Pre-Build Testing.
Install the Node module and run application in test mode.
Run the tests.
Publish the test results.
Cypress Containerization.
Build the docker container of cypress.
Push the image to container.
Publish the Build.