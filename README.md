<h1 align="center">
<img src="media/gravator.png" alt="GRAVATOR" width="400">

</h1>

<h5 align="center">Get user information of a Gravatar User</h5>

<h1 align="center">
<img src="https://travis-ci.org/CodeDotJS/gravator.svg?branch=master">
</h1>

## Install 

```
$ npm install --save gravator
```

## Usage

```js
'use strict';

const gravator = require('rushforlinux');

gravator('rushforlinux').then(user => {
	console.log(user);
	/*
	{	username   :  'Rishi Giri (DotJS)',
		location   :  'Gorakhpur',
		biography  :  'JavaScript, Python and FOSS Enthusiast. Open Source Addict.',
		wordpress  :   null,
		twitter    :  'http://twitter.com/Rishi_Giri_',
		facebook   :  'https://www.facebook.com/rishi.giri.90',
		flickr     :   null,
		googlePlus :  'http://profiles.google.com/106157567815478859311',
		linkedIn   :  'https://www.linkedin.com/in/rishidotjs',
		youtube    :   null,
		blogger    :  'http://www.blogger.com/profile/g106157567815478859311',
		tumblr     :  'http://geekyrush.tumblr.com/' }
  	*/
});
```

## Related 

- [gravator-cli](https://github.com/CodeDotJS/gravator-cli) : CLI Tool for Gravator.

- [twifo](https://github.com/CodeDotJS/whatiz-cli) : Get user information of a twitter user.

- [packages-by](https://github.com/CodeDotJS/packages-by) : Total packages published by a npm user.

- [packstat](https://github.com/CodeDotJS/packstat) : Displays metrics about npm modules.

- [curver](https://github.com/CodeDotJS/curver) : Easily fetch the latest version of node module available on npm.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com/)
