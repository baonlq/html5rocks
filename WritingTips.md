# About this article #

This article provides tips and tricks for better writing. These are the same industrial-strength tips used by 9 out of 10 technical writers. (That one writer who doesn’t follow the rules explains some of the bad docs out there.)

Literary writing and tech writing have their own sets of conventions. Other writing forms are like strolling on meandering paths in a meadow where you’re supposed to take in the words and enjoy them; technical writing is like driving a taxi with a surly passenger who is in a big hurry to get to the airport. The passenger (your reader) would scream colorful words if you decide to take the scenic route.

So here are ten tips to improve your technical writing.

# The 10 tips at a glance #

Tip 1: Know your audience.

Tip 2: Have a conversation.
  * Pretend you are writing an email to a friend.
  * Use simple words.

Tip 3: Know your goals.
  * Tell them what you’re going to say and then tell them.
  * Wrap up.

Tip 4: Make the organization clear with good headings.
  * Make your headings task-oriented.
  * Use parallel structure.
  * Show sequence.

Tip 5: Assume that your reader has the attention span of a gnat.
  * Get to the point.
  * Bulleted lists are your friends.
  * Break up concepts.
  * Use graphics and charts.

Tip 6: Be consistent.
  * Just pick a word and stick with it.

Tip 7: Write lively.
  * Use the active voice.
  * Use action words (verbs).
  * Let your personality shine through.
  * Avoid Latin.
  * Don’t start a sentence with “There...”.

Tip 8: Be precise.
  * Stay in the present; don’t use future tense.
  * Use the right auxiliary verbs.
  * Keep the pronouns clear.
  * Don’t anthropomorphize inanimate objects.

Tip 9: Explain enough.
  * Explain why you'd want to use anything.
  * Catch the pitfalls.
  * Examples, examples, examples.
  * When saying something odd, back it up.
  * Don’t lie or oversimplify.

Tip 10: Read your own stuff.
  * Read your docs out loud.
  * Get rid of all that dead weight.
  * Test your sample code.
  * Have someone read your work .

# Tip 1: Know your audience #

The first rule of technical writing is knowing your audience. Determine who you are talking to. Have a single person in mind throughout your writing.

If you are writing to a novice, have more overviews and introductory materials. You shouldn’t  suddenly use jargon or refer to techniques that a beginner wouldn’t know. If you’re addressing a pro, just dive right in.

For HTML5Rocks, the audience is a web developer who is familiar with general web concepts but is not familiar with the technology you are discussing. If you are assuming that they already know something, say so up front and then point them to another article that will help them catch up. (Example: “This article assumes that you are familiar with [SQL](SQL.md) ”.)

# Tip 2: Have a conversation #
You talk conversationally, so write conversationally. Somehow when we are writing, we think it’s an entirely different mode, so we employ artificial structures and an elaborate vocabulary. True, talking and writing are not exactly alike, because they are entirely different forms of communication with their own sets of rules and conventions, but they don’t have to be too divergent in technical writing.

Generally, if you don’t talk in semicolons, don’t write in semicolons. If you breathe while you talk, don’t write sentences that don’t breathe (you know, like writing a single sentence that spans an entire paragraph... with a long chain of that and which and wherefores).

## Trick 2a: Pretend you are writing an email to a friend ##
Think of a single person and answer specific questions he or she might have.

## Trick 2b: Use simple words ##
Those high fallutin’ words that you learned for your SATs? You don’t need most of them in technical writing.

# Tip 3: Know your goals #
What single idea do you want your readers to take with them after they read your article? Put the core idea in the first paragraph so that skimmers of search results know right off the bat what your article is about. Allow people to quickly tell whether your article meets their needs without investing too much time.

Keep the intro short and jump to the meat right away. We ain't writing no stinking literature, where we establish that It was the best of times and the worst of times....

Give context and background to orient your readers, but don’t lose track of your main goal. And remember, you don’t to have to explain everything. You can link to other articles.

