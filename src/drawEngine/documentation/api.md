---
name: API
menu: Draw Engine
route: /drawEngine/api
---

# drawEngine API Reference

## addDrawEntries

---

## addDrawEntry

---

## addMatchUpEndTime

---

## addMatchUpOfficial

---

## addMatchUpResumeTime

---

## addMatchUpScheduledDayDate

---

## addMatchUpScheduledTime

---

## addMatchUpStartTime

---

## addMatchUpStopTime

---

## addTimeItem

---

## allDrawMatchUps

---

## allStructureMatchUps

---

## analyzeMatchUp

---

## analyzeSet

---

## assignDrawPosition

---

## assignDrawPositionBye

---

## assignMatchUpCourt

---

## assignSeed

---

## attachPolicy

---

## automatedPositioning

---

## buildDrawHierarchy

---

## calcTieMatchUpScore

---

## checkInParticipant

---

## checkOutParticipant

---

## clearDrawPosition

---

## createQualifyingLink

---

## devContext

---

## drawMatchUps

---

## findMatchUp

---

## flushErrors

---

## generateDrawType

---

## generateScoreString

---

## getCheckedInParticipantIds

---

## getDrawStructures

---

## getErrors

---

## getMatchUpContextIds

---

## getMatchUpParticipantIds

---

## getMatchUpScheduleDetails

---

## getNextSeedBlock

---

## getNextUnfilledDrawPositions

---

## getRoundMatchUps

---

## getSeedAssignments

Returns existing seedAssignments for ***all*** structures within a draw

| Parameters            | Required | Type    | Description |
| :---                  | :---     | :---    | :--- |
| structureId           | Optional | string  | Return assignments for a specific structure, identified by structureId |
| stage                 | Optional | string  | Locate structure by stage; used together with stageSequence |
| stageSequence         | Optional | number  | Locate structure by stageSequence; used together with stage |

```json
Defaults to { stage: 'MAIN', stageSequence: 1 } if { structureId: undefined }
```

The result is an array of objects which contain seeding details for all structures within the current draw

| Object Attributes | Type    | Description |
| :---              | :---    | :--- |
| structureId       | string  | unique identifier for draw structure |
| seedAssignments   | array   | array of assignment objects |
| stage             | string  | draw stage within which structure appears |
| stageSequence     | number  | stageSequence within a draw stage |
| seedLimit         | number  | either defined structure seedLimit or number of drawPositions |

The structure of an ***assignment object*** is as follows:

```json
{
  seedNumber: 1,
  seedValue: 1,
  participantId: 'uuid-of-participant'
}
```

### Usage

The most basic usage is to retrieve seed assignments for a draw which has a single main stage structure

```js
drawEngine.setState(drawDefinition);
const structureSeedingDetails = drawEngine.getSeedAssignments();
const firstStructureDetails = structureSeedingDetails[0];
const { seedAssignments } = firstStructureDetails;

```

---

## getSeedBlocks

---

## getSeedingConfig

---

## getSetComplement

---

## getState

---

## getStructureQualifiersCount

---

## getTiebreakComplement

---

## initializeStructureSeedAssignments

---

## load

---

## matchUpActions

---

## matchUpDuration

---

## newDrawDefinition

---

## positionActions

---

## removeEntry

---

## removePolicies

---

## requireAllPositionsAssigned

---

## reset

---

## resetTimeItems

---

## setDrawDescription

---

## setDrawId

---

## setMatchUpFormat

---

## setMatchUpStatus

---

## setParticipants

---

## setStageAlternates

---

## setStageDrawSize

---

## setStageQualifiersCount

---

## setStageWildcardsCount

---

## setState

---

## structureMatchUps

---

## tallyBracket

---