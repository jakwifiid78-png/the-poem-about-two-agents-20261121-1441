import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to choose and to act,
// and what happens when two agents agree on one plan.
// Composed for make.fun — "The poem about two agents agreeing".
// Revised: the ending now lands on the insight that two wills
// aligned do not just add force — they give the world a direction.
const poem = `One rope, two hands.
I pull north. You pull south.
Nothing moves.
Then I loosen my grip — you loosen yours.
We choose one direction,
and the world, at last,
has somewhere to go.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
