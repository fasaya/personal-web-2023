import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
	getNowPlayingItem,
	getPlaylistItem,
	getRecentlyPlayedItem,
} from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import PausedAnimation from "./PausedAnimation";

const SpotifyNowPlaying = (props) => {
	const [result, setResult] = useState({});
	const [isPlaying, setIsPlaying] = useState(null);
	const [playlist, setPlaylist] = useState({});

	function getPlaying() {
		Promise.all([
			getNowPlayingItem(
				props.client_id,
				props.client_secret,
				props.refresh_token
			),
		]).then((results) => {
			if (results[0] != false) {
				// console.log("res", results[0]);
				setResult(results[0]);
				setIsPlaying(results[0].isPlaying);

				if (results[0].playlistEndpoit) {
					getPlaylist(results[0].playlistEndpoit);
				} else {
					setPlaylist({});
				}
			} else {
				getLastPlayed();
			}
		});
	}

	function getLastPlayed() {
		Promise.all([
			getRecentlyPlayedItem(
				props.client_id,
				props.client_secret,
				props.refresh_token
			),
		]).then((results) => {
			setIsPlaying(false);
			if (results[0] != false) {
				setResult(results[0]);
			} else {
				setResult({});
			}
		});
	}

	function getPlaylist(playlistEndpoit) {
		Promise.all([getPlaylistItem(playlistEndpoit)]).then((results) => {
			setPlaylist(results[0]);
			// console.log("playlist", results[0]);
		});
	}

	useEffect(() => {
		getPlaying();
	}, []);

	return (
		<>
			<div
				className="grid grid-cols-1 gap-2"
				onMouseEnter={() => {
					getPlaying();
				}}
			>
				{isPlaying ? (
					<div className="flex flex-1 items-center">
						<div className="w-[25px]">
							<a
								href="https://open.spotify.com/user/fasayaa?si=Rmz8YjgzQe-W3zor1KUhVA"
								target="_blank"
							>
								<SpotifyLogo />
							</a>
						</div>
						<span
							className="mx-2"
							style={{
								fontFamily: "Helvetica, Arial, sans-serif",
							}}
						>
							{result.isPlaying ? (
								<a href={result.songUrl} target="_blank">
									<strong>{result.title}</strong> -{" "}
									{result.artist}
								</a>
							) : (
								<h1
									style={{
										fontFamily:
											"Helvetica, Arial, sans-serif",
										fontWeight: "600",
									}}
								>
									Currently offline
								</h1>
							)}
						</span>
						<div className="w-[20px]">
							{result.isPlaying && <PlayingAnimation />}
						</div>
					</div>
				) : (
					<div className="flex flex-1 items-center">
						<div className="w-[25px]">
							<SpotifyLogo />
						</div>
						<span
							className="mx-2"
							style={{
								fontFamily: "Helvetica, Arial, sans-serif",
							}}
						>
							{isPlaying != null ? (
								<a href={result.songUrl} target="_blank">
									<strong>{result.title}</strong> -{" "}
									{result.artist}
								</a>
							) : (
								<h1
									style={{
										fontFamily:
											"Helvetica, Arial, sans-serif",
										fontWeight: "600",
									}}
								>
									Currently offline
								</h1>
							)}
						</span>
						<div className="w-[20px]">
							{isPlaying != null ? <PausedAnimation /> : <></>}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default SpotifyNowPlaying;
