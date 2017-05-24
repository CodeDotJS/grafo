'use strict';

const gravator = require('./index.js');

const user = 'matt';

gravator(user, 'id').then(res => {
	console.log(res);
});

gravator(user, 'hash').then(res => {
	console.log(res);
});

gravator(user, 'requestHash').then(res => {
	console.log(res);
});

gravator(user, 'profileUrl').then(res => {
	console.log(res);
});

gravator(user, 'preferredUsername').then(res => {
	console.log(res);
});

gravator(user, 'thumbnailUrl').then(res => {
	console.log(res);
});

gravator(user, 'photos').then(res => {
	console.log(res);
});

gravator(user, 'name').then(res => {
	console.log(res);
});

gravator(user, 'ims').then(res => {
	console.log(res);
});

gravator(user, 'displayName').then(res => {
	console.log(res);
});

gravator(user, 'aboutMe').then(res => {
	console.log(res);
});

gravator(user, 'currenLocation').then(res => {
	console.log(res);
});

gravator('rushforlinux', 'emails').then(res => {
	console.log(res);
});

gravator(user, 'accounts').then(res => {
	console.log(res);
});

gravator(user, 'urls').then(res => {
	console.log(res);
});
