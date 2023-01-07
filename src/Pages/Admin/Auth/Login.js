import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API, LOCAL_STORAGE } from "../../../Constants";

const Login = () => {
	const navigate = useNavigate();
	const formData = { email: "", password: "" };
	const [responseBody, setResponseBody] = useState(formData);
	const [isLoading, setIsLoading] = useState(false);

	const inputChangeHandler = (event) => {
		const { name, value } = event.target;
		setResponseBody({ ...responseBody, [name]: value });
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		setIsLoading(true);

		axios
			.post(API.AUTH.LOGIN, responseBody)
			.then((response) => {
				// console.log("response", response.data.data.token);
				if (response.status == 200 && response.data.success) {
					sessionStorage.setItem(
						"jwtToken",
						response.data.data.token
					);
					navigate("/blog");
				} else {
					setIsLoading(false);
					alert("Email or password do not match");
				}
			})
			.catch((error) => {
				setIsLoading(false);
				alert(error);
			});
	};

	useEffect(() => {
		// console.log("jwtToken", sessionStorage.getItem("jwtToken"));
		if (sessionStorage.getItem("jwtToken") !== null) {
			navigate("/blog");
		}
	}, []);

	return (
		<>
			<section className="bg-custom-grey h-full">
				<div className="grid h-screen place-items-center text-custom-grey-light">
					<div className="sm:w-2/3 w-5/6 text-center">
						<div className="content text-center sm:text-left">
							<div className="title text-center">
								<div className="title_inner !text-xl">
									Login
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<div className="w-96">
								<form onSubmit={onSubmitHandler} method="POST">
									{/* Email input */}
									<div className="mb-6">
										<input
											type="text"
											name="email"
											className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-custom-orange-1 focus:outline-none"
											placeholder="Email address"
											onChange={(e) =>
												inputChangeHandler(e)
											}
										/>
									</div>
									{/* Password input */}
									<div className="mb-6">
										<input
											type="password"
											name="password"
											className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-custom-orange-1 focus:outline-none"
											placeholder="Password"
											onChange={(e) =>
												inputChangeHandler(e)
											}
										/>
									</div>

									{/* Submit button */}

									{isLoading ? (
										<button
											type="button"
											className="btn fill"
											disabled
										>
											<i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>
											<span className="sr-only">
												Loading...
											</span>
										</button>
									) : (
										<button
											type="submit"
											className="btn fill"
										>
											Sign in
										</button>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
