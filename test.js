import test from 'ava';
import fn from './';

test(async t => {
	const user = await fn('matt');

	t.is(user.username, 'Matt');

	t.is(user.location, 'embarcadero and townsend, sf ca');

	t.is(user.biography, 'In 2002 I started contributing to Open Source software, and life has just gotten better from there. Co-founder of WordPress, founder Automattic.');

	t.is(user.wordpress, 'http://matt.wordpress.com/');

	t.is(user.twitter, 'http://twitter.com/photomatt');

	t.is(user.facebook, 'http://facebook.com/matt.mullenweg');

	t.is(user.flickr, 'http://flickr.com/photos/photomatt');

	t.is(user.googlePlus, 'https://plus.google.com/116394575739281318169');

	t.is(user.linkedIn, 'http://www.linkedin.com/in/mattm');
});
