(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{mlE7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a("Fcif"),r=a("+I+c"),o=a("/FXl"),c=a("TjRS"),p=(a("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/documentation/matchUpFormat.md"}});var s={_frontmatter:p},m=c.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"matchup-formats"},"MatchUp Formats"),Object(o.b)("p",null,"In TODS, a ",Object(o.b)("strong",{parentName:"p"},"drawDefinition")," is a collection of ",Object(o.b)("strong",{parentName:"p"},"structures"),". For example a MAIN ",Object(o.b)("strong",{parentName:"p"},"structure")," and a CONSOLATION ",Object(o.b)("strong",{parentName:"p"},"structure")," are considered to be part of the same ",Object(o.b)("strong",{parentName:"p"},"drawDefinition")," because they have a logical relationship whereby participants move from one ",Object(o.b)("strong",{parentName:"p"},"structure")," to another. USTA's TDM, its predecessor TMS, and CourtHive TMX Classic do not represent the relationship between structures as hierarchical, whereas in TODS there is a nesting of elements:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"})," tournament.events[].drawDefinitions[].structures[].matchUps[]\n")),Object(o.b)("p",null,"An application using the Competition Factory can request the ",Object(o.b)("strong",{parentName:"p"},"matchUpFormat")," for a given ",Object(o.b)("strong",{parentName:"p"},"matchUp")," and the ",Object(o.b)("strong",{parentName:"p"},"tournamentEngine")," will traverse the hierarchy from bottom up looking to see at what level a ",Object(o.b)("strong",{parentName:"p"},"matchUpFormat")," has been set. This method will also return any ",Object(o.b)("strong",{parentName:"p"},"matchUpFormat")," codes encountered in the hierarchy within which a matchUp is found:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { matchUpFormat } = tournamentEngine.getMatchUpFormat({\n  drawId,\n  matchUpId,\n});\n")),Object(o.b)("p",null,"To set the ",Object(o.b)("strong",{parentName:"p"},"matchUpFormat")," at each level:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.setEventDefaultMatchUpFormat({ eventId, matchUpFormat });\ntournamentEngine.setDrawDefaultMatchUpFormat({ drawId, matchUpFormat });\ntournamentEngine.setStructureDefaultMatchUpFormat({\n  drawId,\n  structureId,\n  matchUpFormat,\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"matchUpFormat")," for a ",Object(o.b)("strong",{parentName:"p"},"matchUp")," is set at the time of score entry:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tournamentEngine.setMatchUpStatus({\n  drawId,\n  matchUpId,\n  matchUpFormat,\n  outcome,\n});\n")),Object(o.b)("h2",{id:"github-repository"},"GitHub repository"),Object(o.b)("p",null,"There is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CourtHive/tods-matchup-format-code"}),"Repository")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/tods-matchup-format-code"}),"NPM Package")," specifically for generating and parsing ITF TODS MatchUp Format Codes. The documentation includes examples with an interactive application."))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/documentation/matchUpFormat.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-documentation-match-up-format-md-3220fab24d37565b7a78.js.map