import promptSync from "prompt-sync";
import { TaskService } from "../services/TaskService.js";

const prompt = promptSync();
const taskService = new TaskService();

export function showMenu() {
    let option: string;

    do {
        console.log("\n====================");
        console.log("     TO-DO LIST     ");
        console.log("====================");
        console.log("1 - Add task");
        console.log("2 - List task");
        console.log("3 - Mark as completed");
        console.log("4 - Remove task");
        console.log("0 - Exit");

        option = prompt("Choose an option: ");

        switch (option) {
            case "1":
                let title = prompt("Type the task title: ");

                while (title === '') {
                    console.log('\nError: Blank title! Enter a title for the task.');
                    title = prompt('Type the task title: ').trim();
                }

                let status = prompt("Whats is the task's status (pending | completed): ").toLowerCase().trim();

                while (status !== 'pending' && status !== "completed") {
                    console.log('\nError: Please, enter a valid status (pending or completed).');
                    status = prompt("Whats is the task's status (pending | completed): ").toLowerCase().trim();
                }
                
                taskService.addTask({
                    id: 0,
                    title,
                    status
                });
                console.log("✅ Task succesfully added!");
                break;

            case "2":
                const tasks = taskService.listTasks();
                if (tasks.length === 0) {
                    console.log("📭 No task registered.");
                } else {
                    console.log("\n📋 Task list:");
                    tasks.forEach(task => {
                        console.log(`[${task.id}] ${task.title} - ${task.status}`);
                    });
                }
                break;

            case "3":
                const idToComplete = Number(prompt("Enter the ID of the task to be completed: "));
                const allTasks = taskService.listTasks();
                const t = allTasks.find(t => t.id === idToComplete);

                if (!idToComplete) {
                    console.log('Invalid ID!');
                    break;
                } else if (t?.status === 'completed') {
                    console.log('Task is already completed!');
                    break;
                }

                taskService.completeTask(idToComplete);
                console.log("✅ Task completed!");
                break;

            case "4":
                const idToRemove = Number(prompt("Enter the ID of the task to be removed: "));

                if (!idToRemove) {
                    console.log('Invalid ID!');
                    break;
                }

                taskService.removeTask(idToRemove);
                console.log("🗑️ Task removed!");
                break;

            case "0":
                console.log("👋 Exiting...");
                break;

            default:
                console.log("⚠️ Invalid option, try again.");
        }
    } while (option !== "0");
}