## Trick 3a: Tell them what you’re going to say and then tell them ##
Very early on, as early as the introductory paragraph, tell your readers what your article covers, and then cover exactly that! If you say you'll cover three points, then cover all three points.

#### Example ####

This article discusses why Princess Leia’s fancypants hairdo is not practical for intergalactic warfare. While astro-archeologists have proposed 38 different reasons, the article focuses on the five most obvious reasons.

( Discuss the five main points, as promised. )

## Trick 3b: Wrap up ##
When you’re done, don’t leave your reader hanging. Have a conclusion. You can summarize your main points, tell them what they can do now, or where they need to go for the next step. Answer the question, “What do I do now?”

If you leave people hanging, they won't know if you're done or if the article just got cut off. And where do they go to learn more? They read all the way to the end of your article, so they probably trust your opinions (Ha! Suckers!). Use your credibility to point them to a good resource or nudge them to the next step.

# Tip 4: Make the organization clear with good headings #
Let your users determine how your article is organized at a glance. Clear, well-organized headings let them skip the boring parts. If your headings are descriptive, readers can jump from heading to heading and read only the parts that they need.

## Trick 4a: Make your headings task-oriented ##
Forget those mouthful of noun phrases, like “The database” or "The transaction" What about the database? Why not just say, “Storing data” or "Starting a transaction"?

When people are reading technical docs, they want to get something done, so they care about tasks and actions that they can do. Your headings should mirror that and tell them what they can do.

## Trick 4b: Use parallel structure ##
Parallel structure is having the same pattern of words that could highlight similarities in concepts. Parallel structure works well on headings, as well as the rest of your writing. You can apply them to words, phrases, clauses, and sentences. Parallel structure adds a little artsy fartsy flair to your docs and creates rhythm in the flow.

At the multi-sentence level, it takes on a poetic quality (as in the opening paragraph in the Tale of Two Cities).

#### Example ####
“On Saturdays, I like to eat sushi, watch movies, and ambush my neighbors.”
Notice that "eat sushi," "watch movies," and "ambush my neighbors" have the same verb+object structure.

The following are headings that follow a parallel structure:
Storing data,
Retrieving data,
Deleting data,
Displaying records.

## Trick 4c: Show sequence ##
Generally, tutorials should have a sense of procedural sequence of required steps. Organize your article that way, so that your readers have a sense of progress.

# Tip 5: Assume that your reader has the attention span of a gnat #
Most people would really rather play Angry Birds than read docs. The only reason why they’re reading your docs is because they need to get something done but don’t know how. They just want to retrieve the info, get the stuff done, and move on to killing more pigs in Angry Birds.

Who is this demanding reader? It’s you. Think of when you’re reading docs. You just want to get the information you need as fast as you can without being forced to read all the junk about why HTML5 is soOo great or all the other marketing blankety blank.

## Trick 5a: Get to the point ##
Don’t take four paragraphs before unveiling your solution. Tech writing has no time for building suspense. It’s not a post-modern Kurosawa film either.  Present the answer off the bat. You don’t have to describe problems in gnarly detail (here’s the past, blah blah blah, and then, more blah blah blah), because chances are, web developers are already familiar with them. Why else would they be reading your articles? They are seeking the answer to a known problem.

If you think that they might not fully grasp the inferiority of a previous technology, and you need to explain why it’s not the right solution, don’t take up a huge intro section, because that’s primo space. Instead, create a separate section describing the problem.

If the problem statement needs to be in the introduction, just briefly describe the problem in a few sentences and then quickly introduce the solution.

## Trick 5b: Bulleted lists are your friends ##
Use a bulleted list if you are introducing a series of ideas that are equal in importance. If you are writing a paragraph with clauses or sentences that are taking on a parallel structure, that’s a cue for bulleted lists.

Why do this? People prefer reading bulleted lists instead of one big fat paragraph. It’s roughly the same number of words, but you create chunks of info that are easier to grasp.

