export default function change() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <h1>sorry, we're booked out!</h1>
            </div>
        `;
    }
}