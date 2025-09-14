const elements = document.querySelectorAll('.chakra-link');

function parseProduct(doc) {
    // Название
    const titleElement = doc.querySelector('[itemprop="name"]');
    const title = titleElement ? titleElement.textContent.trim() : null;

    // Цена
    const priceElement = doc.querySelector('[itemprop="price"]');
    let price = null;

    if (priceElement) {
        const priceContent = priceElement.getAttribute('content');
        if (priceContent) {
            price = parseFloat(priceContent);
        } else {
            const priceText = priceElement.textContent.trim();
            price = parseFloat(priceText.replace(',', '.'));
        }
    }

    // Картинка
    const imageElement = doc.querySelector('[itemprop="image"]');
    const image = imageElement ? imageElement.getAttribute('src') : null;

    return {
        title: title,
        price: price,
        image: image
    };
}

const infos = [];

elements.forEach(element => {
    if (!element.className.includes("productCard")) {
        return;
    }
    const product_info = parseProduct(element);
    infos.push(product_info);
});

console.log(infos);
