// Arquivo responsável por salvar e carregar tarefas em JSON usando fs
import * as fs from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "../tasks.json");
export function readTasks() {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
        }
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error reading the file:", error);
        return [];
    }
}
export function writeTasks(tasks) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    }
    catch (error) {
        console.error("Error writing in the file:", error);
    }
}
//# sourceMappingURL=fileHandler.js.map