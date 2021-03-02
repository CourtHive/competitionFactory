(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3OO0":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("Fcif"),s=n("+I+c"),r=n("/FXl"),o=n("TjRS"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/drawEngine/documentation/positioningSeeds.md"}});var i={_frontmatter:c},b=o.a;function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(b,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"positioning-seeds"},"Positioning Seeds"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"drawEngine")," manages a ",Object(r.b)("strong",{parentName:"p"},"seedAssignments")," attribute of ",Object(r.b)("strong",{parentName:"p"},"structure")," which expects there to be one ",Object(r.b)("strong",{parentName:"p"},"participantId")," per ",Object(r.b)("strong",{parentName:"p"},"seedNumber")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"seedNumber")," must be unique and serves to keep track of the ",Object(r.b)("em",{parentName:"p"},"number of seeds")," allowed within a draw structure"),Object(r.b)("p",null,"Each ",Object(r.b)("strong",{parentName:"p"},"seedAssignment")," has a ",Object(r.b)("strong",{parentName:"p"},"seedValue")," which can occur multiple times and enables multiple participants to effectively be seeded to the same ",Object(r.b)("strong",{parentName:"p"},"seedNumber"),"."),Object(r.b)("p",null,"When placing seed blocks, ",Object(r.b)("strong",{parentName:"p"},"getNextSeedBlock")," uses a policy to determine whether to return unplaced seeds whose ",Object(r.b)("strong",{parentName:"p"},"seedNumber")," is specified by the seedBlock definition, or whether to return seeded participants with the lowest ",Object(r.b)("strong",{parentName:"p"},"seedValues")," who have yet to be placed."),Object(r.b)("p",null,"When ",Object(r.b)("strong",{parentName:"p"},"seedValues")," are used it is possible to have players seeded ","[1]",",","[2]",",","[3,4]",",","[4,4,4,5]"," and for a randomly selected player seeded 4th to be placed in the 3-4 seed block, with all remaining seeded players placed in the 5-8 seed block."),Object(r.b)("h2",{id:"seed-blocks"},"Seed Blocks"),Object(r.b)("p",null,"A Seed Block is a grouping of seeded players. For a typical elimination structure the seed blocks follow the pattern"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[1], [2], [3,4], [5,6,7,8], ...\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/drawEngine/documentation/positioningSeeds.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-draw-engine-documentation-positioning-seeds-md-97be55fc5fbe9a4b5710.js.map