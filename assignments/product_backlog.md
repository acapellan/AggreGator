_CEN3031 - Intro to Software Engineering_  
_Spring 2022_

# Product Backlog & Sprint 1 Backlog - Group 3

- **[Brian Hoblin](https://github.com/GoonerBrian)**, _SCRUM Master/Developer_
- **[Alejandro Capellan](https://github.com/acapellan)**, _Project Manager/Developer_
- **[Jacob Boney](https://github.com/jacobboney)**, _Developer_
- **[Steven DeLoach](https://github.com/sfdeloach)**, _Developer_

## Product Backlog

User stories were broken down into items that adhere to DEEP principles. These tasks were then added as
items to the product backlog. An identification number was assigned to each user story and its
associated tasks for reference. For instance ID #12 refers to the user story "Find out if UF is right
for me." ID #12.1 and #12.2 refer to the individual tasks associated with user story #12.

Additional knowledge acquisition product backlog items (PBIs) were added to the backlog in preparation
for the first sprint. The team did not assign a priority to the PBIs at this stage. PBIs will be
rearranged in their priority after the team completes a round of planning poker.

| ID#  | Item                                          | Type/Service          |
| ---- | --------------------------------------------- | --------------------- |
| 1    | Initial project setup                         | Knowledge Acquisition |
| 1.1  | ▸ establish code review & acceptance criteria | repository            |
| 1.2  | ▸ develop initial tables and schema           | database              |
| 1.3  | ▸ set up initial backend routes               | api                   |
| 1.4  | ▸ write initial tests                         | api                   |
| 1.5  | ▸ design main page                            | frontend              |
| 1.6  | ▸ write initial tests                         | frontend              |
| 1.7  | ▸ specify data needed from AJAX calls         | frontend/api          |
| 1.8  | ▸ establish page styling                      | frontend              |
| 2    | Search for topics                             | Feature               |
| 2.1  | ▸ create topics schema                        | database              |
| 2.1  | ▸ write SQL query                             | database              |
| 2.2  | ▸ code backend                                | api                   |
| 2.3  | ▸ create route                                | frontend              |
| 2.4  | ▸ create page layout w/ filter option UI      | frontend              |
| 2.5  | ▸ code filter function                        | frontend              |
| 3    | Sort by metrics                               | Feature               |
| 3.1  | ▸ code toolbar UI                             | frontend              |
| 3.2  | ▸ code sort function                          | frontend              |
| 3.3  | ▸ connect YouTube API to frontend             | frontend              |
| 3.4  | ▸ update/create tables for support            | database              |
| 4    | Bookmark topics                               | Feature               |
| 4.1  | ▸ code bookmark UI functionality              | frontend              |
| 4.2  | ▸ create user schema                          | database              |
| 4.3  | ▸ create bookmark schema                      | database              |
| 4.4  | ▸ add authentication to site                  | api/database          |
| 4.5  | ▸ code backend                                | api                   |
| 4.6  | ▸ write CRUD operations for bookmark table    | database              |
| 4.6  | ▸ add user UI functionality for feature       | database              |
| 5    | Request specific topics                       | Feature               |
| 5.1  | ▸ update tables for support                   | database              |
| 5.2  | ▸ code UI feature for suggestions             | frontend              |
| 5.3  | ▸ setup email delivery service                | frontend/api/database |
| 6    | Find a study partner                          | Feature               |
| 6.1  | ▸ expand user profile                         | frontend/api/database |
| 6.1  | ▸ create UI for scheduling                    | frontend              |
| 6.1  | ▸ develop business logic for matching         | api/database          |
| 7    | Become more marketable                        | Feature               |
| 7.1  | ▸ code survey UI                              | frontend              |
| 7.1  | ▸ expand user profile                         | database              |
| 7.1  | ▸ develop business logic for industry         | api                   |
| 8    | Find a job/internship                         | Feature               |
| 8.1  | ▸ add user profile for companies              | database              |
| 8.1  | ▸ code job listing UI                         | frontend              |
| 8.1  | ▸ create job schema                           | database              |
| 8.1  | ▸ code business logic                         | api                   |
| 9    | Find out if UF is right for me                | Feature               |
| 9.1  | ▸                                             |                       |
| 10   | Do well in a current class                    | Feature               |
| 10.1 | ▸                                             |                       |
| 11   | Learn about degrees/programs                  | Feature               |
| 11.1 | ▸                                             |                       |
| 12   | Prepare for an upcoming class                 | Feature               |
| 12.1 | ▸                                             |                       |
| 13   | Learn more about electives                    | Feature               |
| 13.1 | ▸                                             |                       |
| 14   | Learn about graduate school                   | Feature               |
| 14.1 | ▸                                             |                       |
| 15   | Get advice on how to be successful            | Feature               |
| 15.1 | ▸                                             |                       |
| 16   | A desire to pay it forward                    | Feature               |
| 16.1 | ▸                                             |                       |
| 17   | Become a part of the UF community             | Feature               |
| 17.1 | ▸                                             |                       |
| 18   | Receive feedback from courses                 | Feature               |
| 18.1 | ▸                                             |                       |
| 19   | Network with alumni                           | Feature               |
| 19.1 | ▸                                             |                       |
| 20   | Keep the material relevant                    | Feature               |
| 20.1 | ▸                                             |                       |
| 21   | Additional resources for help                 | Feature               |
| 21.1 | ▸                                             |                       |
| 22   | Find Work, Life, Study Balance                | Feature               |
| 22.1 | ▸                                             |                       |

## Planning Poker

Each team member independently assigned points to each PBI based on their thoughts on the amount of
time and effort it would require to complete. Members came up with their own numbers before sharing
their thoughts with the group in an effort to avoid groupthink. Each member's initial score is located
in the associated column labeled with their initials.

The final and agreed upon score is indicated in the final estimation column. Items with disparate scores
were resolved through team discussion. A summary of some of these discussions is listed under the table.
Relative story points were assigned a value from the following fibonacci-like sequence:

> 0, ½, 1, 2, 3, 5, 8, 13, 21, 34, 50, 100, and ?

| Priority | ID# | Item                                               | AC  | BH  | JB  | SD  | Final Estimation |
| :------: | :-: | -------------------------------------------------- | :-: | :-: | :-: | :-: | :--------------: |
|    1     |  1  | Initial project setup                              |  1  |  1  |  1  |  1  |        1         |
|    2     |  2  | Develop database tables                            |  8  |  2  |  3  |  5  |        8         |
|    3     |  3  | Set up backend API                                 |  5  |  ?  | 13  |  5  |        5         |
|    4     |  4  | Design initial frontend pages                      |  8  |  3  |  5  |  8  |        5         |
|    5     |  7  | Bookmark topics                                    |  5  |  5  |  3  |  3  |        3         |
|    6     | 20  | A desire to pay it forward                         |  3  |  3  |  8  |  8  |        3         |
|    7     |  9  | Find a study partner                               |  5  |  5  |  8  |  5  |        5         |
|    8     | 12  | Find out if UF is right for me                     | 13  |  5  |  5  |  2  |        5         |
|    9     | 16  | Learn more about electives                         |  5  |  5  |  8  |  8  |        5         |
|    10    | 18  | Get advice on how to be successful                 |  5  |  5  |  5  |  5  |        5         |
|    11    | 19  | Become a part of the UF community                  |  5  |  3  |  5  |  3  |        5         |
|    12    | 23  | Keep the material relevant                         |  5  |  2  |  8  |  5  |        5         |
|    13    | 24  | Additional resources for help                      |  5  |  5  |  5  |  3  |        5         |
|    14    |  5  | Search for topics                                  |  8  |  8  |  8  |  8  |        8         |
|    15    |  6  | Sort by metrics                                    |  8  |  8  |  5  | 13  |        8         |
|    16    |  8  | Request specific topics                            |  8  |  2  | 13  |  8  |        8         |
|    17    | 11  | Find a job/internship                              |  8  | 13  |  8  |  5  |        8         |
|    18    | 13  | Learn about degrees/programs                       |  2  |  8  |  8  |  5  |        8         |
|    19    | 14  | Do well in a current class                         |  8  |  3  |  8  |  5  |        8         |
|    20    | 15  | Prepare for an upcoming class                      |  8  |  5  |  8  |  5  |        8         |
|    21    | 17  | Learn if attending graduate school is right for me |  8  |  2  |  8  |  5  |        8         |
|    22    | 21  | Network with alumni                                |  5  |  5  |  8  |  8  |        8         |
|    23    | 25  | Find Work, Life, Study Balance                     |  8  |  8  |  8  |  3  |        8         |
|    24    | 10  | Become more marketable                             | 13  |  8  | 13  |  8  |        13        |
|    25    | 22  | Receive feedback from courses                      | 13  |  8  | 13  |  5  |        13        |

### Discussion

At the conclusion of planning poker, the product backlog was sorted from smallest final estimation to
largest. The one exception was PBI #2. The team decided this knowledge acquisition item needed to be
near the top to ensure it was included in the first sprint.

In addition, every team member also came up with a different estimation for PBI #2. During the discussion,
it was discovered that one team member had the most experience with databases, and they were able explain
how the item would be more complex than expected. The team agreed and went with his recommendation.

For the items that had a range of estimates, the product owner listened to the input of all members
and made the final decision on the item's estimate.

## Sprint Backlog #1

For the first sprint, the top eight prioritized items were selected from the product backlog:

> 1, 2, 3, 4, 7, 20, 9, and 12

Each of these items were additionally groomed to adhere to DEEP principles. The table below summarizes
the individual tasks that the team believes needs to be completed in order to meet the first sprint
objective. Each team member agreed to work over a four-week period and contribute 10 to 12 hours per
week.

`\* TODO: Each member come up with a number of tasks that equal 40 to 48 effort hours? *\`

| Task                                        | PBI ID# |     Effort Hours     | Assignee |
| ------------------------------------------- | :-----: | :------------------: | :------: |
| Establish code review & acceptance criteria |    1    |      `\\ TODO`       |    AC    |
| Create schema?                              |    2    |      `\\ TODO`       |    AC    |
| Create routes?                              |    3    |      `\\ TODO`       |    SD    |
| Test routes?                                |    3    |      `\\ TODO`       |    SD    |
| Design UI?                                  |    4    |      `\\ TODO`       | BH or JB |
| Test UI?                                    |    4    |      `\\ TODO`       | BH or JB |
| Specify data needed from AJAX calls?        |    4    |      `\\ TODO`       | BH or JB |
| `\\ TODO`                                   |    7    |      `\\ TODO`       |    AC    |
| `\\ TODO`                                   |    7    |      `\\ TODO`       |    AC    |
| `\\ TODO`                                   |    7    |      `\\ TODO`       |    AC    |
| `\\ TODO`                                   |   20    |      `\\ TODO`       |    BH    |
| `\\ TODO`                                   |   20    |      `\\ TODO`       |    BH    |
| `\\ TODO`                                   |   20    |      `\\ TODO`       |    BH    |
| `\\ TODO`                                   |    9    |      `\\ TODO`       |    JB    |
| `\\ TODO`                                   |    9    |      `\\ TODO`       |    JB    |
| `\\ TODO`                                   |    9    |      `\\ TODO`       |    JB    |
| `\\ TODO`                                   |   12    |      `\\ TODO`       |    SD    |
| `\\ TODO`                                   |   12    |      `\\ TODO`       |    SD    |
| `\\ TODO`                                   |   12    |      `\\ TODO`       |    SD    |
|                                             |         |                      |          |
| **TOTAL EFFORT HOURS**                      |         | `\\ TODO 160 to 192` |          |
