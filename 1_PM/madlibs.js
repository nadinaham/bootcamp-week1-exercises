/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change these values to generate a different story
*/

const noun1 = "nadine"
const verb1 = "cried"
const adjective1 = "not cash money"
const noun2 = "vscode"
const verb2 = "bashing"
const adjective2 = "swag" 
const adjective3 = "full of bugs"

const story = ` ** BASED ON TRUE EVENTS **
Once upon a time, ${noun1} was very excited for HSA DEV's Boot Camp. However, ${noun1} wasted so much time playing Club Penguin Rewritten that they didn't realize that the Boot Camp was tomorrow (or later that morning).
'Oh no, how am I going to set up everything and do the entire pre-assignment on time?' ${noun1} ${verb1}.
As it turned out, all the times ${noun1} messed with their laptop's command shell caused their entire setup process to be ${adjective1} and ${adjective3}.
After ${verb2} ${noun2} for two hours, ${noun1} came out of the experience with a few gray hairs but lots of ${adjective2}.

THE END
`

console.log(story)
