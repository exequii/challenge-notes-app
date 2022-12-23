import type Note from "../types/types";

const api = {
    notes: {
      list: ():Note[] => {
        try{
          const notes = JSON.parse(localStorage.getItem("notes") || "[]")
          return notes;
        }catch(e){
          return [];
        }
      },
      set: (notes: Note[]) => { 
        localStorage.setItem("notes", JSON.stringify(notes))
      },
    }
  }

export default api;

/*
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
*/