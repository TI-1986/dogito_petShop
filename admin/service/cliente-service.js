const listaClientes = async () => {
  try {
    const resposta = await fetch(`http://localhost:3000/profile`)
    if (!resposta.ok) {
      throw new Error('Não foi possível listar os clientes')
    }
    return resposta.json()
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const criaCliente = async (nome, email) => {
  try {
    const newClient = await fetch(`http://localhost:3000/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    })
    if (!newClient.ok) {
      throw new Error('Não foi possível criar um cliente')
    }
    return newClient.json()
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const removeCliente = async id => {
  try {
    const excluir = await fetch(`http://localhost:3000/profile/${id}`, {
      method: 'DELETE'
    })
    if (!excluir.ok) {
      throw new Error('Não foi possível deletar um cliente')
    }
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
}

const detalhaCliente = id => {
  return fetch(`http://localhost:3000/profile/${id}`).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }

    throw new Error('Não foi possível detalhar um cliente')
  })
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possível detalhar um cliente')
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}
