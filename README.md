# minimal-redux-react-vr: A Very Minimal Sample For Redux in React VR

This repo demonstrates the progressive inclusion of Redux into a fresh React VR project.

Follow along in the git commits:

### [Commit 1](https://github.com/FLGMwt/minimal-redux-react-vr/commit/f21a7b9a75dc724bf0b3f9fa9200a2c5433e075e)

A new React VR project immediately after invoking `react-vr init redux-vr` (with react-vr-cli 0.3.0)

### [Commit 2](https://github.com/FLGMwt/minimal-redux-react-vr/commit/b3b991440c7caf8fbe8417e6c38423bada39e1a0)

A minor refactoring to 

1. Pull the style definition out of the JSX
2. Rename the `redux_vr` component to `App`

### [Commit 3](https://github.com/FLGMwt/minimal-redux-react-vr/commit/36ea05d52aa8475c34f3b33bf663cc3d445f3049)

Pull in the `redux` and `react-redux` packages.

Create a new `Root` component which wraps the `App` component with `react-redux`'s `Provider` component.

Define a pass-through redux reducer with a state of `0`.

User that reducer for redux's `createStore`

### [Commit 4](https://github.com/FLGMwt/minimal-redux-react-vr/commit/da4b260d5edc874212bb82c393687a79f441bf90)

Use `connect` with the `App` component to provide it with the redux store.

`mapStateToProps` exposes the state value as the `count` prop to the `App` component

`App` uses `this.props.count` to display the state value in the `Text`

`Root` now renders `ConnectedApp`

### [Commit 5](https://github.com/FLGMwt/minimal-redux-react-vr/commit/3e47e9db9531eb4419865472cb0b93c60de64b0f)

Define a reducer to handle a `INCREMENT` action which increments the state by 1.

### [Commit 6](https://github.com/FLGMwt/minimal-redux-react-vr/commit/6821680230f53f8b035ec70d151ae5e39f2ad529)

Define an `increment` action creator of the type `INCREMENT`.

Provide the `increment` action creator as a `mapDispatchToProps` agrument to expose it to the `App` component

In the `App` component, trigger `this.props.increment` on any input to the `Text` component using `onInput`.

# Result

A redux state with a counter that increments on any input to the `Text` component which displays how many input events have fired in the course of the application.
