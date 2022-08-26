Let's say you're in a situation where you're listening to one `FormControl` but you're dependent on the value of another `FormControl`.

There are two elegant (in my opinion) solutions to this that I've come across.

## Solution #1 - use `withLatestFrom`

[`withLatestFrom`](https://rxjs.dev/api/operators/withLatestFrom) is an rxjs operator that, as the name suggests, lets you pull the latest value of whatever Observable(s) that you pipe in.

![Image that shows the following code block `
this.form
.get('field2')
?.valueChanges.pipe(
withLatestFrom(this.form.controls['field1']?.valueChanges)
)
.subscribe({
next: ([field1, field2]) => {
// Do something with field1 and field2
},
});
`](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9dab42wjlv2yzjwjwcx5.png)

Here I am listening to the stream of `field2` but the subscription is executed only when `field1` has a value.

## Solution #2 - use `combineLatestWith`

[`combineLatestWith`](https://rxjs.dev/api/operators/combineLatestWith) is another rxjs operator that combines multiple streams and executes when any one of the Observables emit a value.

![Image that shows the following code block `
this.form.controls['field2'].valueChanges
.pipe(combineLatestWith(this.form.controls['field1'].valueChanges))
.subscribe({
next: ([field1, field2]) => {
// Do something with field1 and field2
},
});
`](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/98p5f49raamr7v1f9idg.png)

## Both are useful in different scenarios

Here is what I mean by that -

With `withLatestFrom`, the subscription is executed only when `field2` undergoes a value change and `field1` has a value. So if you just change the value of `field1`, nothing happens.

With `combineLatestWith`, the subscription is executed when **any** of the controls undergo value changes. This can be problematic if you're running a lot of code in the subscription execution. So, use it with caution!

If you want to try the code for yourself, it's up [here](https://github.com/rajsaha/listeningToMultipleFormControls) on GitHub.
  
