/* eslint-disable @typescript-eslint/no-base-to-string */
import ObjectID from 'bson-objectid';
// import { insertErms } from './insert-erms';

// Builds a block
// function getCodeBlock(label: string, content?: string) {
//   return `\`\`\`${label}
// ${typeof content !== 'undefined' ? content : ''}
// \`\`\`\n`;
// }

// Builds a section
// function getSeedSection(content: string, label: string) {
//   return content
//     ? `

// ## --${label}--

// ${content}`
//     : '';
// }

type StepOptions = {
  dashedName: string;
  title: string;
  challengeId: ObjectID;
  challengeSeeds: Record<string, ChallengeSeed>;
  stepNum: number;
  challengeType: number;
  isFirstChallenge?: boolean;
};

export interface ChallengeSeed {
  contents: string;
  ext: string;
  editableRegionBoundaries: number[];
  head?: string;
  tail?: string;
}

// Build the base markdown for a step
function getStepTemplate({
  challengeId,
  dashedName,
  title
  // challengeSeeds,
  // stepNum,
  // challengeType,
  // isFirstChallenge = false
}: StepOptions): string {
  // const seedTexts = Object.values(challengeSeeds)
  //   .map(({ contents, ext, editableRegionBoundaries }: ChallengeSeed) => {
  //     let fullContents = contents;
  //     if (editableRegionBoundaries.length >= 2) {
  //       fullContents = insertErms(contents, editableRegionBoundaries);
  //     }
  //     return getCodeBlock(ext, fullContents);
  //   })
  //   .join('\n');

  // const seedHeads = Object.values(challengeSeeds)
  //   .filter(({ head }: ChallengeSeed) => head)
  //   .map(({ ext, head }: ChallengeSeed) => getCodeBlock(ext, head))
  //   .join('\n');

  // const seedTails = Object.values(challengeSeeds)
  //   .filter(({ tail }: ChallengeSeed) => tail)
  //   .map(({ ext, tail }: ChallengeSeed) => getCodeBlock(ext, tail))
  //   .join('\n');

  // const stepDescription = `step ${stepNum} instructions`;
  // const seedChallengeSection = getSeedSection(seedTexts, 'seed-contents');
  // const seedHeadSection = getSeedSection(seedHeads, 'before-user-code');
  // const seedTailSection = getSeedSection(seedTails, 'after-user-code');

  //   const demoString = isFirstChallenge
  //     ? `
  // # demoType can either be 'onClick' or 'onLoad'. If the project or lab doesn't have a preview, delete the property
  // demoType: onClick`
  //     : '';

  return `---
id: ${challengeId.toString()}
title: ${title}
challengeType: 11
videoId: nVAaxZ34khk
dashedName: ${dashedName}
---

# --description--

Watch the video or read the transcript and answer the questions below.

# --questions--

## --text--

Question 1

## --answers--

Answer 1.1

### --feedback--

Feedback 1

---

Answer 1.2

### --feedback--

Feedback 1

---

Answer 1.3

### --feedback--

Feedback 1

---

Answer 1.4

### --feedback--

Feedback 1

## --video-solution--

5

## --text--

Question 2

## --answers--

Answer 2.1

### --feedback--

Feedback 2

---

Answer 2.2

### --feedback--

Feedback 2

---

Answer 2.3

### --feedback--

Feedback 2

---

Answer 2.4

### --feedback--

Feedback 2

## --video-solution--

5

## --text--

Question 3

## --answers--

Answer 3.1

### --feedback--

Feedback 3

---

Answer 3.2

### --feedback--

Feedback 3

---

Answer 3.3

### --feedback--

Feedback 3

---

Answer 3.4

### --feedback--

Feedback 3

## --video-solution--

5

`;
}

export { getStepTemplate };
