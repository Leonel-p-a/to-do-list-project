// Arquivo com regras de negócios do projeto (ex.: adicionar, listar, remover, atualizar tarefas)
import { readTasks, writeTasks } from "../utils/fileHandler.js";
export class TaskService {
    tasks = [];
    constructor() {
        this.tasks = readTasks();
        this.indexIds();
    }
    indexIds() {
        this.tasks = this.tasks.map((task, index) => ({
            ...task,
            id: index + 1
        }));
        writeTasks(this.tasks);
    }
    addTask(task) {
        this.tasks.push(task);
        writeTasks(this.tasks);
        this.indexIds();
    }
    listTasks() {
        return this.tasks;
    }
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = "completed";
            writeTasks(this.tasks);
        }
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        writeTasks(this.tasks);
        this.indexIds();
    }
}
//# sourceMappingURL=TaskService.js.map