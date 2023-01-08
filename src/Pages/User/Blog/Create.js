import { $getRoot, $getSelection } from "lexical";
import React, { useEffect, useState } from "react";
// import Side from "./Side";

// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme = {
	// Theme styling goes here
};

// // When the editor changes, you can get notified via the
// // LexicalOnChangePlugin!
// function onChange(editorState) {
// 	editorState.read(() => {
// 		// Read the contents of the EditorState here.
// 		const root = $getRoot();
// 		const selection = $getSelection();

// 		console.log(root, selection);
// 	});
// }

// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don't pay the cost for plugins until you
// // actually use them.
// function MyCustomAutoFocusPlugin() {
// 	const [editor] = useLexicalComposerContext();

// 	useEffect(() => {
// 		// Focus the editor when the effect fires!
// 		editor.focus();
// 	}, [editor]);

// 	return null;
// }

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error) {
// 	console.error(error);
// }

const BlogCreate = () => {
	// const initialConfig = {
	// 	namespace: "MyEditor",
	// 	theme,
	// 	onError,
	// };

	useEffect(() => {
		//
	}, []);

	return (
		<section className="bg-custom-grey h-full mt-24 mb-20 md:mt-40 md:mb-32 mx-20">
			<div className="mx-auto grid grid-cols-4 gap-4 w-4/5">
				<div className="col-span-4 mb-2">
					<div className="content text-center sm:text-left">
						<div className="title">
							<div className="title_inner !text-xl">Blog</div>
							<p className="text-md text-gray-400">Create</p>
						</div>
					</div>
				</div>

				<div className="col-span-1">{/* <Side /> */}</div>

				<div className="col-span-3">
					{/* <LexicalComposer initialConfig={initialConfig}>
						<PlainTextPlugin
							contentEditable={<ContentEditable />}
							placeholder={<div>Enter some text...</div>}
							ErrorBoundary={LexicalErrorBoundary}
						/>
						<OnChangePlugin onChange={onChange} />
						<HistoryPlugin />
						<MyCustomAutoFocusPlugin />
					</LexicalComposer> */}
				</div>
			</div>
		</section>
	);
};

export default BlogCreate;
