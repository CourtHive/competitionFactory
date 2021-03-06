---
name: Positioning BYEs
menu: Draw Engine
route: /drawEngine/byePositioning
---

# Positioning BYEs

The **positionByes.js** module first builds a list of _drawPositions_ which could be filled with BYES and then iterates over a _byesToPlace_ range to fill targeted positions until the range has been satisfied

The list of targeted _drawPositions_ is constructed in the following order:

- Add all _drawPositions_ paired with Seeds where the seeds have been sorted by **seedBlock** in which they occur and further sorted by **seedValue**

> Example:
> => more than one 4th seed, but only 4th seed placed in the 3-4 seed block
> => 3rd seed must get 3rd Bye; 4th seed placed in the 3-4 seed block must get 4th bye

## USTA

> Byes drawn to the top half of the draw shall be positioned on even-numbered lines;
> byes drawn to the bottom half of the draw shall be positioned on odd-numbered lines.
