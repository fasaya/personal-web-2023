import querystring from "querystring";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
	const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
		"base64"
	);

	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: querystring.stringify({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	return response.json();
};

export const getNowPlaying = async (
	client_id,
	client_secret,
	refresh_token
) => {
	const { access_token } = await getAccessToken(
		client_id,
		client_secret,
		refresh_token
	);

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export async function getNowPlayingItem(
	client_id,
	client_secret,
	refresh_token
) {
	const response = await getNowPlaying(
		client_id,
		client_secret,
		refresh_token
	);

	if (response.status === 204 || response.status > 400) {
		return false;
	}

	const song = await response.json();
	const albumImageUrl = song.item.album.images[0].url;
	const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
	const isPlaying = song.is_playing;
	const songUrl = song.item.external_urls.spotify;
	const title = song.item.name;

	let playlistEndpoit = null;
	if (song.context && song.context.type == "playlist") {
		playlistEndpoit = song.context.href;
	}

	return {
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
		playlistEndpoit,
	};
}

export const getRecentlyPlayed = async (
	client_id,
	client_secret,
	refresh_token
) => {
	const { access_token } = await getAccessToken(
		client_id,
		client_secret,
		refresh_token
	);

	return fetch(RECENTLY_PLAYED_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export async function getRecentlyPlayedItem(
	client_id,
	client_secret,
	refresh_token
) {
	const response = await getRecentlyPlayed(
		client_id,
		client_secret,
		refresh_token
	);

	if (response.status === 204 || response.status > 400) {
		return false;
	}

	let song = await response.json();
	song = song.items[0];
	const albumImageUrl = song.track.album.images[0].url;
	const artist = song.track.artists.map((_artist) => _artist.name).join(", ");
	const songUrl = song.track.external_urls.spotify;
	const title = song.track.name;
	const playedAt = song.played_at;
	const isPlaying = false;

	return {
		albumImageUrl,
		artist,
		songUrl,
		title,
		playedAt,
		isPlaying,
	};
}

export const getByEndpoint = async (endpoint) => {
	const { access_token } = await getAccessToken(
		client_id,
		client_secret,
		refresh_token
	);

	return fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export async function getPlaylistItem(endpoint) {
	const response = await getByEndpoint(endpoint);

	if (response.status === 204 || response.status > 400) {
		return false;
	}

	let playlist = await response.json();
	const albumImageUrl = playlist.images[0].url;
	const playlistUrl = playlist.external_urls.spotify;
	const name = playlist.name;

	return {
		albumImageUrl,
		playlistUrl,
		name,
	};
}
