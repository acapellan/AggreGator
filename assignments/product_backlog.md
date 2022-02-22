_CEN3031 - Intro to Software Engineering_  
_Spring 2022_

# Product Backlog & Sprint 1 Backlog - Group 3

- **[Brian Hoblin](https://github.com/GoonerBrian)**, _SCRUM Master/Developer_
- **[Alejandro Capellan](https://github.com/acapellan)**, _Project Manager/Developer_
- **[Jacob Boney](https://github.com/jacobboney)**, _Developer_
- **[Steven DeLoach](https://github.com/sfdeloach)**, _Developer_

## Product Backlog

User stories were broken down into items that adhere to DEEP principles. These tasks were then added
as items to the product backlog. An identification number was assigned to each user story and its
associated tasks for reference. For instance ID #12 refers to the user story "Prepare for an upcoming
class." ID #12.1 and #12.2 refer to the individual tasks associated with user story #12.

Additional knowledge acquisition product backlog items (PBIs) were added to the backlog in preparation
for the first sprint. The team did not assign a priority to the PBIs at this stage. PBIs will be
rearranged in their priority after the team completes a round of planning poker.

|  ID #  | Item                                          | Type/Service              |
| :----: | --------------------------------------------- | ------------------------- |
| **1**  | **Initial project setup**                     | **Knowledge Acquisition** |
|  1.1   | ▸ establish code review & acceptance criteria | repository                |
|  1.2   | ▸ develop initial tables and schema           | database                  |
|  1.3   | ▸ set up initial backend routes               | api                       |
|  1.4   | ▸ write initial tests                         | api                       |
|  1.5   | ▸ design main page                            | frontend                  |
|  1.6   | ▸ write initial tests                         | frontend                  |
|  1.7   | ▸ specify data needed from AJAX calls         | frontend/api              |
|  1.8   | ▸ establish site styling/look & feel          | frontend                  |
| **2**  | **Search for topics**                         | **Feature**               |
|  2.1   | ▸ create topics schema                        | database                  |
|  2.2   | ▸ write SQL query                             | database                  |
|  2.3   | ▸ code backend                                | api                       |
|  2.4   | ▸ create route                                | frontend                  |
|  2.5   | ▸ create page layout w/ filter option UI      | frontend                  |
|  2.6   | ▸ code filter function                        | frontend                  |
| **3**  | **Sort by metrics**                           | **Feature**               |
|  3.1   | ▸ code toolbar UI                             | frontend                  |
|  3.2   | ▸ code sort function                          | frontend                  |
|  3.3   | ▸ connect YouTube API                         | frontend                  |
|  3.4   | ▸ update/create tables for support            | database                  |
| **4**  | **Bookmark topics**                           | **Feature**               |
|  4.1   | ▸ code bookmark UI functionality              | frontend                  |
|  4.2   | ▸ create user schema                          | database                  |
|  4.3   | ▸ create bookmark schema                      | database                  |
|  4.4   | ▸ add authentication to site                  | api/database              |
|  4.5   | ▸ create/expand user profile                  | frontend/api/database     |
|  4.6   | ▸ code backend                                | api                       |
|  4.7   | ▸ write CRUD operations for bookmark table    | database                  |
|  4.8   | ▸ add user UI functionality for feature       | frontend                  |
| **5**  | **Request specific topics**                   | **Feature**               |
|  5.1   | ▸ update tables for support                   | database                  |
|  5.2   | ▸ code UI feature for suggestions             | frontend                  |
|  5.3   | ▸ setup email delivery service                | frontend/api/database     |
| **6**  | **Find a study partner**                      | **Feature**               |
|  6.1   | ▸ create/expand user profile                  | frontend/api/database     |
|  6.2   | ▸ create UI for scheduling                    | frontend                  |
|  6.3   | ▸ develop business logic for matching         | api/database              |
| **7**  | **Become more marketable**                    | **Feature**               |
|  7.1   | ▸ code survey UI                              | frontend                  |
|  7.2   | ▸ create/expand user profile                  | database                  |
|  7.3   | ▸ develop business logic for industry         | api                       |
| **8**  | **Find a job/internship**                     | **Feature**               |
|  8.1   | ▸ add user profile for companies              | database                  |
|  8.2   | ▸ code job listing UI                         | frontend                  |
|  8.3   | ▸ create job schema                           | database                  |
|  8.4   | ▸ code business logic                         | api                       |
| **9**  | **Find out if UF is right for me**            | **Feature**               |
|  9.1   | ▸ create UI for resources page                | frontend                  |
| **10** | **Learn about degrees/programs**              | **Feature**               |
|  10.1  | ▸ connect UF degree API                       | frontend                  |
|  10.2  | ▸ code sort function                          | frontend                  |
|  10.3  | ▸ create UI                                   | frontend                  |
| **11** | **Do well in a current class**                | **Feature**               |
|  11.1  | ▸ create UI for forum                         | frontend                  |
|  11.2  | ▸ code filter function                        | frontend                  |
|  11.3  | ▸ code UI feature for user ratings            | frontend                  |
|  11.4  | ▸ create forum schema                         | database                  |
|  11.5  | ▸ code backend                                | api                       |
| **12** | **Prepare for an upcoming class**             | **Feature**               |
|  12.1  | ▸ create/expand user profile                  | database                  |
|  12.2  | ▸ create course history schema                | database                  |
|  12.3  | ▸ create UI for course entry                  | frontend                  |
|  12.4  | ▸ write business logic to find best ranks     | api                       |
| **13** | **Learn more about electives**                | **Feature**               |
|  13.1  | ▸ write business logic to match interests     | api                       |
|  13.2  | ▸ connect UF degree API for prerequisites     | frontend                  |
|  13.3  | ▸ create UI                                   | frontend                  |
|  13.4  | ▸ code upvote functionality                   | frontend                  |
| **14** | **Learn about graduate school**               | **Feature**               |
|  14.1  | ▸ create forum schema                         | database                  |
|  14.2  | ▸ connect LinkedIn API                        | frontend                  |
|  14.3  | ▸ create/expand user profile with goals       | database                  |
|  14.4  | ▸ create UI                                   | frontend                  |
| **15** | **Get advice on how to be successful**        | **Feature**               |
|  15.1  | ▸ create forum schema                         | database                  |
|  15.2  | ▸ code backend                                | api                       |
|  15.3  | ▸ create UI for forum                         | frontend                  |
|  15.4  | ▸ create UI for curated list of resources     | frontend                  |
| **16** | **Become a part of the UF community**         | **Feature**               |
|  16.1  | ▸ create forum schema                         | database                  |
|  16.2  | ▸ create UI for forum                         | frontend                  |
|  16.3  | ▸ code business logic to match interests      | api                       |
| **17** | **A desire to pay it forward**                | **Feature**               |
|  17.1  | ▸ code business logic to match mentors        | api                       |
|  17.2  | ▸ create UI form to gather data               | frontend                  |
|  17.3  | ▸ create mentor schema                        | database                  |
|  17.4  | ▸ code search function/keyword lookup         | frontend                  |
| **18** | **Network with alumni**                       | **Feature**               |
|  18.1  | ▸ create/expand user profile                  | database                  |
|  18.2  | ▸ create forum schema                         | database                  |
|  18.3  | ▸ code business logic to find matches         | api                       |
|  18.4  | ▸ create UI                                   | frontend                  |
| **19** | **Receive feedback from courses**             | **Feature**               |
|  19.1  | ▸ create class rating schema                  | database                  |
|  19.1  | ▸ code backend                                | api                       |
|  19.1  | ▸ create survey or use a service?             | ???                       |
| **20** | **Keep the material relevant**                | **Feature**               |
|  20.1  | ▸ connect to Canvas API                       | frontend                  |
|  20.2  | ▸ create UI                                   | frontend                  |
|  20.3  | ▸ create feedback schema                      | database                  |
|  20.4  | ▸ code backend                                | api                       |
| **21** | **Additional resources for help**             | **Feature**               |
|  21.1  | ▸ create request schema                       | database                  |
|  21.2  | ▸ create feedback schema                      | database                  |
|  21.3  | ▸ create UI                                   | frontend                  |
|  21.4  | ▸ code backend                                | api                       |
| **22** | **Find Work, Life, Study Balance**            | **Feature**               |
|  22.1  | ▸ create/expand user profile with TA role     | database                  |
|  22.2  | ▸ create UI for TA-only resources             | frontend                  |
|  22.3  | ▸ code backend                                | api                       |

## Planning Poker

Each team member independently assigned points on a relative scale to each set of tasks based on their
thoughts on the amount of time and effort it would require to complete. Members came up with their own
numbers before sharing their thoughts with the group in an effort to avoid groupthink. Each member's
initial score is located in the associated column labeled with their initials.

The final and agreed upon score is indicated in the final estimation column. Items with disparate scores
were resolved through team discussion with the Product Owner having the final say. A summary of some
of these discussions is listed under the table. Relative story points were assigned a value from the
following fibonacci-like sequence:

> 0, ½, 1, 2, 3, 5, 8, 13, 21, 34, 50, 100, and ?

| Priority | ID # | Item                               | AC  | BH  | JB  | SD  | Final Estimation |
| :------: | :--: | ---------------------------------- | :-: | :-: | :-: | :-: | :--------------: |
|    1     |  1   | Initial project setup              |  8  |  2  |  3  |  5  |        8         |
|    2     |  4   | Bookmark topics                    |  5  |  5  |  3  |  3  |        3         |
|    3     |  17  | A desire to pay it forward         |  3  |  3  |  8  |  8  |        3         |
|    4     |  6   | Find a study partner               |  5  |  5  |  8  |  5  |        5         |
|    5     |  9   | Find out if UF is right for me     | 13  |  5  |  5  |  2  |        5         |
|    6     |  13  | Learn more about electives         |  5  |  5  |  8  |  8  |        5         |
|    7     |  15  | Get advice on how to be successful |  5  |  5  |  5  |  5  |        5         |
|    8     |  16  | Become a part of the UF community  |  5  |  3  |  5  |  3  |        5         |
|    9     |  20  | Keep the material relevant         |  5  |  2  |  8  |  5  |        5         |
|    10    |  21  | Additional resources for help      |  5  |  5  |  5  |  3  |        5         |
|    11    |  2   | Search for topics                  |  8  |  8  |  8  |  8  |        8         |
|    12    |  3   | Sort by metrics                    |  8  |  8  |  5  | 13  |        8         |
|    13    |  5   | Request specific topics            |  8  |  2  | 13  |  8  |        8         |
|    14    |  8   | Find a job/internship              |  8  | 13  |  8  |  5  |        8         |
|    15    |  10  | Learn about degrees/programs       |  2  |  8  |  8  |  5  |        8         |
|    16    |  11  | Do well in a current class         |  8  |  3  |  8  |  5  |        8         |
|    17    |  12  | Prepare for an upcoming class      |  8  |  5  |  8  |  5  |        8         |
|    18    |  14  | Learn about graduate school        |  8  |  2  |  8  |  5  |        8         |
|    19    |  18  | Network with alumni                |  5  |  5  |  8  |  8  |        8         |
|    20    |  22  | Find Work, Life, Study Balance     |  8  |  8  |  8  |  3  |        8         |
|    21    |  7   | Become more marketable             | 13  |  8  | 13  |  8  |        13        |
|    22    |  19  | Receive feedback from courses      | 13  |  8  | 13  |  5  |        13        |

### Discussion

Once planning poker was completed, the order of the tasks were rearranged to place the smaller items
towards the top of the list and the larger items at the bottom of the list. The one exception was the
initial project setup, which must be completed first before any other task can begin.

In addition, every team member also came up with a different estimation for item #1. During the discussion,
it was discovered that one team member had the most experience with databases, and they were able explain
how the item would be more complex than expected. The team agreed and went with his recommendation.

For the items that had a range of estimates, the product owner listened to the input of all members
and made the final decision on the item's estimate.

## Sprint Backlog #1

For the first sprint, the top eight prioritized items were selected from the product backlog:

> 1, 4, 17, 6, 9, 13, 15, 16

The table below summarizes the individual tasks that the team believes needs to be completed in order
to meet the first sprint objective. Each team member agreed to work over a four-week period and
contribute 10 to 12 hours per week.

| Task                                        | PBI ID# | Effort Hours | Assignee |
| ------------------------------------------- | :-----: | :----------: | :------: |
| establish code review & acceptance criteria |   1.1   |      2       |    AC    |
| develop initial tables and schema           |   1.2   |      8       |    AC    |
| set up initial backend routes               |   1.3   |      2       |    SD    |
| write initial tests (api)                   |   1.4   |      3       |    SD    |
| design main page                            |   1.5   |      5       |    BH    |
| write initial tests (frontend)              |   1.6   |      3       |    JB    |
| specify data needed from AJAX calls         |   1.7   |      1       |    SD    |
| establish site styling/look & feel          |   1.8   |      8       |    JB    |
| code bookmark UI functionality              |   4.1   |      5       |    BH    |
| create user schema                          |   4.2   |      3       |    AC    |
| create bookmark schema                      |   4.3   |      3       |    AC    |
| add authentication to site                  |   4.4   |      6       |    SD    |
| create/expand user profile                  |   4.5   |      5       |    AC    |
| code backend                                |   4.6   |      5       |    SD    |
| write CRUD operations for bookmark table    |   4.7   |      6       |    AC    |
| add user UI functionality for feature       |   4.8   |      6       |    BH    |
| code business logic to match mentors        |  17.1   |      5       |    SD    |
| create UI form to gather data               |  17.2   |      6       |    JB    |
| create mentor schema                        |  17.3   |      3       |    AC    |
| code search function/keyword lookup         |  17.4   |      5       |    JB    |
| create/expand user profile                  |   6.1   |      5       |    AC    |
| create UI for scheduling                    |   6.2   |      5       |    BH    |
| develop business logic for matching         |   6.3   |      4       |    SD    |
| create UI for resources page                |   9.1   |      6       |    JB    |
| write business logic to match interests     |  13.1   |      2       |    SD    |
| connect UF degree API for prerequisites     |  13.2   |      4       |    BH    |
| create UI for electives                     |  13.3   |      6       |    BH    |
| code upvote functionality                   |  13.4   |      6       |    JB    |
| create forum schema                         |  15.1   |      3       |    AC    |
| code backend for forum                      |  15.2   |      4       |    SD    |
| create UI for forum                         |  15.3   |      5       |    BH    |
| create UI for curated list of resources     |  15.4   |      6       |    JB    |
| create forum schema                         |  16.1   |      3       |    AC    |
| create UI for forum                         |  16.2   |      5       |    BH    |
| code business logic to match interests      |  16.3   |      8       |    SD    |
|                                             |         |              |          |
| **ESTIMATED EFFORT HOURS**                  |         |     162      |          |
