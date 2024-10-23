# cdajs-2405-projet-pulseform

## Dependencies

In order to work on the project, you should pull it and fetch dependencies before developing any change on it.

## Developmennt

### Running the backend app

### Running the frontend app

## Git convention

### Git flow

For each task, a new branch should be opened.
When the work is ready to be pulled, make sure to have the last version with a rebase from dev and then pull. After it, a pull request (PR) should be openeded between this new branch and the `dev` one.
Each pull request needs to be reviewed before being approved by someone else and merged on the `dev` branch.

Later, when the `dev` branch is ready to go in production, a pull request between `dev` and `master` is created and pulled.

### Branches naming

All branches must start with either:

- `feat-xxxx-` to develop the new feature number xxxx
- `improv-xxxx-` to develop an improvement number xxxx of an existing feature
- `bug-xxxx-` to fix a bug number xxxx
- `upgrade-` to handle big refactorization of framework updates

The number xxxx refers to the trello card which corresponds to the task.
For a task on the backend, the number begins with 1xxx
For a task on the frontend, the number begins with 6xxx
For the other task, the number begins with 0xxx

After this prefix, your banch name should contain only lower case letters and dashes.
