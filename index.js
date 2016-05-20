#!/usr/bin/env node

'use strict';

var got = require('got');

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'http://en.gravatar.com/' + username;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			username: $('.fn').text() || null,

			location: $('.location').text() || null,

			biography: $('#bio').text().trim() || null,

			wordpress: $('a.accounts_wordpress').attr('href') || null,

			twitter: $('a.accounts_twitter').attr('href') || null,

			facebook: $('a.accounts_facebook').attr('href') || null,

			flickr: $('a.accounts_flickr').attr('href') || null,

			googlePlus: $('a.accounts_google').attr('href') || null,

			linkedIn: $('a.accounts_linkedin').attr('href') || null,

			youtube: $('a.accounts_youtube').attr('href') || null,

			blogger: $('a.accounts_blogger').attr('href') || null,

			tumblr: $('a.accounts_tumblr').attr('href') || null
		};
	});
};
