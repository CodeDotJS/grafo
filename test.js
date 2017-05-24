import test from 'ava';
import fn from './';

const user = 'matt';

test(async t => {
	const id = await fn(user, 'id');
	const hash = await fn(user, 'hash');
	const requestHash = await fn(user, 'requestHash');
	const profileUrl = await fn(user, 'profileUrl');
	const preferredUsername = await fn(user, 'preferredUsername');
	const thumbnailUrl = await fn(user, 'thumbnailUrl');
	const photos = await fn(user, 'photos');
	const name = await fn(user, 'name');
	const ims = await fn(user, 'ims');
	const displayName = await fn(user, 'displayName');
	const aboutMe = await fn(user, 'aboutMe');
	const currentLocation = await fn(user, 'currentLocation');
	const emails = await fn('rushforlinux', 'emails');
	const accounts = await fn(user, 'accounts');
	const urls = await fn(user, 'urls');

	t.is(id.opts, '5');
	t.is(hash.opts, '767fc9c115a1b989744c755db47feb60');
	t.is(requestHash.opts, 'matt');
	t.is(profileUrl.opts, 'http://gravatar.com/matt');
	t.is(preferredUsername.opts, 'matt');
	t.is(thumbnailUrl.opts, 'https://secure.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60');
	t.is(photos.opts[0].value, 'https://secure.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60');
	t.is(name.opts.formatted, 'Matt Mullenweg');
	t.is(ims.opts[0].value, 'photomattnet');
	t.is(displayName.opts, 'Matt');
	t.is(aboutMe.opts, 'In 2002 I started contributing to Open Source software, and life has just gotten better from there. Co-founder of WordPress, founder Automattic.');
	t.is(currentLocation.opts, 'embarcadero and townsend, sf ca');
	t.is(emails.opts[0].value, 'rushforlinux@gmail.com');
	t.is(accounts.opts[0].url, 'http://facebook.com/matt.mullenweg');
	t.is(urls.opts[0].value, 'http://ma.tt/');
});
