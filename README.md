# Hello Hostfully team!
## Here i will be sharing a few thoughts regarding the challenge

# Global State
I used custom hooks to hold the global state of the application because there was not that much data to be saved
and redux would be an overkill for this small project. Also the custom hook feels easier to debbug and read.

# Create booking Validation
Because of some limitations of the library i used for the datepicker i could not do a better way to validate not
choosing any date or when the user chooses a date range that has invalid data inside, so i just created an error
message with the toast for that.

# Fake data
Because there was not an API from which i could take the data, i created some fake ones. I just passed them
to the custom hook i created to make things easier for me, but i could have created a fake request file that
would return the data and then add that to the hook state if i had more time.

# Tests
I focused on creating test for the most complex components, that means components like header and footer that
just show some text do not have tests. Also, some tests related to the librarie's components i'm using will fail because
i was not able to have access to some details, functions or states inside them. Also some others will fail as i didnt
manage to make them work, i still need to learn some things, i left comments on some tests to explain the problem i had.
Last but not least i didnt create every possible test for some components for this same reason and also because that would take much more time.

# Animations
I added a few simple animations for a smother user interaction and to give some fluidity to the interface.

# The layout and interface
It was quite challenging and i did notice that from the beginning, so i decided to focus on
the code quality and javascript+react engineering instead of layout and beauty of the interface
so you will surely notice the layout is very simple and basic without many ornaments.

# Responsiveness
I didnt choose specific breakpoints, i kind of did a 100% responsive in a way that every screen size is fine.
So i just fixed the layont whenever it would break when shrinking or being rendered on a smaller screen.

# Edit booking modal responsiveness
As you could see i'm using a library for that. When i was trying to do its responsiveness
i got some problems as there were some limitations to do that properly because of how
the library works. With that said, it gets weird past 500px of screen width and i just
let it stay that way because the workaround would take a lot of time.

# Final Words
You will notice i avoied a lot of things that would take more time to do, thats because i was in a hurry
to finish the challenge because i wanted to deliver it before the 10 days limit while also i didnt have
as much free time i wanted to fully focus on doing this challenge so i hope i dont give the wrong impression.