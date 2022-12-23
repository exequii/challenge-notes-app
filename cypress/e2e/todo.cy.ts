describe('Notes App', () => {

  //con esto le digo "hace esto antes de cada test"
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('Muestra placeholder cuando no hay notas', () => {
    localStorage.setItem('notes', '[]')
    cy.visit('/')
    cy.contains('No Hay notas')
  })

  it('Muestra una nota por cada elemento del localStorage', () => {
    const notes = [
      {
      id: "nota1",
      title: "Pagar la Luz",
      lastEdit: "21/12/2022",
      archived: false,
      content: "Acordarse de pagar la luz porque esta por vencer.",
      categories: ["random"]
    },
    {
      id: "nota1",
      title: "Pagar la Luz",
      lastEdit: "21/12/2022",
      archived: false,
      content: "Acordarse de pagar la luz porque esta por vencer.",
      categories: ["random"]
    },
  ]
    localStorage.setItem('notes', JSON.stringify(notes))
    cy.visit('/')
    cy.get(`[data-testid^="note-"]`).should("have.length", notes.length)
    //le tenemos que agregar el atributo data-testid a la card de la nota
    //los ^ sifnican que empieza con lo que le pases entre "" y luego iria un dato(En este caso el id)
  })

  it('Remover Notas', () => {
    const notes = [
      {
      id: "nota1",
      title: "Pagar la Luz",
      lastEdit: "21/12/2022",
      archived: false,
      content: "Acordarse de pagar la luz porque esta por vencer.",
      categories: ["random"]
    },
    {
      id: "nota2",
      title: "Pagar la Luz",
      lastEdit: "21/12/2022",
      archived: false,
      content: "Acordarse de pagar la luz porque esta por vencer.",
      categories: ["random"]
    },
  ]
    localStorage.setItem('notes', JSON.stringify(notes))
    cy.visit('/')
    cy.get(` [data-testid="note-nota1"] [data-testid="delete"]`).click()
    cy.get(` [data-testid^="note-"]`).should("have.length", notes.length - 1)
    //le tenemos que agregar el atributo data-testid a la card de la nota
    //los ^ sifnican que empieza con lo que le pases entre "" y luego iria un dato(En este caso el id)
  })
})