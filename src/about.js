export default function change() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <h1>About</h1>
            </div>
        `;
    }
}