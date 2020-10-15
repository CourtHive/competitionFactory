(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/KMQ":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("Fcif"),i=a("+I+c"),o=a("/FXl"),r=a("TjRS"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/drawEngine/documentation/avoidance.md"}});var c={_frontmatter:s},p=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"avoidance"},"Avoidance"),Object(o.b)("p",null,"Avoidance is an attempt to insure that grouped players do not encounter each other in early rounds (or just the first round) of an elimination draw structure, or that round robin brackets are generated such that players from the same group are evenly distributed across brackets and do not encounter each other unless there are more group members than there are brackets."),Object(o.b)("p",null,"Avoidance can be applied to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tods-competition-factory/drawEngine/seedPositiioning#seed-blocks"}),"Seed Blocks")," as well as unseeded players, though Seeded players may only be moved to other positions valid for the Seed Block within which they are placed."),Object(o.b)("h2",{id:"single-round-avoidance"},"Single Round Avoidance"),Object(o.b)("p",null,"Single Round Avoidance an be accomplished by random placement followed by an iterative shuffling algorithm which generates a score for each player distribution and which runs through a set number of iterations, or by iterative attempts to resolve conflicts by searching for alternate player positions. In some cases where single round avoidance is the goal it is specifically forbidden to attempt to maximize player separation within a draw."),Object(o.b)("h2",{id:"multiple-round-avoidance"},"Multiple Round Avoidance"),Object(o.b)("p",null,"Multiple Round Avoidance seeks to place players as far apart within a draw structure as possible. This can be accomplished by dividing a draw structure into sections based on the number of players within a given group and distributing a group's players evenly across these sections, randomizing section placement if there are more sections than players in a given group. This process would be repeated for each group starting with the largest group. There are scenarios where players in smaller groups end up having only adjacent positions available when it comes to their distribution which necessitates a shuffling step for previously placed groups."),Object(o.b)("h2",{id:"avoidance-policies"},"Avoidance Policies"),Object(o.b)("p",null,"Both the ",Object(o.b)("strong",{parentName:"p"},"tournamentEngine")," and ",Object(o.b)("strong",{parentName:"p"},"drawEngine")," within the Competition Factory support attaching policy definitions which control the behavior of various exported methods."),Object(o.b)("p",null,"For Avoidance the algoritm requires access to attributes of tournament participants and thus must be accessed via the ",Object(o.b)("strong",{parentName:"p"},"tournamentEngine"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const values = {\n  event,\n  eventId,\n  automated: true,\n  drawSize: 32,\n  policyDefinitions: [AVOIDANCE_COUNTRY],\n};\nconst { drawDefinition } = tournamentEngine.generateDrawDefinition(values);\n")),Object(o.b)("p",null,"In this case the ",Object(o.b)("strong",{parentName:"p"},"policydefinition")," specifies that participants in the generated draw are to be separated according to any country values that may exist on participant records. The policy is defined as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export const AVOIDANCE_COUNTRY = {\n  avoidance: {\n    roundsToSeparate: undefined,\n    policyName: 'Nationality Code',\n    policyAttributes: [\n      { key: 'person.nationalityCode' },\n      { key: 'individualParticipants.person.nationalityCode' },\n    ],\n  },\n};\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"policyName")," is not required but useful for identifying a policy which has been attached to a ",Object(o.b)("strong",{parentName:"p"},"drawDefinition")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"roundsToSeparate")," defines the desired separation; if undefined defaults to maximum separation."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"policyAttrributes"),' is an array of "accessors" which determine which attributes of participants to consider. In the example above the ',Object(o.b)("em",{parentName:"p"},"nationalityCode")," of participants can be found in different places depending on whether the participant is an INDIVIDUAL or a PAIR. This notation works regardless of whether child attributes are strings, numbers, or arrays, as is the case with ",Object(o.b)("em",{parentName:"p"},"individualPartcipants")," in PAIR participants."),Object(o.b)("p",null,'INDIVIDUAL participants may be mebmers of PAIR, TEAM and GROUP participants; the INDIVIDUAL participant object does not contain these attributes, so they must be added as "context" before avoidance processing can proceed. Three additional attributes are therefore added to the INDIVIDUAL partcipant objects:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"pairParticipantIds"),Object(o.b)("li",{parentName:"ul"},"teamParticipantIds"),Object(o.b)("li",{parentName:"ul"},"groupParticipantIds")),Object(o.b)("p",null,"Other desired avoidance attributes may exist on participant objects as extensions. Any such extensions will be added as attributes to the particpant object prior to processing."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/drawEngine/documentation/avoidance.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-draw-engine-documentation-avoidance-md-61fa26d21064e0f0e7ab.js.map