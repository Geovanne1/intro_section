var ativar_feature = document.querySelector(".ativacao_feature");
var ativar_company = document.querySelector(".ativacao_company");
var card_feature = document.querySelector(".card_feature");
var card_company = document.querySelector(".card_company");

var menu = document.querySelector(".botao_menu");
var menu_close = document.querySelector(".botao_close")
var navegacao = document.querySelector(".navegacao");

ativar_feature.addEventListener('click', function () {
  if (card_feature.style.display === 'block') {
    card_feature.style.display = 'none'
    ativar_feature.classList.add("seta_baixo")
    ativar_feature.classList.remove("seta_cima")
  } else {
    card_feature.style.display = 'block'
    ativar_feature.classList.remove("seta_baixo")
    ativar_feature.classList.add("seta_cima")
  }
})

ativar_company.addEventListener('click', function () {
  if (card_company.style.display === 'block') {
    card_company.style.display = 'none'
    ativar_company.classList.add("seta_baixo")
    ativar_company.classList.remove("seta_cima")
  } else {
    card_company.style.display = 'block'
    ativar_company.classList.remove("seta_baixo")
    ativar_company.classList.add("seta_cima")
  }
})

menu.addEventListener('click', function () {
  navegacao.style.display = 'block'
  menu.style.display = 'none'
  menu_close.style.display = 'block'
})

menu_close.addEventListener('click', function () {
  navegacao.style.display = 'none'
  menu.style.display = 'block'
  menu_close.style.display = 'none'
})