(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{XScD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("Fcif"),r=a("+I+c"),b=a("/FXl"),i=a("TjRS"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/tournamentEngine/documentation/api.md"}});var l={_frontmatter:c},p=i.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"tournamentengine-api-reference"},"tournamentEngine API Reference"),Object(b.b)("h2",{id:"addcourt"},"addCourt"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} venueId"),Object(b.b)("li",{parentName:"ul"},"@param {object} court - court object")),Object(b.b)("p",null,"{ courtId, courtName, altitude, latitude, longitude, surfaceCategory, surfaceType, surfaceDate, dateAvailability, onlineResources, courtDimensions, notes }"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addcourts"},"addCourts"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} venueId"),Object(b.b)("li",{parentName:"ul"},"@param {number} courtsCount - number of courts to add"),Object(b.b)("li",{parentName:"ul"},"@param {string[]} courtNames - array of names to assign to generated courts"),Object(b.b)("li",{parentName:"ul"},"@param {object[]} dataAvailability - dataAvailability object")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"adddrawdefinition"},"addDrawDefinition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"adddrawentries"},"addDrawEntries"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addevent"},"addEvent"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addevententries"},"addEventEntries"),Object(b.b)("p",null,"Adds participantIds to the entries array in an event"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - passed in automatically by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {string} eventId - tournamentEngine automatically retrieves event"),Object(b.b)("li",{parentName:"ul"},"@param {string[]} participantIds - ids of all participants to add to event"),Object(b.b)("li",{parentName:"ul"},"@param {string} enryStatus - entryStatus enum, e.g. DIRECT_ACCEPTANCE, ALTERNATE, UNPAIRED"),Object(b.b)("li",{parentName:"ul"},"@param {string} entryStage - entryStage enum, e.g. QUALIFYING, MAIN")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addevententrypairs"},"addEventEntryPairs"),Object(b.b)("p",null,"Add PAIR participant to an event. Creates new participantType: PAIR participants if necessary"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - passed in automatically by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {string} eventId - tournamentEngine automatically retrieves event"),Object(b.b)("li",{parentName:"ul"},"@param {string","[][]","} participantIdPairs - array paired id arrays for all participants to add to event"),Object(b.b)("li",{parentName:"ul"},"@param {string} enryStatus - entryStatus enum, e.g. DIRECT_ACCEPTANCE, ALTERNATE, UNPAIRED"),Object(b.b)("li",{parentName:"ul"},"@param {string} entryStage - entryStage enum, e.g. QUALIFYING, MAIN")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addparticipant"},"addParticipant"),Object(b.b)("p",null,"Adds an INDIVIDUAL, PAIR or TEAM participant to tournament participants\nGenerates particpant.participantId if none is provided\nIncludes integrity checks for PAIR participants to insure participant.individualParticipantIds are valid"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} participant - participant object")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addparticipants"},"addParticipants"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addparticipantstogrouping"},"addParticipantsToGrouping"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addpenalty"},"addPenalty"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addplayoffstructures"},"addPlayoffStructures"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.addPlayoffStructures({\n  drawId,\n  structureId,\n  roundNumbers: [3], // either target roundNumbers or playoffPositions\n  playoffPositions: [3, 4],\n});\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addvenue"},"addVenue"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"alloweddrawtypes"},"allowedDrawTypes"),Object(b.b)("p",null,"No parameters."),Object(b.b)("p",null,"Returns an array of names of allowed Draw Types, if any applicable policies have been applied to the tournamentRecord."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"allowedmatchupformats"},"allowedMatchUpFormats"),Object(b.b)("p",null,"No parameters."),Object(b.b)("p",null,"Returns an array of TODS matchUpFormat codes for allowed scoring formats, if any applicable policies have been applied to the tournamentRecord."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"alleventmatchups"},"allEventMatchUps"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"alltournamentmatchups"},"allTournamentMatchUps"),Object(b.b)("p",null,"Return an array of all matchUps contained within a tournament. These matchUps are returned ",Object(b.b)("strong",{parentName:"p"},"inContext"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { matchUps } = tournamentEngine.allTournamentMatchUps();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assigndrawposition"},"assignDrawPosition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assignmatchupcourt"},"assignMatchUpCourt"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assignseedpositions"},"assignSeedPositions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Provides the ability to assign seedPositions ",Object(b.b)("em",{parentName:"li"},"after")," a structure has been generated"),Object(b.b)("li",{parentName:"ul"},"To be used ",Object(b.b)("em",{parentName:"li"},"before")," participants are positioned")),Object(b.b)("p",null,"Assign ",Object(b.b)("strong",{parentName:"p"},"participantIds")," to ",Object(b.b)("strong",{parentName:"p"},"seedNumbers")," within a target draw structure."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"Defaults to { stage: 'MAIN', stageSequence: 1 } if { structureId: undefined }\n")),Object(b.b)("p",null,"The structure of an ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"assignment object"))," is as follows:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "seedNumber": 1,\n  "seedValue": 1,\n  "participantId": "uuid-of-participant"\n}\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"seedNumber")," is unique while ",Object(b.b)("strong",{parentName:"p"},"seedValue")," can be any string representation."),Object(b.b)("p",null,"This allows seeds 5-8 to be visually represented as all having a seed value of '5' or '5-8'."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unique identifier for target drawDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"assignments"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Array of assignment objects")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eventId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Not required; optimizes locating draw witthin tournamentRecord")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structureId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Apply assignments to a specific structure, identified by structureId")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Locate target structure by stage; used together with stageSequence")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stageSequence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Locate target structure by stageSequence; used together with stage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"useExistingSeedLimits"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Restrict ability to assign seedNumbers beyond established limit")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"assigntiematchupparticipantid"},"assignTieMatchUpParticipantId"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"bulkmatchupstatusupdate"},"bulkMatchUpStatusUpdate"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"bulkschedulematchups"},"bulkScheduleMatchUps"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - passed in automatically by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {object} drawEngine - passed in automatically by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {string[]} matchUpIds - array of matchUpIds to be scheduled"),Object(b.b)("li",{parentName:"ul"},"@param {object} schedule - { venueId?: string; scheduledDayDate?: string; scheduledTime?: string }")),Object(b.b)("h2",{id:"bulkupdatepublishedeventids"},"bulkUpdatePublishedEventIds"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - passed in automatically by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {object[]} outcomes - array of outcomes to be applied to matchUps, relevent attributes: { eventId: string; drawId: string; }")),Object(b.b)("p",null,"Returns a filtered array of publishedEventIds from all eventIds which are included in a bulkMatchUpStatusUpdate"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checkinparticipant"},"checkInParticipant"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checkoutparticipant"},"checkOutParticipant"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deletecourt"},"deleteCourt"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deletedrawdefinitions"},"deleteDrawDefinitions"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removeevententries"},"removeEventEntries"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deleteevents"},"deleteEvents"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deleteparticipants"},"deleteParticipants"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deletevenue"},"deleteVenue"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"deletevenues"},"deleteVenues"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"destroypairentry"},"destroyPairEntry"),Object(b.b)("p",null,"Removes a participantType: PAIR entry from an event and adds the individualParticipantIds to entries as entryStatus: UNPAIRED"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - passed in by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {string} eventId - resolved to event by tournamentEngine"),Object(b.b)("li",{parentName:"ul"},"@param {string} participantId - id of PAIR participant to remove; individualParticipantIds will be added as UNPAIRED participant entries")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"devcontext"},"devContext"),Object(b.b)("p",null,"Setting devContext(true) bypasses ",Object(b.b)("strong",{parentName:"p"},"try {} catch (err) {}")," code block and in some cases enables enhanced logging"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.devContext(true);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"eventmatchups"},"eventMatchUps"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"findcourt"},"findCourt"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"findmatchup"},"findMatchUp"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"findparticipant"},"findParticipant"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"findvenue"},"findVenue"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"flusherrors"},"flushErrors"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"generatedrawdefinition"},"generateDrawDefinition"),Object(b.b)("p",null,"This is a convenience method which handles most use cases for draw generation."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eventId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unique identifier for the event within the current tournament")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawSize"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of draw postions there will be in the draw structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ELIMININATION, ROUND_ROBIN & etc, defaults to SINGLE_ELIMINATION")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"automated"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether or not to automatically generate draw structure(s); defaults to true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"matchUpType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SINGLES, DOUBLES, or TEAM")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"matchUpFormat"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ITF TODS matchUpFormat code which describes scoring format")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"playoffMatchUpFormat"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Alternate matchUpformat for connected playoff structures")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tieFormat"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"includes collectionDefinitions and winCriteria")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"customName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Custom name for the generated draw structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seedsCount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Desired seeds to be generated from rankings if no seededParticipants data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seedingProfile"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used to specify WATERFALL seeding, for instance, for Round Robin structures")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seedByRanking"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defaults to TRUE; use rankings for seeding if no seededParticipants provided")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seededParticipants"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Array of seeding objects including seedValue and participantId")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qualifyingRound"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Round of the strucrure which qualifies participants for connected structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"structureOptions"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines groupSize and playoffGroups for Round Robin structures")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"policyDefinitions"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Seeding or avoidance policies to be used when placing participants in draw")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qualifyingPositions"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of positions in this draw structure to will be filled by qualifiers")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"generatemockparticipants"},"generateMockParticipants"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"generateteamsfromparticipantattribute"},"generateTeamsFromParticipantAttribute"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getaudit"},"getAudit"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcourtinfo"},"getCourtInfo"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcourts"},"getCourts"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getdrawdata"},"getDrawData"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getevent"},"getEvent"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} eventId - id of the event to retreive")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"geteventproperties"},"getEventProperties"),Object(b.b)("p",null,"Gather attributes of events which come from other tournament elements, e.g. participants which have rankings/ratings/seedings for a given event."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {\n  entryScaleAttributes,\n  hasSeededParticipants,\n  hasRankedParticipants,\n  hasRatedParticipants,\n} = tournamentEngine.getEventProperties({ eventId });\n")),Object(b.b)("p",null,"... where ",Object(b.b)("strong",{parentName:"p"},"entryScaleAttributes")," is an array of { prticipantId, participantName, seed, ranking, rating }"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"geteventdata"},"getEventData"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getmatchupscheduledetails"},"getMatchUpScheduleDetails"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getpairedparticipant"},"getPairedParticipant"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string[]} participantIds - ids of the participants")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getparticipanteventdetails"},"getParticipantEventDetails"),Object(b.b)("p",null,"Returns { eventDetails: { eventName, eventId }} for events in which participantId or TEAM/PAIR including participantId appears"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {object} tournamentRecord - tournament object (passed automatically from tournamentEngine state)"),Object(b.b)("li",{parentName:"ul"},"@param {string} participantId - id of participant for which events (eventName, eventId) are desired")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getparticipantidfinishingpositions"},"getParticipantIdFinishingPositions"),Object(b.b)("p",null,"Returns the Range of finishing positions possible for all participantIds within a draw"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {string} drawId - drawId of target draw within a tournament"),Object(b.b)("li",{parentName:"ul"},"@param {boolean} byeAdvancements - whether or not to consider byeAdancements in returns finishingPositionRange")),Object(b.b)("h2",{id:"getparticipantscaleitem"},"getParticipantScaleItem"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getparticipantsigninstatus"},"getParticipantSignInStatus"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getpolicydefinition"},"getPolicyDefinition"),Object(b.b)("p",null,"Finds policyDefinition for either tournament, event (if eventId), or draw (if drawId);\nTakes policyType as a parameter ('seeding', 'avoidance', or 'scoring')"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getseedscount"},"getSeedsCount"),Object(b.b)("p",null,"Takes a policyDefinition, drawSize and participantCount and returrns the number of seeds valid for the specified drawSize"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@param {boolean} drawSizeProgression - drawSizeProgression indicates that rules for all smaller drawSizes should be considered"),Object(b.b)("li",{parentName:"ul"},"@param {object} policyDefinition - polictyDefinition object"),Object(b.b)("li",{parentName:"ul"},"@param {number} participantCount - number of participants in draw structure"),Object(b.b)("li",{parentName:"ul"},"@param {number} drawSize - number of positions available in draw structure")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getstate"},"getState"),Object(b.b)("p",null,"No parameters."),Object(b.b)("p",null,"Returns a deep copy of the current tournamentEngine state."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { tournamentRecord } = tournamentEngine.getState();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"gettournamentparticipants"},"getTournamentParticipants"),Object(b.b)("p",null,"Returns tournament participants filtered by participantFilters which are arrays of desired participant attribute values"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"@param {object} tournamentRecord - tournament object (passed automatically from tournamentEngine state)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"@param {object} participantFilters - attribute arrays with filter value strings"),Object(b.b)("p",{parentName:"li"},"imlemented: eventIds, participantTypes, participantRoles,\nto be implemented: drawIds, structureIds, signInStates, keyValues,"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"gettournamentpenalties"},"getTournamentPenalties"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"gettournamentinfo"},"getTournamentInfo"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getvenues"},"getVenues"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getvenuedata"},"getVenueData"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"matchupactions"},"matchUpActions"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"mergeparticipants"},"mergeParticipants"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"modifycourtavailability"},"modifyCourtAvailability"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"modifypenalty"},"modifyPenalty"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"newtournamentrecord"},"newTournamentRecord"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"participantscaleitem"},"participantScaleItem"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"participantssigninstatus"},"participantsSignInStatus"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"publishevent"},"publishEvent"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"rankbyratings"},"rankByRatings"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"regeneratedrawdefinition"},"regenerateDrawDefinition"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removedrawpositionassignment"},"removeDrawPositionAssignment"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removeparticipantsfromallteams"},"removeParticipantsFromAllTeams"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removeparticipantsfromgroup"},"removeParticipantsFromGroup"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setdrawparticipantrepresentatives"},"setDrawParticipantRepresentatives"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removepenalty"},"removePenalty"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setmatchupstatus"},"setMatchUpStatus"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setparticipantscaleitem"},"setParticipantScaleItem"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scaleItem = {\n  scaleValue: 12,\n  scaleName: 'U16',\n  scaleType: RANKING,\n  eventType: SINGLES,\n  scaleDate: '2020-06-06',\n};\n\nresult = tournamentEngine.setParticipantScaleItem({\n  participantId,\n  scaleItem,\n});\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setparticipantscaleitems"},"setParticipantScaleItems"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const scaleItemsWithParticipantIds = [\n  {\n    participantId,\n    scaleItems: [\n      {\n        scaleValue: 8.3,\n        scaleName: 'WTN',\n        scaleType: RATING,\n        eventType: SINGLES,\n        scaleDate: '2021-01-01',\n      },\n    ],\n  },\n];\ntournamentEngine.setParticipantScaleItems({ scaleItemsWithParticipantIds });\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setstate"},"setState"),Object(b.b)("p",null,"Loads a tournament record into tournamentEngine."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.setsState(tournamentRecord, deepCopy);\n")),Object(b.b)("p",null,"By default a deep copy of the tournament record is made so that mutations made by tournamentEngine do not affect the source object. An optional boolean parameter, ",Object(b.b)("em",{parentName:"p"},"deepCopy")," can be set to false to override this default behavior."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"settournamentcategories"},"setTournamentCategories"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"settournamentenddate"},"setTournamentEndDate"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"settournamentname"},"setTournamentName"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"settournamentnotes"},"setTournamentNotes"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"settournamentstartdate"},"setTournamentStartDate"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setvenueaddress"},"setVenueAddress"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"tournamentmatchups"},"tournamentMatchUps"),Object(b.b)("p",null,"Returns all matchUups in a tournamentRecord, assuming that ",Object(b.b)("inlineCode",{parentName:"p"},"tournament.setState(tournamentRecord)")," has already been called. These matchUps are returned ",Object(b.b)("strong",{parentName:"p"},"inContext"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"matchUpFilters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"contestFilters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {\n  abandonedMatchUps,\n  byeMatchUps,\n  completedMatchUps,\n  pendingMatchUps,\n  upcomingMatchUps,\n} = tournamentEngine.tournamentMatchUps();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"unpublishevent"},"unPublishEvent"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"version"},"version"),Object(b.b)("p",null,"Returns NPM package version"),Object(b.b)("hr",null))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/tournamentEngine/documentation/api.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-tournament-engine-documentation-api-md-ba2a3c8e44b0617b2a5a.js.map