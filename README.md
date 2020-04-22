To see the different output on server side and client side, just install deps and `npm start`.

It will run the code in `node` showing the output CSS, then open the same code in the browser
and show the output there.

In my case:

### Input JSS
```js
const styles = {
  '@keyframes spinner-rotation': {
    from: {transform: 'rotate(0deg)'},
    to: {transform: 'rotate(360deg)'},
  },
  spinner: {
    animation: [
      '$spinner-rotation linear infinite 1s',
    ],
  },
}
```

### Server output CSS

```
@keyframes keyframes-spinner-rotation-0-2-1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  .spinner-0-2-2 {
    animation: keyframes-spinner-rotation-0-2-1 linear infinite 1s;
  }
```

### Client output CSS

```
@-webkit-keyframes keyframes-spinner-rotation-0-2-1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  .spinner-0-2-2 {
    animation: $spinner-rotation linear infinite 1s;
  }
```