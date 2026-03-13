export default change = function() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <h1>Hier könnte Ihr Menü stehen</h1>
            </div>
        `;
    }
};