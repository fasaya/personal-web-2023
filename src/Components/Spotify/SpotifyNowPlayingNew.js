import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getNowPlayingItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";

const SpotifyNowPlayingNew = (props) => {
	// const [loading, setLoading] = useState(true);
	const [isFull, setIsFull] = useState(false);
	const [result, setResult] = useState({});
	// const [result, setResult] = useState({
	// 	albumImageUrl:
	// 		"https://i.scdn.co/image/ab67616d0000b273ea28881e9e363244a4a2347b",
	// 	artist: "Ariana Grande, Mac Miller",
	// 	isPlaying: true,
	// 	songUrl: "https://open.spotify.com/track/0S4RKPbRDA72tvKwVdXQqe",
	// 	title: "The Way",
	// });

	// console.log("props", props);

	useEffect(() => {
		Promise.all([
			getNowPlayingItem(
				props.client_id,
				props.client_secret,
				props.refresh_token
			),
		]).then((results) => {
			setResult(results[0]);
			// setLoading(false);
		});
	});

	return (
		<>
			<div
				className="grid grid-cols-1 gap-2"
				// onMouseEnter={() => setIsFull(true)}
				// onMouseLeave={() => setIsFull(false)}
				// onClick={() => setIsFull(!isFull)}
			>
				{isFull ? (
					<>
						<div className="flex flex-1">
							<SpotifyLogo />
							<h1
								className="semibold mx-2"
								style={{
									fontFamily: "Helvetica, Arial, sans-serif",
									fontWeight: "600",
								}}
							>
								{result.isPlaying
									? "Now playing"
									: "Currently offline"}
							</h1>
							{result.isPlaying && <PlayingAnimation />}
						</div>
					</>
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
							<strong>{result.title}</strong> - {result.artist}
						</span>
						<div className="w-[20px]">
							{result.isPlaying && <PlayingAnimation />}
						</div>
					</div>
				)}

				{isFull && result.isPlaying ? (
					<div className="w-[20rem]">
						<div
							className="grid grid-cols-5 gap-0 p-2 border-custom-grey-light"
							style={{
								borderWidth: "1px",
								borderRadius: "10px",
								// borderColor: "#fff",
							}}
						>
							<div>
								<img
									alt={`${result.title} album art`}
									src={result.albumImageUrl}
									className="rounded-sm w-[3rem] !mr-1"
								/>
							</div>
							<div
								className="col-span-4 text-left flex items-center"
								style={{
									fontFamily: "Helvetica, Arial, sans-serif",
								}}
							>
								<div>
									<h3
										style={{
											fontWeight: "600",
										}}
									>
										{result.title}
									</h3>
									<p>{result.artist}</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default SpotifyNowPlayingNew;