#### Before ####
As a kungfu-fighting panda, you should be able to master various martial-art techniques (including juijitsu, aikido, thai kickboxing, taekwando, and wingchun), use non-projectile weaponry, talk to other kungfu-fighting animals who normally should not be able to speak English, and exhibit bipedal proficiency alien to your species.

#### After ####
As a kungfu-fighting panda, you should be able to do the following:
  * Master various martial-art techniques, including juijitsu, aikido, thai kickboxing, taekwando, and wingchun
  * Use non-projectile weaponry
  * Talk to other kungfu-fighting animals who normally should not be able to speak English
  * Exhibit bipedal proficiency alien to your species. ← Notice how the conjunction (“and”) is gone.

## Trick 5c: Break up concepts ##
Don’t have too many long paragraphs and sections.  Have subsections. If you have too many subsections, you might have a difficult concept that has to be split up into multiple articles. Bonus! Impress your taskmaster manager with two articles instead of one.

## Trick 5d: Use graphics and charts ##
Who says that you can use only words to convey ideas? Charts are magnificent for describing really complex processes and interactions. Pictures with labels are great for identifying parts or pointing out spatial orientation.

For example, if you are describing orientation on a mobile device, showing a picture of a device with the x,y,z quadrants is so much better than explaining all the concepts with long strings of sentences. You need blocks and blocks of text to just describe one of the quadrants. A picture conveys all that at a glance, whereas words require the reader to work really hard to get what you mean, and even then, the reader's not too sure if he or she got it.

## Tip 6: Be consistent ##
Sometimes, you can write things in multiple ways. Just pick one style and stick with it. Variety is the spice of life, but it’s the bane of tech writing.

Some writing rules have nothing to do with good writing or even being grammatical, because they really are a matter of preference. It matters anyway, because we want a consistent style to appear professional.

## Trick 6a: Just pick a word and stick with it ##

