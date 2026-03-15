export default function change(){
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <ul>
                    <li>
                        <h3>Truffle-Infused Forest Mushroom Velouté</h3>
                        <p>A creamy blend of wild seasonal mushrooms, topped with shaved black truffles and a hint of aged sherry.</p>
                    </li>
                    <li>
                        <h3>Pan-Seared Scallops with Cauliflower Silk</h3>
                        <p>Hand-dived scallops served over a smooth cauliflower purée, finished with crispy pancetta and a lemon-herb brown butter.</p>
                    </li>
                    <li>
                        <h3>Herb-Crusted Rack of Lamb</h3>
                        <p>Tender grass-fed lamb roasted with a crust of garden herbs, accompanied by honey-glazed root vegetables and a rich red wine reduction.</p>
                    </li>
                    <li>
                        <h3>Saffron & Asparagus Risotto</h3>
                        <p>Carnaroli rice slow-cooked with aromatic saffron, tender green asparagus spears, and finished with 24-month aged Parmesan.</p>
                    </li>
                    <li>
                        <h3>Dark Chocolate & Raspberry Decadence</h3>
                        <p>A rich 70% cocoa fondant with a molten center, served with fresh raspberry coulis and Madagascar vanilla bean gelato.</p>
                    </li>
                </ul>
            </div>
        `;
    }
};