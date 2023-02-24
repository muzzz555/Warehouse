npm i -g create-react-app
npx create-react-app reserve_scientific_equipment --template typescript

reserve_scientific_equipment

npm i -g yarn
yarn install
yarn start

# vscode extension 
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense
code --install-extension alexcvzz.vscode-sqlite

# install
yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios formik formik-material-ui moment react-moment url-join react-number-format @types/redux-logger react-redux redux redux-logger redux-thunk

# Page Components
// In Pages
yarn add global create-react-component-folder
npx crcf -f --notest --typescript LoginPage RegisterPage

// In Layouts
cd src/components/layouts
npx crcf -f --notest --typescript Header Menu
npx crcf -f --notest --typescript AboutUs
npx crcf -f --notest --typescript ReportPage StockPage StockCreatePage StockEditPage 

// build Project
yarn build 
- yarn global add serve --> serve build (serve -s build -p 3001) -s support fallback
waring set Path in Env local to C:\Users\AN515-43\AppData\Local\Yarn\bin

Problem
- in react have 1 index.html
- in webserver (nginx) do fallback process to root

