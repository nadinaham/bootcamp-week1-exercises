# TODO (MOST RECENT)
- Home Page
- Main Page:
- 


# PLANNING 
Extra functionalities (if time): clock, pomodoro-esque function

Structure:

Main: hosts everything, the main page displayed to user (app will only be one page for ultimate convenience and also bc i don't think other pages will be needed); footer at bottom with creator name & HSA Boot Camp desc

will probably look something like:

                            CLOCK

                            POMODORO TIMER (WORK / BREAK)
                            START/STOP BUTTON

                            TODO LIST CONTAINER
                            SEARCHBAR
                            TODO LIST (contains series of single TODO ENTRY objects)

Helper files:
Searchbar: shows/formats the searchbar
- needs input variable to store info in once entered to connect to to do list container filter
- need input box

Clock: shows/formats clock
- needs to pull some packages to get the computer time and update it

Pomodoro Timer: needs timer function, also to switch between two tabs (one for work time and one for break time); includes the start/stop button which will toggle timer
- needs buttons toggling switch between tabs too
- start/stop button needs to connect to timer, also switch places when clicked

ToDo List Container: Contains Searchbar, ToDo List (which in turn houses ToDo Entrys); has filter function to show entries depending on searchbar entry; has functionality to create new event
- needs to receive searchbar input and then send it over to todo list
- needs submission form for entering a new task, will take input and send over to todo entry to create

ToDo List: container for entries
- controls what is shown for entries, will take searchbar input and check entry name for any matching letters
- otherwise will just show all entries

ToDo Entry: container for individual entry; contains name inputted, as well as done/delete buttons
- needs to have name property to be searched in todo list