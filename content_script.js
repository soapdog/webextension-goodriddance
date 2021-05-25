/**
 * Goodriddance add-on
 * 
 * Andre Alves Garzia (andre@andregarzia.com)
 * 2021-05-25
 * 
 * License: MIT
 * 
 * Adds a "Search Book in The StoryGraph" to Goodreads.
 */

let title = document.getElementById("bookTitle").innerText
let authors = document.getElementById("bookAuthors").innerText.replace("(Goodreads Author)","").replace("(Translator)","")
let asyncButtonContainer = document.querySelector(".asyncPreviewButtonContainer")

asyncButtonContainer.insertAdjacentHTML('afterend', `
<style>
.goodriddance-button {
	background-color: rgb(244, 241, 234);
	border-bottom-color: rgb(214, 208, 196);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-image-outset: 0;
	border-image-repeat: stretch;
	border-image-slice: 100%;
	border-image-source: none;
	border-image-width: 1;
	border-left-color: rgb(214, 208, 196);
	border-left-style: solid;
	border-left-width: 1px;
	border-right-color: rgb(214, 208, 196);
	border-right-style: solid;
	border-right-width: 1px;
	border-top-color: rgb(214, 208, 196);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-top-style: solid;
	border-top-width: 1px;
	color: rgb(51, 51, 51);
	cursor: pointer;
	display: inline-block;
	font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
	font-size: 14px;
	line-height: 14px;
	overflow-wrap: break-word;
	padding-bottom: 8px;
	padding-left: 12px;
	padding-right: 12px;
	padding-top: 8px;
	text-align: center;
	text-decoration: rgb(51, 51, 51);
	text-decoration-color: rgb(51, 51, 51);
	text-decoration-line: none;
	text-decoration-style: solid;
	text-decoration-thickness: auto;
	width: 122px;
	margin-top: 5px;
}
</style>
<a class="goodriddance-button" href="https://app.thestorygraph.com/browse?search_term=${title}+${authors}" target="_blank">Search Book in The StoryGraph</a>
`)
