
get started:

1. `yarn install` (make sure to use the [latest version of yarn](https://classic.yarnpkg.com/en/docs/install))
1. `cd packages/test-jotai-error`
1. `yarn start`

It should throw

```
Module not found: Error: use-context-selector tried to access react-dom (a peer dependency) but it isn't provided by its ancestors; this makes the require call ambiguous and unsound.
```

error reported in https://github.com/pmndrs/jotai/issues/135

## yarn berry bug (?)

The problem disappears if you execute in the root of this workspace `yarn add react react-dom`. I think this is a bug in yarn berry.
