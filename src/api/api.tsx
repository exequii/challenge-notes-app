const api = {
    notes: {
      list: () => {
        return [   
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
            title: "Pagar el Gas",
            lastEdit: "21/12/2022",
            archived: false,
            content: "Acordarse de pagar la luz porque esta por vencer.",
            categories: ["random"]
          }
        ]
      }
    }
  }

export default api;