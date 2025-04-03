# cdajs-2405-projet-pulseform


## Dependencies


In order to work on the project, you should pull it and fetch dependencies before developing any change on it.


## Development
### Scripts preparation
The first time you open the project, you need to prepare scripts in order to launch the app.

In the main folder, copy and paste the `start.copy.sh` script.
In the start.sh file, replace the values PASSWORD, USERNAME and DB_NAME by values you need to ask to project owners, and then launch the script:
```
bash start.sh
```


In the backend folder, copy and paste the `init-db.copy.sh` script.
In the init-db.sh file, replace the values <postgres-db-docker>, <name-user> and <password> by values you need to ask to project owners, and then launch the script:
```
cd backend
bash inti-db.sh
```


### Running the app (backend, frontend, bdd)
To run the backend app, launch the script start.sh in the main folder
```
./start.sh
```


## Git convention


### Git flow


For each task, a new branch should be opened.
When the work is ready to be pulled, make sure to have the last version with a rebase from dev and then pull. After it, a pull request (PR) should be opened between this new branch and the `dev` one.
If the dev doesn’t have NodeJS in version 22 in his/her own machine, the package-lock.json must not be pushed.
Each pull request needs to be reviewed before being approved by someone else and merged on the `dev` branch.


Later, when the `dev` branch is ready to go into production, a pull request between `dev` and `master` is created and pulled.


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


After this prefix, your banch name should contain only lowercase letters and dashes.
