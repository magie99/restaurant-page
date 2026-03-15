export default function change() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <h1>Maxi's Fine Dining: Craftsmanship you can taste.</h1>
                <p>
                    Welcome to Maxi's Fine Dining Establishment, where culinary excellence meets heartfelt hospitality.
                    We invite you to embark on a journey of the senses, where every dish tells a story and every ingredient
                    is selected with the utmost care.
                </p>
                <p>
                    In an atmosphere of timeless elegance, we blend seasonal freshness with international sophistication to create an unforgettable experience.
                    Whether you are celebrating a milestone or simply indulging in a night of fine flavor, we ensure every moment is exceptional.
                </p>
                <p>Want to take a look at our <a href="#" class="menu">menu</a> or book a <a href="#" class="reservations">table</a> ?</p>
            </div>
        `;
    }
}