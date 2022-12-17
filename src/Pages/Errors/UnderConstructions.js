import React from "react";
import { UnderConstruction } from "../../Components/Errors/UnderConstruction";

const UnderConstructions = () => (
	<section className="bg-white dark:bg-custom-grey h-full">
		<div className="grid h-screen place-items-center text-custom-grey-light">
			<UnderConstruction />
		</div>
	</section>
);

export default UnderConstructions;
