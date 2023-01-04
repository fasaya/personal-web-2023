import React, { useEffect, useState } from "react";
import { getNowPlayingItem } from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import { useLocation } from "react-router-dom";

const SpotifyNowPlayingNew = (props) => {
	const [isFull, setIsFull] = useState(false);
	const [result, setResult] = useState({});
	const [isPlaying, setIsPlaying] = useState({});
	const location = useLocation();

	function getPlaying() {
		Promise.all([
			getNowPlayingItem(
				props.client_id,
				props.client_secret,
				props.refresh_token
			),
		]).then((results) => {
			if (results[0].isPlaying) {
				setResult(results[0]);
				setIsPlaying(true);
			} else {
				getLastPlayed();
				setIsPlaying(true);
			}
		});
	}

	function getLastPlayed() {
		Promise.all([
			getNowPlayingItem(
				props.client_id,
				props.client_secret,
				props.refresh_token
			),
		]).then((results) => {
			setResult(results[0]);
		});
	}

	useEffect(() => {
		getPlaying();
	}, [location]);

	return (
		<>
			<div
				className="grid grid-cols-1 gap-2"
				onMouseEnter={() => {
					// setIsFull(true);
					getPlaying();
				}}
				onMouseLeave={() => setIsFull(false)}
				onClick={() => {
					setIsFull(!isFull);
				}}
			>
				{isFull ? (
					<div className="flex flex-1">
						<SpotifyLogo />
						<h1
							className="mx-2"
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
							{result.isPlaying ? (
								<>
									<strong>{result.title}</strong> -{" "}
									{result.artist}
								</>
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
