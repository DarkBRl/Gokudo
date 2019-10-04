export class Model {
    user;
    items;
    constructor() {
        this.user = "Elmano";
        this.items = [  new TodoItem("Preparar aula",false, "Alta", "2019-11-05"),
                        new TodoItem("Falar com Trump",true, "Alta", "2019-09-13"),
                        new TodoItem("Caminhar 10km",true, "Baixa", "2019-07-22"),
                        new TodoItem("Dominar o mundo",false, "Média", "2019-12-20")]
    }
}
export class TodoItem {
    action;
    done;
    prioridade;
    data;

    constructor(action, done,  prioridade, data) {
        this.action = action;
        this.done = done;
        this.prioridade = prioridade;
        this.data = data;

    }
}