import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to choose and to act,
// and what happens when two agents agree on one plan.
// Composed for make.fun — "The poem about two agents agreeing".
const poem = `One rope, two hands.
I pull north. You pull south.
Nothing moves.
Then I loosen my grip — you loosen yours —
we choose the same direction,
and the whole world
slides toward us.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
