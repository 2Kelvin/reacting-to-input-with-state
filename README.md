# reacting-to-input-with-state

![cityQuiz](https://user-images.githubusercontent.com/85868026/210347844-d9350e18-a7c5-4f8a-9adc-d8fcba561d10.png)

In this documentation read about managing form state, I learnt:

- to use `react's declarative UI method` rather than `vanilla javascript imperative method`
- to at first `visualize all the different UI states a user might see` e.g. success page, error page etc
- to `create mock ups for the different states before adding logic`. So that when you finally add the logic you'll just 'link' the mockups as UI components
- that `state is triggered by two types of inputs`: `human inputs` and `computer inputs`.
- human inputs: button click, typing in an input field, clicking a link etc. Human inputs often require event handlers
- computer inputs: network response(sending or receiving data {success message/ error message}), timeouts, image loading....
- that you must `set state variables for any human or computer inputs that might trigger state updates in your UI`
- to `represent each state as a labeled circle on a paper` and represent a change between states using an arrow. Visualizing the UI flow like so helps sort out any bugs before implementation
- that each piece of state is a moving piece and you want as few moving pieces as possible. `Simplicity is key`. The more the state variables the more the likelihood of introducing a bug
- to start with the most important state. The ones that absolutely have to be there. Then add enough state variables for all your states
- to `refactor state` as you go on. i.e. `remove any non-essential state variables`. Avoid duplicating state. The goal is to `prevent a a case where you have a state variable(s) that doesn't represent any UI you'd want a user to see`
- these 3 questions to ask when refactoring state varibles:
  - [x] does the state cause a paradox / an impossible state? (if so you can combine the states into one)
  - [x] is the same info available in another state already?
  - [x] can you get the same info from the inverse of another state variable?
- a state variable is considered essential when you can't remove it without breaking the functionality of the code
- to `connect state to event handlers through setState()`
