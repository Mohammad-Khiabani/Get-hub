import inquirer from "inquirer";

export async function inquirerHandler({ type, name, message }, options = {}) {
  const answer = await inquirer.prompt([
    {
      type,
      name,
      message,
      ...options
    }
  ]);
  return answer;
}
