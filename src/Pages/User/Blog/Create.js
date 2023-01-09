import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogCreate = () => {
	const [editorState, setEditorState] = React.useState(() =>
		EditorState.createEmpty()
	);

	const [convertedContent, setConvertedContent] = useState(null);

	useEffect(() => {
		let html = convertToHTML(editorState.getCurrentContent());
		setConvertedContent(html);
		console.log(html);
	}, [editorState]);

	return (
		<section className="bg-custom-grey h-full mt-24 mb-20 md:mt-40 md:mb-32 mx-20">
			<div className="mx-auto grid gap-4 w-4/5">
				<div className="mb-2">
					<div className="content text-center sm:text-left">
						<div className="title">
							<div className="title_inner !text-xl">Blog</div>
							<p className="text-md text-gray-400">
								Create Something
							</p>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/3  mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-custom-grey-light text-xs font-bold mb-2"
						htmlFor="title"
					>
						Title
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-custom-grey-light border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						type="text"
						placeholder="Title"
					/>
				</div>

				<div className="">
					<label className="text-custom-grey-light">Content:</label>
					<div className="bg-white rounded">
						<Editor
							editorState={editorState}
							onEditorStateChange={setEditorState}
							wrapperClassName="wrapper-class"
							editorClassName="editor-class"
							toolbarClassName="toolbar-class"
						/>
					</div>
				</div>

				<div className="w-full md:w-1/3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-custom-grey-light text-xs font-bold mb-2"
						htmlFor="grid-state"
					>
						State
					</label>
					<div className="relative">
						<select
							className="block appearance-none w-full bg-gray-200 border border-gray-200 text-custom-grey-light py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-custom-grey-light">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>

				<div className="w-28">
					<button
						type="button"
						className="btn fill mb-3"
						style={{ width: "100%" }}
					>
						Save
					</button>
				</div>
			</div>
		</section>
	);
};

export default BlogCreate;
