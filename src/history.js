export default function change() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <div>
                <h1>Our Story: A Legacy of Flavor</h1>
                <p>
                    The story of Maxi’s Fine Dining began in 1924, not in a grand hall, but in a small, sun-drenched kitchen in the heart of the countryside. 
                    It was here that our founder, Maximillian "Maxi" Giebler, first discovered that the secret to a truly great meal wasn't just the recipe, 
                    but the connection to the land.
                </p>
                <p>
                    What started as a modest family tavern soon became a hidden gem for travelers seeking more than just a meal. Maxi’s philosophy was simple: Respect the ingredient, honor the guest.
                </p>
                <p>
                    Over the decades, the establishment evolved. Through three generations of the Varga family, the tavern transformed into the premier destination for fine dining it is today. 
                    While the wooden stools have been replaced by velvet chairs and the candlelight is now accompanied by world-class service, the heart of the kitchen remains unchanged.
                </p>
                <p>
                    Today, we continue to bridge the gap between heritage and innovation. We source our produce from the same local farms Maxi visited a century ago, blending those time-honored flavors with modern culinary techniques.
                </p>
                <p>
                    At Maxi’s, you aren’t just dining at a restaurant; you are becoming part of a century-old tradition of excellence.
                </p>
            </div>
        `;
    }
}