day 1
possible Profiling App

routes

sample data

possible API but not necessary

need new library, package, or technology

Who can manage?
Ellie will manage github. and central documents

Last time;
Nhat did API stuff last time.
Ellie did API stuff last time.

Nhat broken stuff, small modular code. 
separate functions.

Ellie wants to push everything together as soon as possible.


Lets make tables
db called profiling_db

tables

users table
id pk 
username
password

subject table
id pk
firstname
last name
score1/ control/express emotions +-5
score2/ direct/indirect thoughts +-5
score3/ confident/fearful +-5
score4/ consistent/inconsisten +-5
final profile

question table
type1 questions control/express emotions
type2 questions direct/indirect thoughts +-5
type3 questions confident/fearful +-5
type4 questions consistent/inconsisten +-5

the scores get sent to an if/else statement for calculations
then saved into back the subject table

user would be able to add more questions

maybe click a 'get question' button, get questions to ask, submit field to store answer into db
    uses get route to get questions
    uses post route to make questions

maybe click a 'get subject' button, see results of subject standing
    use put routes to update

maybe click add subject
    uses post route to add subject 

Walk through

main.handle bar is just NavBar Header, login/logout
get route nonAPI '/'

if statement for session; if not then /login, if yes then /homepage

Login page/ login.handlebar Nav bar
get route nonAPI '/login'
User login/signup
    post api routes to create USER
    get api routes for verification of USER 

Opening page homepage.handlebar
get route nonAPI 'homepage' 
    Nav Bar has a '+' add Subject
    post route API to create Subject
List of 'subjects' names, and question results underneath
    called by 'homepage', the Subjects [{}] will populate the page.
Jack
 type 1: 4 type 2: -3 type 3: 0 type 4: -5 
 Profile: Salesman/randomActor
Jill
Sam
Ann



//Possible
click on Subjects name to ask to a question
    get route 'question/:id' to get Subject by id

on question.handlebar has selection of questions
(subjective answer) (possibly randomly generated from lists)

// Possible
'What type do you want to ask' button (1-4) 
then you get corresponding
question2.handlebar // possibly just javascript
use API ROUTES
// Possible
type1 how do you feel?
underneath is a blank field(check boxes?)
type2 what do you think?
underneath is a blank field(check boxes?)
type3 Did you back down from someone?
underneath is a blank field(check boxes?)
type4 Did you do something again(how consistent are you)?
undereath is a blank field(check boxes?)

Submit/Save form
submit if all the checked boxes
save if partly checked boxes

sends you back to the homepage.handlebar
subject db is updated



FORM for questions submission
API route POST, what it is and type

/// Need to use mysql workbench to organize db 
/// still need outside technology
    /// radar chart
    /// Chart.js

/// Who filing it out and why

/// Avoid Spaghetti Code if/Else mess

/// work out the dbs
One User Has Many Subjects

One Subject has Many Questions //?may actually not be linked
One Question has One has Answer?
One Subject has Many Answers?
One Profile has Many Answers?

//Mock up 1
// looks good as of 1.24.23
User
id:1 pk
Name: Josh
Password:NhatEllie
id: 2
Name: James
Pass:blah

Subject
id:1 pk 
Name:Sam Gates
User_id from User(id)
references UserId
Type 1 Answers: [-3,2] (build array)
Type 2 Answers: [1]
Type 3 Answers: [1]
Type 4 Answers: [1]
Profile: Fun/Guy

type1 question table
id:1 pk
How do you feel?
id:2
How did that make you feel?

type2 question table
id:1 pk 
How do you think?

type3 question table
id:1 pk 
Did you back down?

type4 question
id:1 pk
How consistent were you?

/// Can we create new features/ future dev



// Folders that need to be created 


Sample JSON Data:

User Table
[
    {
        id: AUTO INCREMENT INTEGER NOTNULL
        USERNAME: email@email.com
        PASSWORD: GARBLEGARBLE
        SUBJECTS: [
            {
                id: AUTO INCREMENT INTEGER NOTNULL
                First_name:Jimmy
                Last_name:Jones
                Type_One:[1,1,2,3]
                Type_Two:[3,3,3,4]
                Type_Three:[3,3]
                Type_Four:[-1,0,1]
                Profile:Sergeant/Innovator
            },
            {
                id: AUTO INCREMENT INTEGER NOTNULL
                First_name:Apple
                Last_name:Blossum
                Type_One:[-3,-2,0,1]
                Type_Two:[1,1,-1,-2]
                Type_Three:[3,3]
                Type_Four:[-1,0,1]
                Profile:Accountant/Innovator
            },
            ]
    }
]
Questions table
[
    {
        id:1
        category:1
        question: How do you feel about today?
    },
    {
        id:2
        category:1
        question: How do you feel about your friend?
    },
    {
        id:3
        category:2
        question: What do you think about today?
    },
    {
        id:4
        category:2
        question: What do you think about your friends kids?
    },
    {
        id:5
        category:3
        question: What did you accomplish yesterday?
    },
    {
        id:6
        category:3
        question: Why did you fail last?
    },
    {
        id:7
        category:4
        question: Do you think today will be like yesterday?
    },
    {
        id:8
        category:4
        question: Do you think change is good?
    }
]