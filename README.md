
# MotoRaceReminders

MotoRaceReminders is a one-stop shop for everything race related. In this app, you can browse through a variety of race series, read various information related to those races (such as start times, location, lap records, etc) and be able to follow/unfollow your favourite races which can then be view in the following tab of the application.


 

## TechStack Used

- React Frontend with Axios calls to the backend
- Sass for Frontend Styling
- React Router Dom used for Frontend Navigation
- Node with Express Backend
- Cors for Resource Sharing
- DotEnv used for port information


## Installation Instructions
- Git Clone the Frontend and Backend Repo 
- Create a .env file for backend with port=8080
- Dependencies for Frontend :
    - React Router Dom
    - Axios
    - Sass
- Dependencies for Backend:
    - Express
    - DotEnv
    - Cors
    
## Lessons Learned and Next Steps

I learned throughout this project that good development leaves room for future development. This in turn will allow for faster iterations of the current code. Making clean and reuseable components makes development so much easier. Additionally taking the time to properly plan out the Frontend and Backend of an application will pay dividends when development actually starts

Specific Challenges that I have faced throughout this project include managing state and having the functionality on buttons as well as data on the screen change because of it. For example I have a timer feature which lets the user know when the race is going to start and counts down from the current date and time to the races date and time. Figuring out this countdown feature was a challenge but I solved it using a useEffect hook. Another challenge I faced was having the follow and unfollow functionality on the same button and deciding when to do what feature. This required to me scan through the data asynchronously to see if the user is already following that specific race.  

Next Steps for this project include setting up a DB for this app. It is currently reading and writing to JSON files because of time constraints. Additionally having user accounts and authentication so multiple user can use it at once. Furthermore include additonal data in the backend for other racing series (Only Formula 1 works currently).
Another feature after all of the above are implemented is to have chat and stream feature so users can log in and watch their favourite races together in chatrooms. Also push notifications when a race is going to start so users get reminded and do not miss the races they are following. There are plenty more features, the ones mentioned are a few that come to mind that would enchance the user experience from this current version. 


## Screenshots

![image](https://user-images.githubusercontent.com/40073550/218876733-8cd78c72-c975-48af-b41f-568b301d487a.png)

![image](https://user-images.githubusercontent.com/40073550/218876815-42430df7-610a-406b-a834-9480d79023c0.png)

![image](https://user-images.githubusercontent.com/40073550/218876873-9c088c69-4494-4463-9a40-83eed2efd61f.png)

![image](https://user-images.githubusercontent.com/40073550/218876957-27973277-9434-435e-8548-b9c70aa84875.png)
