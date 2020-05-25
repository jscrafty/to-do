# To-do app

This todo app should make you to focus on your tasks

* :warn: WARNING: do not follow the code here ...its just placeholder and its incorrect

[wireframe]
[prototype](https://projects.invisionapp.com/share/KEEEZJB2N#/screens/263411311_1_-_1_-_Todo_Screen)


## Todo Backlog

- [ ] User story #1: Create Tasks
* As a user, I want to create tasks so I can remember to do things

### Repo

This user story is developed on a branch called `task`

html:
css:

js: we are going to need a place to store our tasks information.
To do this, we will create an array of objects

`array = [{}, {}]
function(tasks) {
{ title: 'js task' };
console.log(tasks);
}`

---

- [ ] User story #2: Add Notes
* As a user I want to add notes to a task before it is complete

### Repo

This user story is developed on a branch called `notes`

html:
css:

// add unit test

js: we are going to make it possible to add text notes to each task.
To do this, we ...

` testCreateWithNotes() {
    { notes: ['note 1', 'note 2'] }")
    (2, task.notes.size());
    ("note 1", task.notes.get(0));
    ("note 2", task.notes.get(1));
}`

---

- [ ] User story #3: Save Notes
* As a user I want to save notes to a task

### Repo

This user story is developed on a branch called `save`

html:
css:

// add unit test

js: we are going to make it possible to save text notes to each task.
To do this, we ...

---

- [ ] User story #4: Edit Notes
* As a user I want to modify notes to a task

### Repo

This user story is developed on a branch called `edit`

html:
css:

// add unit test

js: we are going to make it possible to edit text notes to each task.
To do this, we ...

---

- [ ] User story #5: Mark as Done
* As a user, I want to mark my tasks as done so I can see only unfinished tasks

### Repo

This user story is developed on a branch called `mark`

html:
css:

// add test

js: we need to create a custom action

To do this, we need to create a task method

`boolean done;

public void markAsDone() {
    this.done = true;
}

public boolean isDone() {
    return done;
}`

---

- [ ] User story #6: Privacy
* As a user I want that my tasks are only visible to me

### Repo

This user story is developed on a branch called `privacy`

html:
css:

// add test

js: the user doesn't want other users to have access to it's task information

To do this, we need to assign tasks to users

`    public void defaults() {
        allow().where("user", "=", currentUserEmail());
    }

    private String currentUserEmail() {
        return UserServiceFactory.getUserService().getCurrentUser().getEmail();
    }
}`

`public class TaskShield extends Shield<Task> {

    @Override
    public void defaults() {
        allow().where("user", "=", currentUserEmail());
    }

    private String currentUserEmail() {
        return UserServiceFactory.getUserService().getCurrentUser().getEmail();
    }
}`

## Source Code

The source code is [found here](https://github.com/jscrafty/to-do)
Live demo can be [found here](https://jscrafty.github.io/to-do/)
