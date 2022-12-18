import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNowPlayingItem, getRecentlyPlayedItem } from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import PausedAnimation from "./PausedAnimation";

const SpotifyNowPlaying = (props) => {
	const [result, setResult] = useState({});
	const [isPlaying, setIsPlaying] = useState(null);
	// console.log("isPlaying", isPlaying);

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
						<div className="w-[20px]">
							<SpotifyLogo />
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
						<div className="w-[20px]">
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
