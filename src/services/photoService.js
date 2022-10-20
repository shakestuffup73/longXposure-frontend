const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/longx`

async function create(photo) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(photo)
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

export {
  create,
  getAll,
  deleteOne,
}