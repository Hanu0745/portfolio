/**
 * Runs before first paint to apply the saved or system theme (no flash between
 * server-rendered and client theme) and to mark that JavaScript is available.
 */
const script = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t)}catch(e){}document.documentElement.classList.add("js")})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
