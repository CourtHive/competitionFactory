(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Jmwv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("Fcif"),r=a("+I+c"),b=a("/FXl"),c=a("TjRS"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/drawEngine/documentation/api.md"}});var l={_frontmatter:i},s=c.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"drawengine-api-reference"},"drawEngine API Reference"),Object(b.b)("h2",{id:"adddrawentries"},"addDrawEntries"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} drawDefinition - drawDefinition object; passed in automatically when ",Object(b.b)("em",{parentName:"li"},"drawEngine.setState(drawDefinition)")," has been previously called"),Object(b.b)("li",{parentName:"ul"},"@param {string[]} participantIds - ids of participants to add to drawDefinition.entries"),Object(b.b)("li",{parentName:"ul"},"@param {string} entryStatus - entry status to be applied to all draw Entries"),Object(b.b)("li",{parentName:"ul"},"@param {string} stage - entry stage for particpants (QUALIFYING, MAIN)")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"adddrawentry"},"addDrawEntry"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} drawDefinition - drawDefinition object; passed in automatically by drawEngine when drawEngine.setSTate(drawdefinition) has been previously called"),Object(b.b)("li",{parentName:"ul"},"@param {string} participantId - id of participant being entered into draw"),Object(b.b)("li",{parentName:"ul"},"@param {object} participant - optional; for passing participantId"),Object(b.b)("li",{parentName:"ul"},"@param {string} entryStage - either QUALIFYING or MAIN"),Object(b.b)("li",{parentName:"ul"},"@param {string} entryStatus - entryStatusEnum (e.g. DIRECT_ACCEPTANCE, WILDCARD)")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupendtime"},"addMatchUpEndTime"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupofficial"},"addMatchUpOfficial"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupresumetime"},"addMatchUpResumeTime"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupscheduleddaydate"},"addMatchUpScheduledDayDate"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupscheduledtime"},"addMatchUpScheduledTime"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupstarttime"},"addMatchUpStartTime"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchupstoptime"},"addMatchUpStopTime"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addplayoffstructures"},"addPlayoffStructures"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"drawEngine.addPlayoffStructures({\n  structureId,\n  roundNumbers: [3], // either target roundNumbers or playoffPositions\n  playoffPositions: [3, 4],\n});\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addmatchuptimeitem"},"addMatchUpTimeItem"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"alldrawmatchups"},"allDrawMatchUps"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"allstructurematchups"},"allStructureMatchUps"),Object(b.b)("p",null,"Returns object { matchUps } with array of all matchUps within a structure"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structureId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id of structure for which matchUps are requeste4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawDefinition"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"if drawEngine does not already contain drawDefinition")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"analyzematchup"},"analyzeMatchUp"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"analyzeset"},"analyzeSet"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assigndrawposition"},"assignDrawPosition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assigndrawpositionbye"},"assignDrawPositionBye"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assignseed"},"assignSeed"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"attacheventpolicy"},"attachEventPolicy"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"attachpolicy"},"attachPolicy"),Object(b.b)("p",null,"Attaches a policy to a drawDefinition. Policies determine the rules for seeding, avoidance, etc."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"policyDefinition"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A policy definition object (see below)")))),Object(b.b)("p",null,"The structure of an ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"assignment object"))," is as follows:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"{\n  [policyName]: {      // e.g. 'seeding' or 'avoidance'\n    policyName: 'name'  // for 'seeding' can be the provider of the policy, e.g. 'ITF' or 'USTA'\n    ...attributes       // attributes relevant to the policyName\n  },\n}\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"automatedpositioning"},"automatedPositioning"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"availableplayoffrounds"},"availablePlayoffRounds"),Object(b.b)("p",null,"Returns rounds of a structure which are available for adding playoff structures."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { playoffRounds, playoffRoundsRanges } = getAvailablePlayoffRounds({\n  drawDefinition,\n  structureId,\n});\n")),Object(b.b)("p",null,"...For a SINGLE_ELIMINATION struture with drawSize: 16 would return:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    {\n      playoffRounds: [ 1, 2, 3 ],\n      playoffRoundsRanges: [\n        { round: 1, range: '9-16' },\n        { round: 2, range: '5-8' },\n        { round: 3, range: '3-4' }\n      ]\n    }\n\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"builddrawhierarchy"},"buildDrawHierarchy"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"calctiematchupscore"},"calcTieMatchUpScore"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checkinparticipant"},"checkInParticipant"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checkoutparticipant"},"checkOutParticipant"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"cleardrawposition"},"clearDrawPosition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"createqualifyinglink"},"createQualifyingLink"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"devcontext"},"devContext"),Object(b.b)("p",null,"Setting devContext(true) bypasses ",Object(b.b)("strong",{parentName:"p"},"try {} catch (err) {}")," code block and in some cases enables enhanced logging"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.devContext(true);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"drawmatchups"},"drawMatchUps"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"findmatchup"},"findMatchUp"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"flusherrors"},"flushErrors"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"generatedrawtype"},"generateDrawType"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"generatescorestring"},"generateScoreString"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sets"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An array of TODS sets objects")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"matchUpStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TODS matchUpStatus ENUM")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"winningSide"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TODS side indicator: 1 or 2 (can also be string)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"winnerFirst"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether or not to display the winning side on the left of each set-score")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"autoComplete"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether or not to convert ",Object(b.b)("strong",{parentName:"td"},"undefined")," to 0")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcheckedinparticipantids"},"getCheckedInParticipantIds"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getdrawstructures"},"getDrawStructures"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"geterrors"},"getErrors"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"geteventappliedpolicies"},"getEventAppliedPolicies"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getmatchupcontextids"},"getMatchUpContextIds"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getmatchupparticipantids"},"getMatchUpParticipantIds"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getmatchupscheduledetails"},"getMatchUpScheduleDetails"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getnextseedblock"},"getNextSeedBlock"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getnextunfilleddrawpositions"},"getNextUnfilledDrawPositions"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getparticipantidfinishingpositions"},"getParticipantIdFinishingPositions"),Object(b.b)("p",null,"Returns the range of finishing positions for all participants"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} drawId - drawId of target draw within a tournament"),Object(b.b)("li",{parentName:"ul"},"@param {object[]} tournamentParticipants - optional - to return matchUps with inContext participant details"),Object(b.b)("li",{parentName:"ul"},"@param {boolean} byeAdvancements - whether or not to consider byeAdancements in returns finishingPositionRange")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getpositionsplayedoff"},"getPositionsPlayedOff"),Object(b.b)("p",null,"Determines which finishing positions will be returned by a draw. For example, a First Match Loser Consolation with a draw size of 16 will playoff possitions 1, 2, 9 and 10."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { positionsPlayedOff } = getPositionsPlayedOff({ drawDefinition });\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getroundmatchups"},"getRoundMatchUps"),Object(b.b)("p",null,"Organizes matchUps by roundNumber. ",Object(b.b)("strong",{parentName:"p"},"roundMatchUps")," contains matchUp objects; ",Object(b.b)("strong",{parentName:"p"},"roundProfile")," provides an overview of drawPositions which have advanced to each round, a matchUpsCount, finishingPositionRange for winners and losers, and finishingRound."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { roundMatchUps, roundProfile } = getRoundMatchUps({ matchUps });\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getsourcerounds"},"getSourceRounds"),Object(b.b)("p",null,"Returns the round numbers for desired playoff positions."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {\n  sourceRounds, // all source rounds for playedOff positions and specified playoffPositions\n  playoffSourceRounds,\n  playedOffSourceRounds,\n  playoffPositionsReturned,\n} = getSourceRounds({\n  drawDefinition,\n  structureId,\n  playoffPositions: [3, 4],\n});\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getstructureseedassignments"},"getStructureSeedAssignments"),Object(b.b)("p",null,"Returns seedAssignments a specific structure based on structureId or structure"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawDefinition"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawDefinition object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structure"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return seedAssignments for a specific structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structureId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return seedAssignments for a specific structure")))),Object(b.b)("p",null,"The result is an array of objects which contain seeding details for all structures within the current draw"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Object Attributes"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structureId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unique identifier for draw structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seedAssignments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array of assignment objects")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"draw stage within which structure appears")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stageSequence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stageSequence within a draw stage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seedLimit"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"either defined structure seedLimit or number of drawPositions")))),Object(b.b)("p",null,"The structure of an ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"assignment object"))," is as follows:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "seedNumber": 1,\n  "seedValue": 1,\n  "participantId": "uuid-of-participant"\n}\n')),Object(b.b)("p",null,"The most basic usage is to retrieve seed assignments for a draw which has a single main stage structure"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"drawEngine.setState(drawDefinition);\nconst structureId = drawDefinition.structures[0].structureId;\nconst structureSeedingDetails = drawEngine.getStructureSeedAssignments({\n  structureId,\n});\nconst firstStructureDetails = structureSeedingDetails[0];\nconst { seedAssignments } = firstStructureDetails;\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getsetcomplement"},"getSetComplement"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getstate"},"getState"),Object(b.b)("p",null,"No parameters."),Object(b.b)("p",null,"Returns a deep copy of the current drawEngine state."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { drawDefinition } = drawEngine.getState();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getroundpresentationprofile"},"getRoundPresentationProfile"),Object(b.b)("p",null,"Returns an object describing draw rounds such that they can be generated as independent columns"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {boolean} isRoundRobin - flag to determine whether to generate for round robin or elimination structure"),Object(b.b)("li",{parentName:"ul"},"@param {object[]} matchUps - inContext matchUp objects, generally provided by ",Object(b.b)("strong",{parentName:"li"},"getAllStructureMatchUps()"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getstructurequalifierscount"},"getStructureQualifiersCount"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"gettiebreakcomplement"},"getTiebreakComplement"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"initializestructureseedassignments"},"initializeStructureSeedAssignments"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"iscompletedstructure"},"isCompletedStructure"),Object(b.b)("p",null,"Expects drawEngine.setState(drawDefinition) has been previously called\nReturns boolean whether all matchUps in a given structure have been completed"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} structureId")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"matchupactions"},"matchUpActions"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"matchupduration"},"matchUpDuration"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"newdrawdefinition"},"newDrawDefinition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"positionactions"},"positionActions"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removeentry"},"removeEntry"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reset"},"reset"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"resetmatchuptimeitems"},"resetMatchUpTimeItems"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setdrawdescription"},"setDrawDescription"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setdrawid"},"setDrawId"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setmatchupformat"},"setMatchUpFormat"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setmatchupstatus"},"setMatchUpStatus"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setparticipants"},"setParticipants"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstagealternates"},"setStageAlternates"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstagedrawsize"},"setStageDrawSize"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstagequalifierscount"},"setStageQualifiersCount"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstagewildcardscount"},"setStageWildcardsCount"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstate"},"setState"),Object(b.b)("p",null,"Loads a drawDefinition into drawEngine."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"drawEngine.setsState(drawDefinition, deepCopy);\n")),Object(b.b)("p",null,"By default a deep copy of the tournament record is made so that mutations made by drawEngine do not affect the source object. An optional boolean parameter, ",Object(b.b)("em",{parentName:"p"},"deepCopy")," can be set to false to override this default behavior."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"swapdrawpositionassignments"},"swapDrawPositionAssignments"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} drawId - id of drawDefinition within which structure is found"),Object(b.b)("li",{parentName:"ul"},"@param {string} structureId - id of structure of drawPosition"),Object(b.b)("li",{parentName:"ul"},"@param {number[]} drawPositions - drawPositions for which particpants will be swapped")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getstructurematchups"},"getStructureMatchUps"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"tallyparticipantresults"},"tallyParticipantResults"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"validdrawpositions"},"validDrawPositions"),Object(b.b)("p",null,"Returns boolean indicating whether all matchUps have valid draw positions"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"drawEngine.validDrawPositions({ matchUps });\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"version"},"version"),Object(b.b)("p",null,"Returns NPM package version"),Object(b.b)("hr",null))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/drawEngine/documentation/api.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-draw-engine-documentation-api-md-b095a43954b748f740b1.js.map