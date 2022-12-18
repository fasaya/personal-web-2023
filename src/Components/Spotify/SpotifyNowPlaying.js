import React, { useEffect, useState } from "react";
import { Box, Stack, Image, Text, Link, Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import getNowPlayingItem from "./SpotifyAPI";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";

const SpotifyNowPlaying = (props) => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({
		albumImageUrl:
			"https://i.scdn.co/image/ab67616d0000b273ea28881e9e363244a4a2347b",
		artist: "Ariana Grande, Mac Miller",
		isPlaying: true,
		songUrl: "https://open.spotify.com/track/0S4RKPbRDA72tvKwVdXQqe",
		title: "The Way",
	});

	// console.log("props", props);

	// useEffect(() => {
	// 	Promise.all([
	// 		getNowPlayingItem(
	// 			props.client_id,
	// 			props.client_secret,
	// 			props.refresh_token
	// 		),
	// 	]).then((results) => {
	// 		setResult(results[0]);
	// 		setLoading(false);
	// 	});
	// });

	// let spotify = getNowPlayingItem(
	// 	props.client_id,
	// 	props.client_secret,
	// 	props.refresh_token
	// );

	// if (spotify != false) {
	// 	// console.log(spotify, "vv");
	// 	setResult(spotify ?? {});
	// 	setLoading(false);
	// }

	return (
		<Center>
			<Box width="xs">
				<Stack width="full" mb={result.isPlaying ? 0 : 2} spacing={2}>
					<Stack spacing={2} direction="row" align="center">
						<SpotifyLogo />
						<Text fontWeight="semibold">
							{result.isPlaying
								? "Now playing"
								: "Currently offline"}
						</Text>
						{result.isPlaying && <PlayingAnimation />}
					</Stack>
					{result.isPlaying && (
						<Box borderRadius="lg">
							<Stack direction="row" spacing={3} align="center">
								<Image
									alt={`${result.title} album art`}
									src={result.albumImageUrl}
									width={12}
									height={12}
									borderRadius="sm"
								/>
								<Stack spacing={0} overflow="hidden">
									<Link href={result.songUrl} target="_blank">
										<Text
											fontWeight="semibold"
											width="full"
											isTruncated
											color="alph"
										>
											{result.title}
										</Text>
									</Link>
									<Text color="gray.500" isTruncated>
										{result.artist}
									</Text>
									<Text></Text>
								</Stack>
							</Stack>
						</Box>
					)}
				</Stack>
			</Box>
		</Center>
	);
};

export default SpotifyNowPlaying;

const Center = styled.div`
	// position: absolute;
	// margin-left: 130px;
	// transform: translate(-50%, -50%);
`;
