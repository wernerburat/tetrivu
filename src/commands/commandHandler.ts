import { commands } from "./commands";

export const executeCommand = (commandId: string) => {
  const command = commands[commandId];
  if (command && typeof command.action === "function") {
    command.action();
  } else {
    console.warn(`Command ${commandId} not found or invalid.`);
  }
};
