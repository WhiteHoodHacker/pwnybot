import fs from 'fs';

/**
 * 
 * @param folder {string} 
 * @returns {string[]}
 */
export function getCommands(folder: string): string[] {
  let commands: string[] = [];
  fs.readdirSync(folder).forEach((file) => {
    const path = `${folder}/${file}`;
    if (fs.lstatSync(path).isDirectory()) {
      commands = commands.concat(getCommands(path));
    } else if (path.endsWith('.ts')) {
      commands.push(path);
    }
  });
  return commands;
}