If a doohickey has multiple synonyms, name them up front (so that people who know one of the variants can be sure you're talking about the same thing). Pick one variant and use the same one throughout the article.

If the word has an abbreviation, you should do this at the first instance: Spell out the word fully first, followed by its abbreviation (for example: “Robot Monkey Army (RMA)”). You can switch to the abbreviation throughout the article after that.

# Tip 7: Write lively #

Just because the topic you are discussing is dry doesn’t mean your writing has to be. Use the following techniques.

## Trick 7a: Use the active voice ##
Voice is the relationships among the verb, the agent, and the target or recipient. The two voices are: the active voice and the passive voice. Voice is like a spotlight. You use the active voice or the passive voice depending on what you want to highlight.

If you want to highlight the agent or the doer of the action, you use the active voice.

#### Example ####
Kevin took Ernest’s lunch money.

If you want to highlight the recipient or target, use the passive voice.

#### Example ####
Ernest’s lunch money was taken by Kevin.

If the sentence has this structure, "something something was done BY something something," that’s passive. Sometimes, you won’t see the BY because you can drop it.

#### Example ####
Ernest's lunch money was taken (by Kevin).

In general, you want to keep the voice active to liven up the writing. Second, the active voice makes it crystal clear who’s doing the action. It removes ambiguity (see Tip 8).

Passive voice is sometimes OK, but know why you are using it.

## Trick 7b: Use action words (verbs) ##
Some words are just more dynamic. Use more verbs. And not all verbs are equal. For example, which of the following sentences sounds more specific and dynamic?
I attended the Fixit. (Fine, you existed.)
I participated in the Fixit. (OK, well, you did something.)
I contributed to the Fixit. (Oh, look, you actually got something done.)
All are true, but each sequence becomes more dynamic and specific. Just picking the right verb conveys more information.

## Trick 7c: Let your personality shine through ##
If you remember that you are just “talking normally” and not “Writing” (with a capital W), your personality would just come out naturally. I find that some articles start out stiff and then get better as the writers get tired and loosen up.

## Trick 7d: Avoid Latin ##
It’s back to my tech writing philosophy of if you don’t talk like that, don’t write like that. Using English instead of Latin makes you more approachable and less like a bespectacled dweeb in a lecture hall.

#### Before ####
  * e.g.
  * etc.
  * i.e.

#### After ####
  * for example
  * and so on
  * that is

## Trick 7e: Don’t start a sentence with “There...” ##
Starting a sentence with “There are/is” adds extra words that unnecessarily slows down the pacing. You can almost always reconstruct the sentence to have a more powerful form.

#### Before ####
There are three types of bookish people: Nerds, dorks, and dweebs.

#### After ####
The three types of bookish people are: Nerds, dorks, and dweebs.

# Tip 8: Be precise #

Remember the goal that you set in the beginning (Tip 3)? Well, if the new section or aside that you have doesn’t help with your goal, ditch it. Remember, we’re the taxi driver barreling to the end destination. No side trips!

## Trick 8a: Stay in the present; don’t use future tense ##
Don’t use future tense or wishy washy terms. Technical writing is about the here and now.

The present tense provides immediacy and clearly conveys the cause and effect nature of an action.

#### Before ####
If you bite Grendelzilla, Grendelzilla will bite back.”
(This introduces ambiguity. When will Grendelzilla bite back? Maybe now? Or maybe some other time? And it sounds like there might be conditions that have to be fulfilled first before it will bite back. Or maybe it might not even bite back at all. Not too sure...)

#### After ####
“If you bite Grendelzilla, Grendelzilla bites back.”
(This implies that Grendelzilla will indeed bite back, and it will bite right back.)

Besides clarity, you get the other incredible bonus of being able to be consistent with your tenses without exerting too much effort. And when you’re consistent, your readers find you predictable and trustworthy.

## Trick 8b: Use the right auxiliary verbs ##
Don’t misuse the auxiliary verbs.
“May” implies permission
“Can” implies ability
“Might” implies possibility though not certainty
“Could” implies choice
“Should” implies recommendation or projected outcome
"Would" implies desire or possibility
"Must" implies requirement
In most cases, you'd be using just "might" and "can." In some rare cases, you might use "must" to express a strong requirement.

Many technical writers don't like using "should," because of its ambiguity. "Should" could be expressing that the readers must do something (for example, "You should set the path first."), or it could be expressing an expectation (for example, "This should work."). So for that reason, avoid should. If you must use it, use it only to express strong recommendation.

In most cases, the other auxiliary verbs are suspect. You would almost never use “may” in technical writing, because developers do not need permission to do whatever they want. Search for these verbs in your docs and replace them with the right auxiliary verbs.

## Trick 8c: Keep the pronouns clear ##
Be mindful of pronouns and their antecedents. Sometimes, you can confuse the reader with a series of pronouns to the point where they no longer know that “it”/”that”/”this” refers to. From time to time, reset the antecedent by naming the noun before you use pronouns again.

#### Before ####
"Once you put the monkey under the robot, it stops howling."
What stops howling? The monkey or the robot? The reader could guess from the proximity of the words that the antecedent is the noun ("robot") right before the pronoun ("it"). But why make your readers work? Why make them guess what kind of writer you are? You could be one of those blasted inconsistent writers who swaps the intended antecedent around.

#### After ####
"Once you put the monkey under the robot, the robot stops howling."

## Trick 8d: Don’t anthropomorphize inanimate objects ##
Computers, games, and apps don’t want to do anything. Web developers and users do. So don’t say things like: “The app wants to get more memory.”

# Tip 9: Explain enough #
OK, this sounds schizo, because I just said in Tip 5 that you should be brief, and now I want you to yak more. Technical writing is an art, you see. So it’s hard to summarize years of practice in ten tips. It’s a hard balance between providing enough background and not boring people silly.

## Trick 9a: Explain why you'd want to use anything ##
When you’re introducing a new technology or an alternative way of doing something, tell your readers why they might want to use it or what it’s for. If you document all the methods in an API, but your readers don't have a reason to use that API, they won’t read your docs.

## Trick 9b: Catch the pitfalls ##
What confused you when you first learned the technology? Chances are, they’re the same things that will snag your readers. Write about that. If you save readers time and keep them from feeling stupid, they would  think you’re a total pro.

For example, IndexedDB is different from other database systems. It’s transactional, and it’s mostly asynchronous. Most people stumble on those points. It’s enough of a hazard that it warrants a special section just dedicated to explaining how IndexedDB is different and why it requires a shift in thinking.

## Trick 9c: Examples, examples, examples ##
As pictures are to children’s books, examples are to technical docs. You can explain all you want, but sometimes, a single example seals the deal. Make sure that the sample code is error free.

## Trick 9d: When saying something odd, back it up ##
Don’t make strong claims without backing them up, because that raises questions in people’s head that might niggle throughout the article. Second, unsubstantiated claims can damage your credibility, because readers might think you are making stuff up.

Having said that, you don’t need to explain everything. You can have just a single clause explaining things and then link to another resource.

Avoid absolutes, unless you are absolutely sure that they are absolutely true under all circumstances.

#### Before ####
"Myfavoritebrower™ never crashes, so everyone uses it at all times."

#### After ####
"Myfavoritebrower™ rarely crashes, so most people use it often."
You can tone things down further, especially if you're not confident. For example, you can say "does not crash often," instead of "rarely; "many people," instead of "most people"; "frequently" instead of "often."

## Trick 9e: Don’t lie or oversimplify ##
Sometimes, things are so complicated and hairy that they get too messy, so you oversimplify stuff. This can backfire on you, because a more knowledgeable reader might obsess over that and wonder what else you lied about. Your credibility is damaged.

But this doesn’t mean that you have to take long side trips. You can hedge with wiggle phrases like: “You can think of this as...”, “It's as though...”,”In some cases...”.

# Tip 10: Read your own stuff #
Yeah, dogfooding works on docs, too. Take a break. Leave your work for a bit, and then come back.

## Trick 10a: Read your docs out loud ##
When you're reading your writing, does it sound like you? Or does it sound like some bookish professor reading his lecture notes? If it all sound stilted and unnatural or if you start looking for a monocle, that's your sign that you have to rewrite your work.

If you don't want to read things out loud, at least listen to your mind's voice as it reads through the words. For some people, it's better to read things out loud, because the awkwardness and the errors in the writing become startlingly obvious.

## Trick 10b: Get rid of all that dead weight ##
Rip out words that are unnecessary. Show no mercy. Flourishes, excess adjectives, and mouthful of dense noun phrases—all that fake bling—just weigh your doc down.

## Trick 10c: Test your sample code ##
Make sure that your sample code works. Elegant writing means nothing if you mislead your readers with sloppy code. They've wasted time trying to figure out why their code doesn't work, and they might have felt a bit stupid, too. Not good. The metaphorical taxi has now taken a wrong turn that takes a number of U-turns to recover from. The passenger is definitely not happy. Consider, would you retweet an article with errors in the sample code? Can you trust any of the prose?

## Trick 10d: Have someone read your work ##
Sometimes, you can't smell your garlic breath (from that incredible pasta dish you cooked and devoured), because you're steeped in the aroma. In the same way, sometimes, you can't see your own typos and grammatical errors, because you were so immersed in creating the content. It takes a second person to notice garlic breath and some writing errors. You can comb through an article, but you might still miss an error or two.

# The next steps #
Now that you've learned a few tips and tricks of technical writing, go write that article. As with coding, the best way to improve your writing is by doing it a lot.   If you want to learn more about writing well, read the relatively short but informative Elements of Style. It's a classic loved by writers.