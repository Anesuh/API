const tbody = document.querySelector("tbody");
const addform = document.querySelector(".addform");
const inputnome = document.querySelector("#nomeInput");
const inputvalor = document.querySelector("#valorInput");

//Interagindo com o backend (banco de dados)
const getPlano = async () => {
  const response = await fetch("http://localhost:3333/plans");
  const plans = await response.json();
  return plans;
};
//Adicionando um plano ao banco de dados
const postPlano = async (event) => {
  event.preventDefault();

  const plano = {
    nome: inputnome.value,
    valor: parseFloat(inputvalor.value.replace(",", ".")), // Converta para decimal
  };

  await fetch("http://localhost:3333/plans", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(plano),
  });

  carregarPlano();
  inputnome.value = "";
  inputvalor.value = "";
};

//Deletando um plano
const deletePlano = async (id) => {
  await fetch(`http://localhost:3333/plans/${id}`, {
    method: "delete",
  });
  carregarPlano();
};

//Atualizando um plano
const putPlano = async (id, valor) => {
  valorAtt = parseFloat(valor.replace(",", "."));
  await fetch(`http://localhost:3333/plans/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valor }),
  }),
    carregarPlano();
};

// Manipulando DOM
const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
};

const criarPlano = (plano) => {
  // Desestruturando plano
  const { nome, valor, id, criacao} = plano;

  // Criando elementos
  const dataHoraFormatada = formatarDataHora(criacao);
  console.log(dataHoraFormatada)
  const valorFormatado = formatarValor(valor);
  const tr = createElement("tr");
  const tdNome = createElement("td", nome);
  const tdCriacao = createElement("td", dataHoraFormatada);
  const tdValor = createElement("td", valorFormatado); // Usando o valor formatado
  const tdActions = createElement("td");

  // Criando botões
  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">edit_note</span>'
  );
  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">delete</span>'
  );

  //Adicionando funcionalidade ao botão de deletar
  deleteButton.addEventListener("click", () => deletePlano(id));

  //Adicionando funcionalidade ao botão de editar
  const editInput = createElement("input");
  const editForm = createElement("form");
  editInput.value = valor;

  editForm.appendChild(editInput);

  editButton.addEventListener("click", () => {
    tdValor.innerText = "";
    tdValor.appendChild(editForm);
  });
  editForm.addEventListener("submit",  async (event) => {
    event.preventDefault();

    await putPlano(id, editInput.value);
  });

  // Adicionando classe aos botões
  editButton.classList.add("bt-action");
  deleteButton.classList.add("bt-action");
  // Adicionado botões ao tdActions
  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  //Adicionado TDs ao tr
  tr.appendChild(tdNome);
  tr.appendChild(tdCriacao);
  tr.appendChild(tdValor);
  tr.appendChild(tdActions);

  return tr;
};

const carregarPlano = async () => {
  tbody.innerHTML = "";

  const planos = await getPlano();
  planos.forEach((plano) => {
    const tr = criarPlano(plano);
    tbody.appendChild(tr);
  });
};

// Formatando o valor para R$XXX,XX para exibição
const formatarDataHora = (data) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(data).toLocaleDateString("pt-BR", options);
};

const formatarValor = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
};

addform.addEventListener("submit", postPlano);

carregarPlano();
