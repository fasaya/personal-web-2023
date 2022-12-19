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
			if (results[0] != false) {
				setResult(results[0]);
				setIsPlaying(null);
			} else {
				setResult({});
				setIsPlaying(null);
			}
		});
	}

	function getPlaylist(playlistEndpoit) {
		Promise.all([getPlaylistItem(playlistEndpoit)]).then((results) => {
			setPlaylist(results[0]);
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
						<Current isPlaying={isPlaying} result={result} />
						{result.isPlaying && (
							<div className="w-[20px]">
								<PlayingAnimation />
							</div>
						)}
					</div>
				) : (
					<div className="flex flex-1 items-center">
						<Current isPlaying={isPlaying} result={result} />
						{isPlaying != null ? (
							<div className="w-[20px]">
								<PausedAnimation />
							</div>
						) : (
							<></>
						)}
					</div>
				)}
			</div>
		</>
	);
};

const Current = ({ isPlaying, result }) => {
	let play = <></>;

	if (isPlaying != null && Object.keys(result).length !== 0) {
		play = (
			<a href={result.songUrl} target="_blank">
				<strong>{result.title}</strong> - {result.artist}
			</a>
		);
	} else if (isPlaying == null && Object.keys(result).length > 0) {
		play = (
			<>
				<p
					style={{
						fontSize: "10px",
						marginBottom: "-4px",
					}}
				>
					Recently played
				</p>
				<a href={result.songUrl} target="_blank">
					<strong>{result.title}</strong> - {result.artist}
				</a>
			</>
		);
	} else {
		play = (
			<h1
				style={{
					fontFamily: "Helvetica, Arial, sans-serif",
					fontWeight: "600",
				}}
			>
				Currently offline
			</h1>
		);
	}

	return (
		<>
			<div className="w-[25px]">
				<SpotifyLogo />
			</div>
			<span
				className="mx-2"
				style={{
					fontFamily: "Helvetica, Arial, sans-serif",
					// height: "40px",
				}}
			>
				{play}
			</span>
		</>
	);
};

export default SpotifyNowPlaying;
