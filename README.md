INTRODUCTION
Savings App was created for two reasons.
First one is I wanted to have a way to keep tracking of my savings, since I needed to save money for a concert, and I wanted to know how much money I could save (cause it's hard to not to spend it when the cash is available at home lol).
Second one is I wanted to practice react native, since this is my very first react native app and I wanted to make something functional that I would actually use.

TECHNOLOGIES
This was developed with react native library and tested on an android emulated device.
I made this project using several libraries.
I used datetimepicker from react-native-community.
For the icons, I used a library called vector icons and the material icons library.
I used react navigation for handling my screens and my tab navigator on the app.
MongoDB was my choice here, and for persisting data locally I installed Realm. Setting it up was quite hard for me since sometimes it conflicted with the react navigation library, but I finally managed to make it work.
And finally I used react native gesture handler aswell.

DESIGN & FEATURES
The app is designed to see and add information within seconds and a few taps, and it's intended to be very user friendly.

Home screen it's where all the saving records lies. It shows the user all of the savings that it has added to the app, featuring the name, the target date, the final quantity and a ui bar showing the progress (which is calculated based on the target quantity and the current saved money).
There is also a screen to add a new saving with its proper form, and a screen, divided by a bottom tab navigator where the user can do one of the following:
- see the general information
- see the history of the incomes added to the savings (where each one can be edited or deleted. ps. edit income is still in development).
- add a new income for the current saving.

This app is meant to be installed on a mobile device and all of its data remains on the local device. 
...[to be continued]